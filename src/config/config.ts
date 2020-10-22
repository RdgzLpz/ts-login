export default {
    jwtSecret: process.env.JWT_SECRET || 'someSecretToken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/typescript-server',
        USER: '',
        PASSWORD: ''
    }
}