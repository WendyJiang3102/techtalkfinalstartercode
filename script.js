// JavaScript File
// JavaScript File
$( document ).ready(function() {
$("button").click(function(){
    var inputValue= $("#submit").val();
    
    if(inputValue ==="ScriptEd"){
        $("#result").html("Horray!");
        for(var count = 0; count <5; count++){
             $("body").append("<img src='https://media.giphy.com/media/hEIuLmpW9DmGA/giphy.gif'>");
    }else if(inputValue ==="scripted"){
        $("#result").html("Horray!");
    }else{
        $("#result").html("Try Again!");
    }
});

});