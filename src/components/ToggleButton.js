import Button from "./Button.js";

export default class ToggleButton extends Button{

    #togglesList;
    #currentToggleIndex = 0;
    constructor(elemID) {
        super(elemID);

        this.#togglesList = this.element.children;
        
        this.#togglesList[this.#currentToggleIndex].style.display = "initial";
    }

    toggle(index) {

        this.#togglesList[this.#currentToggleIndex].style.display = "none";

        this.#currentToggleIndex++;
        if(this.#currentToggleIndex >= this.#togglesList.length){
            this.#currentToggleIndex = 0;
        };

        this.#togglesList[this.#currentToggleIndex].style.display = "initial";
    }

}