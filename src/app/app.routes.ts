import { Routes } from '@angular/router';
import { ThreejsComponent } from './threejs/threejs.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: ThreejsComponent
    }
];
