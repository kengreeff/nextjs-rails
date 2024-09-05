const baseUrls = {
    development: 'http://localhost:3002/v1/',
    staging: '',
    production: 'https://backend-shy-dawn-8299.fly.dev/v1/',
    test: '',
}

const baseUrl = baseUrls[process.env.NODE_ENV || 'development']

export default baseUrl
