var express         = require('express')
  , http            = require('http')
  , morgan          = require('morgan')
  , cookieParser    = require('cookie-parser')
  , bodyParser      = require('body-parser')
  , methodOverride  = require('method-override')
  , app             = express();

/*
  - configure the express app -
*/
app.set( 'port', process.env.PORT || 3000 );
app.use('/bower_components',  express.static( __dirname + '/bower_components' ));
app.use('/', express.static( __dirname + '/app' ));
app.use( morgan('dev') );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded ({ extended : true }) );
app.use( methodOverride() );
app.use( function( err, req, res, next ) {
  res.status( err.status || 500 );
  res.render( 'error', { message: err.message, error: {} }
  );
});

/*
 pass the configured app into the router before declaring the catch-all route
*/

require('./router/routes.js')( app );

app.all('/*', function(req, res, next) {
    res.sendFile(__dirname + '/app/index.html');
});


/* init server  */
http.createServer( app ).listen( app.get( 'port' ), function(){
  console.log( 'Express server successfully listening on port : ' + app.get( 'port' ) );
});
