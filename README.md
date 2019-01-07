# Handle multiple subdomains using VueRouter

> A simple Vue.js project which can handle multiple subdomains in a single app using VueRouter.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## For Windows Users

* This project uses ESLint - Airbnb, which doesn't support a file in CRLF. It only supports LF.
* To convert this project into LF, you need `Git bash` or some other Linux terminal for Windows.
* Open it and run the following commands:

```
  $ cd src
  $ find ./ -type f -exec dos2unix {} \;
```

## How to use
* To use this from subdomains locally you need to configure your hosts.
* For detailed explanation and code refer [this link](https://medium.com/@apalshah/vue-js-how-to-handle-multiple-subdomains-on-a-single-app-cba9b1f916c4)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
