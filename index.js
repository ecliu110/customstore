var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Homepage
app.get('/', function(req, res) {
  res.send("Hello World");
 });
 
var order1 = "<?xml version='1.0' encoding='utf-8'?><Orders pages='2'> <Order> <OrderID>1</OrderID> <OrderNumber><![CDATA[TESTCUSTOM9]]></OrderNumber> <OrderDate>06/21/2017 21:56 PM</OrderDate> <OrderStatus><![CDATA[unpaid]]></OrderStatus> <LastModified>12/8/2011 12:56 PM</LastModified> <ShippingMethod><![CDATA[USPSPriorityMail]]></ShippingMethod> <PaymentMethod><![CDATA[Credit Card]]></PaymentMethod> <OrderTotal>123.45</OrderTotal> <TaxAmount>0.00</TaxAmount> <ShippingAmount>4.50</ShippingAmount> <CustomerNotes><![CDATA[Please make sure it gets here by Dec. 22nd!]]></CustomerNotes> <InternalNotes><![CDATA[Ship by December 18th via Priority Mail.]]></InternalNotes> <Gift>false</Gift> <GiftMessage></GiftMessage> <CustomField1></CustomField1> <CustomField2></CustomField2> <CustomField3></CustomField3> <Customer> <CustomerCode></CustomerCode> <BillTo> <Name><![CDATA[TCUSTOMER1]]></Name> <Company><![CDATA[US Govt]]></Company> <Phone><![CDATA[512-555-5555]]></Phone> <Email><![CDATA[tcustomer2@mystore.com]]></Email> </BillTo> <ShipTo> <Name><![CDATA[The President 2]]></Name> <Company><![CDATA[US Govt]]></Company> <Address1><![CDATA[1600 Pennsylvania Ave]]></Address1> <Address2></Address2> <City><![CDATA[Washington]]></City> <State><![CDATA[DC]]></State> <PostalCode><![CDATA[20500]]></PostalCode> <Country><![CDATA[US]]></Country> <Phone><![CDATA[512-555-5555]]></Phone> </ShipTo> </Customer> <Items> <Item> <SKU><![CDATA[FD88821]]></SKU> <Name><![CDATA[My Product Name]]></Name> <ImageUrl><![CDATA[http://www.mystore.com/products/12345.jpg]]></ImageUrl> <Weight>8</Weight> <WeightUnits>Ounces</WeightUnits> <Quantity>2</Quantity> <UnitPrice>13.99</UnitPrice> <Location><![CDATA[A1-B2]]></Location> <Options> <Option> <Name><![CDATA[Size]]></Name> <Value><![CDATA[Large]]></Value> <Weight>10</Weight> </Option> <Option> <Name><![CDATA[Color]]></Name> <Value><![CDATA[Green]]></Value> <Weight>5</Weight> </Option> </Options> </Item> <Item> <SKU></SKU> <Name><![CDATA[$10 OFF]]></Name> <Quantity>1</Quantity> <UnitPrice>-10.00</UnitPrice> <Adjustment>true</Adjustment> </Item> </Items> </Order> </Orders>"
var order2 = "<?xml version='1.0' encoding='utf-8'?><Orders pages='2'> <Order> <OrderID>1</OrderID> <OrderNumber><![CDATA[TESTCUSTOM10]]></OrderNumber> <OrderDate>06/21/2017 21:56 PM</OrderDate> <OrderStatus><![CDATA[unpaid]]></OrderStatus> <LastModified>12/8/2011 12:56 PM</LastModified> <ShippingMethod><![CDATA[USPSPriorityMail]]></ShippingMethod> <PaymentMethod><![CDATA[Credit Card]]></PaymentMethod> <OrderTotal>123.45</OrderTotal> <TaxAmount>0.00</TaxAmount> <ShippingAmount>4.50</ShippingAmount> <CustomerNotes><![CDATA[Please make sure it gets here by Dec. 22nd!]]></CustomerNotes> <InternalNotes><![CDATA[Ship by December 18th via Priority Mail.]]></InternalNotes> <Gift>false</Gift> <GiftMessage></GiftMessage> <CustomField1></CustomField1> <CustomField2></CustomField2> <CustomField3></CustomField3> <Customer> <CustomerCode></CustomerCode> <BillTo> <Name><![CDATA[TCUSTOMER1]]></Name> <Company><![CDATA[US Govt]]></Company> <Phone><![CDATA[512-555-5555]]></Phone> <Email><![CDATA[tcustomer2@mystore.com]]></Email> </BillTo> <ShipTo> <Name><![CDATA[The President 2]]></Name> <Company><![CDATA[US Govt]]></Company> <Address1><![CDATA[1600 Pennsylvania Ave]]></Address1> <Address2></Address2> <City><![CDATA[Washington]]></City> <State><![CDATA[DC]]></State> <PostalCode><![CDATA[20500]]></PostalCode> <Country><![CDATA[US]]></Country> <Phone><![CDATA[512-555-5555]]></Phone> </ShipTo> </Customer> <Items> <Item> <SKU><![CDATA[FD88821]]></SKU> <Name><![CDATA[My Product Name]]></Name> <ImageUrl><![CDATA[http://www.mystore.com/products/12345.jpg]]></ImageUrl> <Weight>8</Weight> <WeightUnits>Ounces</WeightUnits> <Quantity>2</Quantity> <UnitPrice>13.99</UnitPrice> <Location><![CDATA[A1-B2]]></Location> <Options> <Option> <Name><![CDATA[Size]]></Name> <Value><![CDATA[Large]]></Value> <Weight>10</Weight> </Option> <Option> <Name><![CDATA[Color]]></Name> <Value><![CDATA[Green]]></Value> <Weight>5</Weight> </Option> </Options> </Item> <Item> <SKU></SKU> <Name><![CDATA[$10 OFF]]></Name> <Quantity>1</Quantity> <UnitPrice>-10.00</UnitPrice> <Adjustment>true</Adjustment> </Item> </Items> </Order> </Orders>"
var orders = [order1, order2]//var xmlRepsonse = "<Orders> <Order> <OrderID><![CDATA[123456]]></OrderID> <OrderNumber><![CDATA[TESTUNPAID]]></OrderNumber> <OrderDate>06/13/2017 21:56 PM</OrderDate> <OrderStatus><![CDATA[unpaid]]></OrderStatus> <LastModified>12/8/2011 12:56 PM</LastModified> <ShippingMethod><![CDATA[USPSPriorityMail]]></ShippingMethod> <PaymentMethod><![CDATA[Credit Card]]></PaymentMethod> <OrderTotal>123.45</OrderTotal> <TaxAmount>0.00</TaxAmount> <ShippingAmount>4.50</ShippingAmount> <CustomerNotes><![CDATA[Please make sure it gets here by Dec. 22nd!]]></CustomerNotes> <InternalNotes><![CDATA[Ship by December 18th via Priority Mail.]]></InternalNotes> <Gift>false</Gift> <GiftMessage></GiftMessage> <CustomField1></CustomField1> <CustomField2></CustomField2> <CustomField3></CustomField3> <Customer> <CustomerCode><![CDATA[customer@mystore.com]]></CustomerCode> <BillTo> <Name><![CDATA[The President]]></Name> <Company><![CDATA[US Govt]]></Company> <Phone><![CDATA[512-555-5555]]></Phone> <Email><![CDATA[customer@mystore.com]]></Email> </BillTo> <ShipTo> <Name><![CDATA[The President]]></Name> <Company><![CDATA[US Govt]]></Company> <Address1><![CDATA[1600 Pennsylvania Ave]]></Address1> <Address2></Address2> <City><![CDATA[Washington]]></City> <State><![CDATA[DC]]></State> <PostalCode><![CDATA[20500]]></PostalCode> <Country><![CDATA[US]]></Country> <Phone><![CDATA[512-555-5555]]></Phone> </ShipTo> </Customer> <Items> <Item> <SKU><![CDATA[FD88821]]></SKU> <Name><![CDATA[My Product Name]]></Name> <ImageUrl><![CDATA[http://www.mystore.com/products/12345.jpg]]></ImageUrl> <Weight>8</Weight> <WeightUnits>Ounces</WeightUnits> <Quantity>2</Quantity> <UnitPrice>13.99</UnitPrice> <Location><![CDATA[A1-B2]]></Location> <Options> <Option> <Name><![CDATA[Size]]></Name> <Value><![CDATA[Large]]></Value> <Weight>10</Weight> </Option> <Option> <Name><![CDATA[Color]]></Name> <Value><![CDATA[Green]]></Value> <Weight>5</Weight> </Option> </Options> </Item> <Item> <SKU></SKU> <Name><![CDATA[$10 OFF]]></Name> <Quantity>1</Quantity> <UnitPrice>-10.00</UnitPrice> <Adjustment>true</Adjustment> </Item> </Items> </Order> </Orders>";

// Received custom store GET request
// https://www.yourstore.com/shipstationxml.php?action=export&start_date=01%2f23%2f2012+17%3a28&end_date=01%2f23%2f2012+17%3a33&page=1
app.get('/shipstation', function(req, res) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log('----- Received GET Request from ShipStation -----');
	console.log(fullUrl);
	console.log('-------------------------------------------------');	

	// Determine page number of request
	var splitUrl = req.originalUrl.split("=");
	page = splitUrl[splitUrl.length-1];
	console.log("sending page: " + page);

	res.statusCode = 202;
	res.setHeader('Content-Type', 'application/xml');
	res.send(orders[page-1]);
});


// Received custom store POST request
// https://www.yourstore.com/shipstationxml.php?action=shipnotify&order_number=ABC123&carrier=USP S&service=USPS+Priority+Mail&tracking_number=9511343223432432432
app.post('/shipstation', function(req, res) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log('----- Received POST Request from ShipStation -----');
	console.log(fullUrl);
	console.log('-------------------------------------------------');
	console.log(req.body);

	// Return 200 HTTP status code
	res.statusCode = 200;
	res.send('Received POST request');
});

// TODO: Create new order
app.post('/createorder', function(req,res){
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log('----- Received POST Request from ShipStation -----');
	console.log(fullUrl);
	console.log('-------------------------------------------------');
	

  res.send('Created new order');


});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  
});

