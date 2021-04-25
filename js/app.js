


jQuery.noConflict()(function ($){
  $(document).ready(function(){
    $("#submit_").click(function(){
      var city = $("#city").val();
      console.log("city");

      if(city != ''){
        $.ajax({
          url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "APPID=8ff46451f38055809eb7f7ac9353beb2",
          type: "GET",
          dataType: "jsonp",
          success: function(data){
            var widget = show(data);
            $("#show").html(widget);
            $("#city").val("");

          }
        });
      }
      
      else{
        $("error").html("Enter City")
      }
    });
  });
});
function show(data){
  return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>" +
  "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
  "<h3><strong>description</strong>: " + data.weather[0].description +"</h3>" +
  "<h3><strong>Temperature</strong>: " + data.weather.temp +"</h3>" +
  "<h3><strong>Pressure</strong>: " + data.weather.pressure +"</h3>" +
  "<h3><strong>Humidity</strong>: " + data.weather.humidity +"</h3>" +
  "<h3><strong>Minimum Temperature</strong>: " + data.weather.main.temp_min +"</h3>" +
  "<h3><strong>Maximum Temperature</strong>: " + data.weather.main.temp_max +"</h3>" +
  "<h3><strong>Wind Speed</strong>: " + data.wind.speed +"</h3>" +
  "<h3><strong>Wind Direction</strong>: " + data.wind.deg +"</h3>";
}