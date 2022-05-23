const calculate = document.getElementById('calculate');

function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name!== '' && height !== '' && weight !== '') {

        const imcValue = (weight / (height * height)).toFixed(1);

        let response = '';

        if (imcValue < 18.5){
            response = 'abaixo do peso ideal.';
        }else if (imcValue < 24.9) {
            response = 'no peso ideal. Parabéns!';
        }else if (imcValue < 29.9){
            response = 'levemente acima do peso ideal.';
        }else if (imcValue < 34.9){
            response = 'com obesidade grau I.';
        }else if (imcValue < 39.9){
            response = 'com obesidade grau II.';
        }else {
            response = 'com obesidade grau III.';
        }

        result.textContent = `${name}, seu IMC é ${imcValue}. De acordo com a OMS você está ${response}`;
        
    }else {
        result.textContent = 'Por favor, preencha todos os campos';
    }

}

calculate.addEventListener('click', imc);