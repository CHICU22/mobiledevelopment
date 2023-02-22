import Component from "./Component.js";

export default class ToggleButton extends Component{

    #togglesList;

    constructor(elemID) {
        super(elemID);

        this.#togglesList = this.element.children;
        console.log(this.element);
    }

    toggle(index) {

        this.#togglesList[index].style.display = "initial";
    }
}