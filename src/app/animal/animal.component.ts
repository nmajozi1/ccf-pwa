import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToIncident(): void {
    this.router.navigate(['incident']);
  }

}
