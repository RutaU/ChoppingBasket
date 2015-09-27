$(document).ready(function () {
  $(".listing-filter-panel-vaizdavimas").on('click', function() {
    switch (true) {
      case $(this).hasClass('smallList'):
        $('.productListing').removeClass('productListingSmall').addClass('category-list-table');
        break;
      case $(this).hasClass('normalList'):
        $('.productListing').removeClass('category-list-table').addClass('productListingSmall');
        break;
      default:
        break;
    }
  });
});
 