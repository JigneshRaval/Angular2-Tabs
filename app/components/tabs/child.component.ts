/** Child Component Example like React
 * We will use this in tab.ts file : <child-selector></child-selector>
 * We will import this file in app.module.ts file and put in Declaration Array 
 * @NgModule' ({
 *    declarations: [AppComponent, Tabs, Tab, ChildComponent]
 *  })
 */

import { Component } from "@angular/core";

@Component({
  selector: 'child-selector',
  template: `
    <h1>This is Child Component</h1>
  `
})
export class ChildComponent {  
  
}