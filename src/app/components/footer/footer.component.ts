import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public menuProducts: any[];
  public menuCompania: any[];
  public menuRedes: any[];

  constructor() { 

    this.menuRedes = [
      {url: '../../../assets/logos/fb-logo.svg'},
      {url: '../../../assets/logos/linkedin-logo.svg'},
      {url: '../../../assets/logos/twitter-logo.svg'},
    ];

    this.menuCompania = [
      {name: 'Nosotros'},
      {name: 'Contactenos'},
      {name: 'Soy cliente'},
      {name: 'Únete a nuestro equipo'},
    ]

    this.menuProducts = [
      {name: 'Arrenadamiento de auto'},
      {name: 'Arrendamiento de equipo mnedico'},
      {name: 'Linea de arrenadamiento'},
    ]
  }

  ngOnInit(): void {
  }

}
