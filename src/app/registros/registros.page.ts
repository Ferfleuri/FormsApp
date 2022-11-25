import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  formRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      cpf:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      senha:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
      confirmarSenha:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
    });
  }

  ngOnInit() {}

  salvarRegistor() {
    console.log('Formulário: ', this.formRegistro.valid);
  }
}
