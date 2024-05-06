function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// call the functions with 3 diffrent value
var album1 = make_album("Atif Aslam", "New song.1");
var album2 = make_album("Rahat Fateh Ali Khan", "New Song Release");
var album3 = make_album("Nusrat Fateh Ali Khan", "Song", 10);
console.log(album1);
console.log(album2);
console.log(album3);
