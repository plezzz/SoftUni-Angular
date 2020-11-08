class HTTP {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string;
    fulfilled: boolean;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }

    httpRequest() {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled
        };
    }
}

const http = new HTTP('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(http.httpRequest())
