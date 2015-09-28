$(document).ready(function(){
	$.getJSON("list.json")
	.done(function(result) {
		printList(result);
	});
	function printList(result) {
		console.log(result.myitems);
	}
	
});