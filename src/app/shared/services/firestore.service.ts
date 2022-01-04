import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from 'src/app/core/models/user';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  users: Observable<User[]>;
  userRef:AngularFirestoreCollection;
  constructor(firestore: AngularFirestore) {
    this.userRef = firestore.collection('users');
  }

  getUsers():Observable<User[]>{
    return this.userRef.valueChanges() as Observable<User[]>;
  }

  addUser(user:User):Promise<any>{
    return this.userRef.add({...user});
  }
}
