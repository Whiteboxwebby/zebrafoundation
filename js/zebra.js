$(document).ready(function(){
	//changes the animal image
	$("select[name='animal']").on('change',function(){
		$('#donation-image').removeClass().addClass($(this).val());
	});

	//stores the donation amount and highlights the figure
	$("a[id^='d']").on('click',function(e){
		e.preventDefault();
		$("a[id^='d']").removeClass('selected');
		let ident = $(this).attr('id').substring(1);
		$('#d'+ ident).addClass('selected');
		$("#dValue").val(ident);
	});

	//triggered on custom field being edited
	$("#custd").on('focusout', function(){
		if($(this).val() !== ""){
			$("a[id^='d']").removeClass('selected');
			let clean = $(this).val().replace(/\D/g,'');
			if(clean < 11){
				$(".cust-error").show();
			}
		}
	});

	$("#custd").on('focus', function(){
		$(".cust-error").hide();
	});

});