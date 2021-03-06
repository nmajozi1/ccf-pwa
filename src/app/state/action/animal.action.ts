import { Action } from '@ngrx/store';
export const SELECT_ANIMAL = 'Select Animal';
export const SELECT_ANIMAL_COMPLETE = 'Select Animal Complete';


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Select Animal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class SelectAnimal implements Action {

  readonly type: string = SELECT_ANIMAL;

  constructor(public payload: any) {
    console.log('ACTION ', SELECT_ANIMAL);
  }

}

export class SelectAnimalComplete implements Action {

  readonly type: string = SELECT_ANIMAL_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', SELECT_ANIMAL_COMPLETE);
  }

}

export type AnimalAction = SelectAnimal | SelectAnimalComplete;
