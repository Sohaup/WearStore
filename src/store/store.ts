import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{

    }
});

export type storeType = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;
export default store;