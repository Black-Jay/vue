http://www.thenewstep.cn/testToken.php
username : henry
password : 123456
token: 

//fetch
fetch(url, {
    method: "post",
    header: {
        token: "1w313ddwqe"
    },
    body: JSON.stringify({
        username: "Balck-Jay",
        password: "123456",
    })
}).then(result => {
    console.log(result);
    return result.json()
}).then(data => {
    console.log(data)
})
//解决跨域 vue proxyTable


// axios
//main.js
import axios from 'axios'

axios.defaults.header.common['token'] = "dsdsadsad2d"
axios.defaults.header.post["Content-type"] = "application/json"

Vue.prototype.$axios = axios

//app.vue
this.$axios.post(url, {
    username: "dsad",
    password: "124"
}).then(data => {
    console.log(data);
})