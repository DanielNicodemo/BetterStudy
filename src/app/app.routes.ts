import { Routes } from '@angular/router';
import { MateriaComponent } from './materia/materia.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'materias',
        component: MateriaComponent,
        title: 'Matérias',
    },
];
