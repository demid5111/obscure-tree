define(['utils'], function (utils, data){
	describe("Third requirement include node if either children, or parents, or itself match", function (){
		var node;
		beforeEach(function(){
			node = {
			      "name": "child2",
			      "expanded": false,
			      "matched": false,
			      "children": [
			        {
			          "name": "child21-keyword",
			          "expanded": false,
			          "matched": false,
			          "children": []
			        },
			        {
			          "name": "child21",
			          "expanded": false,
			          "matched": false,
			          "children": [
			          	{
				          "name": "child211-keyword",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        },
				        {
				          "name": "child212",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        }
			          ]
			        }
			      ]
			    };
		});

		it("check expandable if child matches", function(){
			var res = utils.search(node, "key");
			expect(res.expanded).toBeTruthy();
			expect(res.matched).toBeFalsy();
			expect(res.children.length).toEqual(2);
			expect(res.children[0].matched).toBeTruthy();
			expect(res.children[0].expanded).toBeFalsy();
		});

		it("check expandable if grandson matches", function(){
			var res = utils.search(node, "key");
			expect(res.expanded).toBeTruthy();
			expect(res.matched).toBeFalsy();
			expect(res.children.length).toEqual(2);
			expect(res.children[1].matched).toBeFalsy();
			expect(res.children[1].expanded).toBeTruthy();
			expect(res.children[1].children[0].matched).toBeTruthy();
			expect(res.children[1].children[0].expanded).toBeFalsy();
		});

		it("check if sons are included if parent matches", function(){
			var newNode = {
			      "name": "child2",
			      "expanded": false,
			      "matched": false,
			      "children": [
			        {
			          "name": "child21-keyword",
			          "expanded": false,
			          "matched": false,
			          "children": []
			        },
			        {
			          "name": "child22-keyword",
			          "expanded": false,
			          "matched": false,
			          "children": [
			          	{
				          "name": "child221",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        },
				        {
				          "name": "child222",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        }
			          ]
			        }
			      ]
			    };
			var res = utils.search(newNode, "key");
			expect(res.expanded).toBeTruthy();
			expect(res.matched).toBeFalsy();
			expect(res.children.length).toEqual(2);
			expect(res.children[1].matched).toBeTruthy();
			expect(res.children[1].expanded).toBeFalsy();
			expect(res.children[1].children.length).toEqual(2);
			expect(res.children[1].children[0].expanded).toBeFalsy();
			expect(res.children[1].children[0].matched).toBeFalsy();
			expect(res.children[1].children[1].expanded).toBeFalsy();
			expect(res.children[1].children[1].matched).toBeFalsy();
		});

		it("check if grandsons are included if parent matches", function(){
			var newNode = {
			      "name": "child2",
			      "expanded": false,
			      "matched": false,
			      "children": [
			        {
			          "name": "child21-keyword",
			          "expanded": false,
			          "matched": false,
			          "children": []
			        },
			        {
			          "name": "child22-keyword",
			          "expanded": false,
			          "matched": false,
			          "children": [
			          	{
				          "name": "child221",
				          "expanded": false,
				          "matched": false,
				          "children": [
				          	{
					          "name": "child2211",
					          "expanded": false,
					          "matched": false,
					          "children": []
					        },
					        {
					          "name": "child2222",
					          "expanded": false,
					          "matched": false,
					          "children": []
					        }
				          ]
				        },
				        {
				          "name": "child222",
				          "expanded": false,
				          "matched": false,
				          "children": []
				        }
			          ]
			        }
			      ]
			    };
			var res = utils.search(newNode, "key");
			expect(res.expanded).toBeTruthy();
			expect(res.matched).toBeFalsy();
			expect(res.children.length).toEqual(2);
			expect(res.children[1].matched).toBeTruthy();
			expect(res.children[1].expanded).toBeFalsy();
			expect(res.children[1].children.length).toEqual(2);
			expect(res.children[1].children[0].expanded).toBeFalsy();
			expect(res.children[1].children[0].matched).toBeFalsy();
			expect(res.children[1].children[0].children.length).toEqual(2);
			expect(res.children[1].children[0].children[0].matched).toBeFalsy();
			expect(res.children[1].children[0].children[0].expanded).toBeFalsy();
			expect(res.children[1].children[0].children[1].matched).toBeFalsy();
			expect(res.children[1].children[0].children[1].expanded).toBeFalsy();
			expect(res.children[1].children[0].matched).toBeFalsy();
			expect(res.children[1].children[1].expanded).toBeFalsy();
			expect(res.children[1].children[1].matched).toBeFalsy();
		});
	});
});