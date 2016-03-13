/**
* Precondition: expect a post vertice call
* with the result in @param result
*/
export function pollAfterPostVertice (routeId, sortorder, opts) {
    const {req, result} = opts;

    if (result.payload.venue && result.payload.venue.spicePollId) {

        return pollSpices(req, routeId,
            result.payload.venue.spicePollId, sortorder, 10);

    } else {
        return Promise.resolve(result.payload);
    }
}

export function pollSpices (req, routeId, spicePollId, sortorder, retries) {

    return new Promise ((resolve, reject) => {

        const url = routeId ? `/routes/${routeId}/vertices/pollSocial/${spicePollId}` :
        // when you dont have poll id you have venueId
        // for simplicity we name it spicePollId here
        `/venues/${spicePollId}/spices`;

        let pollInterval = setInterval(() => {

            if (retries-- === 0) {
                clearInterval(pollInterval);
                return reject({message: 'Failed to poll spice updates for id:', spicePollId});
            }

            req.get(url)
            .then((res) => {
                if (res) {
                    clearInterval(pollInterval);
                    resolve({
                        venue: {
                            venueSocial: res
                        },
                        sortorder
                    });
                }
            })
            .catch();
        }, 1000);
    });
}
