if(document.cookie){
    let theme = document.cookie.replace('theme=','');
    if(theme == "white"){
        jQuery(".white-theme").css('display','block');
        jQuery(".blue-theme").css('display','none');
    } else {
        jQuery(".white-theme").css('display','none');
        jQuery(".blue-theme").css('display','block');
    }
} else {
    document.cookie = "theme=white; path=/; max-age=604800";
}

jQuery("#switch-to-blue").on("click", function(){
    jQuery(".blue-theme").fadeToggle("slow", "linear");
    jQuery(".white-theme").fadeToggle("slow", "linear");
    document.cookie = "theme=blue; path=/; max-age=604800";
});

jQuery("#switch-to-white").on("click", function(){
    jQuery(".white-theme").fadeToggle("slow", "linear");
    jQuery(".blue-theme").fadeToggle("slow", "linear");
    document.cookie = "theme=white; path=/; max-age=604800";
});