export const getRoleUserSelector = (state) => {
    const data = state.user.login;
    if (data && data.result) {
        return data.result.data.user.isAdmin
    }
    return null
}
export const getNameUserSelector = (state) => {
    const data = state.user.login
    if (data && data.result) {
        return data.result.data.user.lastname
    }
    return null
}
export const getStatusUserSelector = (state) => {
    const data = state.user.login
    if (data && data.result) {
        return data.result.data.message;
    }
    return null
}