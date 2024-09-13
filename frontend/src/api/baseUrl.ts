const baseUrls = {
    development: 'http://localhost:3002/v1/',
    staging: '',
    production: 'https://backend-small-forest-9061.fly.dev/v1/',
    test: '',
}

const baseUrl = baseUrls[process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV || 'development']

export default baseUrl
