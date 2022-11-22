import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  /**
   * Constructeur de l'objet BorderCardDirective.
   * 
   * @param el Référence du DOM.
   */
  constructor(private el: ElementRef) {
    this.setHeight(100);
    this.setBorder(`#f5f5f5`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  /**
   * Change la hauteur de l'élément.
   * 
   * @param height Nouvelle hauteur.
   */
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}%`;
  }

  /**
   * Ajout une bordure de 4px à l'élément.
   * 
   * @param color Couleur de la bordure.
   */
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
