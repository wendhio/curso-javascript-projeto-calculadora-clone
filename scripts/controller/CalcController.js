class CalController{
    constructor(){
        this.displayCalc = "0";
        this.dataAtual;
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }
}