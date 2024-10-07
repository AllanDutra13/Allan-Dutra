            function parOuImpar(numero) {
                var situacao;
                if (numero % 2 === 0) {
                     alert("O numero "+ numero + " é par");
                }
                else {
                    alert("O numero "+ numero + " é impar");
                }
                alert("O aluno obteve média: " + media + " e foi " + situacao);
            }
            let numero = parseFloat(prompt("Digite o número a ser verificado:"));
            
            parOuImpar(numero);
       
