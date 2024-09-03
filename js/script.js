const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: []  // Array per memorizzare le email generate
        };
    },
    created() {

        // Ciclo per generare 10 email
        for (let i = 0; i < 10; i++) {
            console.log(`Sto per fare la richiesta numero ${i + 1} all'API.`);

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(`Richiesta numero ${i + 1} completata. Email ricevuta:`, resp.data.response);

                    // Aggiunge l'email all'array emails
                    this.emails.push(resp.data.response);
                })


        }

        console.log('Tutte le richieste API sono state inviate.');
    }
}).mount('#app');