// Import Axios
const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(`Error fetching data: ${error}`);
    });

// Same code using async/await
async function fetchData(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    }catch(error){
        console.error(`Error fetching data: ${error}`);
    }
}
fetchData().then(() => {
    console.log('Data fetched successfully');
});