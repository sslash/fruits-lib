const data = {
    _links: {
        self: {
            href: "/api/v1/users?username=michaelusen"
        }
    },
    _embedded: {
        users: [
            {
                _links: {
                    self: {
                        href: "/api/v1/users/25"
                    }
                },
                id: 25,
                name: "Michael Kølleskov Gunnulfsen",
                mail: "michaelgunnulfsen@gmail.com",
                adress: null,
                bio: null,
                image: "https://graph.facebook.com/10155117573240554/picture?type=large",
                username: "Michaelusen",
                description: 'rocking the boat all day',
                facebook: "10155117573240554",
                tokens: {
                    kind: "facebook",
                    accessToken: "CAAKsnHj9BFIBAE24gwi8AUtVZCslnIjuX83KOnXpsixJXXitqi4RrhWN2qBvuA2pJW1f43btOoXv9gRH6wABoD1OXaExcRmuJq9xZCCEDLHZBf0CLvZBrkcZAs4mq5oEb05R0pDDylhMF8tZAFsCE9HnNykUYHv6jmkZAfZAgZB5OFLSbblFdlJaf1zZAMwa4ZAwXIZD"
                },
                profile: {
                    name: "Michael Kølleskov Gunnulfsen",
                    gender: "male",
                    picture: "https://graph.facebook.com/10155117573240554/picture?type=large"
                },
                active: true,
                created: "2014-12-25T22:07:32.110Z",
                updated: "2016-01-12T09:38:40.731Z",
                url: "http://www.routes.guide",
                facebook_profile_url: null,
                instagram_profile_url: null
            }
        ]
    },
    users: 1
};

export default data;
