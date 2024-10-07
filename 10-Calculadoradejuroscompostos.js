        function calcularJurosCompostos(valorInicial, taxaAnual, anos) {
            return valorInicial * ((1 + (taxaAnual / 100)) ** anos);
        }
        let valIni = parseFloat(prompt("Digite o valor inicial"))
        let txAnual = parseFloat(prompt("Digite a taxa de juros"))
        let anos = parseInt(prompt("Digite o tempo em anos"))
       // alert (JurComp(valIni, txAnual, anos).toFixed(2))
        alert(`Investindo R$ ${valIni} com a taxa ${txAnual} por ${anos} anos obterá um montante de ${calcularJurosCompostos(valIni, txAnual, anos).toFixed(2)}`);
    
