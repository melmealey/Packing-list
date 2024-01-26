//Variables
const apiKey = 'd5ca5c8780f73fd2cdcd83ac1d6cb2da';
const inputElement = document.getElementById('myInput');
const submitBtn = document.getElementById('submitBtn')
const cityInput = document.getElementById('city');
const cityButton = document.getElementById('city-button')

cityButton.addEventListener('click', function () {
  const city = cityInput.value
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
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
    })
    .catch(error => {
      console.error('Error fetching data from OpenWeather API:', error);
    });
})

function handleCheckboxChange() {
  if (document.getElementById("myCheckbox").checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("checkbox is unchecked")
  }
}

// document.getElementById("myCheckout").addEventListener("change", handleCheckboxChange);

submitBtn.addEventListener('click', function () {
  console.log(inputElement.value)

  var inputValue = document.getElementById('myInput').value;

  var outputElement = document.getElementById('output');
  outputElement.textContent = inputValue;

  document.getElementById('myInput').value = '';
})

//PACKING-LIST ISSUE #5 DETERMINE PACKING LIST-CRYSTAL
const hotWeatherItems = ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'];
const moderateWeatherItems = ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'];
const coldWeatherItems = ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Jeans', 'Sweater'];



submitBtn.addEventListener('click', function () {
  console.log(inputElement.value)
  var inputValue = document.getElementById('myInput').value;
  var outputElement = document.getElementById('output');
  outputElement.textContent = inputValue;
  document.getElementById('myInput').value = '';
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

//const temperature = 75;  //Replace with the actual temperature
const clothingList = determineWeatherCategory(temperature);
console.log('Recommended Clothing:', clothingList);

//PACKING-List Determined by current temp
const weatherItems = {
  hot: ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'],
  moderate: ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'],
  cold: ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks', 'Jeans', 'Sweater'],
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

let packingList = {};

const updatePackingList = () => {
  packingList = {};

  // User checks hot weather items
  if ($('#hotCheckbox').prop('checked')) {
    packingList.hot = weatherItems.hot;
  }

  // User checks moderate weather items
  if ($('#moderateCheckbox').prop('checked')) {
    packingList.moderate = weatherItems.moderate;
  }

  // User checks cold weather items
  if ($('#coldCheckbox').prop('checked')) {
    packingList.cold = weatherItems.cold;
  }

  console.log('Selected Items:', JSON.stringify(packingList));
};






  

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
// }

// const newList = {
//     name: 'pretty cool mountain adventure',
//     description: 'more than okay!!!'
// }

// postLists(newList)

/**
 * Uncomment the below code to GET data from the database
 */


// const getLists = async() => {
//     const response = await fetch('/api/lists')
//     const data = await response.json()
//     console.log(data)
// }

// getLists()


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