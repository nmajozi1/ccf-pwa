import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reportIssue(): void {
    this.router.navigate(['report']);
  }

}
