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
        let sunRise = new Date(data.sys.sunrise);
        //Sunset
        let sunSet = data.sys.sunset;
  
        let sunRise2 = new Date(sunRise * 1000);
        let sunRise3 = sunRise2.toLocaleTimeString();

        let sunSet2 = new Date(sunSet * 1000);
        let sunSet3 = sunSet2.toLocaleTimeString();



        $("#icon").attr('src', icon);
        document.getElementById("temp").innerHTML = temp + "°C <br>";
        document.getElementById("feels").innerHTML = "Feels like " + feels + "°C";

        document.getElementById("sunrise").innerHTML = "Sun rises " + sunRise3;
        document.getElementById("sunset").innerHTML = "Sun sets " + sunSet3;
        
        

});

