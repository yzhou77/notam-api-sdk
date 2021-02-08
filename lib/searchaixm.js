"use strict";

var querystring = require("querystring");
var SdkException = require("./sdkexception.js");
var GetApiRequest = require("./getApiRequest.js");
const fetch = require("node-fetch");

class SearchAixm extends GetApiRequest{

    constructor(hostName){
        super(hostName);
        this.queryParameters = {}; 
    }

    withQueryParameters(queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }

    execute(){
        var path = "/notams/aixm";

        console.log("Running GET /notams/aixm")
        var query = querystring.stringify(this.queryParameters);
        path += "?";
        path += query;
        let url = 'http://localhost:3000' + path
        console.log("Request URL:" + url)

        let obj = fetch(url)
        .then(response => response.text())
        .then(bodyText => {
            console.log(bodyText)
        });
        return obj
    }
}