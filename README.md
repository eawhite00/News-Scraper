# News-Scraper
This application was created as part of my UW Coding Boot Camp to demonstrate my ability to scrape a website for information, store the data in a mongo database, and display it on a web page. I chose to scrape the Washington-area news website Crosscut.

## Installation
Here are the steps for running this application locally on your machine:
1. Clone the repo to your local machine
2. cd into the directory
3. run "npm install" to install all the necessary packages
4. run "node server.js" in the root directory to start the application.

## Using the app
Clicking the "scrape for articles button" will grab a fresh set off articles from Crosscut's homepage. Saved articles will display on the Saved page, where notes can be added to them. Articles can be removed from the Saved page, or cleared out altogether with the "Clear Articles" button.  

## Improvement opportunities
I'd like to rework my front end to borrow less from the example website, but I just ran out of time and wanted to focus on the meat of this assignment (scraping, mongodb controllers, routing, etc). I think I could do a more interesting visual design.

I'd also like to differentiate clearing out all articles from clearing out unsaved articles, so that you could clear and scrape new articles while preservering your saved content.