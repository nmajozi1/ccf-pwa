import { Action } from '@ngrx/store';
export const INCIDENT_TYPE = 'Login User';
export const INCIDENT_TYPE_COMPLETE = 'Registration Complete';


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Incident Type ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class IncidentType implements Action {

  readonly type: string = INCIDENT_TYPE;

  constructor(public payload: any) {
    console.log('ACTION ', INCIDENT_TYPE);
  }

}

export class IncidentTypeComplete implements Action {

  readonly type: string = INCIDENT_TYPE_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', INCIDENT_TYPE_COMPLETE);
  }

}

export type IncidentAction = IncidentType | IncidentTypeComplete;
