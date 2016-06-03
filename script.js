$(document).ready(function() {
  console.log('Document Loaded')
  $.ajax({
   type: 'GET',
    url: 'AllSets.json',
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'json',
    success: function(data) {
      console.log('In Success');
      console.log(data);
    },
    error: function(e) {
       console.log(e.message);
    }
  });


});
