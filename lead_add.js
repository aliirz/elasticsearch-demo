var client = require('./connection.js');

client.index({
  index: 'lead',
  id: '1',
  type:'ingest_lead',
  body: {
    "Name": "John Smith",
    "LeadId": "13373773",
    "RVOwner": "Yes",
    "participant": 'seychelle',
    "program": 'facebook ad',
    "promotion": '$1000 fre camping',
  }
},function(err,resp,status) {
    console.log(resp);
});