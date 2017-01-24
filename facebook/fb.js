window.fbAsyncInit = function() {
    FB.init({
        appId: '2193014027589946',
        xfbml: true,
        version: 'v2.8'
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = "We are connected"
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = "We are not Connected"
        } else {
            document.getElementById('status').innerHTML = "We are not Logged In"
        }
    },{scope: 'publish_actions'})
};
export { window.fbAsyncInit };
