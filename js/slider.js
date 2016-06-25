//Antes de cargar el contenido
$(document).ready(function(){        
    $(".img_1").show();
    $(".img_2").hide();    
});

//Primer Slider
$(document).ready(function(){   
     $("#btn1").click(function(){        
        $("#gif1").fadeIn(1500);
        $("#gif11").hide();
        $("#gif12").hide();
        $("#pnl1").text("Desarrollador Java Sr. en IDS");
        $("#acerca").css("background-color", "#3BB8FF");
        $("#acerca input").css("background-color", "#3BB8FF");
     });
    
    $("#btn2").click(function(){
        $("#gif1").hide();
        $("#gif11").fadeIn(1500);
        $("#gif12").hide();
        $("#pnl1").text("3 años de experiencia");         
        $("#acerca").css("background-color", "#F44336");
        $("#acerca input").css("background-color", "#F44336");
     });
    
    $("#btn3").click(function(){        
        $("#gif1").hide();
        $("#gif11").hide();
        $("#gif12").fadeIn(1500);
        $("#pnl1").text("Especialidad en Software");
        $("#acerca").css("background-color", "#465962");
        $("#acerca input").css("background-color", "#465962");
     });
});

//Segundo Slider
$(document).ready(function(){   
    $("#btn4").click(function(){        
        $("#gif2").fadeIn(1500);
        $("#gif21").hide();
        $("#gif22").hide();
        $("#pnl2").text("Aplicaciones móviles");
        $("#consultoria").css("background-color", "#3691A5");
        $("#consultoria input").css("background-color", "#3691A5");       
     });
    
    $("#btn5").click(function(){
        $("#gif2").hide();
        $("#gif21").fadeIn(1500);
        $("#gif22").hide();
        $("#pnl2").text("Totalmente nativas");
        $("#consultoria").css("background-color", "#54CFE5");
        $("#consultoria input").css("background-color", "#54CFE5");         
     });
    
    $("#btn6").click(function(){
        $("#gif2").hide();
        $("#gif21").hide();
        $("#gif22").fadeIn(1500);
        $("#pnl2").text("Integración con Tablets");        
        $("#consultoria").css("background-color", "#1DE9B6");
        $("#consultoria input").css("background-color", "#1DE9B6");         
     });
});

//Animaciones imagenes
$(document).ready(function(){   
    $("#png1").click(function(){
        $("#png1").toggle(1500);
        $("#png10").toggle(1500);
    });
    $("#png10").click(function(){
        $("#png1").toggle(1500);
        $("#png10").toggle(1500);
    });
    
    $("#png2").click(function(){
        $("#png2").toggle(1500);
        $("#png20").toggle(1500);
    });
    $("#png20").click(function(){
        $("#png2").toggle(1500);
        $("#png20").toggle(1500);
    });
    
    $("#png3").click(function(){
        $("#png3").toggle(1500);
        $("#png30").toggle(1500);
    });
    $("#png30").click(function(){
        $("#png3").toggle(1500);
        $("#png30").toggle(1500);
    });
    
    $("#png4").click(function(){
        $("#png4").toggle(1500);
        $("#png40").toggle(1500);
    });
    $("#png40").click(function(){
        $("#png4").toggle(1500);
        $("#png40").toggle(1500);
    });
    
    $("#png5").click(function(){
        $("#png5").toggle(1500);
        $("#png50").toggle(1500);
    });
    $("#png50").click(function(){
        $("#png5").toggle(1500);
        $("#png50").toggle(1500);
    });
    
    $("#png6").click(function(){
        $("#png6").toggle(1500);
        $("#png60").toggle(1500);
    });
    $("#png60").click(function(){
        $("#png6").toggle(1500);
        $("#png60").toggle(1500);
    });
});