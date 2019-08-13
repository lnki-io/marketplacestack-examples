import { JsonServiceClient } from 'servicestack-client';
import { signRequest } from './dtos'
import * as request from "request-promise-native";


//client to proxy
var client = new JsonServiceClient("https://marketplacestack-eu.azurewebsites.net");

//your API key
client.bearerToken = "<<YOURAPIKEY>>";

var signReq = new signRequest();
signReq.serviceURL = "https://mws-eu.amazonservices.com/Orders/2013-09-01";


// MWS Parameters 
var parameters = {

    Action: "ListOrders",
    SellerId: "<<YOURSELLERID>>",
    "MarketplaceId.Id.1": "A1F83G8C2ARO7P",
    CreatedAfter: "2019-08-06T19:00:00Z",

}


signReq.parameters = parameters;
//list orders can be a GET not necessary to POST
signReq.get = true;


try {
        
        // call the proxy
        const response = client.put(signReq).then(signedRequest => {
        console.log(signedRequest);

        var sReq = signedRequest as { [index: string]: string; };


        const baseUrl = signReq.serviceURL;


        // put the parms into the query string
        var options = {
            uri: baseUrl + "?" + Object.keys(signedRequest).map(key => key + '=' + encodeURIComponent(signedRequest[key])).join('&'),
            json: false,

        };


        // call MWS directly
        request.get(options).then(x =>

            //Orders XML
            console.log(x));


    });


} catch (e) {
    console.log("Failed to sign MWS: ", e);
}