define(['utils'], function (utils, data){
	describe("Second requirement - matching as a substring", function (){
		it("search matches by full match", function(){
			node = {
				      "name": "child2",
				      "expanded": false,
				      "matched": false,
				      "children": []
				    };
			expect(utils.search(node, 'child2')).not.toBeNull();
		});

		it("search matches by substring match", function(){
			node = {
				      "name": "child2",
				      "expanded": false,
				      "matched": false,
				      "children": []
				    };
			expect(utils.search(node, 'ild2')).not.toBeNull();
		});

		it("search matches by substring case insensitive", function(){
			node = {
				      "name": "child2",
				      "expanded": false,
				      "matched": false,
				      "children": []
				    };
			expect(utils.search(node, 'ILD2')).not.toBeNull();
		});
	});
});