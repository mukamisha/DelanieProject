$(document).ready(function()
{
    $("#quick").click(function(){
        $("#quick").hide();
        $("#bad").show();
    });
    $("#bad").click(function(){
        $("#bad").hide();
        $("#quick").show();
    });
});
$(document).ready(function()
{
    $("#hello").click(function(){
        $("#hello").hide();
        $("#nice").show();
    });
    $("#nice").click(function(){
        $("#nice").hide();
        $("#hello").show();
    });
});
$(document).ready(function()
{
    $("#jacky").click(function(){
        $("#jacky").hide();
        $("#muk").show();
    });
    $("#muk").click(function(){
        $("#muk").hide();
        $("#jacky").show();
    });

$("#submit").click(function(hey){
    var nam=$("#name").val()
    var mail=$("#email").val()
    var tex=$("#text").val();
    if(nam!=="" && mail!=="" && tex!==""){
        alert(nam + ","  + mail +"," + "we have recived you feedback, thanks for contacting us");
    }
    else{
        alert("fill the form first");
    }
    hey.preventDefault();

});
$("#div1").mouseover(function(){
    $("#para1").show();
});
$("#div1").mouseleave(function(){
    $("#para1").hide();
});
$("#div2").mouseover(function(){
    $("#para2").show();
});
$("#div2").mouseleave(function(){
    $("#para2").hide();
});
$("#div3").mouseover(function(){
    $("#para3").show();
});
$("#div3").mouseleave(function(){
    $("#para3").hide();
});
$("#div4").mouseover(function(){
    $("#para4").show();
});
$("#div4").mouseleave(function(){
    $("#para4").hide();
});
$("#div5").mouseover(function(){
    $("#para5").show();
});
$("#div5").mouseleave(function(){
    $("#para5").hide();
});
$("#div6").mouseover(function(){
    $("#para6").show();
});
$("#div6").mouseleave(function(){
    $("#para6").hide();
});
$("#div7").mouseover(function(){
    $("#para7").show();
});
$("#div7").mouseleave(function(){
    $("#para7").hide();
});
$("#div8").mouseover(function(){
    $("#para8").show();
});
$("#div8").mouseleave(function(){
    $("#para8").hide();
});
});

