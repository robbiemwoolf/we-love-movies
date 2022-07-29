<div class="scrollable-container" ng-transclude="" style="user-select: auto;"> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed" style="user-select: auto;"><h1 style="user-select: auto;">Project: WeLoveMovies</h1><blockquote style="user-select: auto;">
<p style="user-select: auto;">You've been hired on as a backend developer for a new startup called WeLoveMovies! As another developer works on the design and frontend experience, you have been tasked with setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews.</p>
</blockquote>
<p style="user-select: auto;"><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded" class="" style="user-select: auto;"><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0" style="user-select: auto;"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/06596df6b4c59b453c69d84d2bc854b3-home.png" alt="home.png" style="user-select: auto;"></div></zoomable-image></p>
<p style="user-select: auto;">This project is designed to test your ability to both build complex servers and access data through a database. To succeed at this project, you'll need to demonstrate you can do the following:</p>
<ul style="user-select: auto;">
<li style="user-select: auto;">Install and use common middleware packages.</li>
<li style="user-select: auto;">Receive requests through routes.</li>
<li style="user-select: auto;">Running tests from the command line.</li>
<li style="user-select: auto;">Access relevant information through route and query parameters.</li>
<li style="user-select: auto;">Create an error handler for the case where a route does not exist.</li>
<li style="user-select: auto;">Build an API following RESTful design principles.</li>
<li style="user-select: auto;">Create and customize a <code style="user-select: auto;">knexfile.js</code> file.</li>
<li style="user-select: auto;">Create a connection to your database with Knex.</li>
<li style="user-select: auto;">Write database queries to complete CRUD routes in an Express server.</li>
<li style="user-select: auto;">Return joined and nested data with Knex.</li>
<li style="user-select: auto;">Write database migrations using Knex's migration tools.</li>
<li style="user-select: auto;">Deploy your backend server to a cloud service.</li>
</ul>
<p style="user-select: auto;">You will not need to make any edits to HTML or CSS for this project.</p>
<h2 style="user-select: auto;">Project setup</h2><p style="user-select: auto;">Follow the instructions below to get this project up and running on your own machine:</p>
<ul style="user-select: auto;">
<li style="user-select: auto;">Download the Qualified assessment files to your computer.</li>
<li style="user-select: auto;">Run <code style="user-select: auto;">npm install</code> to install the project.</li>
</ul>
<p style="user-select: auto;">Some helper scripts have been added to the <code style="user-select: auto;">package.json</code> file. You are welcome to modify these as you wish.</p>
<p style="user-select: auto;">Visit the following repository if you would like to see your project connected to a frontend application:</p>
<ul style="user-select: auto;">
<li style="user-select: auto;"><a href="https://github.com/Thinkful-Ed/starter-movie-front-end" target="_blank" rel="noopener" style="user-select: auto;">Starter Code: WeLoveMovies</a></li>
</ul>
<p style="user-select: auto;">Instructions are included there on how to get the project up and running.</p>
<h2 style="user-select: auto;">Running tests</h2><p style="user-select: auto;">To run the tests, you can run the following command:</p>
<div class="language-tabset" style="user-select: auto;"><div class="language-tab language-bash" style="user-select: auto;"><pre style="user-select: auto;"><code class="lang-bash" style="user-select: auto;">npm test
</code></pre>
</div></div><p style="user-select: auto;">Note that the tests make use of an in-memory SQLite database.</p>
<p style="user-select: auto;"><em style="user-select: auto;"><strong style="user-select: auto;">Note:</strong> When updating a record in an in-memory SQLite database, the server does not automatically respond with an array of updated records like PostgreSQL does. As a result, when updating a record, you will need to query the database again to return updated record.</em></p>
<h2 style="user-select: auto;">Instructions</h2><p style="user-select: auto;">You are tasked with both setting up the database and building a number of routes that will be used by the frontend application.  For this project, you will start by making the necessary changes to the data tier and then proceed to make changes to the application tier following an inside-out development workflow. Each table is detailed below, as is each route.</p>
<h3 style="user-select: auto;">General tasks</h3><p style="user-select: auto;">You will also need to make sure the following tasks are complete.</p>
<ul style="user-select: auto;">
<li style="user-select: auto;">Your <code style="user-select: auto;">app.js</code> file and <code style="user-select: auto;">server.js</code> file are correctly configured, with your <code style="user-select: auto;">app.js</code> file exporting the application created from Express.</li>
<li style="user-select: auto;">You make use of the <code style="user-select: auto;">cors</code> package so that requests from the frontend can correctly reach the backend.</li>
<li style="user-select: auto;">If a request is made to a route that does not exist, the server returns a <code style="user-select: auto;">404</code> error.</li>
<li style="user-select: auto;">If a request is made to a route that exists, but the HTTP method is wrong, a <code style="user-select: auto;">405</code> error is returned.</li>
<li style="user-select: auto;">All of your routes should respond with the appropriate status code and should use a <code style="user-select: auto;">data</code> key in the response.</li>
</ul>
<h3 style="user-select: auto;">Database tables</h3><p style="user-select: auto;">You will create five tables for this project. View the <code style="user-select: auto;">docs/tables/</code> folder in this project to get more detailed information on each table.</p>
<p style="user-select: auto;">You will need to create migrations for each of these tables and run those migrations.</p>
<p style="user-select: auto;">Seed data is included in this project in the <a href="./src/db/seeds" target="_blank" rel="noopener" style="user-select: auto;"><code style="user-select: auto;">./src/db/seeds</code></a> folder. The seeds will run correctly if and only if the tables are setup as described in the previous documents.</p>
<h3 style="user-select: auto;">Routes</h3><p style="user-select: auto;">You will create five routes for this project. View the <code style="user-select: auto;">docs/routes/</code> folder in this project to get more detailed information on each table.</p>
<p style="user-select: auto;">Note that some routes return data dependent on query parameters.</p>
<p style="user-select: auto;"><em style="user-select: auto;"><strong style="user-select: auto;">Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.</em></p>
</div> <score-card-instructions challenge="fileTab.file.challenge" style="user-select: auto;"><!----></score-card-instructions> </div>