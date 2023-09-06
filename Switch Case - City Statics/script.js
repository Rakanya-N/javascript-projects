const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click', displayStats)

function displayStats(){
   
    const input = document.getElementById('input')
    const city = input.options[input.selectedIndex].value 
    let population = 0, literacyRate = 0, language=""

switch (city){
    case 'Bengaluru':
        population = 89642035
        literacyRate = 88.71
        language = 'Kannada'
        break
    case 'Chennai'   : 
        population = 9871431
        literacyRate = 98.8
        language = 'Tamil'
        break
    case 'Delhi':
        population = 8746325
        literacyRate = 87.6
        language = 'Hindi'
        break
    case 'Mumbai':
        population = 9576421
        literacyRate = 89.76
        language = 'Marati'
        break


}
let text = `The Indian city ${city} has a population of ${population}. The language spoken is ${language} and the literacy rate is ${literacyRate} %.`
document.getElementById('result').innerHTML= text
}