import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>ABCDEF Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
