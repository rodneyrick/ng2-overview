import { Component } from '@angular/core';

@Component({
  selector: 'not-found-page',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>404 Not Found</h1>
      <p>
        You may be lost. Follow the breadcrumbs back
        <a routerLink="/">Home</a>.
      </p>
    </div>
  `
})
export class NotFoundComponent {}