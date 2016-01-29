const data = {
        _links: {
            self: {
                href: "/api/v1/buckets?city=London"
            }
        },
        _embedded: {
            bucket: [
                {
                    _links: {
                        self: {
                            href: "/api/v1/buckets/22"
                        },
                        routes: {
                            href: "/api/v1/buckets/22/routes"
                        }
                    },
                    id: 22,
                    city_id: 2,
                    category_title: "Routes in London",
                    active: true,
                    created: "2015-09-18T11:37:48.886Z",
                    background_img_url: "https://c1.staticflickr.com/9/8804/16457669804_6eb072293f_b.jpg",
                    bucket_id: 22,
                    title: "London",
                    name: "all",
                    image_uri: "/img/icons/all.svg",
                    updated: "2015-09-18T11:37:48.886Z"
                },
                {
                    _links: {
                        self: {
                            href: "/api/v1/buckets/6"
                        },
                        routes: {
                            href: "/api/v1/buckets/6/routes"
                        }
                    },
                    id: 6,
                    city_id: 2,
                    category_title: "Nightlife Routes in London",
                    active: true,
                    created: "2014-12-01T19:38:51.998Z",
                    background_img_url: "https://c2.staticflickr.com/6/5497/11756201674_b0270082c0_z.jpg",
                    bucket_id: 6,
                    title: "London",
                    name: "Nightlife",
                    image_uri: "/img/icons/nightlife.svg",
                    updated: "2014-12-01T19:38:51.998Z"
                }
            ]
        },
        buckets: 2
};
export default data;
