//This adds new list item to shopping list
function shoppingList() {
  
  
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    
    const listItem = $('.js-shopping-list-entry').val();
    
    
   if (listItem !== "") {
      $('.shopping-list').append(`<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      
      $('.js-shopping-list-entry').val("");
  }
});


//strike through
  $("ul").on("click", ".shopping-item-toggle", function() {
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
});

//delete
$("ul").on("click", ".shopping-item-delete", function() { event.preventDefault();
  $(event.target).closest("li").remove();
});

}

$(shoppingList);




