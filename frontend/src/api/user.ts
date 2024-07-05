import api from './index'

type Endpoints = {
    getUsers: () => Promise<APISchema.User[]>
}

const endpoints: Endpoints = {
    getUsers: async () => {
        return await api('users')
    }
}

export default endpoints
