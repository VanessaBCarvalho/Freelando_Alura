import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { EmailValidadorService } from "../services/email-validador.service";

export function emailExistenteValidator(emailService: EmailValidadorService): AsyncValidatorFn | null {
    
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (!control.value) {
            return of(null);
        }
        return of(emailService.verificarEmailExistente(control.value)).pipe(map (existe => existe ? {
            emailExistente: true}: null));
    }
    
}