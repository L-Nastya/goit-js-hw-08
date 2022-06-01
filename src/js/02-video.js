import Player from '@vimeo/player';
import {throttle} from "lodash"
const player = new Player('vimeo-player');
const inframe = document.querySelector("#vimeo-player")

const onPlay = function (data) {
   const value = data.seconds;
   const pauseTime = JSON.stringify(value);
   localStorage.setItem("videoplayer-current-time", pauseTime);
    };
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0)
