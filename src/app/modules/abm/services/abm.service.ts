import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Image } from 'src/app/core/models/image';

@Injectable({
  providedIn: 'root'
})
export class AbmService {
  images: Observable<Image[]>;
  imageRef:AngularFirestoreCollection;
  constructor(firestore: AngularFirestore, private storage:AngularFireStorage) {
    this.imageRef = firestore.collection('images');
  }

  getImages():Observable<Image[]>{
    return this.imageRef.valueChanges() as Observable<Image[]>;
  }

  addImage(image:Image):Promise<any>{
    return this.imageRef.add({...image});
  }
  uploadFile(file:File, folder:any, nameImage:any, name:any){
    const filePath = `${folder}/${nameImage}_${name}.png`;
    const ref = this.storage.ref(filePath);
    return ref.put(file);
  }
  downloadFile(filePath:string):Observable<any>{
    const ref = this.storage.ref(filePath);
    return ref.getDownloadURL();
  }

}
