// JavaScript File
// JavaScript File
$( document ).ready(function() {
$("#value").click(function(){
    var inputValue= $("#submit").val();
    
    if(inputValue ==="ScriptEd"){
        $("#result").html("Horray!");
            for(var count = 0; count <5; count++){
            $("#result").html('<img src="https://media.giphy.com/media/hEIuLmpW9DmGA/giphy.gif">');}
    }else if(inputValue === "scripted"){
        $("#result").html("Horray!");
    
    }else{
        $("#result").html("Try Again!");
    }
    $("input").val("");
    });
});