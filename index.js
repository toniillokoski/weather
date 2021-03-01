let key = JSON.stringify(config.apiKey);

$.getJSON(
`http://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=${key.replace(/\"/g, "")}` , 
function(data){
    //Weather icon
    let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //Temperature now
    let temp = data.main.temp;
    //Temperature feels like
    let feels = data.main.feels_like;
    //Sunrise
    let sunRise = new Date(data.sys.sunrise);
    //Sunset
    let sunSet = data.sys.sunset;

    //TODO : TRY TO DO FUNCTION HERE
    //TODO : TRY TO DO FUNCTION HERE
    let sunRise2 = new Date(sunRise * 1000);
    let sunRise3 = sunRise2.toLocaleTimeString();

    let sunSet2 = new Date(sunSet * 1000);
    let sunSet3 = sunSet2.toLocaleTimeString();
    //TODO : TRY TO DO FUNCTION HERE
    //TODO : TRY TO DO FUNCTION HERE

    document.getElementById("city").innerHTML = "Tampere";
    $("#icon").attr('src', icon);
    document.getElementById("temp").innerHTML = `${temp}°C`;
    document.getElementById("feels").innerHTML = "Feels like " + feels + "°C";

    document.getElementById("sunrise").innerHTML = "Sun rises " + sunRise3;
    document.getElementById("sunset").innerHTML = "Sun sets " + sunSet3;
    
});

    
let input = document.getElementById("addinput");

// Eventlistener when the user releases enter
input.addEventListener("keyup", function(event) {
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
        //Temperature now
        let temp = data.main.temp;
        //Temperature feels like
        let feels = data.main.feels_like;
        //Sunrise
        let sunRise = new Date(data.sys.sunrise);
        //Sunset
        let sunSet = data.sys.sunset;

        let sunRise2 = new Date(sunRise * 1000);
        let sunRise3 = sunRise2.toLocaleTimeString();

        let sunSet2 = new Date(sunSet * 1000);
        let sunSet3 = sunSet2.toLocaleTimeString();

        document.getElementById("city").innerHTML = city;
        $("#icon").attr('src', icon);
        document.getElementById("temp").innerHTML = `${temp}°C`;
        document.getElementById("feels").innerHTML = "Feels like " + feels + "°C";

        document.getElementById("sunrise").innerHTML = "Sun rises " + sunRise3;
        document.getElementById("sunset").innerHTML = "Sun sets " + sunSet3;
        
    });
}