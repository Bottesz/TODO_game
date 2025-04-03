

export default class Bevitel{



    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.inputElem = document.querySelector("#inp");
        this.buttonElem = document.querySelector("#OK");
        console.log(this.buttonElem)
        this.atpakol();
      

    }



    megjelenit(){
        let html=`<div class="bevitel">
        <input type = "text" id=inp placeholder="add todo"  >
        <input type="button" value="Ok" id="OK">
        </div>`
    this.szuloElem.insertAdjacentHTML("beforeend", html);
    }

    atpakol(){
        this.buttonElem.addEventListener("click", ()=> {
            console.log(this.inputElem.value)
            const esemeny = new CustomEvent("felvetel",{detail:this.inputElem.value});
            window.dispatchEvent(esemeny);
        });
    }
}