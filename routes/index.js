var express = require('express');
var router = express.Router();
let yelp = require('yelp-fusion')
let axios = require('axios')

let key = 'u7GKaYDIKwAZnn_1RJLpM_upKK5ht1_KFhzsoRuS1PWYdzk_Vnd8E_X8Gz3KJTiE3o20GDfjFnC-Sq1XZdj_5z2yjCsNy2fgeFHPUAtOTKRBkoyYeDSg9IN4GtpBXnYx'

const client = yelp.client(key);


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log()
  let data = {}

  client.search({
    term: req.query.name,
    location: 'Naperville City, Illinois',
  }).then(response => {
    data=response.jsonBody.businesses
    res.json(data)
  }).catch(e => {
    res.json({error: e})
  });
});

router.get('/googleNearByPlaces', (req, res, next)=>{
/**
 * Needs Backend API implementation
 * 
 * @param optio.ns - {latitude, longitude, radius, types func success, func error,}
 */

  let googlePlacesKey = 'AIzaSyA7AjtKSRL1g6B6GlJhk-ikAJmNjc-EMRY';
  // console.log(req.query)
  axios({
    method: 'get',
    url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    responseType: 'json',
    params:{
      location:`${req.query.latitude},${req.query.longitude}`,
      radius:`${req.query.radius}`,
      types:`${req.query.types}`,
      key:`${googlePlacesKey}`,
    },
  }).then((result)=>{
    console.log(result.data)
    res.send(result.data)
  }).catch((error)=>{
    res.send(error)
  })
})

module.exports = router;
