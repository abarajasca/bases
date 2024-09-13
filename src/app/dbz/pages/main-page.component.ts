import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {
  constructor(private dbzService: DbzService) { }

  ngOnInit() { }


  get characters() {
    return this.dbzService.characters;
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

}
