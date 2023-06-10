import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActialNews {
    newsImg: string;
    description: string;
    date: {
        dateNumber: number;
        month: string;
        year: number;
    };
}

interface ActialNewsState {
    actualNews: ActialNews[]
}

const initialState: ActialNewsState = {
    actualNews: [
        {
            newsImg: 'https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg',
            description: 'News description',
            date: {
                dateNumber: 8,
                month: 'червня',
                year: 2023
            }
        },
        {
            newsImg: 'https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg',
            description: 'News description',
            date: {
                dateNumber: 8,
                month: 'червня',
                year: 2023
            }
        }, {
            newsImg: 'https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg',
            description: 'News description',
            date: {
                dateNumber: 8,
                month: 'червня',
                year: 2023
            }
        },
        {
            newsImg: 'https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg',
            description: 'News description',
            date: {
                dateNumber: 8,
                month: 'червня',
                year: 2023
            }
        },
        {
            newsImg: 'https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg',
            description: 'News description',
            date: {
                dateNumber: 8,
                month: 'червня',
                year: 2023
            }
        }
    ]
}

export const ActialNewsState = createSlice({
    name: 'Actual News',
    initialState,
    reducers: {

    }
})

export const banerPonelAction = ActialNewsState.actions
export const banerPonelReducer = ActialNewsState.reducer
