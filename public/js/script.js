//PACKING-LIST ISSUE #2 GET CITY INFO-CRYSTAL
const apiKey = 'd5ca5c8780f73fd2cdcd83ac1d6cb2da';
const city = prompt('Enter the city name:'); // Prompt the user for the city name

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
    
// Logging latitude and longitude for each day to the console using arrow functions
  .then(data => {
      console.log(data.coord.lat)
      console.log(data.coord.lon)

})
.catch(error => {
  console.error('Error fetching data from OpenWeather API:', error);
});



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

// Possible continuation of code??
  const temperature = 75;  //Replace with the actual temperature
  const clothingList = determineWeatherCategory(temperature);
  console.log('Recommended Clothing:', clothingList);




//PACKING-LIST ISSUE #7 CHECKBOX FUNCTIONALITY-CRYSTAL
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
  
    // Log the selected items to the console as JSON
    console.log('Selected Items:', JSON.stringify(packingList));
  };
  
  // We need to update the checkbox ID's depending on HTML code. Placeholders added for checkboxes with HTML IDs: hotCheckbox, moderateCheckbox, coldCheckbox 
  $('#addButton').on('click', updatePackingList);
  




 //PACKING-LIST ISSUE #10 MAKE POST REQUEST-CRYSTAL
 const weatherItems = {
  hot: ['Shorts', 'Tank top', 'Sunglasses', 'Sandals', 'Sunblock'],
  moderate: ['Jeans', 'T-shirt', 'Hoodie', 'Tennis shoes', 'Ankle socks'],
  cold: ['Winter Coat', 'Hat', 'Gloves', 'Boots', 'Boot socks' 'Jeans', 'Sweater'],
};

const selectedItems = [];

const updateSelectedItems = () => {
  selectedItems.length = 0;

  // User checks hot weather items
  if ($('#hotCheckbox').prop('checked')) {
    selectedItems.push(...weatherItems.hot);
  }

  // User checks moderate weather items
  if ($('#moderateCheckbox').prop('checked')) {
    selectedItems.push(...weatherItems.moderate);
  }

  // User checks cold weather items
  if ($('#coldCheckbox').prop('checked')) {
    selectedItems.push(...weatherItems.cold);
  }
};

const sendSelectedItemsToServer = async () => {
  updateSelectedItems();

  if (selectedItems.length === 0) {
    console.log('No items selected to send.');
    return;
  }

  const response = await fetch('your_server_endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ selectedItems }),
  });

  if (!response.ok) {
    console.error('Error sending selected items to the server:', response.status);
    return;
  }

  console.log('Selected items successfully sent to the server.');
};  

// We need to update the checkbox ID's depending on HTML code. Placeholders added for checkboxes with HTML IDs: hotCheckbox, moderateCheckbox, coldCheckbox 
$('#addButton').on('click', sendSelectedItemsToServer);















