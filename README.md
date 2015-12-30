SeriousGmod Enhancement
=============

This repo contains the current source to the SeriousGmod Enhancement Extension built on top of the [Kango Extensions framework](http://kangoextensions.com/).

Features
-----
0. Redirect HTTP to HTTPS
0. Display the current Steam username of a user in relevant areas.

Planned
-----
0. Menu to toggle settings
0. Multiple display formats for displaying Steam user info

Compiling
-----
To compile this yourself, please download the [Kango Extensions framework](http://kangoextensions.com/) and setup your environment. Also ensure you have git installed and properly configured.

1. Open up your terminal (or git bash on Windows) and navigate to the ```kango-framework-latest``` folder (you downloaded this).
2. ```python kango.py create "../SeriousGmodEnhancement" "SeriousGmod Enhancement"```
3. ```cd ../SeriousGmodEnhancement/src/common```
4. ```rm -rf *``` (clean the source dir so we can clone the project)
4. ```git clone https://github.com/zikeji/SeriousGmod-Enhancement.git```
5. Run the build.cmd or build.sh which can be found in the SeriousGmodEnhancement main directory you created in step 2.