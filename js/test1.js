$(init)
   
    $('.ui-box1').hide();
function init(){
	$('.ui-box-a').click(function(){
		$('.ui-box1').show();})

	$('.ui-box1').click(function(){
		$('.ui-box1').hide();})

    $('.ui-part2-littlebox').click(function(){
    	$('.ui-part2-littlebox').css('background', 'white');
    	$(this).css('background', 'rgb(192,192,192)');
    	$('.ui-part2-bigbox').text($('.ui-part2-littlebox').index(this)+1);
    })

}


$('.ui-part3-topbox-item-end').on('click',del);

function del(e){
	$(this).parent().remove();
	var dele=$('.ui-part3-topbox-item');
	for(var i=0;i<dele.length;i++) {
		dele.eq(i).children('.ui-part3-topbox-item-head').text(i+1);
	}
}

$('.ui-part3-nextbox-add').on('click',add);
function add(e){
	var box1=$("<div></div>");
	var box2=$("<div></div>");
	var box3=$("<div></div>");
	var box4=$("<div></div>");
	box1.addClass('ui-part3-topbox-item');
	box2.addClass('ui-part3-topbox-item-head');
	box3.addClass('ui-part3-topbox-item-body');
	box4.addClass('ui-part3-topbox-item-end');
    box2.text($('.ui-part3-topbox-item-head').length+1);
    box4.text('Delete');
    box4.on('click',del);
    box1.append(box2);
	box1.append(box3);
	box1.append(box4);
	$('.ui-part3-topbox').append(box1);
}

