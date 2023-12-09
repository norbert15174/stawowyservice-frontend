import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            header: 'Przytulny kącik do jedzenia',
            body: 'W tej wyjątkowej realizacji na życzenie klienta wykonaliśmy trzy rodzaje krzeseł, każde w innym kolorze nadając tym samym wnętrzu niebanalny wygląd. Stół z naturalnej okleiny dębowej i metalowy spód stołu idealnie współgrają z nowoczesnym pomieszczeniem. Nogi krzeseł o przekroju prostokąta nawiązują do podstawy stołu.',
            photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/olkusz/olkusz5.jpg'
        },
        {
            id: 2,
            header: 'Jadalnia w kolorach bieli',
            body: 'Czerń i biel stanowią tutaj niewątpliwie motyw przewodni. Ze względu na otwartą kuchnie z salonem na specjalne zamówienie stół i krzesła zostały pokryte lakierem pasującym do frontów kuchni, natomiast siedziska krzeseł zostały wykonane z materiału takiego samego jak sofa znajdująca się obok kompletu stołowego. Idealny zestaw do użytku na co dzień. Jednak gdy niespodziewanie zjawi się większa liczba gości nie zawiedzie nas ze względu na rozsuwany blat.',
            photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/ksenia/ksenia1.jpg'
        },
        {
            id: 3,
            header: 'Elegancki stół z krzesłami - harmonia wnętrza',
            body: 'Masywny stół - takie było główne założenie klienta. W takim przypadku zaproponowaliśmy blat z litego drewna dębowego oraz podstawę stołu z metalu.',
            photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/zator/zator1.jpg'
        },
        {
            id: 4,
            header: 'W loftowym wydaniu',
            body: 'W tym mieszkaniu niewątpliwie góruje styl loftowy, dlatego też laminowany blat w kolorze orzecha został połączony z metalowym spodem o niecodziennym wzorze. Z racji na otwarta kuchnię z salonem blat został dobrany do koloru blatów kuchennych.',
            photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/kinga/kinga2.jpg'
        },
        {
            id: 5,
            header: 'Elegancja i funkcjonalność',
            body: 'Ten szczególny projekt powstał dzięki wizji klienta, który chciał żeby stół wyglądał niczym dzieło sztuki które nada charakter jadalni, w związku z tym na blat został zastosowany fornir palisander, a spód z metalu w kolorze czarny mat.',
            photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/lukasz/lukasz3.jpg'
        },
        {
            id: 6,
            header: 'Ciepło drewna',
            body: 'Stół z metalowymi nogami i drewnianym blatem w połączeniu z nowoczesnymi krzesłami tworzy elegancką i nowoczesną przestrzeń. Metalowe nogi stołu kontrastują z ciepłem drewnianego blatu, a krzesła idealnie pasują pod względem stylu i kolorystyki. Cała aranżacja jest starannie doświetlona, tworząc idealne miejsce do posiłków i spotkań.',
            photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/cieplodrewna/Fa.jpg'
        }
    ],

    itemContent: [
        {
            id: 1,
            header: 'Przytulny kącik do jedzenia',
            content: 'W tej wyjątkowej realizacji na życzenie klienta wykonaliśmy trzy rodzaje krzeseł, każde w innym kolorze nadając tym samym wnętrzu niebanalny wygląd. Stół z naturalnej okleiny dębowej i metalowy spód stołu idealnie współgrają z nowoczesnym pomieszczeniem. Nogi krzeseł o przekroju prostokąta nawiązują do podstawy stołu.',
            items: [
                {
                    id: 1,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/olkusz/olkusz1.jpg',
                    type: 'vertical'
                },
                {
                    id: 2,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/olkusz/olkusz2.jpg',
                    type: 'vertical'
                },
                {
                    id: 4,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/olkusz/olkusz4.jpg',
                    type: 'horizontal'
                },
                {
                    id: 3,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/olkusz/olkusz3.jpg',
                    type: 'vertical'
                },
                {
                    id: 5,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/olkusz/olkusz5.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 2,
            header: 'Jadalnia w kolorach bieli',
            content: 'Czerń i biel stanowią tutaj niewątpliwie motyw przewodni. Ze względu na otwartą kuchnie z salonem na specjalne zamówienie stół i krzesła zostały pokryte lakierem pasującym do frontów kuchni, natomiast siedziska krzeseł zostały wykonane z materiału takiego samego jak sofa znajdująca się obok kompletu stołowego. Idealny zestaw do użytku na co dzień. Jednak gdy niespodziewanie zjawi się większa liczba gości nie zawiedzie nas ze względu na rozsuwany blat.',
            items: [
                {
                    id: 9,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/ksenia/ksenia1.jpg',
                    type: 'vertical'
                },
                {
                    id: 10,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/ksenia/ksenia2.jpg',
                    type: 'vertical'
                },
                {
                    id: 11,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/ksenia/ksenia3.jpg',
                    type: 'vertical'
                },
                {
                    id: 12,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/ksenia/ksenia4.jpg',
                    type: 'vertical'
                },
            ]
        },
        {
            id: 3,
            header: 'Elegancki stół z krzesłami - harmonia wnętrza',
            content: 'Masywny stół - takie było główne założenie klienta. W takim przypadku zaproponowaliśmy blat z litego drewna dębowego oraz podstawę stołu z metalu.',
            items: [
                {
                    id: 13,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/zator/zator1.jpg',
                    type: 'vertical'
                },
                {
                    id: 14,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/zator/zator2.jpg',
                    type: 'horizontal'
                },
                {
                    id: 15,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/zator/zator3.jpg',
                    type: 'vertical'
                }
            ]
        },
        {
            id: 4,
            header: 'W loftowym wydaniu',
            content: 'W tym mieszkaniu niewątpliwie góruje styl loftowy, dlatego też laminowany blat w kolorze orzecha został połączony z metalowym spodem o niecodziennym wzorze. Z racji na otwarta kuchnię z salonem blat został dobrany do koloru blatów kuchennych.',
            items: [
                {
                    id: 17,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/kinga/kinga2.jpg',
                    type: 'vertical'
                },
                {
                    id: 18,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/kinga/kinga1.jpg',
                    type: 'horizontal'
                }
            ]
        },
        {
            id: 5,
            header: 'Elegancja i funkcjonalność',
            content: 'Ten szczególny projekt powstał dzięki wizji klienta, który chciał żeby stół wyglądał niczym dzieło sztuki które nada charakter jadalni, w związku z tym na blat został zastosowany fornir palisander, a spód z metalu w kolorze czarny mat.',
            items: [
                {
                    id: 18,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/lukasz/lukasz1.jpg',
                    type: 'vertical'
                },
                {
                    id: 19,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/lukasz/lukasz2.jpg',
                    type: 'vertical'
                },
                {
                    id: 20,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/lukasz/lukasz3.jpg',
                    type: 'vertical'
                },
                {
                    id: 21,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/lukasz/lukasz4.jpg',
                    type: 'vertical'
                }
            ]
        },
        {
            id: 6,
            header: 'Ciepło drewna',
            content: 'Stół z metalowymi nogami i drewnianym blatem w połączeniu z nowoczesnymi krzesłami tworzy elegancką i nowoczesną przestrzeń. Metalowe nogi stołu kontrastują z ciepłem drewnianego blatu, a krzesła idealnie pasują pod względem stylu i kolorystyki. Cała aranżacja jest starannie doświetlona, tworząc idealne miejsce do posiłków i spotkań.',
            items: [
                {
                    id: 22,
                    photo: 'https://storage.googleapis.com/stawowy-bucket/stawowy/realization/cieplodrewna/Fa.jpg',
                    type: 'vertical'
                },
            ]
        },
    ]

};

export const realizationSlice = createSlice({
    name: "realizationItems",
    initialState: initialState,
});

export const selectRealizationItems = (state) => state.realization.items;
export const selectRealizationItemContent = (state) => state.realization.itemContent;

export default realizationSlice.reducer;
