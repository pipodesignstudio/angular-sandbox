import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

@Input()
public characterList:Character[] = []

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();
onDeleteId(id:string):void {
  this.onDelete.emit(id);
}


}
