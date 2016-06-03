$(document).ready(function() {
  $.ajax({
   type: 'GET',
    url: 'AllSets.json',
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
      console.log('In Success');
       console.log(data);
    },
    error: function(e) {
       console.log(e.message);
    }
  });


});
