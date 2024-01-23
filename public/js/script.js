//PACKING-LIST ISSUE #2 GET CITY INFO-CRYSTAL
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

document.getElementById("myCheckout").addEventListener("chnage", handleCheckboxChange);

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

const determineWeatherCategory = temp => {
  if (temp >= 80) {
    return hotWeatherItems;
  } else if (temp >= 51 && temp <= 79) {
    return moderateWeatherItems;
  } else {
    return coldWeatherItems;
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


// const postTrips = async(tripObj) => {
//     const response = await fetch('/api/trips', {
//         method: 'POST',
//         body: JSON.stringify(tripObj),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })

//     const data = await response.json()

//     console.log(data)
// }

// const newTrip = {
//     name: 'pretty cool mountain adventure',
//     description: 'more than okay!!!'
// }

// postTrips(newTrip)

/**
 * Uncomment the below code to GET data from the database
 */


// const getTrips = async() => {
//     const response = await fetch('/api/trips')
//     const data = await response.json()
//     console.log(data)
// }

// getTrips()


/**
 * Uncomment the below code to DELETE data from the database
 */


// const deleteTrips = async(id) => {
//    const response = await fetch(`/api/trips/{id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     const data = await response.json()
//     console.log(data)
// }

// deleteTrip(1)


/**
 * Uncomment the below code to Update data in the database
 */

// const newTrip = {
//     name: 'pretty cool mountain adventure',
//     description: 'WAY WAY more than okay!!!'
// }


// const updateTrip = async(id, newTripObj) => {
//    const response = await fetch(`/api/trips/{id}`, {
//         method: 'PUT',
//         body: JSON.stringify(newTripObj),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     const data = await response.json()
//     console.log(data)
// }

// updateTrip(1, newTrip)