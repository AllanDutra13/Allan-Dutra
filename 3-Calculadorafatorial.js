>
        function fatorial(numero){
            var acumulador=0
            var controle = 1
            while(controle < numero){
                acumulador = numero * controle
                controle ++
                console.log(controle, acumulador)
            }
            // alert("O resultado de " +numero+"! a a a é: " + acumulador)
            return acumulador
        }

        let numero = parseInt(prompt("Digite um número"))
        let resultado = fatorial(numero)
        alert("O resultado de " +numero+"! é: " + resultado)

