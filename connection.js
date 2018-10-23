var elasticsearch = require('elasticsearch')

var client = new elasticsearch.Client({
  hosts:[
    'https://elastic:OO1d6d8ppP5Ac769g7n5eQtM@baf07768a9cf40bd8660ed2961ad48b0.us-east-1.aws.found.io:9243'
  ]
});

module.exports = client;
