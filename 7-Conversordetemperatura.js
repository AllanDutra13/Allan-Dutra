        function cpf(temp){
            return (temp * (9/5)) + 32
        }

        function fpc(temp){
            return (temp - 32) * (5/9)
        }

        let temp = parseFloat(prompt("Digite a temperatura: ")) 
        let um = prompt("Digite C para CELSIUS ou F para FAHREINHEIT ")

        if(um.toLowerCase == "c"){
            alert(`${temp}C convertido para fahrenheit ${cpf(temp)}`)
        }

        if(um.toLowerCase == "f"){
            alert(`${temp}F convertido para celsius ${fpc(temp)}`)
        }
        if(um.toLowerCase != "f" && um.toLowerCase != "c"){
            alert("pressione F5 para tentar novamente com uma unidade de medida válida")
        }

