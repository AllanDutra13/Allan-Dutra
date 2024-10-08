
        function contarVogais(str) {
            const vogais = "aeiouAEIOU"; // Considera vogais maiúsculas e minúsculas
            let contador = 0;

            for (let char of str) {
                if (vogais.includes(char)) {
                    contador++;
                }
            }

            return contador;
        }

        // Obtendo entrada do usuário
        const entrada = prompt("Digite uma string:");
        if (entrada !== null) { // Verifica se o usuário não cancelou o prompt
            const resultado = contarVogais(entrada);
            alert(`A string "${entrada}" contém ${resultado} vogais.`);
        }

