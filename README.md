# 8 Interactions & jQuery

Another layer of how a browser renders a webpage is the execution of javascript. Javascript, which has nothing to do with `Java`, is a client-side scripting language, which means the contents of the `.js` file (or the code contained inside HTML `<script>` tags) is run on the user's machine by their browser.

The power of Javascript is enormous and is what allows 'webapps' to exist. Essentially any interactive behavior you experience on a webpage is a Javascript event being triggered.

Although Javascript has been moving towards standardization for decades, because it runs in the browser, it has been subject to the same inconsistency as CSS between vendors (Microsoft, Apple, Google, etc.). A game-changer in the JS world was the popularization of Javascript libraries in the early 2000s that created a standard 'super-langauge' on top of plain ("vanilla") Javascript. Libraries like `Moo Tools` and `jQuery` allowed developers to quickly and consistently create both complex visual effects and powerful functionalities. Although vanilla JS is becoming more common and the increased performance of the base language is an industry-standard, the libraries still provide an ease-of-use and capability that is useful to hobbyists and students.

## jQuery Library

Since the jQuery library is a separate file that needs to be run by the browser before our JS will make any sense, it needs to be 'included' in your HTML _before_ your `.js` file. Similar to the rest of HTML, the browser will fetch the jQuery file before requesting and running your code.

As a matter of performance, we always place `scripts` as last children of the `<body>` element in and HTML document.

```
<html>
    <head>
        # <meta> tags

        <title></title>

        # css <link>
    </head>
    <body>
        # awesome display content here

        # scripts go here
    </body>
</html>
```

As a best-practice, jQuery should be loaded from a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) like [cdnjs.com](https://cdnjs.com/). Hosting your own copy works fine, but the CDN will be faster for the user. Searching there gives us the url for the hosted library file. Including it looks like this:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js>" crossorigin="anonymous" SameSite="None"></script>
```

Once this is in place, we can write our JS inline, or in an external file, just like CSS:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js>" crossorigin="anonymous" SameSite="None"></script>

<script langauge="text/javascript">
    // "inline"
    // js/jQuery code here
</script>

"external file, this is preferred"
<script src="relative/path/to/my/js/file.js"></script>
```

## Hello jQuery World

As a fully-featured programming language, Javascript has variables of different types, logic structures, loops, functions, and much more. Some of these you'll be introduced to through this activity, some you won't meet until next year. As usual, Stackoverflow, the W3C, and other online resources are your best friend for quick answers.

jQuery works by allowing you to select and manipulate HTML elements using the same syntax as CSS. Pretty much all the ways you can select in CSS work in jQ too. These selections get wrapped in a "jQuery Object", which has all the jQ functions in it. Selecting something looks like this:

```
$('h1')
```

This is creating a jQ object that will act on all of the `<h1>` elements. By itself this object does nothing though, since no function is being run ("called").

### document.ready()

`.js` files are run by the browser as soon as they are encountered in the HTML. In other words, the browser will try to run your JS before it has even seen the rest of the HTML document. This is part of the reason we place the `.js` files at the _end_ of the `<body>`. Even with that measure, we still need a way to put off ("differ") the execution of the JS until the HTML is fully loaded.

Enter the `ready()` function. The ready function gives us a way to hold the execution of our code until the HTML document is fully loaded by the browser. Accordingly, all the JS you're going to write (in this course anyway) will start like this:

```
$(document).ready(function(){

    // all your JS in here

});
```

What this snippet does is select the HTML document itself and specify a function to be run when it is 'ready'. The contents of that function is your code.

## Events

The topic we're going to work with in this assignment is how website interactivity is driven by "events". Everything the user does is an event:

- Moves the mouse
- Scrolls the page
- Clicks on any element
- Hovers over any element
- Presses a key

Your scripts are going to be built to listen for these events and then do something when they are detected. Your planning and page construction should reflect tis approach.

See the starter code for a few examples of event listeners and how jQuery can manipulate the page in response.

## Task

The task is simple: use jQuery to write a classic arcade game. Good choices are:

- [Asteroids](http://www.kevs3d.co.uk/dev/asteroids/)
- [Snake](https://www.google.com/search?q=snake+game)
- [Lunar Lander](http://moonlander.seb.ly/)

The starter code, along with your past assignments in CSS, contain examples of all the aspects of Javascript and jQuery you should need for this. Mr. Sharp will help you with the jQ and JS syntax where necessary.
