var range = document.getElementById("year");
range.oninput = function() {
	var year = this.value;
	document.getElementById("current-year").innerHTML = year;
	var body = document.body;
	var title = document.getElementById('appTitle');
	var spotify = document.getElementById("spotify-iframe");
	if (year < 1960)
	{
		body.style.backgroundColor = "red";
		body.style.backgroundImage = "url('../img/1950.png')";
		title.style.fontFamily = "'Barriecito', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "70px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3JwkwbPg8CrlrQ1ogvTYOF");
		drawGlobe('#6AB4A9', '#E0D1C7', '#7D5058');
	}
	else if (year < 1970)
	{
		body.style.backgroundColor = "orange";
		body.style.backgroundImage = "url('../img/1960.jpeg')";
		title.style.fontFamily = "'Zilla Slab Highlight', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "70px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6nzim4mlcil4OZREUTR6TZ");
		drawGlobe('#2F5B7F', '#CC65A8', '#4D2E6B');
	}
	else if (year < 1980)
	{
		body.style.backgroundColor = "yellow";
		body.style.backgroundImage = "url('../img/1970.gif')";
		title.style.fontFamily = "'Oi', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "60px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3CPxhXhCfOUdFdxUyS5S2b");
		drawGlobe('#367592','#883530', '#141517');
	}
	else if (year < 1990)
	{
		body.style.backgroundColor = "green";
		body.style.backgroundImage = "url('../img/1980.png')";
		title.style.fontFamily = "'Press Start 2P', cursive";
		title.style.fontSize = "50px";
		title.style.fontWeight = "lighter";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6CNMoufeHMU9qxsOeWYxTQ");
		drawGlobe('#282D3C', '#E4CDCF', '#564D3D');
	}
	else if (year < 2000)
	{
		body.style.backgroundColor = "blue";
		body.style.backgroundImage = "url('../img/1990.png')";
		title.style.fontFamily = "'Monoton', cursive";
		title.style.fontSize = "70px";
		title.style.fontWeight = "lighter";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/4euoU9j7XtprabUmHhRzEC");
		drawGlobe('#E2F4F9', '#474444', '#230F06');
	}
	else if (year < 2010)
	{
		body.style.backgroundColor = "purple";
		body.style.backgroundImage = "url('../img/2000.jpeg')";
		title.style.fontFamily = "'Hachi Maru Pop', cursive";
		title.style.fontSize = "60px";
		title.style.fontWeight = "bolder";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3QUfEVD8BjUicuK5NIFuiM");
		drawGlobe('#90B3E2', '#D55E8B', '#DCE0E1');
	}
	else {
		body.style.backgroundColor = "pink";
		body.style.backgroundImage = "url('../img/2010.jpeg')";
		title.style.fontFamily = "'Train One', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "60px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/5khOzZrbt5Smsfsgdb4M6R");
		drawGlobe('#a8dadc', '#90be6d', '#008000');
	}
}
