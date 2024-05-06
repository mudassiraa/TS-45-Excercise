function make_album(artist_name: string, album_title: string, tracks?:number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name, 
        title: album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks
    }
    return album;
}
// call the functions with 3 diffrent value
let album1 = make_album("Atif Aslam", "New song.1");

let album2 = make_album("Rahat Fateh Ali Khan", "New Song Release");

let album3 = make_album("Nusrat Fateh Ali Khan", "Song", 10)
console.log(album1);
console.log(album2);
console.log(album3);