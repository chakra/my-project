import { createStore } from 'src/reducers/index'
import rootReducer from './reducers'

export default function configureStore() {
    let store = createStore(rootReducer)
    return store
}