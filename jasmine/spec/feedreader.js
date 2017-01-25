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
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        // Test to check that allFeeds is defined and contains feeds
        it('are defined', function() {
            // check that allFeeds is defined
            expect(allFeeds).toBeDefined();
            // check that allFeeds is populated
            expect(allFeeds.length).not.toBe(0);
        });


        // Test to check that all feeds have a URL attribute present and it is populated
        it('have populated Feed URLs', function() {
            // iterate through allFeeds and check each feed's url attribute
            allFeeds.forEach(function(feed) {
                // check that current feed url is defined
                expect(feed.url).toBeDefined();
                // check that current feed url is populated
                expect(feed.url.length).not.toBe(0);
            });
        });


        // Test to check that all feeds have a name attribute present and it is populated
        it('have populated Feed Names', function() {
            // iterate through allFeeds and check each feed's name attribute
            allFeeds.forEach(function(feed) {
              // check that current feed name is defined
              expect(feed.name).toBeDefined();
              // check that current feed name is populated
              expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        // Test to check that the menu element is hidden by default
        it('element is hidden by default', function() {
            // check if the body has the "menu-hidden" class, this implies that the menu is hidden
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        // Test to check that the menu visibility toggles when the icon is clicked
        it('changes visibility when the menu icon is clicked', function() {
          var menuIcon = $('.menu-icon-link');
          menuIcon.click();
          // after clicking the menu icon the menu should now be visible
          expect($('body').hasClass('menu-hidden')).toBeFalsy();
          menuIcon.click();
          // after clicking the menu icon now it should now be hidden again
          expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {
        // Call loadFeed() for initial entries
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Test to check there is at least one .entry element within the .feed container.
        it('are loaded', function() {
            expect($('.feed .entry').children().length).toBeGreaterThan(0);
        });

        // Make sure each (.feed .entry-link) element has valid link
        it("has a entry that has a link starting with 'http(s)://'", function() {
            var entries = document.querySelector(".feed").getElementsByClassName("entry-link");
            for(var i = 0; i < entries.length; i++){
                expect(entries[i].href).toMatch(/^(http|https):\/\//);
            }
        });
    })

    describe('New Feed Selection', function() {
        var oldContent;
        var newContent;

        // Test to check that content is different
        it('changes content', function(done) {
            // Load the first feed
            loadFeed(0 ,function() {
                // Save content of feed to variable
                oldContent = $('.feed').html();
                // Load second feed
                loadFeed(1, function() {
                    // Save content of feed to variable
                    newContent = $('.feed').html();
                    expect(oldContent).not.toEqual(newContent);
                    done();
                });
            });
        });
    });
}());
