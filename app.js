function getWeatherInfo() {
    var cityname = document.getElementById("cityname").value
    console.log(cityname)
    if (cityname == undefined || cityname.length == 0) {
        alert("Please enter cityname")
        return
    }

    var url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        cityname +
        "&appid=7101bb3e361a86fc6d162a055d157fc2&units=metric"

    var xmlHttpRequest = new XMLHttpRequest()

    xmlHttpRequest.open("GET", url)
    xmlHttpRequest.send()

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == XMLHttpRequest.DONE) {
            if (xmlHttpRequest.status == 200) {
                console.log("Request was successful")
                console.log(xmlHttpRequest.responseText)

                var weatherData = JSON.parse(xmlHttpRequest.responseText)
                console.log(weatherData["main"]["temp"])

                document.getElementById("temp").innerHTML =
                    weatherData["main"]["temp"]

                document.getElementById("tempInfo").style.display = "block"
            } else {
                console.log("Request failed")
            }
        }
    }
}
