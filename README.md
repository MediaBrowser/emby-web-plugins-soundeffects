# emby.web.plugins.soundeffects

This is a template for a sound effect plugin. To create your own, follow these steps:

* Fork this repository. After forking, you'll probably want to rename it.
* Update package.json (see below). 
* Update plugin.js (see below).
* Update the installation url below.

# package.json

This file is used to display information about your add-on in places such as the installation screen, installed packages list, and catalog.

* name is your package name, and should have no spaces or special characters. This is a package name and is intended to be unique. Changing the name will cause the application to view it as a completely new package.
* update displayName as desired.
* update thumb to supply an image for display. this should be 16*9. It can be a relative or full url.
* if desired, update backdrop to supply a background image. this should be 16*9. It can be a relative or full url.

# plugin.js

A package consists of one or more modules (plugins) that are loaded at runtime. Users will come to think of a package as a plugin when in fact, you can bundle multiple plugins into one package.

* update the name field. This value is used for display.
* update the id field. This is for internal use and should not contain any special characters or spaces.

# Installation

Install into the app by installing a plugin from a url. The url is: http://mediabrowser.github.io/emby.web.plugins.soundeffects/package.json
