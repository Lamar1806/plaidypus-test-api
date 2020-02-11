var express = require('express');
var router = express.Router();
let yelp = require('yelp-fusion')

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

module.exports = router;
