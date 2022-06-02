import { Directive, ElementRef, HostListener, Renderer2, TemplateRef } from '@angular/core';
import { Observable, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @HostListener('swipeleft', ['$event']) onSwipeLeft($event: any){
    console.info('swipeleft: ' + $event);
    this.renderer.addClass(this.el.nativeElement, 'swipe-left');
    timer(250).subscribe(() => this.renderer.removeClass(this.el.nativeElement, 'swipe-left'));
  }
  @HostListener('swiperight', ['$event']) onSwipeRight($event: any){
    console.info('swiperight: ' + $event);
    this.renderer.addClass(this.el.nativeElement, 'swipe-right');
    timer(250).subscribe(() => this.renderer.removeClass(this.el.nativeElement, 'swipe-right'));
  }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

}
