import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1> Heading </h1>' +
  //   '<hr><h2>Template</h2>',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'My First Angular App';
  just = 'Nothing!'
  buttonClick(){
    alert("You have clicked Button!");
  }
  isValid:boolean = false;
  radioClick(v: boolean){
    this.isValid = v;
  }

  templateForm(value: any) {
    alert(JSON.stringify(value));
  }
}
