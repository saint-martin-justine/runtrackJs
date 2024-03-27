function showhide() {
    var $clic = $("#article");
  
  
    if ($clic.length) {
      
      if ($clic.is(":visible")) {
        $clic.hide();
      } else {
        $clic.show();
      }
    } else {
    
      $clic = $("<clic></article>")
        .attr("id", "article")
        .text("Les logiciels et les cathédrales, c'est un peu la même chose d'abord, on les construit, ensuite, on prie.")
        .appendTo("body");
    }
  }
  