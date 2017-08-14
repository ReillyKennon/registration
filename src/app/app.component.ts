import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Registration Form';

  User: object = {
    first: "",
    last: "",
    email: "",
    password: "",

  }

  onSubmit(){
   
  }
}
