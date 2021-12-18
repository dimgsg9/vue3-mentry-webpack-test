// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    publicPath: '/account/',
    devServer: {
        // public: 'booker.test:80/account',
        allowedHosts: [
            'booker.test',
        ],
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            entry: 'src/login.js',
            template: 'public/login.html',
            filename: 'login.html',
            title: 'Login Page',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        }
        
    }
}