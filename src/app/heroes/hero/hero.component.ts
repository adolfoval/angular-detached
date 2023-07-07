import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
  public name: string = "ironman";
  public age:  number = 30;

  get capitalizedName(): string{
    
    return this.name.toUpperCase();
  }

  getHerodescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeName(): void{
    this.name = "Robin Hood";
  }

  changeAge(): void{
    this.age = 60;
  }

  resetInfo(): void{
    this.name = "ironman";
    this.age = 30;
  }
}
