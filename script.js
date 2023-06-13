const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Vue Todolist',

            sottotitolo: 'La mia Todolist :',

            nuova_task: '',

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
        AggiungiElemento(){
            
            let oggetto = 
            {
                testo: this.nuova_task,
                completato: false,
            }

            this.tasks.push(oggetto);

            this.nuova_task='';
        }
    },
}).mount('#app');