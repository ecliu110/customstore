Simple ShipStation Custom Store (node.js)

To run locally:
1. Install dependencies
npm install

2. Run on http://localhost:5000
node index.js

Returns orders when following request is received:
GET https://localhost:5000/shipstation?action=export&start_date=01%2f23%2f2012+17%3a28&end_date=01%2f23%2f2012+17%3a33&page=1

Accepts POST requests to /shipstation, returns 200

Current version is deployed at:
https://customstore.herokuapp.com/

