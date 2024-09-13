import { Injectable } from '@angular/core';
import { v4 as uuid} from  'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    }
  ]

  onNewCharacter(character: Character): void {
    this.characters.push({ id: uuid(), ...character });
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter( (character) => character.id !== id );
  }
}
