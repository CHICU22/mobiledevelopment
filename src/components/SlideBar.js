export default class SliderBar {

    #rangeContainer;
    #rangeInput;
    #rangeBar;
    constructor(rangeID=null){

        super(rangeID);

        this.#rangeInput = this.#rangeContainer.querySelector("input[type='range']");
        this.#rangeBar = this.#rangeContainer.querySelector(".range-bar");

        this.#rangeInput.addEventListener("input", () => {
            this.#rangeBar.style.transform = `scaleX(${this.#rangeInput.value / 100})`;
        }); 
        // const volume = document.querySelector("#volume");
        // const volumeInput = volume.querySelector("input[type='range']");
        // const volumeBar = volume.querySelector(".range-bar");

        // const changeSliderValue = () => {
        //     volumeBar.style.transform = `scaleX(${volumeInput.value / 100})`;
        // };

        // volumeInput.addEventListener("input", changeSliderValue);
        }
}