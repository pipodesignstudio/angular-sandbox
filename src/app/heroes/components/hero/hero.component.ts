import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  public value:string = '';
  
  changeName(name:string):void {
    this.name = name;
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

}
