function search(){
  var query = $('#query').val();
  $('#results').html('');
  $.ajax({
    url: 'http://search.twitter.com/search.json?q=' + query,
    dataType: 'jsonp'
  })
  .done(function(data){
    $.each(data.results, function(i, result){
      var tweets = ich.tweet(result)
      $("#results").append(tweets);
    })
  })
  .fail(function(data){
    var error = "Sorry, there is something wrong. Please try again in a bit. Thanks for your patience!"
    $('#error').append(error);
  })
}

$(function(){
  $('#query').focus();
  $('#btn').on('click', search);
})
