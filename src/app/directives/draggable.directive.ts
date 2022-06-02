import { Directive, ElementRef, HostListener, Renderer2, TemplateRef } from '@angular/core';
import { Observable, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @HostListener('swipeleft', ['$event']) onSwipeLeft($event: any){
    this.toggleClass('swipeleft');
  }
  @HostListener('swiperight', ['$event']) onSwipeRight($event: any){
    this.toggleClass('swiperight');
  }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  private toggleClass(action: 'swiperight' | 'swipeleft') {
    this.renderer.addClass(this.el.nativeElement, action);
    timer(250).subscribe(() => this.renderer.removeClass(this.el.nativeElement, action));
  }
}
