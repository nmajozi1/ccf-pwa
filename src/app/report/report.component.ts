import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getConservation } from '../state/app.state';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  conserveState$: Observable<any>;
  incident;
  animal;

  constructor(private store: Store) { }

  ngOnInit() {
    this.conserveState$ = this.store.select(getConservation);
// storeData.animal.animalState
    this.conserveState$.subscribe(state => {
      console.log(state.incident.incidentState);
      this.incident = state.incident.incidentState;
      this.animal = state.animal.animalState;
    });
  }

}
