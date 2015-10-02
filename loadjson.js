
$(document).ready(function () {

	$.getJSON("list.json").done(function (result) {
		printList(result);

		$("img.basket-plus").on("click", function () {
			var basket = JSON.parse(localStorage.getItem("basket"));
			var productprice = $(this).closest(".productListing").find("td span").text();
			basket.price += parseFloat(productprice);
			basket.amount += 1;
			localStorage.setItem("basket", JSON.stringify(basket));
			updateBasket();		
		});

		$("#dialog-confirm").dialog({
			autoOpen: false,
			modal: true,
			width: 300
		});
		$("img.basket-minus").click(function (e) {
			e.preventDefault();
			$("#dialog-confirm").dialog({
				buttons: {
					"Delete": function () {
						var basket = JSON.parse(localStorage.getItem("basket"));
						var productprice = $(this).closest(".productListing").find("td span").text();
						if (basket.amount > 0) {
							basket.amount -= 1;
							basket.price -= parseFloat(productprice);
							localStorage.setItem("basket", JSON.stringify(basket));
							updateBasket();
						};
						$(this).dialog("close");
					},
					"Cancel": function () {
						$(this).dialog("close");
					}
				}
			});
			$("#dialog-confirm").dialog("open");
		});
	});

	if (localStorage.getItem("basket") === null) {
		var basket = {
			amount: 0,
			price: 0
		};
		localStorage.setItem("basket", JSON.stringify(basket));
	};
 
	updateBasket();
	
	function updateBasket() {
		var basket = JSON.parse(localStorage.getItem("basket"));
		if (basket.amount == 0) {
			$(".basketinfo").text("Krepšelis yra tuščias");
		} else {
			$(".basketinfo").text("Krepšelyje yra " + basket.amount + " prekės už " + basket.price + "€");
		};
	};

	function printList(result) {
		console.log(result.myitems);
		var index = 0;
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
				.append($('<td id="kiekis-' + index + '" class="kiekis">').append(amount))

				.append($("<td>").append("<strong>" + '<span id="priceEu-' + index + '">' + priceEu + "</span>€ <br>" + "</strong>" + priceLt.toFixed(2) + "Lt"))

				.append($('<td><form><div class="button-skytech-container button-trans product-list-button"><div style="width: 24px;"' +
					' class="button-label"><img src="./Images/glyphicons-191-circle-plus.png" id="plus-' + index + '" class="icon-cart basket-plus" ' +
					' style="width: 24px; border: 0; cursor: pointer;" value="" aria-label="Į krepšelį"></div> </div></form></td>'))

				.append($('<td><form><div class="button-skytech-container button-trans product-list-button"><div style="width: 24px;"' +
					' class="button-label"><img src="./Images/glyphicons-192-circle-minus.png" id="minus-' + index + '" class="icon-cart basket-minus" ' +
					' style="width: 24px; border: 0; cursor: pointer;" value="" aria-label="Iš krepšelio"></div> </div></form></td>'))
				);
			index++;
		};
	};


});