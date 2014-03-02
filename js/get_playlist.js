var fs = require('fs');
var fileWriteStream = fs.createWriteStream('./music.txt', {flags: 'w', encoding: 'utf8'});

fs.readdir('d:\\maitian\\music', function (err, result) {
  var playlist = [];
  result.map(function (musicStr) {
    var music = {};
    music.title = musicStr.split(" - ")[0];
    music.artist = musicStr.split(" - ")[1].split(".mp3")[0];
    music.cover = "img/bg.jpg";
    music.mp3 = "music/" + musicStr;
    playlist.push(music);
    fileWriteStream.write(JSON.stringify(music) + ",");
  });
});