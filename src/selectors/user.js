export const getRoleUserSelector = (state) => {
    const data = state.user.login;
    if (data && data.result) {
        localStorage.setItem('ROLE', data.result.data.role)
        return data.result.data.role
    }
    return null;
}
export const getNameUserSelector = (state) => {
    const data = state.user.login
    if (data && data.result) {
        return data.result.data.user.lastname
    }
    return null
}
export const getStatusUserSelector = (state) => {
    const data = state.user.login;
    if (data && data.status) {
        return data.status;
    }
    return null
}

export const getToken = (state) => {
    const data = state.user.login;
    if (data && data.result) {
        localStorage.setItem("AUTH_TOKEN_KEY", data.result.data.token)
        return data.result.data.token;
    }
    return null
}

export const getAllUserSelector = (state) => {
    const data = state.user.getAllUser;
    if (data && data.result) {
        return data.result.data.data.user;
    }
    return null
}
