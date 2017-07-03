import { Component, ElementRef, AfterViewChecked } from '@angular/core';

export class navItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})



export class AppComponent {
  isLoginFormShown: boolean = false;
  SignInElt: ElementRef;
  LoginFormElement: ElementRef;
  title: string = 'Holy';
  navItems: navItem[] = [
    { name: "Home", link: "Home" },
    { name: "Catalog", link: "Catalog" },
    { name: "Contact-Us", link: "Contact-Us" }
    // { name: "Auth", link: "authorization" }
  ];


  constructor(
    private eltRef: ElementRef
  ) {
    this.SignInElt = this.eltRef;
    this.LoginFormElement = this.eltRef;
    document.addEventListener("click", (e: Event) => {
      if (e.target !== this.SignInElt.nativeElement || e.target !== this.LoginFormElement.nativeElement) {
        this.isLoginFormShown=false;
      }
    })



  }

  showLoginForm(e: Event) {
    this.SignInElt.nativeElement = e.target;
    this.isLoginFormShown = true;
  }
  ngAterViewChecked() {
    this.LoginFormElement.nativeElement = document.querySelector("app-auth");
  }

}
