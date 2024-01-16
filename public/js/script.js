////PACKING-LIST ISSUE #2 GET CITY INFO-CRYSTAL
//const apiKey = 'd5ca5c8780f73fd2cdcd83ac1d6cb2da';
//const city = prompt('Enter the city name:'); // Prompt the user for the city name

//// Constructing the API URL for the current weather
//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//// Making the API request using fetch, promises, and arrow functions
//fetch(apiUrl)
 // .then(response => {
 //   if (!response.ok) {
 //     throw new Error(`HTTP error! Status: ${response.status}`);
 //  }
 //   return response.json();
// })
    
//// Logging latitude and longitude for each day to the console using arrow functions
 //   .then(data => {
 //       console.log(data.coord.lat)
 //       console.log(data.coord.lon)

 // })
 //.catch(error => {
 //   console.error('Error fetching data from OpenWeather API:', error);
 // });






//PACKING-LIST ISSUE #5 DETERMINE PACKING LIST-CRYSTAL
const hotWeatherItems = ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'];
const moderateWeatherItems = ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'];
const coldWeatherItems = ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks' 'Jeans', 'Sweater'];

const determineWeatherCategory = temp => {
  if (temp >= 80) {
    return hotWeatherItems;
  } else if (temp >= 51 && temp <= 79) {
    return moderateWeatherItems;
  } else {
    return coldWeatherItems;
  }
};

// Possible continuation of code??
const temperature = 75; // Replace with the actual temperature
const clothingList = determineWeatherCategory(temperature);
console.log('Recommended Clothing:', clothingList);







//PACKING-LIST ISSUE #7 CHECKBOX FUNCTIONALITY-CRYSTAL

  






  //PACKING-LIST ISSUE #10 MAKE POST REQUEST-CRYSTAL
































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