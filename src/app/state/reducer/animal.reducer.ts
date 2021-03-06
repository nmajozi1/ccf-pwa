import { SELECT_ANIMAL, SELECT_ANIMAL_COMPLETE} from '../action/animal.action';
import * as animalAction from '../action/animal.action';

export function animalReducer(state: any, action: animalAction.AnimalAction): any {
  switch (action.type) {
    case SELECT_ANIMAL: {
      console.log('REDUCER: ', SELECT_ANIMAL);
      return {
        animalState: action.payload
      };
    }
    case SELECT_ANIMAL_COMPLETE: {
      console.log('REDUCER: ', SELECT_ANIMAL_COMPLETE);
      return {
        ...state,
        animalState: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
