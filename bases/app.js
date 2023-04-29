const { createApp } = Vue;

// we can work in vue with Options API or Composition API
const app = createApp({
    // template: `
    //     <h1>Hello World</h1>
    //     <p>{{ message }}</p>
    // `,
    // methods: {
        
    // },
    // watch: {

    // },
    // data() {
    //     return {

    //     }
    // },
    // setup(props) {
        
    // }
    data() {
        return {
            quote: 'I\'m batman',
            author: 'Bruce Wayne',
        }
    },
    methods: {
        changeQuote() {
            this.quote = 'I\'m not batman'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#app')