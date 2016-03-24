const data = {
    _links: {
        self: {
            href: "/api/v1/routes/1780/comments"
        }
    },
    _embedded: {
        comments: [
            {
                _links: {
                    self: {
                        href: "/api/v1/routes/1780/comments/240"
                    },
                    update: {
                        href: "/api/v1/routes/1780/comments/240"
                    },
                    delete: {
                        href: "/api/v1/routes/1780/comments/240/delete"
                    }
                },
                username: "alexkanov",
                image: null,
                id: 240,
                user_id: 973,
                route_id: 1780,
                text: "sap dap",
                created: "2016-03-18T08:05:57.223Z"
            },
            {
                _links: {
                    self: {
                        href: "/api/v1/routes/1780/comments/241"
                    },
                    update: {
                        href: "/api/v1/routes/1780/comments/241"
                    },
                    delete: {
                        href: "/api/v1/routes/1780/comments/241/delete"
                    }
                },
                username: "alexkanov",
                image: null,
                id: 241,
                user_id: 973,
                route_id: 1780,
                text: "nihao bror.",
                created: "2016-03-18T08:05:57.257Z"
            }
        ]
    },
    comments: 2
}
export default data;
