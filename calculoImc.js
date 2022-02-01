

const calculate = document.getElementById("calcular");
        function calcular () {
            var peso = document.getElementById("peso").value;
            var altura = document.getElementById("altura").value;
            var res = document.getElementById("res");
            var description = document.getElementById("description")
            var resumo = document.getElementById("abstract")


            if (altura !== '' && peso !== ''){

                const imc = (peso / (altura * altura)).toFixed(1);


                let tabelaComparacao = '';
                let resumo = '';

                if (imc < 18.5){
                    resumo = 'Seu peso está: Abaixo do Normal'
                    tabelaComparacao = 'Nossa como vc está Magrissimo!!'
                }else if (imc < 24.9){
                    resumo = 'Seu peso está: Normal'
                    tabelaComparacao = 'Mandou bem hein, está em forma!'
                }else if (imc < 30){
                    resumo = 'Seu peso está: Acima do Normal'
                    tabelaComparacao = 'Humm acho que vamos precisar cortar o docinho!'
                }else {
                    resumo = 'Seu peso está: Muito acima do Normal'
                    tabelaComparacao = 'Acho que passamos do ponto, melhor procurar um médico...  '
                }

                res.textContent = `Seu IMC é: ${imc}`;
                description.textContent = `${tabelaComparacao}`;
                abstract.textContent = `${resumo}`;



            }else {
                   res.textContent = 'Preencha todos os campos';
            }


        }
calculate.addEventListener('click', calcular);
