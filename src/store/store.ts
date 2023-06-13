import { AdminState } from './adminSlice'; // Импортируем редьюсер
import { ActialNewsState } from './actualNewsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        actualNews: ActialNewsState.reducer,
        admin: AdminState.reducer, // Используем экспортированный редьюсер
    }
})

export type RootState = ReturnType<typeof store.getState>;
