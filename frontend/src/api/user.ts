import api from './index'

type Endpoints = {
    getUsers: () => Promise<APISchema.User[]>,
    getUser: (userId: number) => Promise<APISchema.User>,
    createUser: (user: Partial<APISchema.User>) => Promise<APISchema.User>,
    updateUser: (user: Partial<APISchema.User>) => Promise<APISchema.User>,
    deleteUser: (user: Partial<APISchema.User>) => Promise<APISchema.User>,
}

const endpoints: Endpoints = {
    getUsers: async () => {
        return await api('users')
    },
    getUser: async (userId) => {
        return await api(`users/${userId}`)
    },
    createUser: async (user: Partial<APISchema.User>) => {
        return await api('users', {
            method: 'post',
            data: JSON.stringify({
                user
            }),
        })
    },
    updateUser: async (user: Partial<APISchema.User>) => {
        return await api(`users/${user.id}`, {
            method: 'put',
            data: JSON.stringify({
                user
            }),
        })
    },
    deleteUser: async (user: Partial<APISchema.User>) => {
        return await api(`users/${user.id}`, {
            method: 'delete',
        })
    },
}

export default endpoints
