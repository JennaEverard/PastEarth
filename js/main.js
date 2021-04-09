var spotdisp = document.getElementById("spotify-display");
spotdisp.addEventListener("click", function() {
	var spotify = document.getElementById("spotify-iframe");
	if(spotdisp.innerHTML == "Hide")
	{
		spotdisp.innerHTML = "Show";
		spotify.style.height = "80px";
		spotdisp.style.top = "81px";
	}
	else if(spotdisp.innerHTML == "Show")
	{
		spotdisp.innerHTML = "Hide";
		spotify.style.height = "339px";
		spotdisp.style.top = "340px";
	}
});
