import { INCIDENT_TYPE, INCIDENT_TYPE_COMPLETE } from '../action/incident.action';
import * as incidentActions from '../action/incident.action';

export function incidentReducer(state: any, action: incidentActions.IncidentAction): any {
  switch (action.type) {
    case INCIDENT_TYPE: {
      console.log('REDUCER: ', INCIDENT_TYPE);
      return {
        incidentState: action.payload
      };
    }
    case INCIDENT_TYPE_COMPLETE: {
      console.log('REDUCER: ', INCIDENT_TYPE_COMPLETE);
      return {
        ...state,
        incidentState: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
