const mongoose      = require('mongoose');
class db {
  constructor(user, pass, host, port, db) {
    this.user = user;
    this.pass = pass;
    this.host = host;
    this.port = port;
    this.db   = db;
  }

  new(type) {
    switch (type) {
      case 'mongodb':
        mongoose.connect(`mongodb://${this.user}:${this.pass}@${this.host}:${this.port}/${this.db}`);
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', () => {
          console.log(`connected as id`);
        });

        break;
      case 'mysql':
        connection
        break;

    }
  }
}

module.exports = db;
