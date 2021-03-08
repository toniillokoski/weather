let key = JSON.stringify(config.apiKey);
let geokey = JSON.stringify(config1.apiKey);

/* TOIMIVA KOODIPÄTKÄ --- MITEN SAADA DATA ULOS???
const successfulLocation = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geokey.replace(/\"/g, "")}`)

    .then(response => response.json())
    .then(console.log);
};

navigator.geolocation.getCurrentPosition(successfulLocation, console.log)
*/

/* YRITYS SAADA DATA ULOS VASTAAVALLA KUN SÄÄTIEDOT
$.getJSON(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geokey.replace(/\"/g, "")}` ,
    function(geoLoc){
        console.log(geoLoc);
    });
*/


$.getJSON(
`http://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=${key.replace(/\"/g, "")}` , 
function(data){
    //Weather icon
    let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //Weather type
    let wtype = data.weather[0].description;
    //Temperature now
    let temp = data.main.temp;
    let temp2 = parseFloat(temp, 10);
    //Temperature feels like
    let feels = data.main.feels_like;
    let feels2 = parseFloat(feels, 10);
    //Sunrise
    let sunRise = new Date(data.sys.sunrise);
    //Sunset
    let sunSet = data.sys.sunset;

    //TODO : TRY TO DO FUNCTION HERE
    //TODO : TRY TO DO FUNCTION HERE
    let sunRise2 = new Date(sunRise * 1000);
    let sunRise3 = sunRise2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let sunSet2 = new Date(sunSet * 1000);
    let sunSet3 = sunSet2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    //TODO : TRY TO DO FUNCTION HERE
    //TODO : TRY TO DO FUNCTION HERE

    document.getElementById("city").innerHTML = "Tampere";
    $("#icon").attr('src', icon);
    document.getElementById("wtype").innerHTML = wtype;

    document.getElementById("temp").innerHTML = temp2.toFixed(0) + "°C";
    document.getElementById("feels").innerHTML = "Feels like " + feels2.toFixed(0) + "°C";

    document.getElementById("sunrise").innerHTML = "Sunrise " + sunRise3;
    document.getElementById("sunset").innerHTML = "Sunset " + sunSet3;
    
});

    
let input = document.getElementById("addinput");

// Eventlistener when the user releases enter
input.addEventListener("press", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addbutton").click();
    }
});


//Function to onClick
function changeCity(x) {
    event.preventDefault();
    let city = document.getElementById("addinput").value;
    let key = JSON.stringify(config.apiKey);

    $.getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key.replace(/\"/g, "")}`
    , 
    function(data){
        //Weather icon
        let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //Weather type
        let wtype = data.weather[0].description;
        //Temperature now
        let temp = data.main.temp;
        let temp2 = parseFloat(temp, 10);
        //Temperature feels like
        let feels = data.main.feels_like;
        let feels2 = parseFloat(feels, 10);
        //Sunrise
        let sunRise = new Date(data.sys.sunrise);
        //Sunset
        let sunSet = data.sys.sunset;

        let sunRise2 = new Date(sunRise * 1000);
        let sunRise3 = sunRise2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let sunSet2 = new Date(sunSet * 1000);
        let sunSet3 = sunSet2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        document.getElementById("city").innerHTML = city;

        $("#icon").attr('src', icon);
        document.getElementById("wtype").innerHTML = wtype;

        document.getElementById("temp").innerHTML = temp2.toFixed(0) + "°C";
        document.getElementById("feels").innerHTML = "Feels like " + feels2.toFixed(0) + "°C";

        document.getElementById("sunrise").innerHTML = "Sunrise " + sunRise3;
        document.getElementById("sunset").innerHTML = "Sunset " + sunSet3;
        
    });

    document.getElementById("addinput").value = "";
}