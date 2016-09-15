import { NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';

enableProdMode();

import { MainComponent } from './components/main/main.component';
@NgModule({
    declarations: [MainComponent],
    imports: [
        IonicModule.forRoot(MainComponent),
        BrowserModule, FormsModule, ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [IonicApp],
    entryComponents: [MainComponent]
})
class MainModule { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(MainModule);
});
