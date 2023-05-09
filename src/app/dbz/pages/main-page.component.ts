import { Component } from "@angular/core";

import { Character } from "../interfaces/character.interfaces";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    public characters: Character[] = [{
        name: 'Krillin',
        power: 1000
    },
    {
        name: 'Goku',
        power: 9000
    },
    {
        name: 'Trunks',
        power: 500
    }
];

onNewCharacter(character:Character):void{
    this.characters.push(character);
    console.log(character);
}

}