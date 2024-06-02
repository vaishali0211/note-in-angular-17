import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: CreateComponent },
];
