const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');


function server() {
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');



    app.use('/',require('./routes'));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
}

module.exports = server;

