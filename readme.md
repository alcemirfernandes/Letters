readme.md
# Letters

My one-year-old daughter likes to bash my coomputer keyboard. I can't stop her without there being tears, so I've made an app that teaches her letters and how they sound. 

It's a web application, built with HTML, CSS and JavaScript. It uses [Require][] and [Backbone][] because I wanted to practice with them - though they're both overkill for such a simple app. The app may end up in a portfolio website, where Require will help keep things snappy. I used the core languages rather than native code because they're the languages I know best.

[Require]: http://requirejs.org/
[Backbone]: http://backbonejs.org/

## Changelog
- 2012-09-02 re-worked into a simple MVC structure, using Backbone
- 2012-08-30-ish wrapped it up in RequireJS. There's a main.js to start the app and the core functionality is now a `define()`'d module
- 2012-08-27 created a basic layout and letter-expansion animation