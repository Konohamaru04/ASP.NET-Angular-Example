import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users: any;

  constructor(private http: HttpClient){}

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(Response => {
      this.users = Response;
    },
     error => {
      if(error){
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  
}