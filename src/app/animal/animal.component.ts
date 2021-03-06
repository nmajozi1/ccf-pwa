import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SelectAnimal } from '../state';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {

  }

  goToIncident(animal: string): void {
    this.store.dispatch(new SelectAnimal(animal));
    this.router.navigate(['incident']);
  }

}
