import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  /**
   * Couleur initiale de la directive d'attribut.
   */
  private initialColor: string = '#f5f5f5';

  /**
   * Couleur par défault lorsque l'utilisateur passe le curseur sur l'élément.
   */
  private defaultColor: string = '#009688';

  /**
   * Hauteur par default de la card. Celle-ci est exprimé en pourcentage.
   */
  private defaultHeight: number = 100;

  /**
   * Constructeur de l'objet BorderCardDirective.
   * 
   * @param el Référence du DOM.
   */
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('appBorderCard') borderColor: string; // alias
  //@Input() appBorderCard: string; // sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
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
