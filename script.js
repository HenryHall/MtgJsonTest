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
    var searchQuery = $('setName').innerHTML;
    var cardLibrary;
    console.log(searchQuery);

    $.ajax({
     type: 'GET',
      url: 'JSon/AllSets.json',
      jsonpCallback: 'jsonCallback',
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        console.log('In Success');
        cardLibrary = data;
      },
      error: function(e) {
         console.log(e.message);
      }
    });

    for (var i in cardLibrary) {
      if (cardLibrary[i].name = searchQuery) {
        console.log(cardLibrary[i]);
      } else {
        console.log("fail in AllCards.");
      }
    }

  });

  $('#searchCards').click(function(){
    var searchQuery = $('cardName').innerHTML;
    var cardLibrary;
    console.log(searchQuery);

    $.ajax({
     type: 'GET',
      url: 'JSon/AllCards.json',
      jsonpCallback: 'jsonCallback',
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        console.log('In Success');
        cardLibrary = data;
      },
      error: function(e) {
         console.log(e.message);
      }
    });

    for (var i in cardLibrary) {
      if (cardLibrary[i].name = searchQuery) {
        console.log(cardLibrary[i]);
      } else {
        console.log("fail in AllCards.");
      }
    }

  });

});
