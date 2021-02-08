var https = require("https");
var os = require("os");
var pjson = require("../package.json");

module.exports = WebHelper;

function WebHelper(hostName) {

    this.get = async function (path,headers) {
        var headersToSend = Object.assign({
            "Accept": "application/json"},headers)

        var options = {
            hostname: hostName,
            method: "GET",
            path: path,
            port: 443,
            headers: headersToSend
        };
        return request(options);
    };

    function request(options) {

        addUserAgentString(options);

        return new Promise((resolve, reject) => {
            var request = https.request(options, function (response) {

                response.setEncoding("utf8");
                var str = "";

                response.on("data", function (chunk) {
                    str += chunk;
                });
                response.on("end", function () {
                    if (response.statusCode >= 400) {
                        var err = new Error(response.statusMessage);
                        err.statusCode = response.statusCode;
                        reject(err);

                    } else {
                        resolve((str.length > 0) ? JSON.parse(str) : null);
                    }
                });
                response.on("error", function (err) {
                    reject(err);
                });
            });

            request.end();
        })
    }

    function addUserAgentString(options) {
        options.headers["User-Agent"] = "NotamApiSdk/" + pjson.version + " (" + os.type() + " " + os.release() + "; Node.js " + process.version + ")";
    }

}