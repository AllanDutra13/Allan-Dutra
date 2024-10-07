 
        // function verificar(ano){
        //     let bissexto =false

        //     if(ano % 4 === 0){
        //         bissexto =true
        //     }
        //     if(ano % 400 !== 0 && ano % 100 === 0 ){
        //         bissexto = false
        //     }
        //     return bissexto
        // }

        function verificar(ano) {
            return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
        }

        let ano = parseInt(prompt("Digite o ano: "))

        let bissexto = verificar(ano)

        if(bissexto == true){
            alert(" O ano " +ano + "  é bissexto")
        }else{alert(" O ano " +ano + " não é bissexto")}
    
