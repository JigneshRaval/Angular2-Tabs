// app.component.ts
// # Base Component
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <tabs>
      <tab [tabTitle]="'Home'">Tab 1 Content</tab>
      <tab tabTitle="About us">Tab 2 Content</tab>
    </tabs>
  `
})
export class AppComponent {
  constructor() {
    
  }
}