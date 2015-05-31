if (Meteor.isServer) {

  Tinytest.add('trello:have_key', function (test) {
    test.equal(process.env.TRELLO_KEY.length, 32);
  });

  Tinytest.add('trello:have_user_A', function (test) {
    test.equal(process.env.TRELLO_USER_A, "alphawarehouseman");
  });

  Tinytest.add('trello:have_token_A', function (test) {
    test.equal(process.env.TRELLO_TOKEN_A.length, 64);
  });

  Tinytest.add('trello:have_user_B', function (test) {
    test.equal(process.env.TRELLO_USER_B, "bravowarehouseman");
  });

  Tinytest.add('trello:have_token_B', function (test) {
    test.equal(process.env.TRELLO_TOKEN_B.length, 64);
  });

  Tinytest.add('trello:have_user_C', function (test) {
    test.equal(process.env.TRELLO_USER_C, "charliewarehouseman");
  });

  Tinytest.add('trello:have_token_C', function (test) {
    test.equal(process.env.TRELLO_TOKEN_C.length, 64);
  });
 
  Tinytest.add('trello:user_A_named', function (test) {
    var data = proxyTrello.get("/1/members/me");
    test.equal(data.username, process.env.TRELLO_USER_A);
  });
 
  Tinytest.add('trello:find_board_Aa', function (test) {
    var nameSought = "Aa";
    var nameBoard = "not found";
    var boards = proxyTrello.get("/1/members/me/boards");
    for (board in boards) {
      if (boards[board].name === nameSought) nameBoard = boards[board].name;
    }

    test.equal(nameBoard, nameSought);

  });
}
