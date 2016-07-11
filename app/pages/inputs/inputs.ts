import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/inputs/inputs.html'
})
export class InputPage {
  constructor(private navController: NavController,menu: MenuController) {
    menu.enable(true);
  }
}
