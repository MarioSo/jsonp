# jsonp
a dead simple jsonp implementation

# methos
```javascript
jsonp(url, callback)
```
# example
```javascript
import jsonp from '@marioso/jsonp'

jsonp('https://randomuser.me/api/?results=10', (data) => {
    console.log(data)
})
```
# install
#### npm
```bash
npm install @marioso/jsonp
```
#### yarn
```bash
yarn add @marioso/jsonp
```

# license
ISC
