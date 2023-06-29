const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
// const flash = require('connect-flash');
// const consmidelware = require('./config/flashmiddlleware');

app.use(express.static('./assets'))



app.set('view engine', 'ejs' );
app.set('views', path.join(__dirname,'views'));
require('./config/mongoose');
// app.use(flash())
// app.use(consmidelware.setFlash);
app.use(express.urlencoded());




// app.use('/', require('./routers/userindex'));
app.use('/', require('./routers/userindex'));



app.listen(port, function(err){
    if(err){
        console.log('Server is error on port', port);
    }
    console.log('Server is running on port', port);
})


