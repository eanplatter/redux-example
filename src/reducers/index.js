import { combineReducers } from 'redux'
import username from './username'

const appStore = combineReducers({
  username,
})

export default appStore
