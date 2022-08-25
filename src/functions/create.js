const axios = require('axios');

export default function create(namevalue, emailvalue){
    axios.post("http://localhost:3001/users/create", {  
        name: namevalue,
        email: emailvalue
    })
    document.location.reload()
}