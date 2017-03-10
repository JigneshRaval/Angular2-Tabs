// app.component.ts
// # Base Component
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <tabs>
      <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
      <tab tabTitle="Tab 2">Tab 2 Content</tab>
    </tabs>
  `
})
export class AppComponent {
  constructor() {
    
  }
}