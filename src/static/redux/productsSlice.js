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
            name: "Ława",
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
        }
    ],

    itemContent: [
        {
            id: 1,
            header: 'Krzeslo Kenia',
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
                    key: null,
                    name: "",
                    values: [
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
            header: 'Ława',
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
                    key: null,
                    name: "",
                    values: [
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
    ]
};

export const productSlice = createSlice({
    name: "productItems",
    initialState: initialState,
});

export const selectProductItems = (state) => state.products.items;
export const selectProductItemsContent = (state) => state.products.itemContent;

export default productSlice.reducer;
