export default class Ajax {
  static call(endpoint, method, params, onSuccess, onError) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function statusChecker() {
      if (this.readyState === 4 && this.status === 200) {
        onSuccess(this.statusText, JSON.parse(this.response));
      } else if (this.readyState === 4 && this.status !== 200) {
        onError(this.statusText, JSON.parse(this.response));
      }
    };
    xhttp.open(method, endpoint, true);
    xhttp.send(JSON.stringify(params));
  }

  static get(endpoint, params, onSuccess, onError) {
    this.call(endpoint, 'GET', params, onSuccess, onError);
  }

  static post(endpoint, params, onSuccess, onError) {
    this.call(endpoint, 'POST', params, onSuccess, onError);
  }
}
