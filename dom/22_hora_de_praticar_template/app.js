new Vue({
    el: '#desafio',
    data:{
        nome: 'Jorge Loureiro Dias',
        idade: 66,
        link: 'https://www.proway.com.br/foto/jpg/curso/full/14982/1/trabalhando-com-vuejs.jpg'
    },
    methods: {
        idade3: function(){
            return this.idade * 3
        },
        aleatorio: function(){
            return Math.random() * 1
        }

    }
})