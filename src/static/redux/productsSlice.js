import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/kenia/kenia2.png`,
            name: "Kenia",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 2,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/niger/niger1.png`,
            name: "Niger",
            material: ['beech', 'oak', 'oak pastel', 'custom'],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 3,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/kongo/kongo2.png`,
            name: "Kongo",
            material: ['beech', 'oak', 'oak pastel', 'custom'],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 4,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana/ghana1`,
            name: "Ghana",
            material: ['beech', 'oak', 'oak pastel', 'custom'],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 5,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana%20hoker/ghana%20hoker3.png`,
            name: "Ghana hoker",
            material: ['beech', 'oak', 'oak pastel', 'custom'],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 6,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/konsola/konsola3.png`,
            name: "Konsola",
            material: ['fornir-flizeline', 'fornir-natural-modified', 'fornir', 'custom'],
            time: "2-4 tygodni",
            position: "vertical",
            type: "table"
        },
        {
            id: 7,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%82awa/%C5%82awa3.png`,
            name: "Comoe",
            material: ['fornir-flizeline', 'fornir-natural-modified', 'fornir', 'custom'],
            time: "2-4 tygodni",
            position: "vertical",
            type: "bench"
        },
        {
            id: 8,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/senegal/krzeslo1.jpg`,
            name: "Senegal",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 9,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola/20231205_125644%20kopia.jpg`,
            name: "Angola",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 10,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola%202/20231205_135702%20kopia.jpg`,
            name: "Angola2",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 11,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi/20231205_125225%20kopia.jpg`,
            name: "Burundi",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 12,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi%202/krzeslo2.jpg`,
            name: "Burundi2",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 13,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gabon/20231205_123655%20kopia.jpg`,
            name: "Gabon",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 14,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gwinea/20231205_130000%20kopia.jpg`,
            name: "Gwinea",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 15,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Liberia/20231205_124323%20kopia.jpg`,
            name: "Liberia",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 16,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi/20231205_124711%20kopia.jpg`,
            name: "Malawi",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 17,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi%202/20231205_132939%20kopia.jpg`,
            name: "Malawi2",
            material: [],
            time: "2-4 tygodni",
            position: "horizontal",
            type: "chair"
        },
        {
            id: 18,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/St%C3%B3%C5%82/20231103_110059%20kopia.jpg`,
            name: "Limpopo",
            material: [],
            time: "2-4 tygodni",
            position: "vertical",

            type: "table"
        },
        {
            id: 19,
            image: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%81awa%202/lawa%204.jpg`,
            name: "Kasai",
            material: [],
            time: "2-4 tygodni",
            position: "vertical",
            type: "bench"
        }
    ],

    itemContent: [
        {
            id: 1,
            header: 'Kenia',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '47cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '54cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '45cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '80cm'
                        }
                    ],
                    plaintext: null
                },
            ],
            items: [
                {
                    id: 1,
                    photo: `https://storage.googleapis.com/stawowy-bucket/stawowy/products/kenia/kenia1.png`,
                    type: 'horizontal'
                },
                {
                    id: 2,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/kenia/kenia2.png',
                    type: 'horizontal'
                },
                {
                    id: 3,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/kenia/kenia3.png',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 2,
            header: 'Niger',
            material: ['beech', 'oak', 'oak pastel','custom'],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '47cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '51cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '45cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '84cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 4,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/niger/niger1.png',
                    type: 'horizontal'
                },
                {
                    id: 5,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/niger/niger2.png',
                    type: 'horizontal'
                },
                {
                    id: 6,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/niger/niger3.png',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 3,
            header: 'Kongo',
            material: ['beech', 'oak', 'oak pastel','custom'],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '48cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '84cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '51cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '46cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 7,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/kongo/kongo1.png',
                    type: 'horizontal'
                },
                {
                    id: 8,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/kongo/kongo2.png',
                    type: 'horizontal'
                },
                {
                    id: 9,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/kongo/kongo3.png',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 4,
            header: 'Ghana',
            material: ['beech', 'oak', 'oak pastel','custom'],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '46cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '83cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '51cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '43cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 10,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana/ghana1',
                    type: 'horizontal'
                },
                {
                    id: 11,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana/ghana2',
                    type: 'horizontal'
                },
                {
                    id: 12,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana/ghana3',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 5,
            header: 'Ghana hoker',
            material: ['beech', 'oak', 'oak pastel','custom'],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '75cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '51cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '43cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '110cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 13,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana%20hoker/ghana%20hoker.png',
                    type: 'horizontal'
                },
                {
                    id: 14,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana%20hoker/ghana%20hoker2.png',
                    type: 'horizontal'
                },
                {
                    id: 15,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/ghana%20hoker/ghana%20hoker3.png',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 6,
            header: 'Konsola',
            material: ['fornir-flizeline', 'fornir-natural-modified', 'fornir','custom'],
            type: 'table',
            additionalInfromations: [
                {
                    key: null,
                    name: "",
                    values: [
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 16,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/konsola/konsola1.png',
                    type: 'horizontal'
                },
                {
                    id: 17,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/konsola/konsola2.png',
                    type: 'horizontal'
                },
                {
                    id: 18,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/konsola/konsola3.png',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 7,
            header: 'Comoe',
            material: ['fornir-flizeline', 'fornir-natural-modified', 'fornir','custom'],
            type: 'bench',
            additionalInfromations: [
                {
                    key: null,
                    name: "",
                    values: [
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 19,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%82awa/%C5%82awa1.png',
                    type: 'horizontal'
                },
                {
                    id: 20,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%82awa/%C5%82awa2.png',
                    type: 'horizontal'
                },
                {
                    id: 21,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%82awa/%C5%82awa3.png',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 8,
            header: 'Senegal',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '48cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '51cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '46cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '85cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 22,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/senegal/krzeslo1.jpg',
                    type: 'horizontal'
                },
                {
                    id: 23,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/senegal/krzeslo2.jpg',
                    type: 'horizontal'
                },
                {
                    id: 24,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/senegal/krzeslo3.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 9,
            header: 'Angola',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '47cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '45cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '45cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '91cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 25,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola/20231205_125622%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 26,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola/20231205_125644%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 27,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola/20231205_125703%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 10,
            header: 'Angola2',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '47cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '45cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '45cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '91cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 28,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola%202/20231205_135639%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 29,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola%202/20231205_135702%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 30,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Angola%202/20231205_135725%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 11,
            header: 'Burundi',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '48cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '59cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '44cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '90cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 31,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi/20231205_125151%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 32,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi/20231205_125225%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 33,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi/20231205_125303%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 12,
            header: 'Burundi2',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '48cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '59cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '44cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '90cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 34,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi%202/krzeslo%201.jpg',
                    type: 'horizontal'
                },
                {
                    id: 35,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi%202/krzeslo2.jpg',
                    type: 'horizontal'
                },
                {
                    id: 36,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Burundi%202/krzeslo3.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 13,
            header: 'Gabon',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '49cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '53cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '45cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '94cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 37,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gabon/20231205_123628%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 38,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gabon/20231205_123655%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 39,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gabon/20231205_123809%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 14,
            header: 'Gwinea',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '47cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '55cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '47cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '76cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 40,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gwinea/20231205_125916%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 41,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gwinea/20231205_130000%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 42,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Gwinea/20231205_130031%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 15,
            header: 'Liberia',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '49cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '63cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '44cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '93cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 43,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Liberia/20231205_124302%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 44,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Liberia/20231205_124323%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 45,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Liberia/20231205_124359%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 16,
            header: 'Malawi',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '45cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '47cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '43cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '82cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 46,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi/20231205_124645%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 47,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi/20231205_124711%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 48,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi/20231205_124742%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 17,
            header: 'Malawi2',
            material: [],
            type: 'chair',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '45cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '47cm'
                        },
                        {
                            label: 'Głębokość',
                            value: '43cm'
                        },
                        {
                            label: 'Wysokość z oparciem',
                            value: '82cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 49,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi%202/20231205_132755%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 50,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi%202/20231205_132939%20kopia.jpg',
                    type: 'horizontal'
                },
                {
                    id: 51,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/Malawi%202/20231205_133054%20kopia.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 18,
            header: 'Limpopo',
            material: [],
            type: 'table',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '76cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '100cm'
                        },
                        {
                            label: 'Długość',
                            value: '100cm'
                        },
                        {
                            label: 'Długość po rozłożeniu',
                            value: '180cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 52,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/St%C3%B3%C5%82/20231103_110048%20kopia.jpg',
                    type: 'vertical'
                },
                {
                    id: 53,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/St%C3%B3%C5%82/20231103_110059%20kopia.jpg',
                    type: 'vertical'
                },
                {
                    id: 54,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/St%C3%B3%C5%82/20231103_110244%20kopia.jpg',
                    type: 'vertical'
                },
                {
                    id: 55,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/St%C3%B3%C5%82/20231103_110249%20kopia.jpg',
                    type: 'vertical'
                }
            ]
        },
        {
            id: 19,
            header: 'Kasai',
            material: [],
            type: 'table',
            additionalInfromations: [
                {
                    key: 'technical',
                    name: "Dane techniczne",
                    values: [
                        {
                            label: 'Wysokość',
                            value: '50cm'
                        },
                        {
                            label: 'Szerokość',
                            value: '60cm'
                        },
                        {
                            label: 'Długość',
                            value: '100cm'
                        }
                    ],
                    plaintext: null
                }
            ],
            items: [
                {
                    id: 56,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%81awa%202/lawa%202.jpg',
                    type: 'vertical'
                },
                {
                    id: 57,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%81awa%202/lawa%204.jpg',
                    type: 'vertical'
                },
                {
                    id: 58,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%81awa%202/lawa.jpg',
                    type: 'vertical'
                },
                {
                    id: 59,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/products/%C5%81awa%202/lawa3%20kopia.jpg',
                    type: 'vertical'
                }
            ]
        }
    ]
};

export const productSlice = createSlice({
    name: "productItems",
    initialState: initialState,
});

export const selectProductItems = (state) => state.products.items;
export const selectProductItemsContent = (state) => state.products.itemContent;

export default productSlice.reducer;
