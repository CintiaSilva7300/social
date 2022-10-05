import { Pessoas } from './../models/pessoasModel';
import { PessoaService } from './../services/pessoa.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() termoPesquisa: any = '';

  pessoa: any;
  pessoas!: Pessoas[];
  erro: any;
  // termoPesquisa: any

  constructor(private pessoaService: PessoaService) {
    this.getPessoas();
   }

  ngOnInit(): void { }

  getPessoas() {
    this.pessoaService.getPessoas().subscribe(
      (pessoas: Pessoas[]) => {
        this.pessoas = pessoas;
        console.log("O data que recebemos ",this.pessoas);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR:', error)
      })
  }

  filtrarNome() {
    if (this.termoPesquisa.length > 2) { //filtrar apartir do "nome" pelo segundo digito
      this.pessoas = this.pessoas.filter((p: any) => p.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase()))
    }else {
      this.pessoaService.getPessoas().subscribe(
        (pessoas: Pessoas[]) => {
          this.pessoas = pessoas;
        })
    }
  }
}
