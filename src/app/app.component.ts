import { Component, signal } from '@angular/core';
import { OptionsComponent } from './options.component';

export interface Option {
  label: string;
  action: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<app-options [options]="options()" />`,
  imports: [OptionsComponent]
})
export class AppComponent {
  options = signal<Option[]>([
    { label: 'Account settings', action: 'account' },
    { label: 'Support', action: 'support' },
    { label: 'License', action: 'license' },
  ]);

  constructor() {
    setTimeout(() => {
      console.log('Llegan nuevas opciones!');
      this.options.set([...this.options()]);
    }, 7000);
  }
}
