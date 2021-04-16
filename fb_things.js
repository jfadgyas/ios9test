window.fbAsyncInit = function() {
    FB.init({
      appId            : '4179603952049674',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v10.0'
    });
    console.log('FB-loaded')
    
    // FB.getLoginStatus(function(response) {
    //     console.log(response);
    // });

    FB.api(
        "/https://www.facebook.com/janos.fadgyas.10",
        function (response) {
            console.log(response)
          if (response && !response.error) {
          }
        }
    );

  };