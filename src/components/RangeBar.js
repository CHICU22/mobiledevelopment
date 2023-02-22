import Component from "./Component.js";

export default class RangeBar extends Component{

    #rangeContainer;
    #rangeInput;
    #rangeBar;
    constructor(rangeID=null){

        super(rangeID);


        console.log(this.element)
        this.#rangeInput = this.element.querySelector("input[type='range']");
        this.#rangeBar = this.element.querySelector(".range-bar");

        this.#rangeInput.addEventListener("input", () => {
            this.#rangeBar.style.transform = `scaleX(${this.#rangeInput.value / 100})`;
        }); 
        }
}