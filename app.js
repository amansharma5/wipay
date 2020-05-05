var Request = require('request');

var payment_url = {
    "Live" : "https://wipayfinancial.com/v1/gateway_live",
    "Sandbox" : "https://sandbox.wipayfinancial.com/v1/gateway"
}

module.exports = {
    mode : "Sandbox",

    isProdMode: (mode)=> {
        if (mode) {
            this.mode = 'Live';
        } else {
            this.mode = 'Sandbox';
        }
    },

    makePayment: async(data)=> {
        return await new Promise((resolve, reject)=>{
            try {
                var params = {
                    total : data.total,
				    phone : data.phone,
				    email : data.email,
				    name : data.name,
				    order_id : data.order_id,
				    // payment_id: data.payment_id,
				    // transaction_id:data.transaction_id,
				    return_url : data.return_url,
				    developer_id : data.developer_id || "1"
                }

                Request.post({url : payment_url[this.mode], params }, function(error, response, body) {
                if (!error) {
                    var result = response.headers.location;
                    resolve(body);
                    }
                else{
                    reject(error.message);
                }
            });
            } catch (error) {
                reject(error.message)
            }
        })
        
    }
}

