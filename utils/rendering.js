define(function(require, exports, module) {
    exports.adoptStruct = adoptStruct;
    exports.appendName = appendName;

    function adoptStruct(containerName, root){
	    return {
		    chart: {
	            container: containerName,
	            
	            connectors: {
	                type: 'step'
	            },
	            node: {
	                HTMLclass: 'nodeExample1'
	            }
	        },
	        nodeStructure: appendName(root),
	    }
	}

	function appendName(root) {
	    return {
	        text: {
	            name: root.name, 
	            desc: 'expanded: ' + root.expanded.toString(),
	            title: 'matched: ' + root.matched.toString()
	        }, 
	        expanded: root.expanded, 
	        matched: root.matched, 
	        children: Array.from(root.children, function (child) {return appendName(child)})
	    }
	};
});