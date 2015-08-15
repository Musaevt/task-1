
var back_old,color_old,back_color="rgba(252,199,84,1)",color="black";
function over(Dom_Elem) {
var index=Dom_Elem.target.cellIndex+1;
    
    if(index)
        $('td:nth-child('+(index)+')').each(function(id,el){
                back_old=$(el).css('background-color');color_old=$(el).css('color');
            
                $(el).css({'background-color' : back_color,'color':color}); 
          });
}

function out(Dom_Elem) {
    var index=Dom_Elem.target.cellIndex+1;
    
    if(index)
        $('td:nth-child('+(index)+')').each(function(id,el){
                  $(el).css({'background-color' : back_old,'color':color_old}); 
          }); 
}

$('td').hover(over,out);



//checkboxes show depurture and arrive flights
function checked_funct(eventObj){
 $('input[type=checkbox]').each(function(num,check){
     
     var target=$(check);
     var id;
      switch(target.attr('id')){
          case "departure":id="arrive";break;
          case "arrive" :id="departure";break;
          default:break;
      }
      if(id)
      target.prop("checked")?hide(id,target):show(id,target);
   })
 
}
function hide(id,checkbox){
    if($('#'+id).prop("checked"))
     show(checkbox.attr('id'))
   else
        $('tr.'+id).hide();       
    
}
function show(id,checkbox){
    $('tr.'+id).show();  
}

$('input[type=checkbox]').bind('click',checked_funct);

//fixing thead
var start_pos=$('thead').offset().top;
$(window).scroll(function(){
  if ($(window).scrollTop()>=start_pos) {
      if ($('thead').hasClass()==false) $('thead').addClass('to_top');
   }
  else $('thead').removeClass('to_top');
});
