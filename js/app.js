// Based on Tutorial and Samples from Planetary.js Library!

function drawGlobe(oceanColor, landColor, borderColor, drawPings, lat, lon) {

  var globe = planetaryjs.planet();

  // Load our custom `autorotate` plugin; see below.
  globe.loadPlugin(autorotate(10));

  // The `earth` plugin draws the oceans and the land; it's actually
  // a combination of several separate built-in plugins.
  //
  // Added custom colors here!
  globe.loadPlugin(planetaryjs.plugins.earth({
    topojson: { file:   'js/world-110m-withlakes.json' },
    oceans:   { fill:   oceanColor },
    land:     { fill:   landColor  },
    borders:  { stroke: borderColor }
  }));

  // Fill in the lakes
  globe.loadPlugin(lakes({
    fill: oceanColor
  }));

  // The `pings` plugin draws animated pings on the globe.
  globe.loadPlugin(planetaryjs.plugins.pings());

 

  globe.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    onDragStart: function() {
      this.plugins.autorotate.pause();
    },
    onDragEnd: function() {
      this.plugins.autorotate.resume();
    }
  }));

  // Set up the globe's initial scale, offset, and rotation.
  globe.projection.scale(175).translate([175, 175]).rotate([0, -10, 0]);

  var canvas = document.getElementById('rotatingGlobe');
  // Special code to handle high-density displays (e.g. retina, some phones)
  // In the future, Planetary.js will handle this by itself (or via a plugin).
  if (window.devicePixelRatio == 2) {
    canvas.width = 800;
    canvas.height = 800;
    context = canvas.getContext('2d');
    context.scale(2, 2);
  }
  globe.draw(canvas);
  if(drawPings == 1)
  {
    setInterval(function() {
	globe.plugins.pings.add(lon, lat, {color: 'red', ttl: 5000, angle: 20});
    }, 150);
  }
  // Draw that globe!
  //globe.draw(canvas);
}
// THE REST IS FUNCTIONS FROM PLANETARY.JS

  // This plugin will automatically rotate the globe around its vertical
  // axis a configured number of degrees every second.
  function autorotate(degPerSec) {
    // Planetary.js plugins are functions that take a `planet` instance
    // as an argument...
    return function(planet) {
      var lastTick = null;
      var paused = false;
      planet.plugins.autorotate = {
        pause:  function() { paused = true;  },
        resume: function() { paused = false; }
      };
      // ...and configure hooks into certain pieces of its lifecycle.
      planet.onDraw(function() {
        if (paused || !lastTick) {
          lastTick = new Date();
        } else {
          var now = new Date();
          var delta = now - lastTick;
          // This plugin uses the built-in projection (provided by D3)
          // to rotate the globe each time we draw it.
          var rotation = planet.projection.rotate();
          rotation[0] += degPerSec * delta / 1000;
          if (rotation[0] >= 180) rotation[0] -= 360;
          planet.projection.rotate(rotation);
          lastTick = now;
        }
      });
    };
  }

  // This plugin takes lake data from the special
  // TopoJSON we're loading and draws them on the map.
  function lakes(options) {
    options = options || {};
    var lakes = null;

    return function(planet) {
      planet.onInit(function() {
        // We can access the data loaded from the TopoJSON plugin
        // on its namespace on `planet.plugins`. We're loading a custom
        // TopoJSON file with an object called "ne_110m_lakes".
        var world = planet.plugins.topojson.world;
        lakes = topojson.feature(world, world.objects.ne_110m_lakes);
      });

      planet.onDraw(function() {
        planet.withSavedContext(function(context) {
          context.beginPath();
          planet.path.context(context)(lakes);
          context.fillStyle = options.fill || 'black';
          context.fill();
        });
      });
    };
  }



window.onload = function() {
	drawGlobe('#a8dadc', '#90be6d', '#008000', 1, 47, -122);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', "../server/db-view.php");
	xhr.onload = function() {
		document.getElementById("test").innerHTML =
this.response;
		var user_words =
document.getElementById('test').children;
		var data = "";
		for (i = 0; i < user_words.length; i++)
		{
			data = data + ' ' + user_words[i].innerHTML;
		}
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
	};
	xhr.send();
	alert('For best experience, please ensure that your browser is in full-screen mode!');
};
