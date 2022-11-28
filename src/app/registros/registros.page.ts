/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfValidator } from '../validators/cpf-validators';
import { comparaValidator } from '../validators/compara-validators';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  formRegistro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha.' },
    ],
  };


  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      cpf:['',Validators.compose([Validators.required, CpfValidator.cpfValido])],
      email:['',Validators.compose([Validators.required, Validators.email])],
      senha:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
      confirmarSenha:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
    }, {
      Validator: comparaValidator('senha','confirmarSenha')
    });
  }

  ngOnInit() {}

  salvarRegistor() {
    console.log('Formulário: ', this.formRegistro.valid);
  }
}
