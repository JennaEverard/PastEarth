


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

var wordbutton = document.getElementById("word-button");
wordbutton.addEventListener("click", function() {
	var word = document.getElementById("new-word").value;
	if(word == '' || word.includes(' '))
	{
		console.log("bad entry :(");
	}
	else
	{
		var xhr = new XMLHttpRequest();
		xhr.open('POST', "../server/db.php?value=" + word, true);
		
		xhr.onload = function() {
			document.getElementById("test").innerHTML =
this.response;
			displaywordcloud();
		};
		xhr.send("value=",word);
	}
});

var closebutton = document.getElementById("popup-button-2");
	closebutton.addEventListener("click", function() {
	document.getElementById("city-popup").style.display="none";
});

function displaywordcloud() {
	var user_words = document.getElementById('test').children;
	var data = "";
	for (i = 0; i < user_words.length; i++)
	{
		data = data + ' ' + user_words[i].innerHTML;
	}
	console.log(data);
	var tomap = {
		type: 'wordcloud',
		options: {
			text: data,
		}
	};
	zingchart.render({
		id: 'word-cloud',
		data: tomap,
		height: 400,
		width: '100%'
	});
}
