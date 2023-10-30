import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 'BEZBPAD12216',
            name: 'BEŻBPAD12216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BE%C5%BBBPAD12216.png',
            type: 'beech'
        },
        {
            id: 'BEZBPAD21316',
            name: 'BEŻBPAD21316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BE%C5%BBBPAD21316.png',
            type: 'beech'
        },
        {
            id: 'BRUNATBR201',
            name: 'BRUNATBR201',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BRUNATBR201.png',
            type: 'beech'
        },
        {
            id: 'BRUNATBR229',
            name: 'BRUNATBR229',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BRUNATBR229.png',
            type: 'beech'
        },
        {
            id: 'BRUNATBR231',
            name: 'BRUNATBR231',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BRUNATBR231.png',
            type: 'beech'
        },
        {
            id: 'BRUNATBR232',
            name: 'BRUNATBR232',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BRUNATBR232.png',
            type: 'beech'
        },
        {
            id: 'BRUNATBR233',
            name: 'BRUNATBR233',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BRUNATBR233.png',
            type: 'beech'
        },
        {
            id: 'BRAZ2436',
            name: 'BRĄZ2436',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84Z2436.png',
            type: 'beech'
        },
        {
            id: 'BRAZBPAD26216',
            name: 'BRĄZBPAD26216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBPAD26216.png',
            type: 'beech'
        },
        {
            id: 'BRAZBR243',
            name: 'BRĄZBR243',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBR243.png',
            type: 'beech'
        },
        {
            id: 'BRAZBR2431',
            name: 'BRĄZBR2431',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBR2431.png',
            type: 'beech'
        },
        {
            id: 'BRAZBR2432',
            name: 'BRĄZBR2432',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBR2432.png',
            type: 'beech'
        },
        {
            id: 'BRAZBR2478',
            name: 'BRĄZBR2478',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBR2478.png',
            type: 'beech'
        },
        {
            id: 'BRAZBR2527',
            name: 'BRĄZBR2527',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBR2527.png',
            type: 'beech'
        },
        {
            id: 'BRAZBR40013',
            name: 'BRĄZBR40013',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BR%C4%84ZBR40013.png',
            type: 'beech'
        },
        {
            id: 'BUKNIEBARWIONY',
            name: 'BUK NIEBARWIONY',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/BUK%20NIEBARWIONY.png',
            type: 'beech'
        },
        {
            id: 'CZERNBPAD26316',
            name: 'CZERŃBPAD26316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/CZER%C5%83BPAD26316.png',
            type: 'beech'
        },
        {
            id: 'GIOVANNIBPAD06',
            name: 'GIOVANNIBPAD06',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/GIOVANNIBPAD06.png',
            type: 'beech'
        },
        {
            id: 'GRAFITBPAD10',
            name: 'GRAFITBPAD10',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/GRAFITBPAD10.png',
            type: 'beech'
        },
        {
            id: 'LATTEBPAD08',
            name: 'LATTEBPAD08',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/LATTEBPAD08.png',
            type: 'beech'
        },
        {
            id: 'MACHONBR522',
            name: 'MACHOŃBR522',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/MACHO%C5%83BR522.png',
            type: 'beech'
        },
        {
            id: 'MURRANOBPAD03',
            name: 'MURRANOBPAD03',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/MURRANOBPAD03.png',
            type: 'beech'
        },
        {
            id: 'NABUCCOBPAD05',
            name: 'NABUCCOBPAD05',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/NABUCCOBPAD05.png',
            type: 'beech'
        },
        {
            id: 'ORANZBR3023',
            name: 'ORANŻBR3023',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORAN%C5%BBBR3023.png',
            type: 'beech'
        },
        {
            id: 'ORANZBR3027',
            name: 'ORANŻBR3027',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORAN%C5%BBBR3027.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR2503',
            name: 'ORZECHBR2503',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR2503.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR280',
            name: 'ORZECHBR280',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR280.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR281',
            name: 'ORZECHBR281',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR281.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR282',
            name: 'ORZECHBR282',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR282.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR283',
            name: 'ORZECHBR283',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR283.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR288',
            name: 'ORZECHBR288',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR288.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR289',
            name: 'ORZECHBR289',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR289.png',
            type: 'beech'
        },
        {
            id: 'ORZECHBR3028',
            name: 'ORZECHBR3028',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/ORZECHBR3028.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD12616',
            name: 'POPIELBPAD12616',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD12616.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD13016',
            name: 'POPIELBPAD13016',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD13016.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD16516',
            name: 'POPIELBPAD16516',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD16516.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD18413',
            name: 'POPIELBPAD18413',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD18413.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD18513',
            name: 'POPIELBPAD18513',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD18513.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD3116',
            name: 'POPIELBPAD3116',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD3116.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD40713',
            name: 'POPIELBPAD40713',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD40713.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD6316',
            name: 'POPIELBPAD6316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD6316.png',
            type: 'beech'
        },
        {
            id: 'POPIELBPAD8216',
            name: 'POPIELBPAD8216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/POPIELBPAD8216.png',
            type: 'beech'
        },
        {
            id: 'SONOMABPAD02',
            name: 'SONOMABPAD02',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/SONOMABPAD02.png',
            type: 'beech'
        },
        {
            id: 'TEAKBPAD25616',
            name: 'TEAKBPAD25616',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TEAKBPAD25616.png',
            type: 'beech'
        },
        {
            id: 'TEAKBPAD27916',
            name: 'TEAKBPAD27916',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TEAKBPAD27916.png',
            type: 'beech'
        },
        {
            id: 'TEAKBR335',
            name: 'TEAKBR335',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TEAKBR335.png',
            type: 'beech'
        },
        {
            id: 'TEAKBR385',
            name: 'TEAKBR385',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TEAKBR385.png',
            type: 'beech'
        },
        {
            id: 'TOSCABPAD04',
            name: 'TOSCABPAD04',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TOSCABPAD04.png',
            type: 'beech'
        },
        {
            id: 'TRAVIATABPAD07',
            name: 'TRAVIATABPAD07',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TRAVIATABPAD07.png',
            type: 'beech'
        },
        {
            id: 'TRUFLABPAD01',
            name: 'TRUFLABPAD01',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/buk/TRUFLABPAD01.png',
            type: 'beech'
        },
        {
            id: 'BEZ12509',
            name: 'BEŻ12509',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BE%C5%BB12509.png',
            type: 'oak'
        },
        {
            id: 'BIEL2001',
            name: 'BIEL2001.png',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BIEL2001.png',
            type: 'oak'
        },
        {
            id: 'BIEL20012',
            name: 'BIEL20012.png',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BIEL20012.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2201',
            name: 'BRUNAT2201',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2201.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT22011',
            name: 'BRUNAT22011',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT22011.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2204',
            name: 'BRUNAT2204',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2204.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT22041',
            name: 'BRUNAT22041',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT22041.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2205',
            name: 'BRUNAT2205',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2205.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2210',
            name: 'BRUNAT2210',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2210.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT22112',
            name: 'BRUNAT22112',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT22112.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2215',
            name: 'BRUNAT2215',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2215.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2223',
            name: 'BRUNAT2223',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2223.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2225',
            name: 'BRUNAT2225',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2225.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT2227',
            name: 'BRUNAT2227',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT2227.png',
            type: 'oak'
        },
        {
            id: 'BRUNAT22481',
            name: 'BRUNAT22481',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BRUNAT22481.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2240',
            name: 'BRĄZ2240',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2240.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2242',
            name: 'BRĄZ2242',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2242.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2245',
            name: 'BRĄZ2245',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2245.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2246',
            name: 'BRĄZ2246',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2246.png',
            type: 'oak'
        },
        {
            id: 'BRAZ22491',
            name: 'BRĄZ22491',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z22491.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2250',
            name: 'BRĄZ2250',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2250.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2251',
            name: 'BRĄZ2251',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2251.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2255',
            name: 'BRĄZ2255',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2255.png',
            type: 'oak'
        },
        {
            id: 'BRAZ2256',
            name: 'BRĄZ2256',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/BR%C4%84Z2256.png',
            type: 'oak'
        },
        {
            id: 'CZERN2910',
            name: 'CZERŃ2910',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/CZER%C5%832910.png',
            type: 'oak'
        },
        {
            id: 'CZERN2930',
            name: 'CZERŃ2930',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/CZER%C5%832930.png',
            type: 'oak'
        },
        {
            id: 'ELEMENTNIEBARWIONY',
            name: 'ELEMENTNIEBARWIONY',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ELEMENTNIEBARWIONY.png',
            type: 'oak'
        },
        {
            id: 'GRANAT286001',
            name: 'GRANAT286001',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/GRANAT286001.png',
            type: 'oak'
        },
        {
            id: 'HEBAN2550',
            name: 'HEBAN2550',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/HEBAN2550.png',
            type: 'oak'
        },
        {
            id: 'MAHON2525',
            name: 'MAHOŃ2525',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/MAHO%C5%832525.png',
            type: 'oak'
        },
        {
            id: 'OLIW2750',
            name: 'OLIW2750',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/OLIW2750.png',
            type: 'oak'
        },
        {
            id: 'ORANZ2301',
            name: 'ORANŻ2301',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORAN%C5%BB2301.png',
            type: 'oak'
        },
        {
            id: 'ORANZ2305',
            name: 'ORANŻ2305',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORAN%C5%BB2305.png',
            type: 'oak'
        },
        {
            id: 'ORANZ2324',
            name: 'ORANŻ2324',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORAN%C5%BB2324.png',
            type: 'oak'
        },
        {
            id: 'ORANZ2325',
            name: 'ORANŻ2325',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORAN%C5%BB2325.png',
            type: 'oak'
        },
        {
            id: 'ORANZ2329',
            name: 'ORANŻ2329',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORAN%C5%BB2329.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2260',
            name: 'ORZECH2260',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2260.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2261',
            name: 'ORZECH2261',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2261.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2262',
            name: 'ORZECH2262',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2262.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2263',
            name: 'ORZECH2263',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2263.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2265',
            name: 'ORZECH2265',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2265.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2266',
            name: 'ORZECH2266',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2266.png',
            type: 'oak'
        },

        {
            id: 'ORZECH2268',
            name: 'ORZECH2268',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2268.png',
            type: 'oak'
        },
        {
            id: 'ORZECH2274',
            name: 'ORZECH2274',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ORZECH2274.png',
            type: 'oak'
        },
        {
            id: 'PALISANDER2632',
            name: 'PALISANDER2632',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/PALISANDER2632.png',
            type: 'oak'
        },
        {
            id: 'POPIEL022',
            name: 'POPIEL022',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/POPIEL022.png',
            type: 'oak'
        },
        {
            id: 'POPIEL2007',
            name: 'POPIEL2007',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/POPIEL2007.png',
            type: 'oak'
        },
        {
            id: 'TEAK2332',
            name: 'TEAK2332',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK2332.png',
            type: 'oak'
        },
        {
            id: 'TEAK23351',
            name: 'TEAK23351',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK23351.png',
            type: 'oak'
        },
        {
            id: 'TEAK2346',
            name: 'TEAK23346',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK2346.png',
            type: 'oak'
        },
        {
            id: 'TEAK2348',
            name: 'TEAK2348',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK2348.png',
            type: 'oak'
        },
        {
            id: 'TEAK2349',
            name: 'TEAK2349',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK2349.png',
            type: 'oak'
        },
        {
            id: 'TEAK2350',
            name: 'TEAK2350',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK2350.png',
            type: 'oak'
        },
        {
            id: 'TEAK2364',
            name: 'TEAK2364',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/TEAK2364.png',
            type: 'oak'
        },
        {
            id: 'ZIELEN2726',
            name: 'ZIELEŃ2726',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/ZIELE%C5%832726.png',
            type: 'oak'
        },
        {
            id: 'ZOLCIEN2105',
            name: 'ŻÓŁCIEŃ2105',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/%C5%BB%C3%93%C5%81CIE%C5%832105.png',
            type: 'oak'
        },
        {
            id: 'ZOLCIEN2119',
            name: 'ŻÓŁCIEŃ2119',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/%C5%BB%C3%93%C5%81CIE%C5%832119.png',
            type: 'oak'
        },
        {
            id: 'ZOLCIEN2137',
            name: 'ŻÓŁCIEŃ2137',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/%C5%BB%C3%93%C5%81CIE%C5%832137.png',
            type: 'oak'
        },
        {
            id: 'ZOLCIEN2157',
            name: 'ŻÓŁCIEŃ2157',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dab/%C5%BB%C3%93%C5%81CIE%C5%832157.png',
            type: 'oak'
        },
        {
            id: 'BPAD01',
            name: 'BPAD01',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD01.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD02',
            name: 'BPAD02',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD02.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD03',
            name: 'BPAD03',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD03.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD04',
            name: 'BPAD04',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD04.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD05',
            name: 'BPAD05',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD05.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD06',
            name: 'BPAD06',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD06.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD07',
            name: 'BPAD07',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD07.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD08',
            name: 'BPAD08',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD08.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD09',
            name: 'BPAD09',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD09.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD10',
            name: 'BPAD10',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD10.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD10021',
            name: 'BPAD10021',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD10021.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD10121',
            name: 'BPAD10121',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD10121.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD10221',
            name: 'BPAD10221',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD10221.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD10516',
            name: 'BPAD10516',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD10516.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD10916',
            name: 'BPAD10916',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD10916.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD11816',
            name: 'BPAD11816',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD11816.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD12216',
            name: 'BPAD12216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD12216.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD12516',
            name: 'BPAD12516',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD12516.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD12616',
            name: 'BPAD12616',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD12616.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD13016',
            name: 'BPAD13016',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD13016.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD14016',
            name: 'BPAD14016',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD14016.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD14216',
            name: 'BPAD14216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD14216.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD15320',
            name: 'BPAD15320',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD15320.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD15416',
            name: 'BPAD15416',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD15416.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD15620',
            name: 'BPAD15620',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD15620.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD16516',
            name: 'BPAD16516',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD16516.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD18413',
            name: 'BPAD18413',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD18413.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD18513',
            name: 'BPAD18513',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD18513.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD18516',
            name: 'BPAD18516',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD18516.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD18920',
            name: 'BPAD18920',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD18920.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD20120',
            name: 'BPAD20120',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD20120.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD20420',
            name: 'BPAD20420',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD20420.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD21316',
            name: 'BPAD21316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD21316.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD24413',
            name: 'BPAD24413',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD24413.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD25616',
            name: 'BPAD25616',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD25616.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD26016',
            name: 'BPAD26016',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD26016.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD26216',
            name: 'BPAD26216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD26216.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD26316',
            name: 'BPAD26316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD26316.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD27916',
            name: 'BPAD27916',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD27916.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD29216',
            name: 'BPAD29216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD29216.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD3116',
            name: 'BPAD3116',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD3116.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD35214',
            name: 'BPAD35214',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD35214.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD40713',
            name: 'BPAD40713',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD40713.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD4716',
            name: 'BPAD4716',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD4716.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD4821',
            name: 'BPAD4821',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD4821.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD4916',
            name: 'BPAD4916',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD4916.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD5021',
            name: 'BPAD5021',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD5021.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD6316',
            name: 'BPAD6316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD6316.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD8216',
            name: 'BPAD8216',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD8216.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD8916',
            name: 'BPAD8916',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD8916.png',
            type: 'oak pastel'
        },
        {
            id: 'BPAD9213',
            name: 'BPAD9213',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPAD9213.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF16516',
            name: 'BPADF16516',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF16516.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34116',
            name: 'BPADF34116',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34116.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34316',
            name: 'BPADF34316',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34316.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34416',
            name: 'BPADF34416',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34416.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34616',
            name: 'BPADF34616',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34616.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34716',
            name: 'BPADF34716',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34716.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34816',
            name: 'BPADF34816',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34816.png',
            type: 'oak pastel'
        },
        {
            id: 'BPADF34916',
            name: 'BPADF34916',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/dabpastel/BPADF34916.png',
            type: 'oak pastel'
        },
        {
            id: 'Drzewolodowenegro',
            name: 'Drzewo lodowe negro',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Drzewo%20lodowe%20negro.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Drzewosandalowe0008PS',
            name: 'Drzewo sandałowe 0008PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Drzewo%20sanda%C5%82owe%200008PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dab0006PS',
            name: 'Dąb 0006PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%200006PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dab003PP',
            name: 'Dąb 003PP',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%20003PP.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dab0052flader',
            name: 'Dąb 0052 flader',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%200052%20flader.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dab0101PS',
            name: 'Dąb 0101PS',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%200101PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dab0609PS',
            name: 'Dąb 0609PS',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%200609PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dabbielony0001',
            name: 'Dąb bielony 0001',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%20bielony%200001.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dąabczarnosrebrny',
            name: 'Dąb czarno srebrny',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%20czarno%20srebrny.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Dabszary0007',
            name: 'Dąb szary 0007',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/D%C4%85b%20szary%200007.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Heban0004PP',
            name: 'Heban 0004PP',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Heban%200004PP.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Heban5925',
            name: 'Heban 5925',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Heban%205925.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Heban7064PS',
            name: 'Heban 7064PS',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Heban%207064PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Heban7069PW',
            name: 'Heban 7069PW',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Heban%207069PW.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Kamelia0004PW',
            name: 'Kamelia 0004PW',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Kamelia%200004PW.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Orzech0017',
            name: 'Orzech 0017',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Orzech%200017.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Orzech0518F1',
            name: 'Orzech 0518F1',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Orzech%200518F1.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Orzech1001PS',
            name: 'Orzech 1001PS',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Orzech%201001PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Palisander0002F1',
            name: 'Palisander 0002F1',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Palisander%200002F1.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Palisander0025F4',
            name: 'Palisander 0025F4',
			image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Palisander%200025F4.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Palisander1102',
            name: 'Palisander 1102',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Palisander%201102.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Palisander6055',
            name: 'Palisander 6055',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Palisander%206055.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Palisanderrio',
            name: 'Palisander rio',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Palisander%20rio.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Rose0011PS',
            name: 'Rose 0011PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Rose%200011PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Tik0001PS',
            name: 'Tik 0001PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Tik%200001PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Tik0018PS',
            name: 'Tik 0018PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Tik%200018PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Tik002PS',
            name: 'Tik 002PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Tik%20002PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Tik3001PW',
            name: 'Tik 3001PW',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Tik%203001PW.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Wenge0001PP',
            name: 'Wenge 0001PP',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Wenge%200001PP.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Wenge0003',
            name: 'Wenge 0003',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Wenge%200003.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Wenge2010',
            name: 'Wenge 2010',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Wenge%202010.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Wenge5001PW',
            name: 'Wenge 5001PW',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Wenge%205001PW.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Wenge5006PW',
            name: 'Wenge 5006PW',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Wenge%205006PW.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Wiaz0012PS',
            name: 'Wiąz 0012PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Wi%C4%85z%200012PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Zebrano0001PS',
            name: 'Zebrano 0001PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Zebrano%200001PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Zebrano0112PS',
            name: 'Zebrano 0112PS',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Zebrano%200112PS.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Zebranoczarne',
            name: 'Zebrano czarne',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-flizeline/Zebrano%20czarne.png',
            type: 'fornir-flizeline'
        },
        {
            id: 'Czeresnia773FY',
            name: 'Czereśnia 77 3F Y',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Czere%C5%9Bnia%2077%203F%20Y.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Czeresnia77X',
            name: 'Czereśnia 77X',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Czere%C5%9Bnia%2077%20X.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Daniella',
            name: 'Daniella',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Daniella.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Dab58SB',
            name: 'Dąb 58 SB',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/D%C4%85b%2058%20SB.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Dabbielony',
            name: 'Dąb bielony',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/D%C4%85b%20bielony.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Dabfryzajasny',
            name: 'Dąb fryza jasny',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/D%C4%85b%20fryza%20jasny.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Dabfryzasrdeni',
            name: 'Dąb fryza śrdeni',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/D%C4%85b%20fryza%20%C5%9Brdeni.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'DabprostoseT395',
            name: 'Dąb prostose T 395',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/D%C4%85b%20prostose%20T%20395.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Heban18',
            name: 'Heban 18',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Heban%2018.png',
            type: 'fornir-natural-modified'

        },
        {
            id: 'HebanTT2508',
            name: 'Heban TT 2508',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Heban%20TT%202508.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Hebanjasny',
            name: 'Heban jasny',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Heban%20jasny.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Klon80X',
            name: 'Klon80X',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Klon%2080X.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'KlonfladerFS3044',
            name: 'Klon flader FS 3044',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Klon%20flader%20FS%203044.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Machon44',
            name: 'Machoń 44',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Macho%C5%84%2044.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Mahoń72F',
            name: 'Mahoń 7 2F',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Maho%C5%84%207%202F.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Orzech62XXX',
            name: 'Orzech 62 XXX',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Orzech%2062%20XXX.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Palisander0212F3',
            name: 'Palisander 0212F3',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Palisander%200212F3.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Palisander622FP',
            name: 'Palisander 62 2F P',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Palisander%2062%202F%20P.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Pasiakgrafit',
            name: 'Pasiak grafit',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Pasiak%20grafit.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Pasiakmultijasny',
            name: 'Pasiak multi jasny',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Pasiak%20multi%20jasny.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Santosrosewood',
            name: 'Santos rosewood',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Santos%20rosewood.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Teak2199',
            name: 'Teak 2199',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Teak%202199.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Wenge111SF',
            name: 'Wenge 111 SF',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Wenge%20111%20SF.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Wenge2040',
            name: 'Wenge 2040',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Wenge%202040.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Wenge46SF',
            name: 'Wenge 46 SF',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Wenge%2046%20SF.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'WengepasiakTT2099',
            name: 'Wenge pasiak TT 2099',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Wenge%20pasiak%20TT%202099.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'WengeprosteT2028',
            name: 'Wenge proste T 2028',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Wenge%20proste%20T%202028.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'ZebraBianco',
            name: 'Zebra Bianco',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Zebra%20Bianco.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Zebrapasiak',
            name: 'Zebra pasiak',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Zebra%20pasiak.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Zebrano1',
            name: 'Zebrano 1',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Zebrano%201.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Zebrano2',
            name: 'Zebrano 2',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir-natural-modified/Zebrano%202.png',
            type: 'fornir-natural-modified'
        },
        {
            id: 'Amazakoue',
            name: 'Amazakoue',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Amazakoue.png',
            type: 'fornir'
        },
        {
            id: 'Anegre',
            name: 'Anegre',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Anegre.png',
            type: 'fornir'
        },
        {
            id: 'Badi',
            name: 'Badi',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Badi.png',
            type: 'fornir'
        },
        {
            id: 'Bambuskarmelszrokokłosisty',
            name: 'Bambus karmel szrokokłosisty',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Bambus%20karmel%20szrokok%C5%82osisty.png',
            type: 'fornir'
        },
        {
            id: 'Bambuskarmelwąskosłoisty',
            name: 'Bambus karmel wąskosłoisty',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Bambus%20karmel%20w%C4%85skos%C5%82oisty.png',
            type: 'fornir'
        },
        {
            id: 'Bambusnaturalszerokosłoisty',
            name: 'Bambus natural szerokosłoisty',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Bambus%20natural%20szerokos%C5%82oisty.png',
            type: 'fornir'
        },
        {
            id: 'Bambusnaturalwąskosłoisty',
            name: 'Bambus natural wąskosłoisty',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Bambus%20natural%20w%C4%85skos%C5%82oisty.png',
            type: 'fornir'
        },
        {
            id: 'Bete',
            name: 'Bete',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Bete.png',
            type: 'fornir'
        },
        {
            id: 'Brzozaczeczotsekata',
            name: 'Brzoza czeczot sękata',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Brzoza%20czeczot%20s%C4%99kata.png',
            type: 'fornir'
        },
        {
            id: 'Brzozafinska',
            name: 'Brzoza fińska',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Brzoza%20fi%C5%84ska.png',
            type: 'fornir'
        },
        {
            id: 'Brzozapolska',
            name: 'Brzoza polska',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Brzoza%20polska.png',
            type: 'fornir'
        },
        {
            id: 'Brzozasekata',
            name: 'Brzoza sękata',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Brzoza%20s%C4%99kata.png',
            type: 'fornir'
        },
        {
            id: 'Bubinga',
            name: 'Bubinga',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Bubinga.png',
            type: 'fornir'
        },
        {
            id: 'Bukbialy',
            name: 'Buk biały',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Buk%20bia%C5%82y.png',
            type: 'fornir'
        },
        {
            id: 'Buk',
            name: 'Buk',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Buk.png',
            type: 'fornir'
        },
        {
            id: 'Cedrbrazylijski',
            name: 'Cedr brazylijski',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Cedr%20brazylijski.png',
            type: 'fornir'
        },
        {
            id: 'Czeresniaamerykanska',
            name: 'Czereśnia amerykańska',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Czere%C5%9Bnia%20ameryka%C5%84ska.png',
            type: 'fornir'
        },
        {
            id: 'Czeresnia',
            name: 'Czereśnia',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Czere%C5%9Bnia.png',
            type: 'fornir'
        },
        {
            id: 'Doussie',
            name: 'Doussie',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Doussie.png',
            type: 'fornir'
        },
        {
            id: 'Dabczerwony',
            name: 'Dąb czerwony',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/D%C4%85b%20czerwony.png',
            type: 'fornir'
        },
        {
            id: 'Dabwedzony',
            name: 'Dąb wędzony',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/D%C4%85b%20w%C4%99dzony.png',
            type: 'fornir'
        },
        {
            id: 'Dab',
            name: 'Dąb',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/D%C4%85b.png',
            type: 'fornir'
        },
        {
            id: 'Eucalyptus',
            name: 'Eucalyptus',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Eucalyptus.png',
            type: 'fornir'
        },
        {
            id: 'Frake',
            name: 'Frake',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Frake.png',
            type: 'fornir'
        },
        {
            id: 'Gruszaszwajcarska',
            name: 'Grusza szwajcarska',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Grusza%20szwajcarska.png',
            type: 'fornir'
        },
        {
            id: 'Heban',
            name: 'Heban',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Heban.png',
            type: 'fornir'
        },
        {
            id: 'Ipe',
            name: 'Ipe',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Ipe.png',
            type: 'fornir'
        },
        {
            id: 'Iroko',
            name: 'Iroko',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Iroko.png',
            type: 'fornir'
        },
        {
            id: 'Jabłonindyjska',
            name: 'Jabłoń indyjska',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Jab%C5%82o%C5%84%20indyjska.png',
            type: 'fornir'
        },
        {
            id: 'Jatoba',
            name: 'Jatoba',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Jatoba.png',
            type: 'fornir'
        },
        {
            id: 'Jawor',
            name: 'Jawor',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Jawor.png',
            type: 'fornir'
        },
        {
            id: 'Jesionczeczot',
            name: 'Jesion czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Jesion%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Jesionjasny',
            name: 'Jesion jasny',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Jesion%20jasny.png',
            type: 'fornir'
        },
        {
            id: 'Kasztan',
            name: 'Kasztan',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Kasztan.png',
            type: 'fornir'
        },
        {
            id: 'Khaya',
            name: 'Khaya',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Khaya.png',
            type: 'fornir'
        },
        {
            id: 'Klonczeczot',
            name: 'Klon czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Klon%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Klonindyjski',
            name: 'Klon indyjski',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Klon%20indyjski.png',
            type: 'fornir'
        },
        {
            id: 'Klonptasieoczko',
            name: 'Klon ptasie oczko',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Klon%20ptasie%20oczko.png',
            type: 'fornir'
        },
        {
            id: 'Koto',
            name: 'Koto',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Koto.png',
            type: 'fornir'
        },
        {
            id: 'Madronaczeczot',
            name: 'Madrona czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Madrona%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Makore',
            name: 'Makore',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Makore.png',
            type: 'fornir'
        },
        {
            id: 'Matenye',
            name: 'Matenye',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Matenye.png',
            type: 'fornir'
        },
        {
            id: 'Mensonia',
            name: 'Mensonia',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Mensonia.png',
            type: 'fornir'
        },
        {
            id: 'Meranti',
            name: 'Meranti',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Meranti.png',
            type: 'fornir'
        },
        {
            id: 'Merbau',
            name: 'Merbau',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Merbau.png',
            type: 'fornir'
        },
        {
            id: 'Modrzew',
            name: 'Modrzew',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Modrzew.png',
            type: 'fornir'
        },
        {
            id: 'Olcha',
            name: 'Olcha',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Olcha.png',
            type: 'fornir'
        },
        {
            id: 'Oliwka',
            name: 'Oliwka',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Oliwka.png',
            type: 'fornir'
        },
        {
            id: 'Orzechamerykanskiczeczot',
            name: 'Orzech amerykański czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Orzech%20ameryka%C5%84ski%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Orzechamerykanski',
            name: 'Orzech amerykański',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Orzech%20ameryka%C5%84ski.png',
            type: 'fornir'
        },
        {
            id: 'Orzecheuropejskiczeczot',
            name: 'Orzech europejski czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Orzech%20europejski%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Orzecheuropejski',
            name: 'Orzech europejski',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Orzech%20europejski.png',
            type: 'fornir'
        },
        {
            id: 'Orzechsatyna',
            name: 'Orzech satyna',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Orzech%20satyna.png',
            type: 'fornir'
        },
        {
            id: 'Padouk',
            name: 'Padouk',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Padouk.png',
            type: 'fornir'
        },
        {
            id: 'Palisander',
            name: 'Palisander',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Palisander.png',
            type: 'fornir'
        },
        {
            id: 'Riopalisander',
            name: 'Rio palisander',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Rio%20palisander.png',
            type: 'fornir'
        },
        {
            id: 'Roza',
            name: 'Róża',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/R%C3%B3%C5%BCa.png',
            type: 'fornir'
        },
        {
            id: 'Santospalisander',
            name: 'Santos palisander',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Santos%20palisander.png',
            type: 'fornir'
        },
        {
            id: 'Sapelipomelle',
            name: 'Sapeli pomelle',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Sapeli%20pomelle.png',
            type: 'fornir'
        },
        {
            id: 'Sapelliflader',
            name: 'Sapelli flader',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Sapelli%20flader.png',
            type: 'fornir'
        },
        {
            id: 'Sapellipasiak',
            name: 'Sapelli pasiak',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Sapelli%20pasiak.png',
            type: 'fornir'
        },
        {
            id: 'Sapellipiramida',
            name: 'Sapelli piramida',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Sapelli%20piramida.png',
            type: 'fornir'
        },
        {
            id: 'Sosna',
            name: 'Sosna',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Sosna.png',
            type: 'fornir'
        },
        {
            id: 'Teak',
            name: 'Teak',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Teak.png',
            type: 'fornir'
        },
        {
            id: 'Topolaczeczot',
            name: 'Topola czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Topola%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Vavonaczeczot',
            name: 'Vavona czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Vavona%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Wenge',
            name: 'Wenge',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Wenge.png',
            type: 'fornir'
        },
        {
            id: 'Wiazczeczot',
            name: 'Wiąz czeczot',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Wi%C4%85z%20czeczot.png',
            type: 'fornir'
        },
        {
            id: 'Wiaz',
            name: 'Wiąz',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Wi%C4%85z.png',
            type: 'fornir'
        },
        {
            id: 'Zebrano',
            name: 'Zebrano',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/Zebrano.png',
            type: 'fornir'
        },
        {
            id: 'Sliwa',
            name: 'Śliwa',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/%C5%9Aliwa.png',
            type: 'fornir'
        },
        {
            id: 'Swierk',
            name: 'Świerk',
            image: 'https://storage.googleapis.com/stawowy-bucket/stawowy/samplers/fornir/%C5%9Awierk.png',
            type: 'fornir'
        }
    ]
};

export const samplerSlice = createSlice({
    name: "samplerItems",
    initialState: initialState,
});

export const selectSamplerItems = (state) => state.samplers.items;
export default samplerSlice.reducer;
