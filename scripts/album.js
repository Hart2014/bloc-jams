 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumBach = {
     title: 'The Beginning',
     artist: 'Johann Bach',
     label: 'Classic',
     year: '1720',
     albumArtUrl: 'assets/images/album_covers/bach.jpg',
     songs: [
         { title: 'Song 1', duration: '1:01' },
         { title: 'Song 2', duration: '5:01' },
         { title: 'Song 3', duration: '3:21'},
         { title: 'Song 4', duration: '3:14' },
         { title: 'Song 5', duration: '2:15'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);
     
     var clickHandler = function(){
         var songNumber = $(this).attr('data-song-number');
         
         if (currentlyPlayingSong !== null){
             //This means that the user has selected a new song, and that the song number ofr the currently playing song should reappear as the transition takes place
             var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
             currentlyPlayingSongCell.html(currentlyPlayingSong);
         }
         else if (currentlyPlayingSong !== songNumber){
             //This means that the user is not already listening to the song they're selecting, and we need to change it to the play/pause button
            s$(this).html(pauseButtonTemplate);
            currentlyPlayingSong = songNumber;
         }
         else if (currentlyPlayingSong === songNumber){
             //This means that the user wants the current song to pause, and the pause button needs to turn to play
             $(this).html(playButtonTemplate);
             currentlyPlaying = null;
     }
      
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
    };
 
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
 };

     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');

 var setCurrentAlbum = function(album) {
     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
     // #3
     $albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);     }
 };


// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing songs
 var currentlyPlayingSong = null;

 
 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
});//not sure if this goes here, added it during C18
     
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albums = [albumPicasso, albumMarconi, albumBach];
     var index = 1;

     albumImage.addEventListener("click", function(event) {
         setCurrentAlbum(albums[index]);
         index++;
        if (index == albums.length){
            index = 0;
        }
     });
 };