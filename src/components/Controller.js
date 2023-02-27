import Button from "../components/Button.js";
import ToggleButton from "../components/ToggleButton.js";
import Component from "../components/Component.js";

export default class Controller extends Component{

    currentState = false;

    #previousButton;
    #actionButton;
    #nextButton;
    constructor(elemID, callback){
        super(elemID, callback);

        this.#previousButton = new Button("#previous-button", () => {
            this.callback("previous");
        });

        this.#nextButton = new Button("#next-button", () => {
            this.callback("next");
        });

        this.#actionButton = new ToggleButton("#action-button", () => {
            if(this.currentState === "loading") return;
            this.currentState === "pause" ? this.callback("play") : this.callback("pause");
        });
    }

    setState(state){
        this.currentState = state;
        let val = 0;
        switch (this.currentState){
            case "play":
                val=1;
            break;
            case "pause":
                val=0;
            break;
            case "loading":
                val=2;
            break;
            case "error":
                val=3;
            break;
        }
        this.#actionButton.toggle(val);
    }
}