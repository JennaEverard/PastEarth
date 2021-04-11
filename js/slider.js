var range = document.getElementById("year");
range.oninput = function() {
	var year = this.value;
	document.getElementById("current-year").innerHTML = year;
	var body = document.getElementById("mainbody");
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
		displaypopup(year);
	}
	else if (year < 1970)
	{
		body.style.backgroundColor = "orange";
		body.style.backgroundImage = "url('../img/1960.jpeg')";
		title.style.fontFamily = "'Zilla Slab Highlight', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "70px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6nzim4mlcil4OZREUTR6TZ");
		//drawGlobe('#2F5B7F', '#CC65A8', '#4D2E6B');
		displaypopup(year);
	}
	else if (year < 1980)
	{
		body.style.backgroundColor = "yellow";
		body.style.backgroundImage = "url('../img/1970.gif')";
		title.style.fontFamily = "'Oi', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "60px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3CPxhXhCfOUdFdxUyS5S2b");
		//drawGlobe('#367592','#883530', '#141517');
		displaypopup(year);
	}
	else if (year < 1990)
	{
		body.style.backgroundColor = "green";
		body.style.backgroundImage = "url('../img/1980.png')";
		title.style.fontFamily = "'Press Start 2P', cursive";
		title.style.fontSize = "50px";
		title.style.fontWeight = "lighter";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/6CNMoufeHMU9qxsOeWYxTQ");
		//drawGlobe('#282D3C', '#E4CDCF', '#564D3D');
		displaypopup(year);
	}
	else if (year < 2000)
	{
		body.style.backgroundColor = "blue";
		body.style.backgroundImage = "url('../img/1990.png')";
		title.style.fontFamily = "'Monoton', cursive";
		title.style.fontSize = "70px";
		title.style.fontWeight = "lighter";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/4euoU9j7XtprabUmHhRzEC");
		//drawGlobe('#E2F4F9', '#474444', '#230F06');
		displaypopup(year);
	}
	else if (year < 2010)
	{
		body.style.backgroundColor = "purple";
		body.style.backgroundImage = "url('../img/2000.jpeg')";
		title.style.fontFamily = "'Hachi Maru Pop', cursive";
		title.style.fontSize = "60px";
		title.style.fontWeight = "bolder";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/3QUfEVD8BjUicuK5NIFuiM");
		//drawGlobe('#90B3E2', '#D55E8B', '#DCE0E1');
		displaypopup(year);
	}
	else {
		body.style.backgroundColor = "pink";
		body.style.backgroundImage = "url('../img/2010.jpeg')";
		title.style.fontFamily = "'Train One', cursive";
		title.style.fontWeight = "lighter";
		title.style.fontSize = "60px";
		spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/5khOzZrbt5Smsfsgdb4M6R");
		//drawGlobe('#a8dadc', '#90be6d', '#008000');
		displaypopup(year);
	}
}

function displaypopup(year)
{
	var popup = document.getElementById("city-popup");
	var index = year - 1950;
	var imagepath = 'cities/' + year + '.jpeg';
	//popup.style.display = "flex";
	var color1 = '';
	var color2 = '';
	var color3 = '';

	if (year < 1960)
	{
		color1 = '#6AB4A9';
		color2 = '#E0D1C7';
		color3 = '#7D5058';
	}
	else if (year < 1970)
	{
		color1 = '#2F5B7F';
		color2 = '#CC65A8';
		color3 = '#4D2E6B';
	}
	else if (year < 1980)
	{
		color1 = '#367592';
		color2 = '#883530';
		color3 = '#141517';
	}
	else if (year < 1990)
	{
		color1 = '#282D3C';
		color2 = '#E4CDCF';
		color3 = '#564D3D';
	}
	else if (year < 2000)
	{
		color1 = '#E2F4F9';
		color2 = '#474444';
		color3 = '#230F06';
	}
	else if (year < 2010)
	{
		color1 = '#90B3E2';
		color2 = '#D55E8B';
		color3 = '#DCE0E1';
	}
	else
	{
		color1 = '#a8dadc';
		color2 = '#90be6d';
		color3 = '#008000';
	}
	if (lat[index] != '')
	{
		drawGlobe(color1, color2, color3, 1, lat[index], lon[index]);
	}
	else
	{
		drawGlobe(color1, color2, color3, 0, 0, 0);
	}
	setTimeout(function() {
		if(titles[index] != '')
		{
			document.getElementById("popup-heading").innerHTML = titles[index];
			document.getElementById("popup-subheading").innerHTML = year;
			document.getElementById("popup-text").innerHTML = descriptions[index];
			document.getElementById("popup-button").setAttribute("onclick",'window.location.href="'+links[index] + '"');
			document.getElementById("popup-img").setAttribute("src",imagepath);
			popup.style.display = "flex";
		}
	}, 5000);
}


var titles = [
'The Urban Population Continues to Grow...',
'',
'Deadly Sulfurous Smog in London',
'',
'',
'',
'British Parliament Passes Clean Air Act of 1956',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'The First Solar Power Plant',
'',
'The World Celebrates the First Earth Day',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'The First Wind Farm',
'',
'Shining Light on the Decline of the Worlds Ecosystems',
'',
'',
'',
'',
'',
'',
'',
'',
'Germany Makes History with its Ordinance on the Avoidance of Packaging Waste',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'An International Treaty on Climate Change is Signed in Paris',
'',
'',
'Now, over 4.2 billion people live in cities around the world',
'',
''];

var descriptions = [
'In the Early 1950s, the urban population reached 751 million worldwide',
'',
'A deadly sulfurous smog descended on London, estimated to have resulted in the death of more than 8,000 residents. The cause? Coal.',
'',
'',
'',
'This new measure restricted the burning of coal in urban areas and authorized smoke-free zones.',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Professor Giovanni Francia builds the first operational solar power plant in Santllario Italy',
'',
'April 22, 1970 is the first worldwide celebration of Earth Day, a tradition that has since continued',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'A landmark for renewable energy, the worlds first wind farm begins operation at Crotched Mountain in New Hampshire, USA',
'',
'The same groups that launched the "World Conservation Strategy" in 1980 now meet again to draw attention to the decline of the worlds ecosystems and lay foundations for sustainable development',
'',
'',
'',
'',
'',
'',
'',
'',
'This ordinance is the first of its kind, placing responsibility for the reuse and recycling of packaging of packing materials on the producers rather than the consumers',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'On December 12th of 2015, 196 Parties adopted the Paris Agreement, a legally binding treaty on climate change, the first of its kind. It situates climate change mitigation as an international challenge and lays the framework for necessary measures of collaboration.',
'',
'',
'This great urban boom, though a mark of technological and industrial innovation, is accompnaied by a great omen. Cities are paradoxically contributing the most to climate change, yet also the most at risk from the detrimental impacts of climate change, including hotter temperatures and more extreme climatic events. Looking to the future, we will need to continue the legacies of sustainability as we work towards resilience',
'',
''];

var lat = [
'40.7',
'',
'51',
'',
'',
'',
'51',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'42.5',
'',
'40.7',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'51',
'',
'43.6',
'',
'',
'',
'',
'',
'',
'',
'',
'50.5',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'48.86',
'',
'',
'40.7',
'',
''
];

var lon = [
'-74',
'',
'-0.12',
'',
'',
'',
'-0.12',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'12.5',
'',
'-74',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'9',
'',
'-71.58',
'',
'',
'',
'',
'',
'',
'',
'',
'4',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'2.33',
'',
'',
'-74',
'',
''];


var links = [
'https://www.visualcapitalist.com/map-global-rise-of-urbanization/',
'',
'https://www.history.com/news/the-killer-fog-that-blanketed-london-60-years-ago',
'',
'',
'',
'https://www.history.com/news/the-killer-fog-that-blanketed-london-60-years-ago',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'https://www.aalborgcsp.com/business-areas/solar-district-heating/csp-parabolic-troughs/history-of-csp/',
'',
'https://www.nytimes.com/2020/04/21/climate/NYT-first-earth-day.html',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'https://www.abc.net.au/science/articles/2015/07/30/4282474.htm',
'',
'http://www.environmentandsociety.org/mml/iucn-ed-world-conservation-strategy-living-resource-conservation-sustainable-development#:~:text=The%20World%20Conservation%20Strategy%20of%201980%20is%20the,it%20should%20support%20conservation%20rather%20than%20hinder%20it',
'',
'',
'',
'',
'',
'',
'',
'',
'https://informinc.org/germany-garbage-green-dot-challenging-throwaway-society/',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement',
'',
'',
'https://www.visualcapitalist.com/map-global-rise-of-urbanization/',
'',
''];























