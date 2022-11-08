import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDistribuidores } from 'src/app/interfaces/distribuidores.interface';
import { CotizadorService } from 'src/app/services/cotizador.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public cotizacionForm: FormGroup;
  public alert: boolean;
  public distribuidores: IDistribuidores[];


  constructor(
    public cotizadorService: CotizadorService,
    private route: Router
  ) {

    this.cotizacionForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      name: new FormControl('', [Validators.required, Validators.maxLength(64)]),
      page: new FormControl('', [Validators.required, Validators.maxLength(64)]),
      distributor: new FormControl(0, Validators.required)
    });

    this.alert = false;
    this.distribuidores = [];
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.cotizadorService.getPages().subscribe(data => {
      this.distribuidores = data.distribuidores;
    })
  }

  sendData(): void {
    const data = this.cotizacionForm.value;
    if (this.cotizacionForm.valid) {
      this.cotizadorService.sendCotizacion(data).subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
        this.route.navigate(['send-cotization'])
      });
    } else {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 1500);
    }
  }

  get page() { return this.cotizacionForm.get('page'); }
  get email() { return this.cotizacionForm.get('email'); }
  get distributor() { return this.cotizacionForm.get('distributor'); }
  get name() { return this.cotizacionForm.get('name'); }

}
