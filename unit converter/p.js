
const container = document.getElementById("output")
const convertbutton = document.getElementById("unitconverter")
const audio = new Audio("1687460568791jbn6f5c-voicemaker.in-speech.mp3")

convertbutton.addEventListener("click",()=>{
    const userinput = document.getElementById("input-field").value
    if(isNaN(userinput)){
        audio.play()
        alert("invalid input")
        return

    }

    const fahrenheit = (userinput * 9/5) + 32;

    container.innerHTML = `${fahrenheit} &deg;f`






})