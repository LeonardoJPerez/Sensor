'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({port: 8080});

server.route({
    method: 'POST',
    path: '/updatelocation',
    handler: function (request, reply) {
        console.log({'payload': request.payload});

        return reply({'payload': request.payload});
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});