let apiKey = 'd5ca5c8780f73fd2cdcd83ac1d6cb2da';
let city = prompt('Enter a city name to view the current temperature:'); 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
  .then(response => {
  
    return response.json();
  })
<<<<<<< HEAD
  .then(async(data) => {
     //function to 
console.log(data);
    const lat = data.coord.lat
    const lon = data.coord.lon
=======
    
// Logging latitude and longitude for each day to the console using arrow functions
    .then(data => {
        console.log(data.coord.lat)
        console.log(data.coord.lon)
>>>>>>> c3459de4ef9d765c3db29c43f76c6f334071fd3b

     const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
     const response = await fetch(url);
     const weatherData = await response.json();
     console.log (Math.round(weatherData.list[0].main.temp));
    
  })
  .catch(error => {
    console.error('Error fetching data from OpenWeather API:', error);
  });





























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