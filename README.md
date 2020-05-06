# wipay NodeJs Wrapper
Wipay payment Integration

The wipay-node library provides convenient access to the wipay API from applications written in server-side JavaScript.

### Documentation
See the [Wipay API docs](https://wipaycaribbean.com/credit-card-documentation).

The package needs to be configured with Production Mode.

###Installation
Install the package with:
```
npm install wipay-node
```
### Include 
```javascript
var wipay = require('wipay-node');
```

### Set Mode
```javascript
wipay.ProductionMode(true); // production = true, test = false
```

### APIs Available
* [Create a payment request](#create_payment)

### <a name="create_payment"></a>Create new payment request Using async/await
```javascript

var paymentData = {
    total : "", // "100.00"
	phone : "", // "0123456789"
	email : "", // "abc@xyz.com"
	name : "",  // "name"
	order_id : "", // "12345"
	return_url : "", //"http://localhost:8080/status"
	developer_id : "", // developer_id from account or "1" for sandbox
}

let url = await wipay.createPayment(paymentData);

```


---
### Submit Queries
You can mail an issue/query at amansharma5@hotmail.com