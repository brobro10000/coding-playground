const router = require('express').Router();
const axios = require('axios')

router.get('/', (req, res) => {
    axios.get(`https://fruityvice.com/api/fruit/all`)
      .then(response => {

        return res.send(response.data)
      })
      .catch(function (error) {
  
        console.log(error);
      })
  
  })
  
  module.exports = router