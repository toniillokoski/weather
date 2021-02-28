let key = JSON.stringify(config.apiKey);

$.getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=Tampere&units=metric&appid=${key.replace(/\"/g, "")}`
    , 
    function(data){
        //Weather icon
        let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //Temperature now
        let temp = data.main.temp;
        //Temperature feels like
        let feels = data.main.feels_like;
        //Sunrise
        let sunRise = data.sys.sunrise;
        //Sunset
        let sunSet = data.sys.sunset;

        $("#icon").attr('src', icon);
        document.getElementById("temp").innerHTML = "There is " + temp + "°C";
        document.getElementById("feels").innerHTML = "Feels like " + feels + "°C";

        document.getElementById("sunrise").innerHTML = "Sun rises " + sunRise;
        document.getElementById("sunset").innerHTML = "Sun sets " + sunSet;
        
        

});

