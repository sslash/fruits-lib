const venueDirections = {
    "data": [
        {
            "geocoded_waypoints": [
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJ63BYxmZuQUYR41TwobrJHVQ",
                    "types": [
                        "premise"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJxf425mZuQUYRM8i9d3c_yVw",
                    "types": [
                        "clothing_store",
                        "store",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "routes": [
                {
                    "bounds": {
                        "northeast": {
                            "lat": 59.9187995,
                            "lng": 10.7573493
                        },
                        "southwest": {
                            "lat": 59.91825050000001,
                            "lng": 10.7562781
                        }
                    },
                    "copyrights": "Map data ©2016 Google",
                    "legs": [
                        {
                            "distance": {
                                "text": "45 m",
                                "value": 67
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 96
                            },
                            "end_address": "Acne Archive, Markveien 60, 0550 Oslo, Norway",
                            "end_location": {
                                "lat": 59.9187995,
                                "lng": 10.7573488
                            },
                            "start_address": "Ankerbrua, 0550 Oslo, Norway",
                            "start_location": {
                                "lat": 59.91825050000001,
                                "lng": 10.7562781
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "73 m",
                                        "value": 73
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 81
                                    },
                                    "end_location": {
                                        "lat": 59.9186267,
                                        "lng": 10.7573493
                                    },
                                    "html_instructions": "Head <b>northeast</b> on <b>Ankerbrua</b>/<b>Eventyrbrua</b>/<b>Torggata</b> toward <b>Th. Kittelsens plass</b><div style=\"font-size:0.9em\">Continue to follow Ankerbrua/Torggata</div>",
                                    "polyline": {
                                        "points": "axulJwys`ACIOm@]wAKa@Mc@"
                                    },
                                    "start_location": {
                                        "lat": 59.91825050000001,
                                        "lng": 10.7562781
                                    },
                                    "travel_mode": "WALKING"
                                },
                                {
                                    "distance": {
                                        "text": "19 m",
                                        "value": 19
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 15
                                    },
                                    "end_location": {
                                        "lat": 59.9187995,
                                        "lng": 10.7573488
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Markveien</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "mzulJm`t`AY?G?"
                                    },
                                    "start_location": {
                                        "lat": 59.9186267,
                                        "lng": 10.7573493
                                    },
                                    "travel_mode": "WALKING"
                                }
                            ],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "axulJwys`A}@qDMc@Y?G?"
                    },
                    "summary": "Ankerbrua/Torggata",
                    "warnings": [
                        "Walking directions are in beta.    Use caution – This route may be missing sidewalks or pedestrian paths."
                    ],
                    "waypoint_order": []
                }
            ],
            "status": "OK"
        },
        {}
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
        "x-powered-by": "Express",
        "content-type": "application/json; charset=utf-8",
        "content-length": "1867",
        "etag": "W/\"74b-9+Mv+rpRpoS4b2xpTxf7Mw\"",
        "date": "Sat, 06 Feb 2016 14:20:54 GMT",
        "connection": "close"
    },
    "config": {
        "method": "post",
        "headers": {
            "Content-Type": "application/json;charset=utf-8"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "url": "http://localhost:8002/api/v1/directions/createDistanceMatrix",
        "data": {
            "routeId": "1220",
            "venues": [
                "{googleId: 'ChIJ63BYxmZuQUYR41TwobrJHVQ',     lat: 59.9182264,     lng: 10.7563117}",
                ""
            ]
        }
    }
}

export default venueDirections;
