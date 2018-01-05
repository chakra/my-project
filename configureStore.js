import { createStore } from 'src/redux/index'
import rootReducer from './reducers'

export default function configureStore() {
    let store = createStore(rootReducer)
    return store
}