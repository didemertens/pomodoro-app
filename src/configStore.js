import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

export const middlewares = [ReduxThunk]
const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)

export default createStoreWithMiddleWare(reducers)