function search(){
    var query = $('#query').val();
    $('#results').html('');
    $.ajax({
    url: "http://search.twitter.com/search.json?q=" + query,
    dataType: 'jsonp',
    success: function(data){
        $.each(data.results, function(i, result){
            var name = $("<p>").text(result.from_user);
            var tweet = $("<p>").text(result.text);
            $('#results').append(name);
            $('#results').append(tweet);
        });
        console.log(data);
    }
    });
}

$('#btn').on('click', search);
