
// Variáveis e seleção de elementos



const apiKey ="ba605efc18f1572f61892fe426f18a1a";  
const apiContryUrl = "https://www.countryflagsapi.com/png/";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");



const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

// Funções

//Acessar a API

const getWeatherData = async(city) => {

const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

//Para obter a resposta com fetch

const res = await fetch(apiWeatherUrl) ;

const data = await res.json() ;  //  Transformando os dados em objetos de JavaScripti

// console.log(data); testando os dados

return data;
}

/* Exibe os dados da PI
const showWeatherData = (city) =>{   
    
    getWeatherData(city);

} */// Dados testados no momento do colsole.log acima.


const showWeatherData = async (city) =>{   
    
    const data = await  getWeatherData(city);
    getWeatherData(city);

cityElement.innerText = data.name;
tempElement.innerText = parseInt(data.main.temp);
descElement.innerText = data.weather[0].description; 

weatherIconElement.setAttribute(
"src",
`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

countryElement.setAttribute("src", apiContryUrl + data.sys.country);

humidityElement.innerText = `${data.main.humidity}%`;
windElement.innerText = `${data.wind.speed}Km/h`;

weatherContainer.classList.remove("hide");
};

//Eventos

searchBtn.addEventListener("click",(e) => {

e.preventDefault();
const city = cityInput.value;

showWeatherData(city);

});
