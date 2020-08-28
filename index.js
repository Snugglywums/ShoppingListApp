$function(){
    
    $('#js-shopping-list-form').submit(function(event) {
        // stop the default form submission behavior
        event.preventDefault();
        // in case there's already results
        let ListItem = $('js-shopping-list-entry').val();
    
        $('#shopping-list-entry').val(' ');


        $('.shopping-list').append(
          `<li>
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
      });


    // delete the item
      $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });


    // strike through

      $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
    
    });







