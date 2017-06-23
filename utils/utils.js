define('utils', function(require, exports, module) {
    exports._isNameCorrect = _isNameCorrect;
    exports.search = search;

    function _isNameCorrect(refName, actName) {
      return actName && refName && refName.indexOf(actName.toLowerCase()) > -1;
    }

     /**
       * This function returns new subtree of the original tree which satisfies the following requirements:
       *   - Function doesn't modify original tree
       *   - The 'Node matches the search' Term means that Node's name contains the 'search' as a substring (case insensitive)
       *   - Node is included in the resulting subtree if Node, one of its ancestors, or one of its descendants matches the search
       *   - If Node matches the search, its matched property must be set to true, otherwise false
       *   - If at least one descendant of the Node matches the search, Node's expanded property must be set to true, otherwise false
       */
    function search(root, desiredName, parentMatched) {
        if (!desiredName) {
            return null;
        }

        var expanded = false;
        var matched = _isNameCorrect(root.name || root.text.name, desiredName);
        var children = [];
        var name = root.name;

        // 2. go through children
        root.children.forEach(function(child){
            var resSubtree = search(child, desiredName, matched || parentMatched);
            var expandByChild = resSubtree && (resSubtree.expanded || resSubtree.matched);
            var isChildAdded = expandByChild || parentMatched;
            expanded = expandByChild || expanded;

            if(isChildAdded || matched) {
                children.push(resSubtree);
            }
        });

        return children.length || matched || parentMatched ? 
        {
          expanded: expanded, 
          matched:matched, 
          children:children, 
          name:name
        } 
        : null;
    };
});
