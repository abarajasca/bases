import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public deleteCharacter(uuid: string): void {
    this.onDeleteCharacter.emit(uuid);
  }
}
