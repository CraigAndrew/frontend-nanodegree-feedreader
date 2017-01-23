# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## How To
## Run
Download repository to your computer.
Open ```index.html``` in your browser. You can also use the command ```python -m SimpleHTTPServer``` in ```index.html``` directory and you should then see:
```
Serving HTTP on 0.0.0.0 port 8000 ...
```
It means the server is up and running on your computer on port 8000. You can type http://localhost:8000/ into the address bar of a web browser to see the page.

## Run the application

The page will load and run all the test, they would be displayed at the bottom and all tests would appears green.

## Changes
New tests were added:

Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

Extra: Added in an extra test that: Intial Entries has a entry that has a link starting with 'http(s)://'