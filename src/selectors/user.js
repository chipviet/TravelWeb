export const getRoleUserSelector = (state) => {
    const data = state.user.login;
    console.log('state',state)
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
    const data = state.user.login;
    if (data && data.result) {
        return data.status;
    }
    return null
}

export const getToken = (state) => {
    const data = state.user.login;
    if (data && data.result) {
        localStorage.setItem("AUTH_TOKEN_KEY",data.result.data.token)
        return data.result.data.token;
    }
    return null
}
