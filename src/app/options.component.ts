import { Component, computed, effect, input, signal } from '@angular/core';
import { Option } from './app.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-options',
  template: `
    <div class="flex items-center justify-center h-screen">
      <div class="bg-blue-500 p-6 rounded-lg shadow-lg">
        <h2 class="text-white text-2xl">
          Index seleccionado: {{ state().selectedIndex() }}
        </h2>
        <ul class="mt-5">
          @for (option of options(); track option.label; let index = $index) {
            <li
              (click)="select(index)"
              [ngClass]="{'!text-red-700': state().selectedIndex() === index}"
              class="text-white text-2xl font-bold cursor-pointer">{{ option.label }}</li>
          }
        </ul>
      </div>
    </div>
  `,
  imports: [NgClass],
  standalone: true
})
export class OptionsComponent {
  options = input.required<Option[]>();

  state = computed(() => ({
    options: this.options(),
    selectedIndex: signal(-1)
  }));

  select(idx: number): void {
    this.state().selectedIndex.set(idx);
  }
}
