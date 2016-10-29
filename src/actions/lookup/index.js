export const lookupStart = prop => ({
  type: 'LOOKUP_START',
  prop,
}) 

export const lookupSuccess = (prop, data) => ({
  type: 'LOOKUP_SUCCESS',
  data,
  prop,
})

export const lookupFailure = (prop, err) => ({
  type: 'LOOKUP_FAILURE',
  err,
  prop,
})
