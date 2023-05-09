import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9000
    },
    {
        id: uuid(),
        name: 'Trunks',
        power: 500
    }
];

addCharacter(character:Character):void{
    const newCharacter:Character = {
        id: uuid(),
        name: character.name,
        power: character.power
    } 
    this.characters.push(newCharacter);
}

onDeleteCharacter(id:string) {
    this.characters = this.characters.filter(character => character.id !== id)
}
    
}