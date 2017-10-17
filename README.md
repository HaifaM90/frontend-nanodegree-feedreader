# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# Open project
1. double click on " index.html" to open it with you default browser and check Jasmine test at the bottom. (all OS)
2. OR drag " index.html " and drop it over your browser icon (mac OS).

# Test Cases
1. The first test is to be sure allFeeds array has been defined and have at least one element by compare it's length.
2. The second test is to be sure all elements on allFeeds has it's own URL and not to be null or empty string
3. The third test is to be sure all elements on allFeeds has it's own name and not to be null or empty string
4. The fourth test check the menu to be hidden by default by checking DOM element class
5. The fifth test try to click menu icon and test the result of this action by remove the hidden class and re-triger the click to be sure the hidden class has been applied
6. The sixth test is for loadFeed function and to be sure it's work properly by passing the id.
7.  The seventh test is to check the content has been updated each time loadFeed has been called  
