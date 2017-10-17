/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
        The first test is to be sure allFeeds array has been defined and have at least one element by compare it's length.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The second test is to be sure all elements on allFeeds has it's own URL and not to be null or empty string
         */
         it('each feed has url', function() {
             allFeeds.forEach( function(feed){
               expect(feed.url).toBeTruthy();
             });
         });

        /* The third test is to be sure all elements on allFeeds has it's own name and not to be null or empty string
         */
         it('each feed has name', function() {
             allFeeds.forEach( function(feed){
               expect(feed.name).toBeTruthy();
             });
         });
    });


describe('The menu', function(){


        /*The fourth test check the menu to be hidden by default by checking DOM element class
         */
         it('menu element hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* The fifth test try to click menu icon and test the result of this action by
         remove the hidden class and re-triger the click to be sure the hidden class has been applied
          */
          it('menu element visibile on click ', function() {
            $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).not.toBe(true);
             $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
   });
   describe('Initial Entries', function(){
    /* The sixth test is for loadFeed function and to be sure it's work properly by passing the id.
         */
         beforeEach(function(done){
           loadFeed(0, function () {
             done();
           });
         });
         it('feed container has at least 1 entry ', function(done) {
             expect($('.feed .entry-link .entry').length).toBeGreaterThan(0);
             done();
         });
       });

     describe('New Feed Selection', function(){
       /* The seventh test is to check the content has been updated each time loadFeed has been called  
            */
            var oldContent ,newContent;
            beforeEach(function(done){
              loadFeed(0, function () {
                oldContent=$('.feed').html();
                done();
              });
            });
           it('new feed is loaded by the loadFeed  ', function(done) {
             loadFeed(1, function () {
                  newContent=$('.feed').html();
               done();
             });
            expect(newContent).not.toEqual(oldContent);
           });
         });
}());
