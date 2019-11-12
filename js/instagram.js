function fetchInstagram() {
  var token = "13576540155.e9f2380.2f5367c8aefa4349969f88072969a37c",
    userid = 13576540155,
    num_photos = 6;

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

  $.ajax({
    url: "https://api.instagram.com/v1/users/self",
    dataType: "jsonp",
    type: "GET",
    data: {
      access_token: token
    },
    success: function(data) {
      $('.profile-image-main').attr({
        src: data.data.profile_picture
      });
      $('.profile-user-name').text(data.data.username);
      $('.profile-post-count').text(data.data.counts.media);
      $('.profile-follower-count').text(data.data.counts.followed_by);
      $('.profile-following-count').text(data.data.counts.follows);
      $('.profile-real-name').text(data.data.full_name);
      $('.profile-bio-text').text(data.data.bio);
    },
    error: function(data) {
      console.log('ig error data', data);
    }
  })
}
