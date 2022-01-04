import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/user';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  users: User[] = [];
  currentUser:User;
  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private auth: AuthService,
    private alertService:AlertService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  public signIn():void{
    this.filterCurrentUser();
  }
  public filterCurrentUser():void{
    this.users.map(user => {
      if(user.email === this.email && user.password === this.password){
        this.currentUser = user;
      }
    });
    this.login();
  }
  public login():void{
    this.auth.login(this.email,this.password).then(()=>{
      this.alertService.success("Bienvenido","Inicio de sesion!",1000);
      localStorage.setItem('user',JSON.stringify(this.currentUser));
      this.router.navigate(['home']);

    }).catch(() => {
      this.alertService.error('Contraseña o email incorrectos!','Intente otra vez!');
      this.email = '';
      this.password= '';
    })
  }
  public redirect(): void {
    this.router.navigate(['register']);
  }
  public getUser(): void {
    this.firestoreService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
