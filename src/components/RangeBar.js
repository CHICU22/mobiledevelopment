import Component from "./Component.js";

export default class RangeBar extends Component{

    #rangeInput;
    #rangeBar;
    constructor(rangeID=null){
        super(rangeID);

        this.#rangeInput = this.element.querySelector("input[type='range']");
        this.#rangeBar = this.element.querySelector(".range-bar");

        this.#rangeInput.oninput = () =>{
            const value = this.#rangeInput.value;

            this.#rangeBar.style.transform = `scaleX(${value / 100})`;
            this.callback(this.value);
        };
        }

        get value(){
            return parseFloat(this.#rangeInput.value);
        }
        set value(val){
            this.#rangeBar.style.transform = `scaleX(${value / 100})`;
        }
}