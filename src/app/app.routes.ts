import { Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { SingleCatComponent } from './single-cat/single-cat.component';

export const routes: Routes = [
    {path: 'cats', component: CatsComponent},
    {path: 'cats/:id', component: SingleCatComponent}
];
