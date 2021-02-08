"use strict";

const _hostName = new WeakMap();

class GetApiRequest {
    constructor(hostName) {
        this.hostName = hostName;
    }

    get hostName() {
        return _hostName.get(this);
    }

    set hostName(value) {
        _hostName.set(this,value);
    }
}

module.exports = GetApiRequest;