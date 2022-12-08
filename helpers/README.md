# Ghost helpers
These files need to be added under `{current project}/current/core/frontend/helpers`. Without adding them, there may be website malfunctions.
In order to be able to activate the theme, specify these helpers in the `v1.js` file, that may be found at `{current project}/current/node_modules/gscan/lib/specs/v1.js`. In there, add each helper's name (without the `.js` extension) in the `knownHelpers` array.

# Custom dropdown usage
In order to use a dropdown, the title in ghost editor has to contain `[has_children]` or `[subitem]`. The first one's link will not be working, because it is not called in `navigation.hbs`. The `[has_children]` item will be shown in the website's navigation menu and the `[subitem]` entries will be displayed in the dropdown, after the user clicked on the button.

Usage example:
```
About us [has_children]
About [subitem]
Team [subitem]
Special awards [subitem]
```
