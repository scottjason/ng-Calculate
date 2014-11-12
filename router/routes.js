module.exports = function( app ) {

/*
Use eval only when needed with decimals, convert integer  expression,
then back to string before passing back to client
*/
  app.post('/api/add', function ( req, res, next ) {
/* convert the array of numers to a string of numbers and remove the operator from its array */
    var numsLeft = req.body[0].join('');
    var numsRight = req.body[1].join('');
    var operator = req.body[2];

     if( numsLeft != Math.floor( numsLeft ) || numsRight != Math.floor( numsRight ) ){
      var result = ( eval( numsLeft ) + eval( numsRight ) );
      var fixedResult = result.toFixed( 4 );
          fixedResult.toString();
      res.json({ result : fixedResult })
      return;
     }
    else {
      /* convert to a string before passing as an argument */
      var result = ( parseInt( numsLeft ) + parseInt( numsRight ) ).toString();
      res.json({ result : result })
      return;
    }
  });

  app.post('/api/subtract', function ( req, res, next ) {
/* convert the array of numers to a string of numbers and remove the operator from its array */
    var numsLeft = req.body[0].join('');
    var numsRight = req.body[1].join('');
    var operator = req.body[2];

     if( numsLeft != Math.floor( numsLeft ) || numsRight != Math.floor( numsRight ) ){
      var result = ( eval( numsLeft ) - eval( numsRight ) );
      var fixedResult = result.toFixed( 4 );
          fixedResult.toString();
      res.json({ result : fixedResult })
      return;
     }
    else {
      /* convert to a string before passing as an argument */
      var result = ( parseInt( numsLeft ) - parseInt( numsRight ) ).toString();
      res.json({ result : result })
      return;
    }
  });

  app.post('/api/multiply', function ( req, res, next ) {
/* convert the array of numers to a string of numbers and remove the operator from its array */
    var numsLeft = req.body[0].join('');
    var numsRight = req.body[1].join('');
    var operator = req.body[2];

     if( numsLeft != Math.floor( numsLeft ) || numsRight != Math.floor( numsRight ) ){
      var result = ( eval( numsLeft ) * eval( numsRight ) );
      var fixedResult = result.toFixed( 4 );
          fixedResult.toString();
      res.json({ result : fixedResult })
      return;
     }
    else {
      /* convert to a string before passing as an argument */
      var result = ( parseInt( numsLeft ) * parseInt( numsRight ) ).toString();
      res.json({ result : result })
      return;
    }
  });

  app.post('/api/divide', function ( req, res, next ) {
/* convert the array of numers to a string of numbers and remove the operator from its array */
    var numsLeft = req.body[0].join('');
    var numsRight = req.body[1].join('');
    var operator = req.body[2];

     if( numsLeft != Math.floor( numsLeft ) || numsRight != Math.floor( numsRight ) ){
      var result = ( eval( numsLeft ) / eval( numsRight ) );
      var fixedResult = result.toFixed( 4 );
          fixedResult.toString();
      res.json({ result : fixedResult })
      return;
     }
    else {
      /* convert to a string before passing as an argument */
      var result = ( parseInt( numsLeft ) / parseInt( numsRight ) ).toString();
      res.json({ result : result })
      return;
    }
  });
};