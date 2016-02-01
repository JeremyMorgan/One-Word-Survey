(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        appId: '198803199072',  // Change appId 409742669131720 with your Facebook Application ID
        status: true,
        xfbml: true,
        cookie: true
    });
};

$(document).ready(function() {
    $('.fb-share').click(function() {
        FB.ui({
            method: 'feed',
            name: 'One word to describe a presidential candidate?',
            link: 'https://www.jeremymorgan.com/research/#/',
            picture: 'https://www.jeremymorgan.com/research/assets/img/donald-trump-og.jpg',
            description: 'What is ONE word you would use to describe Donald Trump?? Hillary Clinton? Take this cool quiz!'
        });
    });
});
