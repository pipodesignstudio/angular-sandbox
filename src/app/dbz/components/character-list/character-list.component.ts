import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

@Input()
public characterList:Character[] = []
onDeletedCharacter(index:number):void {
  console.log(index);
}

onDeleteId() {}


}
