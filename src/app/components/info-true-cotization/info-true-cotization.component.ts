import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-true-cotization',
  templateUrl: './info-true-cotization.component.html',
  styleUrls: ['./info-true-cotization.component.scss']
})
export class InfoTrueCotizationComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  back(): void {
    this.route.navigate(['cotizador']);
  }

}
