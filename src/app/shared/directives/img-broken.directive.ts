import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})

export class ImgBrokenDirective {
  @Input() customImg: string = '';
  @HostListener('error') handlerError():void{
    const native = this.Host.nativeElement;
    // console.log('Esta imagen no existe -->', this.Host);
    native.src = this.customImg;
  };

  constructor(private Host:ElementRef) { 
    // console.log(this.Host);
  }

}
