

const jsonp = (url, callbackFn) => {
  const script = document.createElement('script')

  // create a random callback name to avoid collisio
  const callbackName = `jsonp_cb_${Math.round(100000 * Math.random())}`

  window[callbackName] = (data) => {
    // clean up the DOM
    delete window[callbackName]
    document.body.removeChild(script)

    // perform the action
    callbackFn(data)
  }

  // add the script to the DOM
  script.src = `${url}${(url.indexOf('?') >= 0 ? '&' : '?')}callback=${callbackName}`
  document.body.appendChild(script)
}

export default jsonp
