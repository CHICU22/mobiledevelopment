import Controller from "../components/Controller.js";
import Menu from "../components/Menu.js";
import Info from "../components/Info.js";
import RangeBar from "../components/RangeBar.js";

let appData;

let info;
let controller;
let volumeBar;
let menu;
let fileInput;

window.onload = async () => {
  const req = await fetch("./styles/app_data.json");
  appData = await req.json();

  setupLayout();
  setupAudio();
} 

const setupAudio = () => {

  audioPlayer = new audioPlayer((action, error) => {
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
    console.log("controller", value);
  })

  volumeBar = new RangeBar("#volume", (value) => {
    console.log("volume changed", value)
  });

  menu = new Menu("#menu", (value) => {

    switch(value.type){
      case "opening":
        info.close();
        break;
      case "music":
      case "file":
        menu.close();
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

