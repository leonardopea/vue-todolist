const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Vue Todolist',

            sottotitolo: 'La mia Todolist :',

            tasks:[
                {
                    testo: 'Anguria',
                    completato: false
                },
                {
                    testo: 'Aglio',
                    completato: false
                },
                {
                    testo: 'Cipolla',
                    completato: false
                },
                {
                    testo: 'Succo di frutta',
                    completato: false
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
                    completato: false
                },

            ]


        }
    },
    methods: {
        EventoCompletato(index){
            this.tasks[index].completato = !this.tasks[index].completato;
        },
        Elimina(index){
            this.tasks.splice(index,1);
        },
    },
}).mount('#app');