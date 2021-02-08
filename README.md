## Introduction

This SDK makes using the NOTAM Search API easy. It handels GET HTTP requests with matching given criteria parameters.

* Get GeoJSON format NOTAMs with given parameters.
* Get AIXM 5.1 format NOTAMs with given parameters.
* Get AIDAP format NOTAMs with given parameters.

## Install

The SDK is available as an npm with GitHub Packages. 
To install the SDK, in the same directory as your `package.json` file of your workspace, create or edit an `.npmrc` file to include following lines:
```
@yzhou77:registry=https://npm.pkg.github.com 
//npm.pkg.github.com/:_authToken=6f3e62f4e5920d8562ecb28bad37a9abd7936c86
```

Then install from the command line:
```
npm install @yzhou77/notam-api-sdk@2.0.0
```

## Examples

### Get GeoJSON format NOTAMs with given parameters
```
var sdk = require("@yzhou77/notam-api-sdk");
var client = new sdk ();
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
client.searchGeoJSON().withQueryParameters(params).execute()
```
* Note: In `params` above you can just keep the parameters you want to search and delete others. e.g. :
```var params = { "pageSize": "10", "pageNum": "3"};```


### Get AIXM 5.1 format NOTAMs with given parameters.
```
var sdk = require("@yzhou77/notam-api-sdk");
var client = new sdk ();
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
client.searchAixm().withQueryParameters(params).execute()
```
* Note: In `params` above you can just keep the parameters you want to search and delete others. e.g. :
```var params = { "pageSize": "10", "pageNum": "3"};```

### Get AIDAP format NOTAMs with given parameters.
```
var sdk = require("@yzhou77/notam-api-sdk");
var client = new sdk ();
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
client.searchAidap().withQueryParameters(params).execute()
```
* Note: In `params` above you can just keep the parameters you want to search and delete others. e.g. :
```var params = { "pageSize": "10", "pageNum": "3"};```
