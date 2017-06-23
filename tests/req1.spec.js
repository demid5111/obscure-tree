define(['utils'], function (utils, data){
	describe("First requirement - not changing the original tree", function (){
		it("search does not modify the original tree", function(){
			node = {
				      "name": "child2",
				      "expanded": false,
				      "matched": false,
				      "children": [
				        {
				          "name": "child21",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        },
				        {
				          "name": "child21-keyword",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        }
				      ]
				    };
			expect(utils.search(node, 'ild')).not.toEqual(node);
		});
	});
});