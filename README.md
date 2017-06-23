### General info

This is the sample project, that solves tree obscuring problem according to pre-defined rules (find them [below](#rules)).
In other words it is needed to build a new subtree of the original tree according to the search string. 

You can use it as a reference for a simple JS application, which uses:
	- requirejs (for working with modules)
	- Treant.js (for visualizing the tree)

Code is written in ES6, tested in Chrome (59+) only.
Tests are written with Jasmine/Karma.

### How to run

Use Node 6.10

1. `npm install`
2. To run tests: `npm run test`

### Rules for tree obscuring{#rules}

These rules are also placed in utils/utils.js.

- Original tree is not modified
- The 'Node matches the search' Term means that Node's name contains the 'search' as a substring (case insensitive)
- Node is included in the resulting subtree if Node, one of its ancestors, or one of its descendants matches the search
- If Node matches the search, its matched property must be set to true, otherwise false
- If at least one descendant of the Node matches the search, Node's expanded property must be set to true, otherwise false.

### For contributors

Feel free to contact me if you want to help with project maintenance.
