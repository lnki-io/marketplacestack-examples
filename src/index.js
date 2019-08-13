import { JsonServiceClient } from 'servicestack-client';
import { signRequest } from './dtos'
import * as request from "request-promise-native";


var client = new JsonServiceClient("https://marketplacestack-eu.azurewebsites.net");

client.bearerToken = "s66MdNvEj9KOfBgoQD8IBIHG3p9F5BUU";

var request = new signRequest();
request.serviceURL = "https://mws-eu.amazonservices.com"

var parameters = {
   
    Action: "ListOrders",
    SellerId: "A3FWGQLMG1AAXGr",
    "MarketplaceId.Id.1" : "A1F83G8C2ARO7P",
    CreatedAfter : "2019-08-06T19:00:00Z",
    
    }

request.parameters = parameters;

try {
    const response = client.put(request).then(signedRequest=>
        {
            //console.log(signedRequest)

            const baseUrl = 'https://mws-eu.amazonservices.com/Orders/2013-09-01';

var options = {
    uri: baseUrl
};

    request.post(options,{form:signedRequest}).then(x=>
    console.log(x));


        });
    
    
} catch(e) {
    console.log("Failed to sign MWS: ",e);
}