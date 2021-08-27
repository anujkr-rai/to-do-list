function event() {
	$("li").on("click", function () {
	$(this).toggleClass("completed");
})
$("span").hover(function () {
	$(this).toggleClass("hovered");
})
$("span").click(function (event) {
	$(this).parent().fadeOut(500,function () {
		$(this).remove();
	})
	event.stopPropagation();
})
}
event();

$("input").keypress(function(val){
	if(val.which==13){
		// alert("entered");
		var todoText=$(this).val();
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
		$("input").val("");
		event();

	}
	else{

	}
})