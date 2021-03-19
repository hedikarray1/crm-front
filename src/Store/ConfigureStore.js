import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Reducers/RootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const initialState = {}
const middleWare = [thunk]
let store;

 //new
const persistConfig = {
    key: 'root',
    storage,
  }
 
  
  const persistedReducer = persistReducer(persistConfig, RootReducer)
//end new


if (window.navigator.userAgent.includes("Chrome")) {
   // store = createStore(RootReducer,initialState,compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()))
//new
store = createStore(persistedReducer,initialState,compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()))

} else {
   // store = createStore(RootReducer, initialState, compose(applyMiddleware(...middleWare)))
   store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middleWare)))
}
let persistor = persistStore(store);
export  {store,persistor};