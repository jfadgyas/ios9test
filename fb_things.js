window.fbAsyncInit = function() {
    FB.init({
      appId            : '4179603952049674',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v10.0'
    });
    console.log('FB-loaded')

    const page_id = 320746671665588 //ugly kitchen//sajat4073071839410612
    const access_token = 'EAA7ZAUZBDdHgoBAOgTyHFAW5Up4b6THb5Jd6eyWSumprTAv1uI3qbSkHhZCEObZBU4BQ21JiRppTfml7Xkjut0LnQYBaDNLucXVZCj3ZAG4EumqDoCDCnB5WSyeZBsK24Doz6OxpyKzmpI0aNmIEtI1y4BW3gGYGasoTILdDcljYfoaXZBO8112DzdKjtwVRPsZBlkeCRFjbGtgZDZD'
    
    const fb_name = document.querySelector('#fb_name')
    const fb_profilePic = document.querySelector('#profile')
    const albums = document.querySelector('#albums')
    
    FB.api(
        `/${page_id}?access_token=${access_token}`,
        'GET',
        {fields: "name, picture, albums{name, cover_photo{picture}}"},
        function(response) {
            // Insert your code here
            console.log(response)
            fb_name.innerHTML = response.name
            fb_profilePic.src = `${response.picture.data.url}`
            response.albums.data.map(item => {
                const newAlbum = document.createElement('li')
                const albumName = document.createElement('p')
                const albumPic = document.createElement('img')

                albumName.innerHTML = item.name
                albumPic.src= item.cover_photo.picture

                newAlbum.appendChild(albumName)
                newAlbum.appendChild(albumPic)
                albums.appendChild(newAlbum)
            })
        }
      );

  };