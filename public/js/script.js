//Variables
const apiKey = 'd5ca5c8780f73fd2cdcd83ac1d6cb2da';
const inputElement = document.getElementById('myInput');
const submitBtn = document.getElementById('submitBtn')
const hotWeatherItems = ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'];
const moderateWeatherItems = ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'];
const coldWeatherItems = ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Sweater'];
const cityBtn = document.getElementById('city-button')
const cityInput = document.getElementById('city')
submitBtn.addEventListener('click', function () {
  console.log(inputElement.value)
  var inputValue = document.getElementById('myInput').value;
  var outputElement = document.getElementById('output');
  outputElement.textContent = inputValue;
  document.getElementById('myInput').value = '';
})

cityBtn.addEventListener('click', function () {
  const city = cityInput.value
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(async (data) => {
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
      const response = await fetch(url);
      const tempData = await response.json();
      const temperatureElement = document.getElementById('temperature');
      console.log(tempData.list[0].main.temp);
      temperatureElement.textContent = Math.round(tempData.list[0].main.temp) + ' °F';
      const determineWeatherCategory = temp => {
        if (temp >= 70) {
          return Object.values(weatherItems.hot);
        } else if (temp >= 51 && temp <= 69) {
          return Object.values(weatherItems.moderate);
        } else {
          return Object.values(weatherItems.cold);
        }
      };
      const weatherItems = {
        hot: ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'],
        moderate: ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'],
        cold: ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Sweater'],
      };
      Object.keys(weatherItems).forEach((weather) => {
        console.log(`Clothing items for ${weather} weather:`);
        weatherItems[weather].forEach((item) => {
          console.log(item);
        });
      });
      submitBtn.addEventListener('click', function () {
        const finalizeButton = document.getElementById('finalize-button');
        finalizeButton.textContent = submitBtn.textContent;
        finalizeButton.addEventListener('click', () => {
          getDetermineWeatherCategory();
        });
      });
      function getDetermineWeatherCategory() {
        fetch('https://api.example.com/weather-category', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });
      }
      const updatePackingList = (temperature) => {
        // Determine the weather category based on the temperature
        const weatherCategory = determineWeatherCategory(temperature);
        const outputID = document.querySelector("#output");
        outputID.innerHTML = '';
        Object.entries(weatherItems).forEach(([category, items]) => {
          const categoryDiv = document.createElement("div");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = `${category}Checkbox`;
          checkbox.checked = true;
          const label = document.createElement("label");
          label.htmlFor = `${category}Checkbox`;
          label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
          const itemsDiv = document.createElement("div");
          itemsDiv.classList.add("items");

          const filteredItems = items.filter(item => {
            if (category === "hot" && temperature < 70) {
              return false; 
            }
            return weatherCategory.includes(item);
          });
        
          filteredItems.forEach(item => {
            const itemCheckbox = document.createElement("input");
            itemCheckbox.type = "checkbox";
            itemCheckbox.id = item;
            itemCheckbox.checked = true;
            itemsDiv.appendChild(itemCheckbox);
            const itemLabel = document.createElement("label");
            itemLabel.htmlFor = item;
            itemLabel.textContent = item;
            itemsDiv.appendChild(itemLabel);
          });

          categoryDiv.appendChild(itemsDiv);
          outputID.appendChild(categoryDiv);
        });
      };
      updatePackingList(tempData.list[0].main.temp);
    })
    .catch(error => {
      console.error('Error fetching data from OpenWeather API:', error);
    });
})

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })

  .then(async (data) => {
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    const response = await fetch(url);
    const tempData = await response.json();
    const temperatureElement = document.getElementById('temperature');
    console.log(tempData.list[0].main.temp);
    temperatureElement.textContent = Math.round(tempData.list[0].main.temp) + ' °F';
    const determineWeatherCategory = temp => {
      if (temp >= 70) {
        return Object.values(weatherItems.hot);
      } else if (temp >= 51 && temp <= 69) {
        return Object.values(weatherItems.moderate);
      } else {
        return Object.values(weatherItems.cold);
      }
    };
    const weatherItems = {
      hot: ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'],
      moderate: ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'],
      cold: ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Sweater'],
    };
    const updatePackingList = (temperature) => {
      const weatherCategory = determineWeatherCategory(temperature);
      const outputID = document.querySelector("#output");
      outputID.innerHTML = '';

      Object.entries(weatherItems).forEach(([category, items]) => {
        const categoryDiv = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `${category}Checkbox`;
        checkbox.checked = true; 
        const label = document.createElement("label");
        label.htmlFor = `${category}Checkbox`;
        label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        const itemsDiv = document.createElement("div");
        itemsDiv.classList.add("items");

        const filteredItems = items.filter(item => {
          if (category === "hot" && temperature < 70) {
            return false;
          }
          return weatherCategory.includes(item);
        });

        filteredItems.forEach(item => {
          const itemCheckbox = document.createElement("input");
          itemCheckbox.type = "checkbox";
          itemCheckbox.id = item;
          itemCheckbox.checked = true;
          itemsDiv.appendChild(itemCheckbox);
          const itemLabel = document.createElement("label");
          itemLabel.htmlFor = item;
          itemLabel.textContent = item;
          itemsDiv.appendChild(itemLabel);
        });
      
        categoryDiv.appendChild(itemsDiv);
        outputID.appendChild(categoryDiv);
      });
    };
    updatePackingList(tempData.list[0].main.temp);
  })
  .catch(error => {
    console.error('Error fetching data from OpenWeather API:', error);
  });

// * Uncomment the below code to POST data to the database

const postLists = async (listObj) => {
  const response = await fetch('/api/lists', {
    method: 'POST',
    body: JSON.stringify(listObj),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json()
  console.log(data)
}

const finalizeListBtn = document.getElementById('finalizeListBtn');
finalizeListBtn.addEventListener('click', async () => {
  try {
    const hotListObj = { category: 'hot', items: ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'] };
    const moderateListObj = { category: 'moderate', items: ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'] };
    const coldListObj = { category: 'cold', items: ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Sweater'] };

    await postLists(hotListObj);
    await postLists(moderateListObj);
    await postLists(coldListObj);
 
    const hotList = await fetch('/api/lists?category=hot');
    const moderateList = await fetch('/api/lists?category=moderate');
    const coldList = await fetch('/api/lists?category=cold');
    
    displayList(await hotList.json(), 'Hot Weather List');
    displayList(await moderateList.json(), 'Moderate Weather List');
    displayList(await coldList.json(), 'Cold Weather List');
  } catch (error) {
    console.error('Error finalizing list:', error);
  }
});
// const postLists = async (listObj) => {
//   const response = await fetch('/api/lists', {
//     method: 'POST',
//     body: JSON.stringify(listObj),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   const data = await response.json()
//   console.log(data)
// }
// const newList = {
//     name: 'pretty cool mountain adventure',
//     description: 'more than okay!!!'
// }
// postLists(newList)
/**
 * Uncomment the below code to GET data from the database
 */

const getLists = async () => {
  const response = await fetch('/api/list')
  const data = await response.json()
  console.log(data)
}
getLists()
/**
* Uncomment the below code to DELETE data from the database
*/
// const deleteLists = async(id) => {
//    const response = await fetch(`/api/lists/{id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     const data = await response.json()
//     console.log(data)
// }
// deleteList(1)
/**
* Uncomment the below code to Update data in the database
*/
// const newList = {
//     name: 'pretty cool mountain adventure',
//     description: 'WAY WAY more than okay!!!'
// }
// const updateList = async(id, newListObj) => {
//    const response = await fetch(`/api/lists/{id}`, {
//         method: 'PUT',
//         body: JSON.stringify(newListObj),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     const data = await response.json()
//     console.log(data)
// }
// updateList(1, newList)