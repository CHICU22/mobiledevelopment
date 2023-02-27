import Controller from "../components/Controller.js";
import Menu from "../components/Menu.js";
import Info from "../components/Info.js";

let appData;

window.onload = async () => {

  const req = await fetch("./styles/app_data.json");
  appData = await req.json();

  setupLayout();
}

const setupLayout = () => {

  const info = new Info("info", (value) => {
    console.log("info", value);
  })

  const controller = new Controller("#controller", (value) => {
    console.log("controller", value);
  })

  const volumeBar = new RangeBar("#volume", (value) => {
    console.log("volume changed", value)
  });

  const menu = new Menu("#menu", (value) => {
    console.log("menu", value);
  });
  menu.data = appData;
  }

