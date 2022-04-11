import {createStore, applyMiddleware} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import createSagaMiddleware from  'redux-saga'
import rootReducer from '../reducers'
import { all } from 'redux-saga/effects'

export const makeStore = context =>{
    const createSagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer,applyMiddleware)
    store.sagaTask = createSagaMiddleware.run(rootSaga)
    return store
}
export default function* rootSaga(){
    yield all([fork(watchSignup)])
}
export const wrapper = createSagaMiddleware(makeStore,{debug:true})