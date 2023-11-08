function solve(arr) {
  const number = arr.shift();
  const typeOfSong = arr.pop();
  const songs = [];
  class Song {
    constructor(typList, name, time) {
      this.typList = typList;
      this.name = name;
      this.time = time;
    }
  }

  for (const el of arr) {
    const [type, name, time] = el.split("_");
    const song = new Song(type, name, time);
    songs.push(song);
  }
  songs.filter((s) => typeOfSong === "all" || s.typList === typeOfSong).map((s) => console.log(s.name));
}

// solve([3, "favourite_DownTown_3:14", "favourite_Kiss_4:16", "favourite_Smooth Criminal_4:01", "favourite"]);
solve([4, "favourite_DownTown_3:14", "listenLater_Andalouse_3:24", "favourite_In To The Night_3:58", "favourite_Live It Up_3:48", "listenLater"]);
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
