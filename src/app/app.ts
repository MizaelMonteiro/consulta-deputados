import { Component, signal } from '@angular/core';
import { BuscaDeputados } from './components/busca-deputados/busca-deputados';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule,BuscaDeputados],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('deputados');
}
