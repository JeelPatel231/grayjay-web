How to try:
===========

In order to avoid 10000+ problems with damn CORS, disable it temporarily for a new session (window).

On Windows, open cmd:
>cd C:\Program Files\Google\Chrome\Application

>C:\Program Files\Google\Chrome\Application>chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

Don't close the opened window.

Now clone the repo with submodules

> git clone --recurse-submodules https://github.com/JeelPatel231/grayjay-web.git

Open the project folder is VSCode, open the index.html file and click on the "Show Preview" button -> Hamburger menu -> "Open in browser"

Now copy the url to the window opened before and now each and every edit will reflect on the page, but in dev-friendly (i.e. CORS-unfriendly) browser window!

Enjoy!
