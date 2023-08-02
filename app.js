window.addEventListener("load", () => {
      let late;
      let long;
      let locationtimezone = document.querySelector(".location-timezone");
      let degreesection = document.querySelector(".degree");
      let temperaturedescription = document.querySelector(".temperature-description");
      let icon = document.querySelector(".icon");
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          long = position.coords.longitude;
          late = position.coords.latitude;
          //console.log(position);
          const api = `http://api.weatherapi.com/v1/current.json?key=d6aea0ec45c24b4d84f130006230208&q=${late},${long}&aqi=no`;
          fetch(api)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
    
              const { temp_c, condition } = data.current;
              const iconUrl = data.current.condition.icon;
              degreesection.textContent = temp_c;
              locationtimezone.textContent = data.location.name;
              temperaturedescription.textContent = condition.text;
              icon.setAttribute("src", `https:${iconUrl}`);
            });
        });
      }
    });
    