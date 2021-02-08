"use strict";

var querystring = require("querystring");
var SdkException = require("./sdkexception.js");
var GetApiRequest = require("./getApiRequest.js");

class SearchGeoJSON extends GetApiRequest{

    constructor(hostName){
        super(hostName);
        this.queryParameters = {}; 
    }

    withQueryParameters(queryParameters) {
        this.queryParameters = queryParameters;
        return this;
    }

    execute(){
        var path = "/notams/geoJson";

        console.log("Running GET /notams/geoJson")
        var query = querystring.stringify(this.queryParameters);
        path += "?";
        path += query;
        
        async function get() {
            let url = 'http://localhost:3000' + path
            console.log("Request URL:" + url)
            let obj = await (await fetch(url)).json();
        
            console.log(obj);
            return obj;
        }
        var data;
        (async () => {
            data = await get()
            console.log(data)
            console.log(JSON.stringify(data));
        })()
    }
}

module.exports = SearchGeoJSON;