import { ActionReducerMap } from '@ngrx/store';
import * as conserveStore from './';

export interface AppState {
  incident: conserveStore.IncidentState;
  animal: conserveStore.AnimalState;
}

export const initialState: AppState = {
  incident: conserveStore.initialState,
  animal: conserveStore.initialAnimalState
};

export const reducers: ActionReducerMap<any> = {
  incident: conserveStore.incidentReducer,
  animal: conserveStore.animalReducer
};

export const getConservation = (s: AppState) => s;
