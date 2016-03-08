function searchPlaces ({ query, location, request, types }) {
    const params = {
        query: query.query,
        location,
        types
    };
    return request.get('/routes/placeSearch', { params });
}



export default {
    searchPlaces
}
