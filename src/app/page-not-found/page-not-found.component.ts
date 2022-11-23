import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <h2 class="title" style="text-align: center; color: #000; text-transform: uppercase; font-size: 1.7em; margin-top: 4rem; margin-bottom: 4rem;">Oups ! Cette page n'existe pas</h2>
      <a routerLink="/vehicles" class="waves-effect waves-teal btn-flat" style="margin-top: 4rem; margin-bottom: 4rem;">
        Retourner à l'accueil
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
