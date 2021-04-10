var range = document.getElementById("year");
range.oninput = function() {
	var year = this.value;
	var body = document.body;
	var spotify = document.getElementById("spotify-iframe");
	if (year < 1960)
	{
		body.style.backgroundColor = "red";
		body.style.backgroundImage = "url('../img/1950.png')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3JwkwbPg8CrlrQ1ogvTYOF");
		drawGlobe('#6AB4A9', '#E0D1C7', '#7D5058');
	}
	else if (year < 1970)
	{
		body.style.backgroundColor = "orange";
		body.style.backgroundImage = "url('../img/1960.jpeg')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6nzim4mlcil4OZREUTR6TZ");
		drawGlobe('#2F5B7F', '#CC65A8', '#4D2E6B');
	}
	else if (year < 1980)
	{
		body.style.backgroundColor = "yellow";
		body.style.backgroundImage = "url('../img/1970.gif')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3CPxhXhCfOUdFdxUyS5S2b");
		drawGlobe('#367592','#883530', '#141517');
	}
	else if (year < 1990)
	{
		body.style.backgroundColor = "green";
		body.style.backgroundImage = "url('../img/1980.png')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6CNMoufeHMU9qxsOeWYxTQ");
		drawGlobe('#282D3C', '#E4CDCF', '#564D3D');
	}
	else if (year < 2000)
	{
		body.style.backgroundColor = "blue";
		body.style.backgroundImage = "url('../img/1990.png')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/4euoU9j7XtprabUmHhRzEC");
		drawGlobe('#E2F4F9', '#474444', '#230F06');
	}
	else if (year < 2010)
	{
		body.style.backgroundColor = "purple";
		body.style.backgroundImage = "url('../img/2000.jpeg')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3QUfEVD8BjUicuK5NIFuiM");
		drawGlobe('#90B3E2', '#D55E8B', '#DCE0E1');
	}
	else {
		body.style.backgroundColor = "pink";
		body.style.backgroundImage = "url('../img/2010.jpeg')";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/5khOzZrbt5Smsfsgdb4M6R");
		drawGlobe('#a8dadc', '#90be6d', '#008000');
	}
}
