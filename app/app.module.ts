// module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Tabs } from "./components/tabs/tabs";
import { Tab } from "./components/tabs/tab";
import { ChildComponent } from "./components/tabs/child.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Tabs, Tab, ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}