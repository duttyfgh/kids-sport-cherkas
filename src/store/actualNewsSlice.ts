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
    type: string | null
}

interface ActialNewsState {
    actualNews: ActialNews[]
}

const initialState: ActialNewsState = {
    actualNews: [
        {
            newsImg: 'https://m.gordonua.com/img/article/14964/39_tn.jpg?v1587476605',
            name: 'Украї́на — держава, розташована у Східній Європі, охоплює південний захід Східноєвропейської рівнини..',
            litleDescription: 'Станом на останній перепис (2001), населення України становило 48,4 мільйонів осіб. Основне й корінне населення України — це українці (77,8 % населення на 2001 рік). Також офіційно корінними народами України є кримські татари, караїми та кримчаки Крім того, значною меншиною є росіяни',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null
        },
        {
            newsImg: 'https://www.poglyad.tv/wp-content/uploads/2020/04/29_vozduh3.jpg',
            name: 'У системі адміністративно-територіального устрою України Київ має спеціальний статус..',
            litleDescription: 'За «Повістю временних літ», Київ заснував полянський князь Кий зі своїми братами Щеком і Хоривом та сестрою Либіддю. Згідно з археологічними даними та писемними джерелами, початок безперервного розвитку Києва датується 2-ю половиною V ст',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null
        },
        {
            newsImg: 'https://photographers.ua/thumbnails/pictures/41319/800xdsc_6798.jpg',
            name: 'Київ також мав тюркську назву — «Манкермен» («велике місто»), «Ківа-Манкермен», котра побутувала поряд з оригінальною назвою',
            litleDescription: 'Український етнограф М. В. Закревський стверджував, що згаданий Клавдієм Птолемеєм «Азагаріум» розташовувався на місці сучасного Києва. Ю. А. Кулаковський ототожнював з Києвом Птолемеїв «Метрополь», М. Ю. Брайчевський — «Сар»[',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null
        },
        {
            newsImg: 'https://skyandmethod.com/wp-content/uploads/2020/03/DJI_0589_europeansquare_skyandmethod.com_@2x.jpg',
            name: 'Київ — столиця та найбільше місто України.',
            litleDescription: 'Ки́їв (МФА: [ˈkɪjiu̯] ( прослухати), англ. Kyiv [ˈkiːɪv]) — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України. У системі адміністративно-територіального устрою України Київ має спеціальний статус, визначений Конституцією',
            fullDescription: 'full description',
            date: {
                dateNumber: '03',
                month: 'червня',
                year: '2023'
            },
            type: null
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
