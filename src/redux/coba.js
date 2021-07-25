export * from './user/userAction'
export * from './univ/univAction'

const UPDATE_STATUS_LOGGED_IN = 'UPDATE_STATUS_LOGGED_IN'

export const updateStatusLoggedIn = () => {
    return {
        type: UPDATE_STATUS_LOGGED_IN,
        payload: true
    }
}