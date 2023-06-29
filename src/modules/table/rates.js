import { clickButtonView, responseUrl } from './utils'

class Rates {
  constructor(options) {
    this.tbody = options.tbody;
    this.url = options.url;
    this.title = options.title;
    this.btn = options.btn;
    this.thead = options.thead;
  }

  response() { 
    responseUrl(this.url, this.title, this.tbody) 
  }

  click() { 
    clickButtonView(this.btn, this.response.bind(this), this.thead)
  }
}

export default Rates;
