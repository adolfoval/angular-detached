import { Component, EventEmitter, Output} from "@angular/core";
import { v4 as UUId} from "uuid";

import { Character } from "../../interfaces/character.interface";

@Component({
    selector: "dbz-add-character",
    templateUrl: "./add-character.component.html",
    styleUrls: ["./add-character.component.css"]
})
export class AddCharacterComponent{ 

    @Output("emitir")
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();
    
    public character:Character ={
        id: UUId(),
        name: "loli",
        power:  -20
    } 

    public isDisabled: boolean = false;

    emitCharacter():void{

        if(this.character.name.length === 0 )  return;

        this.onNewCharacter.emit(this.character);

        this.character = {id: UUId(), name : "", power: 0}
    }
}