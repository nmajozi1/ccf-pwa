import { SELECT_ANIMAL, SELECT_ANIMAL_COMPLETE} from '../action/animal.action';

export function animalReducer(state: any, action: any): any {
  switch (action.type) {
    case SELECT_ANIMAL: {
      console.log('REDUCER: ', SELECT_ANIMAL);
      return { };
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
