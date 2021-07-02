$.widget.bridge('uibutton', $.ui.button);
$(function (){
    var menuItem = $(".sidebar-menu li a[href='" + location.pathname + "']");
    var parentItem = menuItem.parent();
    $(".sidebar-menu li").removeClass("active");
    $(parentItem).addClass("active");
});