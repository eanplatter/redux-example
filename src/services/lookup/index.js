import axios from 'axios'
import actions from '../../actions'

export const gitHubLookup = () => (dispatch, getState) => {
  dispatch(actions.lookupStart('github'))
  const username = getState().username.username
  axios(`https://api.github.com/users/${username}`)
    .then(
      res => {
        dispatch(actions.lookupSuccess('github', res.data))
      },
      err => {
        dispatch(actions.lookupFailure('github', err))
      }
    )
} 

export const redditLookup = () => (dispatch, getState) => {
  dispatch(actions.lookupStart('reddit'))
  const username = getState().username.username
  axios(`https://reddit.com/u/${username}/about.json`)
    .then(
      res => {
        dispatch(actions.lookupSuccess('reddit', res.data))
      },
      err => {
        dispatch(actions.lookupFailure('reddit', err))
      }
    )
}

export const lookup = () => (dispatch, getState) => {
  gitHubLookup()(dispatch, getState)
  redditLookup()(dispatch, getState)  
}
