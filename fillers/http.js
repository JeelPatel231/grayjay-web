function makeSyncRequests(method, url, body, headers) {
  if (!headers) headers = {};
  const req = new XMLHttpRequest();
  req.open(method, url, false);
  for (const [key, value] of Object.entries(headers)){
    req.setRequestHeader(key, value);
  }
  req.send(body);

  if (req.status >= 200 && req.status < 300)
    return {
      url,
      code: req.status,
      body: req.response,
      headers: req.getAllResponseHeaders(),
      isOk: true
    }
  // return req.response;
  else
    throw "Request [" + req.status + "]\n" + req.response;
}

class BatchBuilder {
  constructor(http) {
    this.http = http;
    this.batchedRequests = [];
  }

  GET(url, headers) {
    this.batchedRequests.push(() => this.http.GET(url, headers))
    return this
  }

  POST(url, contentType, body, headers) {
    this.batchedRequests.push(() => this.http.POST(url, contentType, body, headers))
    return this
  }

  request(method, url, headers) {
    this.batchedRequests.push(() => this.http.request(method, url, headers))
    return this
  }

  requestWithBody(method, url, body, headers) {
    this.batchedRequests.push(() => this.http.requestWithBody(method, url, body, headers))
    return this
    // return makeSyncRequests(method, url, body, headers)
  }

  execute(){
    return this.batchedRequests.map(x => x())
  }

}

let http = {
  GET: function (url, headers) {
    return makeSyncRequests("GET", url, null, headers)
  },

  POST: function (url, body, headers) {
    if (!headers) headers = {}
    return makeSyncRequests("POST", url, body, headers)
  },

  request: function (method, url, headers) {
    return makeSyncRequests(method, url, null, headers)
  },

  requestWithBody: function (method, url, body, headers) {
    return makeSyncRequests(method, url, body, headers)
  },

  batch() {
    return new BatchBuilder(this)
  }

}