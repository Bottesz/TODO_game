export default class JatekMester{

    #lista=[];

    constructor(lista,szuloelemB,szuloElemL){
        this.#lista = lista
        this.szuloelemB = szuloelemB
        this.szuloElemL = szuloElemL
        
    }

    esemenykezelotorles(){
        window.addEventListener("torles", (event) => {
            console.log(event.detail);
            this.#lista.splice(event.detail,1);
            this.megjelenitelemk()
        })
    }


    esemynkezelofelvetel(){
        window.addEventListener("felvetel",(event) => {
        console.log(event.detail);

    })
}
    megjelenitbevitel(){
        new Bevitel(this.szuloelemB)
    }


    megjelenitlistaelemek(){
        this.szuloElemL.innerhtml = " ";
        for (let index = 0; index < this.#lista.length; index++) {
            const element = array[index];
            
        }
    }
}