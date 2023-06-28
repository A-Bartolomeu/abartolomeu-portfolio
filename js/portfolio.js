//Portfolio
var grid = jQuery(".grid").imagesLoaded(function () {
  grid.isotope({
    percentPosition: true,
    itemSelector: ".grid-item",
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });

  jQuery(".filters-button-group").on("click", ".button", function () {
    var filterValue = jQuery(this).attr("data-filter");
    grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  jQuery(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = jQuery(buttonGroup);
    $buttonGroup.on("click", ".button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      jQuery(this).addClass("is-checked");
    });
  });
});
