import { ActialNewsState } from './actualNewsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        actualNews: ActialNewsState.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
