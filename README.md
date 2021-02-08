## Introduction

This SDK makes using the NOTAM Search API easy. It handels GET HTTP requests with matching given criteria parameters.

* Get GeoJSON format NOTAMs with given parameters.
* Get AIXM 5.1 format NOTAMs with given parameters.
* Get AIDAP format NOTAMs with given parameters.

## Install

The SDK is available as an npm package. Install in your workspace with:
```
npm install --save notam-api-sdk
```

## Examples

### Get GeoJSON format NOTAMs with given parameters
```
var sdk = require("notam-api-sdk");
var params = { 
    "icaoLocation": "your_icaoLocation",
    "domesticLocation": "your_domesticLocation",
    "notamType": "your_notamType",
    "notamNumber": "your_notamNumber",
    "effectiveStartDate": "your_effectiveStartDate",
    "effectiveEndDate": "your_effectiveEndDate",
    "featureTypes": "your_featureTypes",
    "locationLongitude": "your_locationLongitude",
    "locationLatitude": "your_locationLatitude",
    "locationRadius": "your_locationRadius",
    "lastUpdatedStartDate": "your_lastUpdatedStartDate",
    "lastUpdatedEndDate": "your_lastUpdatedEndDate",
    "sortBy": "your_sortBy",
    "sortOrder": "your_sortOrder",
    "pageSize": "your_pageSize",
    "pageNum": "your_pageNum"
};

// In `params` above you can just keep the parameters you want to search and delete others. e.g. :
// var params = { "pageSize": "10", "pageNum": "3"};


var client = new sdk ();
client.searchGeoJSON().withQueryParameters(params).execute().then(response => {
        console.log(JSON.stringify(response));
    }, err => {
        throw err;
    });
```
### Get AIXM 5.1 format NOTAMs with given parameters.
```
var sdk = require("notam-api-sdk");
var params = { 
    "icaoLocation": "your_icaoLocation",
    "domesticLocation": "your_domesticLocation",
    "notamType": "your_notamType",
    "notamNumber": "your_notamNumber",
    "effectiveStartDate": "your_effectiveStartDate",
    "effectiveEndDate": "your_effectiveEndDate",
    "featureTypes": "your_featureTypes",
    "locationLongitude": "your_locationLongitude",
    "locationLatitude": "your_locationLatitude",
    "locationRadius": "your_locationRadius",
    "lastUpdatedStartDate": "your_lastUpdatedStartDate",
    "lastUpdatedEndDate": "your_lastUpdatedEndDate",
    "sortBy": "your_sortBy",
    "sortOrder": "your_sortOrder",
    "pageSize": "your_pageSize",
    "pageNum": "your_pageNum"
};

// In `params` above you can just keep the parameters you want to search and delete others. e.g. :
// var params = { "pageSize": "10", "pageNum": "3"};


var client = new sdk ();
client.searchAixm().withQueryParameters(params).execute().then(response => {
        console.log(JSON.stringify(response));
    }, err => {
        throw err;
    });
```

### Get AIDAP format NOTAMs with given parameters.
```
var sdk = require("notam-api-sdk");
var params = { 
    "icaoLocation": "your_icaoLocation",
    "domesticLocation": "your_domesticLocation",
    "notamType": "your_notamType",
    "notamNumber": "your_notamNumber",
    "effectiveStartDate": "your_effectiveStartDate",
    "effectiveEndDate": "your_effectiveEndDate",
    "featureTypes": "your_featureTypes",
    "locationLongitude": "your_locationLongitude",
    "locationLatitude": "your_locationLatitude",
    "locationRadius": "your_locationRadius",
    "lastUpdatedStartDate": "your_lastUpdatedStartDate",
    "lastUpdatedEndDate": "your_lastUpdatedEndDate",
    "sortBy": "your_sortBy",
    "sortOrder": "your_sortOrder",
    "pageSize": "your_pageSize",
    "pageNum": "your_pageNum"
};

// In `params` above you can just keep the parameters you want to search and delete others. e.g. :
// var params = { "pageSize": "10", "pageNum": "3"};


var client = new sdk ();
client.searchAidap().withQueryParameters(params).execute().then(response => {
        console.log(JSON.stringify(response));
    }, err => {
        throw err;
    });
```
