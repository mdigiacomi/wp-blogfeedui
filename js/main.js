/**
 * Created by Michael on 2014-12-05.
 */



function liveFeed(blogid) {

    $.get( "https://public-api.wordpress.com/rest/v1/sites/"+blogid+"/posts/", function(data) {
        $.each(data.posts, function(i, item) {
            $("#feed-content").append(item.title);
            $("#feed-content").append(item.content.replace("https","http"));
        });
    })
        .fail(function(error) {
            alert( "error: " + error );
        })
}

function scrolldown(){
    $("#shell").delay(500).animate({
            opacity: 1,
            bottom: 0
        }, 'slow'
    );
}