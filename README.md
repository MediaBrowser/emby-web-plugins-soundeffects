# emby.web.plugins.soundeffects

This is a template for a sound effect plugin. To create your own, follow these steps:

* Fork this repository, or create your own. If creating from scratch, be sure to create a gh-pages branch for Github Pages.
* Update all of the info in package.json. 
* Update the modules (plugins) that are contained in the package

# package.json

* name is your package name, and should have no spaces or special characters. This is a package name and is intended to be unique. Changing the name will cause the application to view it as a completely new package.
* update displayName as desired.

# plugins

* A package consists of one or more modules (plugins) that are loaded at runtime. Users will come to think of a package as a plugin when in fact, you can bundle as many plugins as you like into one package. For example, a you may wish to bundle a theme and a sound effect pack together into one package.

* Rename the coins folder as desired (and update package.json).
* In coins/plugin.js, update the name field
* If desired, add a second sound effect plugin to the package. Simply clone the folder and add to the plugins array in package.json.
