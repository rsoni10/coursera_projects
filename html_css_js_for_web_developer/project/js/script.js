$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function(global){
  var dc ={};
  var homeHtml = "snippets/home-snippets.html";

  var insertHtml = function(selector,html){
    var targetElem = document.querySelector(selector);
    targetElem.insertHtml= html;
  };
  var showLoading = function(selector){
var html ="<div class='text-center'>";
html += "<img src='images/ajax-loader.gif'></div>";
insertHtml(selector ,html);
  };

  document.addEventListener("DOMContentLoader" , function(event){
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(homeHtml,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    } ,
    false);
  });


  global.$dc =dc;

})(window)
