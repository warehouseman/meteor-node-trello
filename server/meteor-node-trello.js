// console.log( process.env );

if  (  TrelloCreds.find({}).count() < 1) {
  if (    ( process.env.TRELLO_KEY.length   == 32 ) 
       && ( process.env.TRELLO_TOKEN_A.length == 64 )) {
    TrelloCreds.insert ({
      key   :   process.env.TRELLO_KEY,
      token : process.env.TRELLO_TOKEN_A
    });
  } 
}

var trello_creds = TrelloCreds.findOne({});
console.log("  The cred key = " + trello_creds.key );
console.log("The cred token = " + trello_creds.token );
console.log(" | ~~~~                                                                   ~~~ | ");

var apiTrello = Npm.require('node-trello');

var prxyTrello = new apiTrello (
      trello_creds.key
    , trello_creds.token
  );

proxyTrello = Async.wrap(prxyTrello, ['get', 'put']);

//var data = proxyTrello.get("/1/members/me");

Meteor.methods({
  trelloProxy_get : function (restPath) {
    console.log(" ~~~~~~~ " + restPath);
    var rslt = proxyTrello.get(restPath);
//    console.log(rslt);
    console.log(rslt.username);
    console.log(" ~~~~~~~ ");
    return rslt;
  },
  trelloProxy_setKey : function () {
    return process.env.TRELLO_KEY;
  }
});


