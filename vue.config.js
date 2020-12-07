module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/passion-mouche/'
        : '/App.vue'
}