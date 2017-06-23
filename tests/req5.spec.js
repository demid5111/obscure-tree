define(['utils'], function (utils, data){
	describe("Fifth requirement - expanded flag is set for matching node", function (){
		var node;
		beforeEach(function(){
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
		});

		it("check expandable if child matches", function(){
			var res = utils.search(node, "key");
			expect(res.expanded).toBeTruthy();
			expect(res.matched).toBeFalsy();
			expect(res.children.length).toEqual(1);
			expect(res.children[0].matched).toBeTruthy();
			expect(res.children[0].expanded).toBeFalsy();
		});
	});
});