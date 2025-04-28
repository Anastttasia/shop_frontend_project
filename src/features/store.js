import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
      categories: 'categories',
    },
    devTools: true,
  });