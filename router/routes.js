module.exports = function( app ) {

  app.post('/calculate', function ( req, res, next ) {

    /* convert the array of numers to a string of numbers and remove the operator from its array */
    var numsLeft = req.body[0].join('')
    var numsRight = req.body[1].join('')
    var operator = req.body[2];

  /*
    determine the operator and perform the math, use parseInt when possible
    and eval only when necessary to to account for decimals
  */
  if ( operator == "+" ) {
    if ( numsLeft.indexOf( "." ) != 1 && numsRight.indexOf( "." ) != 1 ){
      var result = parseInt( numsLeft ) + parseInt( numsRight );
      res.json({ result : result })
    }
    else {
      var result = eval( numsLeft ) + eval( numsRight );
      res.json({ result : result })
      return;
    }
  }

  if ( operator == "-" ) {
    if ( numsLeft.indexOf( "." ) != 1 && numsRight.indexOf( "." ) != 1 ){
      var result = parseInt( numsLeft ) - parseInt( numsRight );
      res.json({ result : result })
    }
    else {
      var result = eval( numsLeft ) - eval( numsRight );
      res.json({ result : result })
      return;
    }
  }

  if ( operator == "*" ) {
    if ( numsLeft.indexOf( "." ) != 1 && numsRight.indexOf( "." ) != 1 ){
      var result = parseInt( numsLeft ) * parseInt( numsRight );
      res.json({ result : result })
    }
    else {
      var result = eval( numsLeft ) * eval( numsRight );
      res.json({ result : result })
      return;
    }
  }

  if ( numsLeft.indexOf( "." ) != 1 && numsRight.indexOf( "." ) != 1 ){
    var result = parseInt( numsLeft ) / parseInt( numsRight );
      res.json({ result : result })
    }
    else {
      var result = eval( numsLeft ) / eval( numsRight );
      res.json({ result : result })
      return;
    }
  })
}