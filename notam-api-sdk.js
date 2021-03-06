"use strict";

var SearchGeoJSON = require("./lib/searchgeojson.js");
var SearchAixm = require("./lib/searchaixm.js");
var SearchAidap = require("./lib/searchaidap.js");

const _hostName = new WeakMap();

class NotamApiSdk{
    
    get hostName() {
        return _hostName.get(this);
    }
    
    set hostName(value) {
        _hostName.set(this,value);
    }

    constructor(hostName) {
        if (!hostName) {
            hostName = "http://localhost:3000/";
        }

        this.hostName = hostName;
    }

    searchGeoJSON(){
        return new SearchGeoJSON(this.hostName)
    }

    searchAixm(){
        return new SearchAixm(this.hostName)
    }

    searchAidap(){
        return new SearchAidap(this.hostName)
    }
}

module.exports = NotamApiSdk;
