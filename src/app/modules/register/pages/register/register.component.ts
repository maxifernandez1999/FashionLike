import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private alertService: AlertService,
    private auth:AuthService
  ) {}

  ngOnInit(): void {}
  public redirect(): void {
    this.router.navigate(['login']);
  }
  public register():void{
    this.auth.register(this.email,this.password).then(() => {
      this.login();
    }).catch(() => {
      this.alertService.success("Error!","Intente nuevamente!",1000);
    })
  }
  public login():void{
    this.auth.login(this.email,this.password).then(()=>{
      this.alertService.success('Registrado Correctamente!', 'Bienvenido!',1000);
      this.addUser();

    }).catch(() => {
      this.alertService.error("Error!","Intente nuevamente!")
    })
  }
  public addUser(): void {
    let user: User = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.firestoreService
      .addUser(user)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch(() => {
        console.log('fail');
      });
  }
}
