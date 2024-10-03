export function quantity() {
	// строка для всавки блока навигации через Jquery
	// $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');
		
		var parents = spinner.parents('.holder-slider__info');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");

			updateTotal(parents);
		});

		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
			updateTotal(parents);
		});
		updateTotal(parents);
	});

	function updateTotal(parents) {
			let summ = $('.nights', parents).val() * $('.guests', parents).val() * $('.summ', parents).data('price');
			summ = summ.toFixed(2);
			$('.summ', parents).html('$' + summ)
		}

}