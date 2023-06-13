const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Vue Todolist',

            sottotitolo: 'La mia Todolist :',

            tasks:[
                {
                    testo: 'Anguria',
                    completato: true
                },
                {
                    testo: 'Aglio',
                    completato: false
                },
                {
                    testo: 'Cipolla',
                    completato: true
                },
                {
                    testo: 'Succo di frutta',
                    completato: true
                },
                {
                    testo: 'Melograno',
                    completato: false
                },
                {
                    testo: 'Noodles',
                    completato: false
                },
                {
                    testo: 'Pomodoro',
                    completato: true
                },

            ]


        }
    },
    methods: {
        
    },
}).mount('#app');