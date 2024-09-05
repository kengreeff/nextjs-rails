import axios from "axios";

import baseURL from "./baseUrl";

const axiosInstance = axios.create({
  baseURL,
 timeout: 1000,
})

type ApiOptions = {
    data?: object | string,
    method?: 'get' | 'put' | 'post' | 'delete',
    params?: object,
}

export const api = async (url: string, options: ApiOptions = {}) => {
    const { data, method = 'get', params } = options

    const accessToken = 'ACCESS_TOKEN'

    try {
        const response = await axiosInstance.request({
            data,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            method,
            params,
            responseType: 'json',
            url,
        })

        return response.data
    } catch (error) {
        throw new Error(error.response?.data?.errors)
    }
}

export default api