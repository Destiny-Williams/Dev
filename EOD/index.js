const axios = require('axios').default;

axios.get('https://marcusbassportfolioserver.herokuapp.com/customers')
.then(response => {
    console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })         
    
    
