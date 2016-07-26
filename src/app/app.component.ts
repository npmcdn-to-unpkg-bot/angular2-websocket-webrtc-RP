
import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';


import { HeroService }        from './hero/hero.service';
import './rxjs-extensions';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MdButton} from "@angular2-material/button/button";
import {MdInput} from "@angular2-material/input/input";
import {MdCheckbox} from "@angular2-material/checkbox/checkbox";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {MdRadioButton, MdRadioGroup} from '@angular2-material/radio';



@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar, MdButton, MdInput, MdRadioGroup, MdRadioButton, MdCheckbox, MdIcon],
  providers: [
    HeroService, MdIconRegistry
  ]
})
export class AppComponent {
  title = 'Tour of Ng2 Demo';
  formShowing: boolean = false;

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
