import { Component } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Ironman", "Hulk", "Wonder Woman", "Black Widow", "Darkstar"];
  public lastRemoves?: string;

  removeLastHero():void{

    this.lastRemoves = this.heroNames.pop();
  }
}
