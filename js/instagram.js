function fetchInstagram() {
  var token = "13576540155.e9f2380.2f5367c8aefa4349969f88072969a37c",
    userid = 13576540155,
    num_photos = 8;

  $.ajax({
    url: "https://api.instagram.com/v1/users/" + userid + "/media/recent",
    dataType: "jsonp",
    type: "GET",
    data: {
      access_token: token,
      count: num_photos
    },
    success: function(data) {
      for (photo in data.data) {
        $(".instagram__photo--container").append(
          '<div class="instagram__photo"><a href="' +
            data.data[photo].link +
            '" target="_blank"><img class="instagram__fetched" src="' +
            data.data[photo].images.standard_resolution.url +
            '"></a></div>'
        );
      }
    },
    error: function(data) {
      console.log(data);
    }
  });
}
