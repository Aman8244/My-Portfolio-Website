var wrap = document.querySelector(".contacts");

wrap.on("scroll", function(evt) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("con-position");
  } else {
    wrap.removeClass("rem-position");
  }
  
});
alert("working");