import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActialNews {
    newsImg: string ;
    name: string;
    litleDescription: string;
    fullDescription: string;
    date: {
        dateNumber: string;
        month: string;
        year: string;
    };
    type: string | null,
    id: number
}

interface ActialNewsState {
    actualNews: ActialNews[]
}

const initialState: ActialNewsState = {
    actualNews: [
        {
            newsImg: 'https://m.gordonua.com/img/article/14964/39_tn.jpg?v1587476605',
            name: 'Украї́на — держава, розташована у Східній Європі, охоплює південний захід Східноєвропейської рівнини..',
            litleDescription: 'Станом на останній перепис (2001), населення України становило 48,4 мільйонів осіб. Основне й корінне населення України — це українці (77,8 % населення на 2001 рік)...',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null,
            id: 1
        },
        {
            newsImg: 'https://kesq.b-cdn.net/2022/03/hypatia-h_a849d4ff1ac5c5cc9f8dae1e4c39f546-h_3a1cbccfee790fc4cce3993cbc802dc7-300.jpg',
            name: 'У системі адміністративно-територіального устрою України Київ має спеціальний статус..',
            litleDescription: 'Ки́їв (МФА: [ˈkɪjiu̯] ( прослухати), англ. Kyiv [ˈkiːɪv]) — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний...',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null,
            id: 2

        },
        {
            newsImg: 'https://photographers.ua/thumbnails/pictures/41319/800xdsc_6798.jpg',
            name: 'Київ також мав тюркську назву — «Манкермен» («велике місто»), «Ківа-Манкермен», котра побутувала поря...',
            litleDescription: 'Український етнограф М. В. Закревський стверджував, що згаданий Клавдієм Птолемеєм «Азагаріум» розташовувався на місці сучасного Києва. Ю. А. Кулаковський ототожнював...',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null,
            id: 3

        },
        {
            newsImg: 'https://skyandmethod.com/wp-content/uploads/2020/03/DJI_0589_europeansquare_skyandmethod.com_@2x.jpg',
            name: 'Київ — столиця та найбільше місто України.',
            litleDescription: 'Ки́їв (МФА: [ˈkɪjiu̯] ( прослухати), англ. Kyiv [ˈkiːɪv]) — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині...',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null,
            id: 4
        },
        {
            newsImg: 'https://kashtan.media/wp-content/uploads/2022/10/Mikhail-P-e1665579031486-1200x600.jpg',
            name: 'Скляний пішохідний міст в Києві: історія будівництва та цікаві факти..',
            litleDescription: 'Побудувати міст на цьому місці збирались ще за часів Радянського союзу. Обидва парки користуються популярністю та знаходяться в історичних місцях, тому між ними потрібен...',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null,
            id: 5
        }
        
        
    ]
    
}

export const ActialNewsState = createSlice({
    name: 'Actual News',
    initialState,
    reducers: {
        addNews(state, actions: PayloadAction<ActialNews> )  {
            const terminalArrey = actions.payload
           state.actualNews.push(terminalArrey)
        }
    }
})

export const banerPonelAction = ActialNewsState.actions
export const banerPonelReducer = ActialNewsState.reducer
