import { Injectable } from '@angular/core';
import { delay, Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidadorService {
  private emailsCadastros = [
    'usuario1@exemplo.com',
    'usuario2@exempo.com',
    'teste@exemplo.com',
    'admin@exemplo.com',
    'contato@exemplo.com'
  ];
 
  verificarEmailExistente(email: string): Observable<boolean> {
    return of(this.emailsCadastros.includes(email.toLowerCase())).pipe(delay(1500));
  }
}
