/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberInput = document.getElementById("inputNum")
const convertBtn =  document.getElementById("convertBtn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

convertBtn.addEventListener("click", function() {
    let number = numberInput.value
    renderPage(number)
})
function renderPage(number) {
    lengthCon(number)
    volumeCon(number)
    massCon(number)
}
function lengthCon(number) {
    let feetNumber = number
    let meterNumber = number
    feetNumber = number * 3.281
    meterNumber = number / 3.281
    lengthP.textContent = `${number} meters = ${feetNumber.toFixed(3)} feet | ${number} feet = ${meterNumber.toFixed(3)} meters`
}
function volumeCon(number) {
    let gallonsNumber = number
    let litersNumber = number
    gallonsNumber = number * .264
    litersNumber = number / .264
    volumeP.textContent = `${number} liters = ${gallonsNumber.toFixed(3)} gallons | ${number} gallons = ${litersNumber.toFixed(3)} liters`
}
function massCon(number) {
    let poundsNumber = number
    let kilosNumber = number
    poundsNumber = number * 2.204
    kilosNumber = number / 2.204
    massP.textContent = `${number} kilos = ${poundsNumber.toFixed(3)} pounds | ${number} pounds = ${kilosNumber.toFixed(3)} kilos`
}