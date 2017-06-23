'using strict';

requirejs.config({
    baseUrl: '.',
    paths: {
      'raphael': './node_modules/treantjs/vendor/raphael',
      'Treant': './node_modules/treantjs/Treant',
      'utils': './utils/utils',
      'data': './utils/data',
      'rendering': './utils/rendering',
  }
});

// Start the main app logic.
requirejs(['utils', 'rendering', 'data', 'raphael', 'Treant'], function (scanUtils, renderUtils, data, raphael) {
    const treeNode = Object.freeze(data.treeNode);
    
    function searchInTree(){
        const textToSearch = document.getElementById("searchTxt").value;
        if (!textToSearch){ 
            alert('Enter the string first'); 
            return;
        }
        // clean up html
        const oldTreeHTML = "old-tree";
        const newTreeHTML = "new-tree";
        (document.getElementById(oldTreeHTML) || {}).innerHTML = "";
        (document.getElementById(newTreeHTML) || {}).innerHTML = "";

        const newRootNode = scanUtils.search(treeNode, textToSearch);

        const oldTree = renderUtils.adoptStruct(`#${oldTreeHTML}`, treeNode)
        const renderedOld = new Treant(oldTree);
        
        if (newRootNode){
            const newTree = renderUtils.adoptStruct(`#${newTreeHTML}`, newRootNode)
            const renderedNew = new Treant(newTree);
        }
    }

    document
        .getElementById("searchBtn")
        .addEventListener("click", searchInTree)
});







