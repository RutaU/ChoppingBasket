$(document).ready(function(){
	$("input.icon-cart").on("click", function(){	
	$.getJSON("list.json")
	.done(function(result) {
		printList(result);
	});
	function printList(result) {
		console.log(result.list.myitems);
	}
	
});
});