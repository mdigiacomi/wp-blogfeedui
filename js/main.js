/**
 * Created by Michael on 2014-12-05.
 */

liveFeed();

function liveFeed() {

    $.get( "https://public-api.wordpress.com/rest/v1/sites/41876073/posts/", function(data) {
        $.each(data.posts, function(i, item) {
            $("#feed-content").append(item.title);
            $("#feed-content").append(item.content);
        });
    })
        .fail(function(error) {
            alert( "error: " + error );
        })
}

function scrolldown(){
    $("#content").scrollTop($("#content")[0].scrollHeight);
}