import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const ROUTES: Routes = [
    { path: "", redirectTo: "Home", pathMatch: "full" },
    { path: "Home", "component": HomeComponent },
    { path: "Catalog", "component": CatalogComponent },
    { path: "Contact-Us", "component": ContactUsComponent },
    { path: "**", "component": NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }