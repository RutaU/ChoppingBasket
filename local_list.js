
$(document).ready(function(){
	var items = {
		myitems: [{
			itemname: "iPhone",
			image: "./Images/laptop1_small.png",
			price: 150
		},{
			itemname: "Samsung",
			image: "./Images/laptop2_small.png",
			price: 250
		},{
			itemname: "Asus",
			image: "./Images/laptop3_small.png",
			price: 200	
		}]
	}; 
		$("input.icon-cart").on("click", function(){
			localStorage.setItem("items", JSON.stringify(items));
			var mylist = JSON.parse(localStorage.getItem("items"));
			console.log(mylist);
		});
}); 