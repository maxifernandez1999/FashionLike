import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire:AngularFireAuth) { }

  async login(email:string, password:string):Promise<any>{
    return await this.authFire.signInWithEmailAndPassword(
      email,
      password
    );
  }

  async logout():Promise<void>{
    return await this.authFire.signOut();
  }

  async register(email:string, password:string):Promise<any>{
    return await this.authFire.createUserWithEmailAndPassword(
      email,
      password
    )
  }

  isLog():Observable<any>{
    return this.authFire.user;
  }
}
