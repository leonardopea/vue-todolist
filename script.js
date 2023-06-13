const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Vue Todolist',

            tasks:[
                {
                    testo: 'anguria',
                    completato: false
                },
                {
                    testo: 'aglio',
                    completato: false
                },
                {
                    testo: 'cipolla',
                    completato: false
                },
                {
                    testo: 'succo di frutta',
                    completato: false
                },
                {
                    testo: 'melograno',
                    completato: false
                },
                {
                    testo: 'noodles',
                    completato: false
                },
                {
                    testo: 'pomodoro',
                    completato: false
                },

            ]


        }
    },
    methods: {
        
    },
}).mount('#app');