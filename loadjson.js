$(document).ready(function () {
	$.getJSON("list.json").done(function (result) {
		printList(result);
	});
	function printList(result) {
		console.log(result.myitems);
		for (var item in result.myitems) {
			var image = result.myitems[item].image;
			var descriptionname = result.myitems[item].itemname;
			var description = result.myitems[item].itemdescription;
			var amount = result.myitems[item].amount;
			var priceEu = result.myitems[item].price;
			var priceLt = result.myitems[item].price * 3.45;

			$(".itemList").append($('<tr class="productListing">')
				.append($('<td class="model image">').append($('<div class="list-image-wrap">')
					.append($('<img style="max-width: 70px; max-height: 70px; margin: 0 auto;" src=' + image + ' border="0" />'))))
				
				.append($('<td class="icons">').append(""))
				.append($('<td class="name">').append(descriptionname + "<br>" + description))
				.append($('<td class="kiekis">').append(amount))
				
				.append($("<td>").append("<strong>" + priceEu + "€ <br>" + "</strong>" + priceLt.toFixed(2) + "Lt"))
				.append($('<td><form><div class="button-skytech-container button-trans product-list-button"><div style="width: 24px;" class="button-label"><input src="./Images/glyphicons-191-circle-plus.png" class="icon-cart" name="submit" style="width: 24px; border: 0; cursor: pointer;" value="" aria-label="Į krepšelį" type="image"></div> </div></form></td>'))
				.append($('<td><form><div style="width: 50px;" class="button-skytech-container button-trans product-list-button"><div style="width: 24px;" class="button-label"><input src="./Images/glyphicons-192-circle-minus.png" class="icon-cart" name="submit" style="width: 24px; border: 0; cursor: pointer;" value="" aria-label="Iš krepšelio" type="image"></div> </div></form></td>'))
	
				)
		};
	};
});