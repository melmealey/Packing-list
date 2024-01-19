const apiKey = 'd5ca5c8780f73fd2cdcd83ac1d6cb2da';
const city = prompt('Enter the city name:'); // Prompt the user for the city name
const inputElement = document.getElementById('myInput'); // Naming variable to log input box to console TJ
const submitBtn = document.getElementById('submitBtn') 

submitBtn.addEventListener('click', function() {
  console.log(inputElement.value)

  var inputValue = document.getElementById('myInput').value;  //grabbing the input value

  var outputElement = document.getElementById('output');  //add input value to page
  outputElement.textContent = inputValue;

  document.getElementById('myInput').value = '';  //clear the input field
})

// Constructing the API URL for the current weather
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Making the API request using fetch, promises, and arrow functions
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
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