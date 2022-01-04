import { Component, OnInit } from '@angular/core';
import { AbmService } from '../../services/abm.service';
import { Image } from 'src/app/core/models/image';
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss'],
})
export class AbmComponent implements OnInit {
  nameImage: string = '';
  file: File;
  filePath:string = "";
  filePathReference: string = '';
  constructor(private abmService: AbmService,private alertService:AlertService) {}

  ngOnInit(): void {
    console.log(this.GetDate());
  }

  public addImage(): void {
    let image: Image = {
      nameImage: this.nameImage,
      name: JSON.parse(localStorage.getItem('user')).name,
      imagePath: this.filePath,
      date: this.GetDate()
    };
    this.abmService.addImage(image).then((res) => {
      this.alertService.success("Genial!","Se subio su imagen",1500);
      this.nameImage = "";
    });
  }
  getFile(e: any): any {
    this.file = e.target.files;
  }
  UploadFiles() {
    if (this.isValid()) {
      this.filePathReference = `images/${this.nameImage}_${JSON.parse(localStorage.getItem('user')).name}.png`;
      this.abmService
        .uploadFile(this.file, 'images', this.nameImage, JSON.parse(localStorage.getItem('user')).name)
        .then((res) => {
          this.abmService.downloadFile(this.filePathReference).subscribe((res) => {
            this.filePath = res;
            console.log("subido correctamente");
            this.addImage();
          })
        });
    }
   
  }

  public GetDate():string{
    let date:Date = new Date();
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  public isValid():boolean{
    let ret:boolean = true;
    if (this.file === null) {
      this.alertService.error("no ha cargado una imagen", "Cargue una imange!");
      ret = false;
    }
    if (this.nameImage === "") {
      this.alertService.error("no ha cargado un nombre a la imagen", "Cargue una nombre a la imagen!");
      ret = false;
    }
    return ret;
  }
}
