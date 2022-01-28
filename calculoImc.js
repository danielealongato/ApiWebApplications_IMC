

const calculate = document.getElementById("calcular");
        function calcular () {
            var peso = document.getElementById("peso").value;
            var altura = document.getElementById("altura").value;
            var res = document.getElementById("res");


            if (altura !== '' && peso !== ''){

                const imc = (peso / (altura * altura)).toFixed(1);


                let tabelaComparacao = '';

                if (imc < 18.5){
                    tabelaComparacao = 'Abaixo do Peso.'
                }

                res.textContent = `Seu IMC é ${imc} e você está ${tabelaComparacao}`;



            }else {
                   res.textContent = 'Preencha todos os campos';
            }


        }
calculate.addEventListener('click', calcular);
