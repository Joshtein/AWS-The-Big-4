export * from './user/userAction'
export * from './univ/univAction'

const UPDATE_STATUS_LOGGED_IN = 'UPDATE_STATUS_LOGGED_IN'
const UPDATE_LOG_OUT = 'UPDATE_LOG_OUT'

export const updateStatusLoggedIn = () => {
    return {
        type: UPDATE_STATUS_LOGGED_IN,
        payload: true
    }
}

export const updateLogOut = () => {
    return {
        type: UPDATE_LOG_OUT,
        payload: false
    }
}