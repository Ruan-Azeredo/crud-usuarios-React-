const axios = require('axios');

export default function update(data, namevalue, emailvalue) {

    const id = data.id
    console.log({namevalue, emailvalue, id})

    axios.put(`http://localhost:3001/users/${id}`, {
        name: namevalue,
        email: emailvalue
    })
    
    document.location.reload()
}