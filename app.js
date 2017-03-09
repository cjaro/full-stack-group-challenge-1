var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// APP.USES
app.use(express.static(path.join(__dirname, './public')));

// ADD APP.USES HERE


// APP.LISTEN
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
