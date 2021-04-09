var range = document.getElementById("year");
range.oninput = function() {
	var year = this.value;
	var body = document.body;
	var spotify = document.getElementById("spotify-iframe");
	if (year < 1960)
	{
		body.style.backgroundColor = "red";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3JwkwbPg8CrlrQ1ogvTYOF");
	}
	else if (year < 1970)
	{
		body.style.backgroundColor = "orange";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6nzim4mlcil4OZREUTR6TZ");
	}
	else if (year < 1980)
	{
		body.style.backgroundColor = "yellow";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3CPxhXhCfOUdFdxUyS5S2b");
	}
	else if (year < 1990)
	{
		body.style.backgroundColor = "green";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6CNMoufeHMU9qxsOeWYxTQ");
	}
	else if (year < 2000)
	{
		body.style.backgroundColor = "blue";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/4euoU9j7XtprabUmHhRzEC");
	}
	else if (year < 2010)
	{
		body.style.backgroundColor = "purple";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3QUfEVD8BjUicuK5NIFuiM");
	}
	else {
		body.style.backgroundColor = "pink";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/5khOzZrbt5Smsfsgdb4M6R");
	}
}
