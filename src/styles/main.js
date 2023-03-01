import Controller from "../components/Controller.js";
import Menu from "../components/Menu.js";
import Info from "../components/Info.js";
import RangeBar from "../components/RangeBar.js";
import AudioPlayer from "../components/AudioPlayer.js";

let appData;
const API_URL = "https://inexpensive-relieved-chartreuse.glitch.me/";

let info;
let controller;
let scrubb;
let volumeBar;
let menu;
let audioPlayer;
let fileInput;

window.onload = async () => {

  await initialize(API_URL);
  setupLayout();
  setupAudio();
} 

const initialize = async(api_url) => {

  const req = await fetch(api_url);
  const res = await req.json();

  appData = [
    ...res, 
    {
      type: "open",
      name: "open"
    },
    {
      type: "reset",
      name: "reset"
    }
  ]
}

const setupAudio = () => {

  audioPlayer = new AudioPlayer((state, error) => {
    controller.setState(state);

    switch(state){
      case "error":
        info.update({
          name: audioPlayer.currentTrack.name,
          type: state,
          error: error
        })
        break;

        case "play":

        break;

        default:
          break;
    }

    if(state !== "error"){
      info.update
    }
  })
}

const setupLayout = () => {

  info = new Info("#info", (value) => {
    console.log("info", value);
  })

  controller = new Controller("#controller", (value) => {
    
    console.log(value)
    switch(value) {
      case "play":
      audioPlayer.currentTrack ? audioPlayer.play() : menu.open();
      break;
      case "pause":
        audioPlayer.pause();
      break;
      case "next":
        audioPlayer.next();
      break;
      case "previous":
        audioPlayer.previous();
      break;
    }
  })

  scrubb = new RangeBar("#scrubb", (value) => {

    console.log(value);
  });

  volumeBar = new RangeBar("#volume", (value) => {
    audioPlayer.volume = value;
  });

  menu = new Menu("#menu", async (value) => {

    switch(value.type){
      case "opening":
        info.close();
        break;
      case "music":
      case "file":
        menu.close();
        await audioPlayer.play(value, fetchPlaylist(appData, value.id))
      break;
      case "open":
        fileInput.click();
        break;
      default:
        break;
    }
    console.log("menu", value);
  });
  menu.data = appData;

  const fileInput = document.querySelector("#file-input");
  fileInput.onchange = () => {
    console.log("input changed");
  }
}

const fetchPlaylist = (data, itemID) => {
  let playlist = null;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if(element.children) playlist = fetchPlaylist(element.children, itemID)
    else if(element.id === itemID) playlist = data;

    if(playlist) break;
  }

  return playlist;
}

