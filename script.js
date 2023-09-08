let speech = new SpeechSynthesisUtterance(); //api ka object banaa diaa

document.querySelector("button").addEventListener("click",function(){
    speech.text = document.querySelector("textarea").value;  // speech var me fit krlia text jo bulwana hai
    window.speechSynthesis.speak(speech); //speek krva diuaa text
})

let voices = [];   //empty array to be filed with voice options
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices(); // all voices filed in the array
    speech.voice = voices[1];            //yeh vo voice hai jo awaz by default sunai degi  
    voices.forEach((voice,i)=>{
        const option = new Option(voice.name,i)
        voiceSelect.options.add(option);     //yeh foreach select ki list me bharne ka kam kr rha hai sare options ko
    })
    voiceSelect.selectedIndex = 1;  // yeh idx by default dikhegaaa on select panel
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value]  //select me change krne pr voice update kr rhee hai isse
})