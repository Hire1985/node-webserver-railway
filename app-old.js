const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plane'})

    const persona = {
        id:1,
        nombre: 'Andres'
    }
    res.write(JSON.stringify(persona))
    res.end();
})
.listen(8080)
console.log('Escuchando el puerto')