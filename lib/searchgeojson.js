"use strict";

var querystring = require("querystring");
var SdkException = require("./sdkexception.js");
var WebHelper = require("./webhelper.js");
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
        var params = [
            "icaoLocation",
            "domesticLocation",
            "notamType",
            "notamNumber",
            "effectiveStartDate",
            "effectiveEndDate",
            "featureTypes",
            "locationLongitude",
            "locationLatitude",
            "locationRadius",
            "lastUpdatedStartDate",
            "lastUpdatedEndDate",
            "sortBy",
            "sortOrder",
            "pageSize",
            "pageNum"
        ]
        var path = "/notams/geoJson";
        for (x in this.queryParameters){
            if (!(x in params)){
                throw new SdkException(x + "is not a valid parameter");
            }
        }
        var query = querystring.stringify(this.queryParameters);
        path += "?";
        path += query;
        var webHelper = new WebHelper(this.hostName);
        return webHelper.get(path);
    }
}

module.exports = SearchGeoJSON;