const axios = require('axios');

export default function deletes(data) { // A função 'delete()' já existe
    const id = data.id

    axios.delete(`http://localhost:3001/users/${id}`)

    document.location.reload()
}