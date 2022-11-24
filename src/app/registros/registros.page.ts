import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  formRegistros: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegistros = this.formBuilder.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      cpf:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      senha:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
      confirmarSenha:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
    });
  }

  ngOnInit() {}

  salvarRegistor() {
    console.log('Formulário: ', this.formRegistros.valid);
  }
}
