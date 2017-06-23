define(['utils'], function (utils, data){
	describe("Fourth requirement - matched flag is set for matching node", function (){
		var node;
		beforeEach(function(){
			node = {
	                  "name": "child1112",
	                  "expanded": false,
	                  "matched": false,
	                  "children": []
	                };
		});

		it("check with null str", function(){
			expect(utils.search(node, null)).toBeNull();
		});

		it("check with wrong str", function(){
			expect(utils.search(node, "jhfj")).toBeNull();
		});

		it("check with right str", function(){
			expect(utils.search(node, "1112")).toEqual({
	                  "name": "child1112",
	                  "expanded": false,
	                  "matched": true,
	                  "children": []
	                });
		});
	});
});