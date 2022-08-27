new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function(){
            alert("Salve, simpatia!!!")
        },

        exibirValor: function(event){
            this.valor = event.target.value
        }
    }
})