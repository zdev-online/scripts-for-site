jQuery("#switch-to-blue").on("click", function(){
    jQuery(".blue-theme").fadeToggle("slow", "linear");
    jQuery(".white-theme").fadeToggle("slow", "linear");
});

jQuery("#switch-to-white").on("click", function(){
    jQuery(".white-theme").fadeToggle("slow", "linear");
    jQuery(".blue-theme").fadeToggle("slow", "linear");
});

jQuery("#switch-to-white-donate").on("click", function(){
    console.log(1);
    jQuery(".blue-theme-donate").fadeToggle("slow", "linear");
    jQuery(".white-theme-donate").fadeToggle("slow", "linear");
});

jQuery("#switch-to-blue-donate").on("click", function(){
    console.log(2)
    jQuery(".white-theme-donate").fadeToggle("slow", "linear");
    jQuery(".blue-theme-donate").fadeToggle("slow", "linear");
});