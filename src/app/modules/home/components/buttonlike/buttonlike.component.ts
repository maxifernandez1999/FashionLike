import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonlike',
  templateUrl: './buttonlike.component.html',
  styleUrls: ['./buttonlike.component.scss'],
})
export class ButtonLikeComponent implements OnInit {
  @ViewChild('buttonLike') buttonLike: ElementRef;
  class: string = 'fas fa-thumbs-up';
  constructor(private router: Router, private renderer2: Renderer2) {}

  ngOnInit(): void {}
  public toggle(): void {
    const like: any = this.buttonLike.nativeElement;
    if (like.className === '') {
      this.class = 'fas fa-thumbs-up';

      this.renderer2.addClass(like, 'like');
    } else if (like.className === 'like') {
      this.class = 'fas fa-thumbs-down';
      this.renderer2.removeClass(like, 'like');

      this.renderer2.addClass(like, 'dislike');
    } else if (like.className === 'dislike') {
      this.class = 'fas fa-thumbs-up';
      this.renderer2.removeClass(like, 'dislike');
      this.renderer2.addClass(like, 'like');
    }
  }
}
