import Button from "./Button.js";

export default class ListButton extends Button{

    #listButtonData
    constructor(data){

        super();


        this.#listButtonData = data;

        const divElement = document.createElement("div");


        const template = document.querySelector(".list-item");
        const clone = template.content.cloneNode(true);
        clone.querySelector("label").innerText = this.#listButtonData.name;

        divElement.appendChild(clone);
        console.log(divElement.children[0]);

        this.setElement(divElement.children[0]);

        const iconsContainer = divElement.querySelector(".toggle");
        if(data.type==="folder"){
            iconsContainer.children[0].style.display = "initial";
        }
    }
}