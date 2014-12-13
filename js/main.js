/**
 * Created by Michael on 2014-12-05.
 */

function liveFeed(blogid) {

    $.get("https://public-api.wordpress.com/rest/v1/sites/"+blogid+"/posts/", function(data) {

        var source   = $("#content-template").html();
        var template = Handlebars.compile(source);

        console.log("Total Posts:" + data.posts.length);

        $.each(data.posts, function(i, item) {
            var context = {id: i, title: item.title, content: item.content.replace("https","http")}
            var html = template(context);
            $("#feed-content").append(html);
        });

        for(var i=1; i<data.posts.length; i++)
        {
            AnimateObject(i);
        }

        $('#shell').animate({scrollTop: 0},2000).delay(1200);
    }).fail(function(error) {
        alert( "error: " + error );
    });
}

function AnimateObject(id){
    var aTag = $("#" + id);
    $('#shell').animate({scrollTop: aTag.offset().top},2000).delay(1200);
}