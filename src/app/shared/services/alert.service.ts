import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  public success(footer:string,message:string,timeOut:number):void{
    this.toastr.success(footer, message, {
      timeOut: timeOut,
    });
  }
  public error(footer:string,message:string):void{
    this.toastr.error(footer, message);
  }
}
