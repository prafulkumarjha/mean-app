const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports = {
    uri: 'mongodb://localhost:27017/' + this.db, // Databse URI and database name
    secret: crypto, // Cryto-created secret
    db: 'mean-angular-2' // Database name

}