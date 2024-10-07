        function IMC(peso,altura){
            return peso / (altura * altura)
        }


        let peso = parseFloat(prompt("Digite o peso:"))
        let altura = parseFloat(prompt("Digite a altura:"))
        let imc = IMC(peso,altura)
        alert(imc)

        if(imc < 18.5 ){
            alert("Abaixo do peso")
        }else if(imc < 25 ){
            alert("peso normal")
        }else if(imc < 30){
            alert("sobrepeso")
        }else{
            alert ("obesa")
        }
