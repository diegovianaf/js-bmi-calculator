
const calculate = document.querySelector('#calculate')

function bmi () {
  const firstName = document.querySelector('#name').value
  const height = document.querySelector('#height').value / 100
  const weight = document.querySelector('#weight').value
  const result = document.querySelector('#result')

  const bmiValue = (weight / (height * height)).toFixed(1)
  
  if (firstName !== '' && height !== '' && weight !== '') {  

    let category = ''

    if (bmiValue < 18.5) {
      category = 'Underweight :('
    } else if (bmiValue < 25) {
      category = 'with Normal weight. Congratulations!!!'
    } else if (bmiValue < 30) {
      category = 'Overweight.'
    } else if (bmiValue >= 30) {
      category = 'Obese :('
    }
    
    result.innerHTML = `Hi ${firstName}, your BMI is ${bmiValue}, and you are ${category}`
      
  } else {
    result.textContent = 'Please fill in all fields!'
  }

}

calculate.addEventListener('click', bmi)
