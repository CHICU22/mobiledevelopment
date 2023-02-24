export default class Component{
    element;
    constructor(elementID){
        this.element = document.querySelector(elementID);
    }

    setElement(element) {
        this.element = element;
    }
}