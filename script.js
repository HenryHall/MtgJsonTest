// var http = require('http');
//
// http.createServer(function(req, res) {
//   console.log("Hello World from server!");
//   res.writeHead(200);
//   res.write("Hello from server response...");
//   res.end();
// }).listen(3030);


$(document).ready(function() {
  console.log('Document Loaded')


  $('#searchSets').click(function(){
    var searchQuery = $('#setName').val();
    var cardLibrary;
    console.log(searchQuery);

    $.ajax({
     type: 'GET',
      url: 'https://raw.githubusercontent.com/HenryHall/MtgJsonTest/gh-pages/JSon/AllSets.json',
      dataType: 'json',
      success: function(data) {
        console.log('In Success');
        cardLibrary = data;
          for (var i  in cardLibrary) {
          if (i == searchQuery) {
              console.log("found at: " + i);
              console.log(cardLibrary[i]);
          }
        }
      },
      error: function(e) {
         console.log(e.message);
      }
    });

  });

  $('#searchCards').click(function(){
    var searchQuery = $('#cardName').val();
    var cardLibrary;
    console.log(searchQuery);

    $.ajax({
     type: 'GET',
      url: 'https://raw.githubusercontent.com/HenryHall/MtgJsonTest/gh-pages/JSon/AllCards.json',
      dataType: 'json',
      success: function(data) {
        console.log('In Success');
        cardLibrary = data;
        for (var i  in cardLibrary) {
          if (i == searchQuery) {
              console.log("found at: " + i);
              console.log(cardLibrary[i]);
              // createCard();
          }
        }


      },
      error: function(e) {
         console.log(e.message);
      }
    });



  });

});
