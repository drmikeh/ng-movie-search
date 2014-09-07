# ng-movie-search

A simple AngularJS app that searches for movie information.

## Build Instructions
To build this app from the source you will need to install
[npm](https://www.npmjs.org), [ruby](https://www.ruby-lang.org),
[compass](http://compass-style.org), and then use npm to install
globally install [grunt](http://gruntjs.com) and [bower](http://bower.io).
Once these tools are installed, simple run the following commands from
the main directory:

    $ npm install
    $ bower install
    $ grunt
    $ grunt serve

The last command above will start a _connect_ http server and open a browser tab
to the running app. You can also deploy the _dist_ directory to your favorite HTTP
server.

## Skipping the Build

If you want to run the app without building it, a _dist.zip_ file is included.
Simply copy the contents of this zip file to your favorite HTTP server.

## Technologies Used in this App

### Frameworks & Libraries
* [AngularJS](https://angularjs.org) - A Full Featured SPA Framework
* [Angular UI Router](https://github.com/angular-ui/ui-router) - State-based routing for AngularJS
* [Angular ngAnimate](https://docs.angularjs.org/api/ngAnimate) - CSS3 Animation for AngularJS

### Styling
* [Twitter Bootstrap](http://getbootstrap.com) - Responsive CSS styles and components
* [SASS](http://sass-lang.com) & [Compass](http://compass-style.org) - CSS with Superpowers

### Build and Testing Tools
* [Yeoman](http://yeoman.io) - Project Scaffolding
* [Grunt](http://gruntjs.com) - Project Builds
* [Bower](http://bower.io) - Dependency Management
* [Karma](http://karma-runner.github.io) - Test Runner
* [Jasmine](http://jasmine.github.io) - Behavior-Driven Testing

### External Services
* [The OMDb API](http://www.omdbapi.com)