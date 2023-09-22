# DESCRIPTION
Replaces default styles and white background on chrome:// URLs with a blueish theme akin to a darkmode.

Requires flag chrome://flags/#extensions-on-chrome-urls enabled to work, hence I'm just posting raw code here instead of posting a ready-to-install extension elsewhere.


You can easily customize the colors in the .js file.
<br>Should work on Chromium as well, I use it with ungoogled-chromium.

# INSTALLATION
Over-detailed installation example:
1. Download both .json & .js files and move both of them to a new folder somewhere.
2. Go to chrome://flags/#extensions-on-chrome-urls and set the flag to 'Enabled'.
3. Reset the browser.
4. Go to chrome://extensions and click 'Pack extension' at the top of the page.
5. In 'Extension root directory' select folder with both files ('manifest.json' and the .js file), then click 'Pack extension' below.
6. Drag & drop the .crx file to the chrome://extensions page, a pop-up should ask for installation - click 'Add extension'.
7. Make sure that automatic access to chrome:// URLs is enabled in the extension's settings.
8. You can trash all of the files involved in the process (.json, .js, .crx & possibly a .pem file) - they won't be needed anymore.


