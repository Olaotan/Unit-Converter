/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const resultOne = document.getElementById("results-one")
const resultTwo = document.getElementById("results-two")
const resultThree = document.getElementById("results-three")



convertBtn.addEventListener("click", function() {
    convert(resultOne, 'meters', 'feet', 3.281)
    convert(resultTwo, 'liter', 'gallon', 0.264)
    convert(resultThree, 'kilgram', 'feet', 2.204)
    inputEl.value = ''
})

function convert(result, metricOne, metricTwo, rate){
   result.innerHTML = `${inputEl.value} ${metricOne} = ${(inputEl.value * rate).toFixed(3)} ${metricTwo} | ${inputEl.value} ${metricTwo} = ${(inputEl.value / rate).toFixed(3)} ${metricOne}`

}