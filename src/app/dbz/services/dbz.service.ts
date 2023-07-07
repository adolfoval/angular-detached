import { Injectable } from '@angular/core';
import { v4 as UUId } from "uuid";

import { Character } from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [
        {
            id: UUId(),
            name:"Krillin",
            power: 1000
        }, {
            id: UUId(),
            name: "Goku",
            power: 10000
        }, 
        {
            id: UUId(),
            name: "Bulma",
            power: -1000
        }
    ];

    addCharacter(character: Character): void{

        this.characters.push(character);
    }

    onDeleteCharacter(index: number): void{
        this.characters.splice(index, 1)
    }
    
    deleteCharacterById(id: string): void{
        this.characters = this.characters.filter((character) => character.id !== id);
    }
    
}