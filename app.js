const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const musicThumbnail = document.querySelector(".music-thumb");
const musicImage = document.querySelector(".music-thumb img");
const playRepeat = document.querySelector(".play-repeat");

let isPlaying = true;
let indexSong = 0;
let isRepeat = false;
// const musics = ["holo.mp3", "summer.mp3", "spark.mp3", "home.mp3"];
const musics = [
  {
    id: 1,
    title: "Đồi Hoa Mặt Trời",
    file: "doihoamattroi.mp3",
    image:
      "https://haycafe.vn/wp-content/uploads/2022/02/anh-meo-cute-doi-mu-long-tai-tho.jpg",
  },
  {
    id: 2,
    title: "Người Yêu Cũ",
    file: "nyc.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/tai-anh-meo-cute-ngau-1.jpg",
  },
  {
    id: 3,
    title: "Rung Động",
    file: "rungdong.mp3",
    image:
      "https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-43.jpg",
  },
  {
    id: 4,
    title: "Ừ Có Anh Đây",
    file: "ucoanhday.mp3",
    image:
      "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/03/anh-cute-meo-le-luoi.jpg?ssl=1",
  },
  {
    id: 5,
    title: "Chỉ Vì Quá Yêu Nhi",
    file: "chiviquayeuem.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/avatar-anh-meo-cute.jpg",
  },
  {
    id: 6,
    title: "Chỉ Vì Quá Yêu Nhi (Nhưng là bản Trung)",
    file: "china.mp3",
    image:
      "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/03/anh-cute-meo-le-luoi.jpg?ssl=1",
  },
  {
    id: 7,
    title: "Hero",
    file: "CashCashHero.mp3",
    image:
      "https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-trai-tim-5.jpg",
  },
  {
    id: 8,
    title: "Some Where",
    file: "somewhere.mp3",
    image:
      "https://scr.vn/wp-content/uploads/2020/08/%E1%BA%A2nh-m%C3%A8o-kh%C3%B3c-si%C3%AAu-cute.jpg",
  },
  {
    id: 9,
    title: "Hold On",
    file: "Hold On.mp3",
    image:
      "https://hstatic.net/969/1000003969/10/2016/6-22/13315287_1365964010085548_925402683262137113_n.jpg",
  },
  {
    id: 10,
    title: "孫鵬凱 (Xích Linh)",
    file: "XichLinh.mp3",
    image:
      "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet.jpg",
  },
  {
    id: 11,
    title: "Every Moment Of You",
    file: "Every Moment Of You.mp3",
    image:
      "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-cute-meo-con-nguy-hiem.jpg",
  },
  {
    id: 12,
    title: "Vương Vấn Remix",
    file: "vuongvan.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-avatar-meo-cute-de-thuong-600x600.jpg",
  },
  {
    id: 13,
    title: "Em Đau Rồi Đấy Remix",
    file: "emdauroiday.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-meo-cute.jpeg",
  },
  {
    id: 14,
    title: "Hoa Điêu Thuyền Remix",
    file: "hoadieuthuyen.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-anh-meo-cute-dang-yeu-doi-mu-600x600.jpg",
  },
  {
    id: 15,
    title: "Như Bến Đợi Đò Remix",
    file: "nhubendoido.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-anh-meo-cute-doi-mu-nong-tinh.jpg",
  },
  {
    id: 16,
    title: "Tấm Lòng Son Remix",
    file: "tamlongson.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-anh-meo-cute-cap-doi.jpg",
  },
  {
    id: 17,
    title: "Ôm Nhiều Mộng Mơ Remix",
    file: "omnhieumongmo.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute-ban-tim.jpg",
  },
  {
    id: 18,
    title: "Câu Hứa Chưa Vẹn Tròn Remix",
    file: "cauhuachuaventron.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-trang-cute-de-thuong-600x600.jpg",
  },
  {
    id: 19,
    title: "Sao Cũng Được Remix",
    file: "saocungduoc.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-avatar-meo-ngau-loi-nhat.jpg",
  },
  {
    id: 20,
    title: "Phong Dạ Hành Remix",
    file: "phongdahanh.mp3",
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-meo-cute-de-thuong.jpg",
  },


];
/**
 * Music
 * id: 1
 * title: Holo
 * file: holo.mp3
 * image: unsplash
 */
let timer;
let repeatCount = 0;
playRepeat.addEventListener("click", function () {
  if (isRepeat) {
    isRepeat = false;
    playRepeat.removeAttribute("style");
  } else {
    isRepeat = true;
    playRepeat.style.color = "#ffb86c";
  }
});
nextBtn.addEventListener("click", function () {
  changeSong(1);
});
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});
song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  repeatCount++;
  if (isRepeat && repeatCount === 1) {
    // handle repeat song
    isPlaying = true;
    playPause();
  } else {
    changeSong(1);
  }
}
function changeSong(dir) {
  if (dir === 1) {
    // next song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1) {
    // prev song
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  init(indexSong);
  // song.setAttribute("src", `./music/${musics[indexSong].file}`);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    musicThumbnail.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
    musicThumbnail.classList.remove("is-playing");
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
  }
}
function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
function init(indexSong) {
  song.setAttribute("src", `./music/${musics[indexSong].file}`);
  musicImage.setAttribute("src", musics[indexSong].image);
  musicName.textContent = musics[indexSong].title;
}
displayTimer();
init(indexSong);
