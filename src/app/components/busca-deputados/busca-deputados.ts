import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeputadoService } from '../../deputado-service';
import { Deputado } from '../../deputado';

@Component({
  selector: 'app-busca-deputados',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './busca-deputados.html',
  styleUrl: './busca-deputados.scss',
})
export class BuscaDeputados {
  readonly #deputadoService = inject(DeputadoService)

  buscaDeputadoForm: FormGroup = new FormGroup({});

  protected deputados = 
    signal<Deputado[]>([])
  constructor(private fb: FormBuilder) {


    this.#deputadoService.obterTodos().subscribe(
      res => {
        this.deputados.set(res.dados)
      })
  }

  ngOnInit() {
    this.buscaDeputadoForm = this.fb.group({
      conteudoBusca: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  exibirRes(){
    
    const nome = this.buscaDeputadoForm.value.conteudoBusca;

    this.#deputadoService.obterDeputadosPorNome(nome).subscribe(
        res => {
            this.deputados.set(res.dados);
        }
    );
  }

}
