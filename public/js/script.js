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
            // Handle the response data
            console.log(data);
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      }
      

      const updatePackingList = (temperature) => {
        // Determine the weather category based on the temperature
        const weatherCategory = determineWeatherCategory(temperature);
        // Clear the previous packing list
        const outputID = document.querySelector("#output");
        outputID.innerHTML = '';
        // Create a separate div for each weather category
        Object.entries(weatherItems).forEach(([category, items]) => {
          const categoryDiv = document.createElement("div");
          // Create a checkbox for the weather category
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = `${category}Checkbox`;
          checkbox.checked = true; // Set the checkbox to checked by default
          // Create a label for the weather category
          const label = document.createElement("label");
          label.htmlFor = `${category}Checkbox`;
          label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
          // Create a separate div for the packing list items
          const itemsDiv = document.createElement("div");
          itemsDiv.classList.add("items");
          // Filter the items based on the weather category and temperature
          const filteredItems = items.filter(item => {
            if (category === "hot" && temperature < 70) {
              return false; // Skip hot weather items if temperature is below 70
            }
            return weatherCategory.includes(item);
          });
          // Create a checkbox for each item
          filteredItems.forEach(item => {
            const itemCheckbox = document.createElement("input");
            itemCheckbox.type = "checkbox";
            itemCheckbox.id = item;
            itemCheckbox.checked = true; // Set the checkbox to checked by default
            itemsDiv.appendChild(itemCheckbox);
            // Create a label for each item in the array
            const itemLabel = document.createElement("label");
            itemLabel.htmlFor = item;
            itemLabel.textContent = item;
            itemsDiv.appendChild(itemLabel);
          });
          // Append the items div to the category div
          categoryDiv.appendChild(itemsDiv);
          // Append the category div to the output div
          outputID.appendChild(categoryDiv);
        });
      };
      // Call the updatePackingList function with the temperature
      updatePackingList(tempData.list[0].main.temp);
    })
    .catch(error => {
      console.error('Error fetching data from OpenWeather API:', error);
    });
})

<<<<<<< HEAD
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
      // Determine the weather category based on the temperature
      const weatherCategory = determineWeatherCategory(temperature);
      // Clear the previous packing list
      const outputID = document.querySelector("#output");
      outputID.innerHTML = '';
      // Create a separate div for each weather category
      Object.entries(weatherItems).forEach(([category, items]) => {
        const categoryDiv = document.createElement("div");
        // Create a checkbox for the weather category
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `${category}Checkbox`;
        checkbox.checked = true; // Set the checkbox to checked by default

        // Create a label for the weather category
        const label = document.createElement("label");
        label.htmlFor = `${category}Checkbox`;
        label.textContent = category.charAt(0).toUpperCase() + category.slice(1);

        // Create a separate div for the packing list items
        const itemsDiv = document.createElement("div");
        itemsDiv.classList.add("items");
        // Filter the items based on the weather category and temperature
        const filteredItems = items.filter(item => {
          if (category === "hot" && temperature < 70) {
            return false; // Skip hot weather items if temperature is below 70
          }
          return weatherCategory.includes(item);
        });

        // Create a checkbox for each item
        filteredItems.forEach(item => {
          const itemCheckbox = document.createElement("input");
          itemCheckbox.type = "checkbox";
          itemCheckbox.id = item;
          itemCheckbox.checked = true; // Set the checkbox to checked by default
          itemsDiv.appendChild(itemCheckbox);

          // Create a label for each item in the array
          const itemLabel = document.createElement("label");
          itemLabel.htmlFor = item;
          itemLabel.textContent = item;
          itemsDiv.appendChild(itemLabel);
        });
        // Append the items div to the category div
        categoryDiv.appendChild(itemsDiv);
        // Append the category div to the output div
        outputID.appendChild(categoryDiv);
      });
    };
    // Call the updatePackingList function with the temperature
    updatePackingList(tempData.list[0].main.temp);
  })
  .catch(error => {
    console.error('Error fetching data from OpenWeather API:', error);
  });

/**
 * Uncomment the below code to POST data to the database
 */
// const postLists = async(listObj) => {
//     const response = await fetch('/api/lists', {
//         method: 'POST',
//         body: JSON.stringify(listObj),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     const data = await response.json()
//     console.log(data)
=======

//Issue #10?
const finalizeListBtn = document.getElementById('finalizeListBtn'); // Replace 'finalizeListBtn' with the actual ID of your button

finalizeListBtn.addEventListener('click', async () => {
  try {
    // Creating objects from the arrays 
    const hotListObj = { category: 'hot', items: ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'] };
    const moderateListObj = { category: 'moderate', items: ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'] };
    const coldListObj = { category: 'cold', items: ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Sweater'] };

    // Make post requests for each list
    await postLists(hotListObj);
    await postLists(moderateListObj);
    await postLists(coldListObj);

    // Retrieve and display the lists under the "My Packing List" heading
    // We may need another function to fetch and display the lists?

    // Example: Fetch and display the lists
    const hotList = await fetch('/api/lists?category=hot');
    const moderateList = await fetch('/api/lists?category=moderate');
    const coldList = await fetch('/api/lists?category=cold');

    // Assuming you have a function displayList that displays the lists in the UI
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
>>>>>>> c4add1922a781f2aa1c0a240c531669813e5d26b
// }



// const newList = {
//     name: 'pretty cool mountain adventure',
//     description: 'more than okay!!!'
// }
// postLists(newList)
/**
 * Uncomment the below code to GET data from the database
 */
const getLists = async (myInput) => {

  const response = await fetch('/api/lists')
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
