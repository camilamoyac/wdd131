const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastmodified");
lastModified.textContent = `Last modified: ${document.lastModified}`;


const windch = document.querySelector("#windch");
const temperature = 29;
const windSpeed = 25;

const calculateWindChill = (t, v) => {return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)};

if (temperature <= 10 && windSpeed > 4.8){
    windch.textContent = calculateWindChill(temperature, windSpeed).toFixed(1);
} else{
    windch.textContent = " N/A"
}