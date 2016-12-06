 var collectionItemTemplate =
 var buildCollectionItemTemplate = function() {
     var template =
       '<div class="collection-album-container column fourth">'
     + '  <img src="assets/images/album_covers/01.png"/>'
     + '  <div class="collection-album-info caption">'
        ...
     + '  </div>'
     + '</div>'
     ;
 
     // #2
     return $(template);
 };

 $(window).load(function() {
     // #3
     var $collectionContainer = $('.album-covers');
     // #4
     $collectionContainer.empty();

     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         // #5
         $collectionContainer.append($newThumbnail);
     }
 });