var HTTP = /** @class */ (function () {
    function HTTP(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    HTTP.prototype.httpRequest = function () {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled
        };
    };
    return HTTP;
}());
var http = new HTTP('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(http.httpRequest());
