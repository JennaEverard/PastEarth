# PastEarth
Project for Hack From the Past

## Author
@JennaEverard

## Inspiration

Over the past decades, urban areas have continued to evolve and expand at an increasingly rapid pace, so much so that [the UN predicts by 2050](https://www.un.org/sustainabledevelopment/blog/2018/05/68-of-the-world-population-projected-to-live-in-urban-areas-by-2050-says-un/), 68% of the world's population will live in these cities. Yet, despite the technological and industrial innovations that accompany the development of cities, past decades have seen many environmental problems - many of which have persisted to this day. In the face of climate change, education about the environmental impacts of urbanization and the need for sustainability and resilience is growing ever more important. Thus, I sought to build a webapp that promotes such education, providing an aesthetic platform with which users can explore the history of urban environmental challenges and sustainable progress over the past seven decades.

## What it does

Many Decades, One Earth is an interactive webapp that promotes collaborative education surrounding sustainability and resiliency in cities, with a focus of historical struggles and progress, and future prospects. It supports many exciting features, including: 

**Experience the Decades**

- For each decade, the webapp will assume a new color scheme, a new font-style for the page title, and a new background image to give the ambiance of that decade
- In the top right hand corner, you will find a music playlist customized to the decades which changes based on the decade you are observing. With the button on the button right, you have the option to show or hide the list of songs.

**Explore Urban Challenges and Sustainability**

- Change the year you are observing by dragging the slider on the right! When you cross into a new decade, watch for the entire page to change style!
- The ever-rotating globe on the left (you can also manually spin it!) will display the location of the notable events for that year in the form of a series of concentric circles emanating out from the exact coordinates of this event
- After the globe has rotates to this location, a popup will appear with a photo, title, and short description of the event (either an environmental challenge or a landmark in urban sustainability/resilience). Once you have finished reading this, you can either click the button to learn more or close the popup and return to the webapp

**Share your Ideas and Collaborate with Others to Envision a More Sustainable Future**

- Scrolling beneath the educational globe, you will find a section that poses the important question - "What does a sustainable and resilient city mean to _you_"
- On the left hand side, you can enter your one-word answer (or multiple answers, one at a time)
- When you hit submit, your answer will be submitted to a server-side database and join the collection of words from all our other users
- Your answer along with others' answers are graphically displayed in a word-cloud to the right, with larger words corresponding to an answer that is more frequent

## How we built it

I build the static content of the webapp using HTML, CSS, and JavaScript. The globe was built using the Planetary.js library with the map data stored in a json file and the word-cloud was built with the ZingChart javascript library. In order to store user input and display it in the word-cloud, I used XMLHttp requests on the client side which communicated with a PHP files on the server side. These PHP files used PDO connections to connect to a remote mysql database which I set-up and configured using SQL.

## Challenges we ran into

I ran into a lot of challenges while building this webapp, although I prefer to call them learning opportunities rather than challenges :) The first obstacle I overcame was figuring out how to run a local web server, which allowed me to test my code and see my changes as I was making them (seems simple, but I had actually never done this before!). I also initially struggled quite a bit when trying to get the interactive planet graphic to work. The documentation for the library was difficult to understand, but eventually I figured out how to display it and have it auto-rotate. From there, I was able to do some more research and then figure out how to plot specific coordinates (I plot a "ping" at the geographic location of each of the major events that the educational popups talk about). Finally, another challenge I overcame was how to use a database with my web-app. I had never implemented a server-side database before and knew very little about PHP or 'GET' vs 'POST' requests. However, after spending some time watching video tutorials, I was able to successfully configure a remote database, query it with my PHP code, and request/receive results from this PHP code in my JavaScript functions!

## Accomplishments that we're proud of

I am very impressed and proud that I was able to build an entire web-app from the ground-up in only two-ish days (while also studying for finals)! This was my first time building a web-app with a back-end, as I had only ever build client-side websites. Being my first time working with the server-side of a web-app, I am proud that I was able to successfully implement this and create a working database communication system too! Overall, I am proud of all that I have learned at this hackathon, from how to build a web-app, how to work with various javascript libraries, how to work with remote databases, and (of course) all of the important environmental issues and sustainability efforts that I researched for inclusion in my educational web-app.

## What we learned

I learned so much at this hackathon and gained so many skills that I cannot wait to apply at future hackathons and on future projects. The list of what I learned includes (but is not limited to):

- How to build a webapp from scratch! I had only ever built a webapp from a starterpack before, so this was definitely a huge accomplishment that I am so happy about!
- What client-side versus server-side is and how to safely and securely communicate between the two
- How to use PHP (and the different type of requests)
- How to send requests from a webapp to a remote database
- How to run a local webserver on my computer and then how to migrate my application to a remote server so that it is accessible to everyone else!
- How to work with a bunch of different libraries (i.e. Planetary.js, ZingChart)
- How to add music to a website (and, on that note, I also learned what the top hits were from each decade)

## What's next for Many Decades, One Earth

In the coming weeks, I plan to expand the extent of the educational information provided by Many Decades, One Earth. With more time, I can do more research and fact checking (very important!) and can add many more events to make the web-app a more comprehensive review of what has been done and what we need to do to make cities more sustainable. Additionally, in addition to the word cloud, I would like to add an option for users to upload images to both share sustainable efforts in their own communities and raise awareness for sustainability and resiliency projects. Let's build a sustainable and resilient future together!
