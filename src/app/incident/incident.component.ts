import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IncidentType } from '../state';
import { getConservation } from '../state/app.state';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {

  animal$: Observable<any>;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.animal$ = this.store.select(getConservation);

    this.animal$.subscribe(storeData => {
      console.log('THE ANIMAL IN INCIDENT: ', storeData.animal.animalState);
    });
  }

  reportIssue(incident: string): void {
    this.store.dispatch(new IncidentType(incident));
    this.router.navigate(['report']);
  }

}
