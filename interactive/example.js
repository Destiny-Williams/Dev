const axios = require('axios').default;

axios.get('https://marcusbassportfolioserver.herokuapp.com/customers', {
//     'email':'michaelfender@whodat.nation',
//     'first_name': 'Shaba',
//     'last_name': 'Ranks',
//     'ip': 'R.2.D.2',
//     'latitude': 0000000000001,
//     'longitude': 00000000002,
//     'created_at': '01/01/0000',
//     'updated_at': '01/01/0000',
 })

 .then(response =>{
     console.log('RESPONSE', response.data);
})