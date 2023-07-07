import { Component, Input, Output, EventEmitter } from "@angular/core";
import { v4 as UUId} from "uuid";

import { Character } from "../../interfaces/character.interface";


@Component({
    selector: "dbz-list-pj",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
})
export class ListCOmponent {

    @Input()
    public characterList: Character[] = [
        {
            id: UUId(),
            name: "Trunks",
            power: 100
        }
    ]

    @Output("eliminar")
    public onDeleteChar: EventEmitter<string> = new EventEmitter(); 

    onDeleteCharacter(id: string):void{
        //TODO: emitir el id
        console.log(id);
        this.onDeleteChar.emit(id);

    }
}