require('module-alias/register')
require('./libs/core');
const Server = require('@core/Server');
//const Socket = require('@core/Socket')
//const Queue = require("@app/Queue")
Server.start().then(({server}) => {
  //console.log(server)
  //require('@app/Cronjobs')
  //server stated
  /* Queue.start()
  Socket.connect(http)
  Socket.on('setUserId', socket => userId => {
    Socket.list[userId] = socket
  }) */
});
