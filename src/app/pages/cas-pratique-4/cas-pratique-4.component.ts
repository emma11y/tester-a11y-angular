import { Component } from '@angular/core';
import { ControlInputComponent } from '@shared/components/control-input/control-input.component';
import { MessageForm } from './message.form';
import { FormsModule, NgForm } from '@angular/forms';
import { markControlAsTouchedOnForm } from '@shared/utilities/form.utility';

@Component({
  selector: 'app-cas-pratique-4',
  imports: [ControlInputComponent, FormsModule],
  templateUrl: './cas-pratique-4.component.html',
  styleUrl: './cas-pratique-4.component.scss',
})
export class CasPratique4Component {
  public messageForm: MessageForm = new MessageForm();

  public onSubmit(ngForm: NgForm): void {
    console.log(this.messageForm, ngForm.valid);
    if (!ngForm.valid) {
      markControlAsTouchedOnForm(ngForm.form);
      alert('Vos champs ne sont pas tous remplis !');
      return;
    }

    alert('Bravo, tous vos champs sont remplis !');
  }
}
