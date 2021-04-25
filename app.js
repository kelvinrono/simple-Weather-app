var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue");
var place = document.querySelector(".name")
var desc = document.querySelector(".desc")
var temp = document.querySelector(".temp")


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=81650f8a5829b59aae1f5b9904160bd7')
    .then(response =>response.json())
    .then(data =>{
        
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather']['0']['description'];
    
          
            place.innerHTML = nameValue;
            temp.innerHTML = "Temperature: "+tempValue+" K";
            desc.innerHTML = "Description: "+ descValue
        
    })
    
    .catch(err=>alert("Unable to fetch or wrong data"))
    
})

