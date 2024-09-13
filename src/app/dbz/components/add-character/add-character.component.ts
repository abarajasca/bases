import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})

export class AddCharacterComponent {

  @Output()
  public addCharacterEvent: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 23
  }

  emitCharacter(): void {
    if (this.character.name === "") return;
    this.addCharacterEvent.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
}
