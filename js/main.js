var WordpressJsonFeedUrl = "https://public-api.wordpress.com/rest/v1/sites/"

/**
 * Created by Michael on 2014-12-05.
 */

function liveFeed(blogid, count, tag) {

    $.get(WordpressJsonFeedUrl+blogid+"/posts?number=" + count + "&tag=" + tag, function(data) {

        var source   = $("#content-template").html();
        var template = Handlebars.compile(source);

        console.log("Total Posts:" + data.posts.length);

        $.each(data.posts, function(i, item) {
            if(i<20)
            {
                var contents = item.content.replaceAll("https","http");
                
                if(item.content.search(/\?w=*/g) != -1)
                {
                    contents = contents.replace(/\?[^"]*/g, " ");
                }
                
                var context = {id: i, title: item.title, content: contents};
                var html = template(context);
                $("#feed-content").append(html);
            }
        });
    });
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};