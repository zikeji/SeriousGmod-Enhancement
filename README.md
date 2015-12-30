SeriousGmod Enhancement
=============

This repo contains the current source to the SeriousGmod Enhancement Extension built on top of the [Kango Extensions framework](http://kangoextensions.com/).

Features
-----
* Redirect HTTP to HTTPS
* Display the current Steam username of a user in relevant areas.

Planned
-----
* Menu to toggle settings
* Multiple display formats for displaying Steam user info

Compiling
-----
To compile this yourself, please download the [Kango Extensions framework](http://kangoextensions.com/) and setup your environment. Also ensure you have git installed and properly configured.

0. Open up your terminal (or git bash on Windows) and navigate to the ```kango-framework-latest``` folder (you downloaded this).
0. ```python kango.py create "../SeriousGmodEnhancement" "SeriousGmod Enhancement"```
0. ```cd ../SeriousGmodEnhancement/src/common```
0. ```rm -rf *``` (clean the source dir so we can clone the project)
0. ```git clone https://github.com/zikeji/SeriousGmod-Enhancement.git```
0. Open ```json_extension.json``` in your editor of choice and edit the SteamAPIKey property to your key. Get your API key [here](https://steamcommunity.com/dev/apikey).

You're now ready to build the extension! You can run the following command to have Kango Extensions build it. Run the command from the ```kango-framework-latest``` directory.
* ```python kango.py build "../SeriousGmodEnhancement"```

To install the extension you built, go to the output directory (created when you ran the build command). You can drag the .crx into the ```chrome://extensions``` page (similar process with FireFox).