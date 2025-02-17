import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DetailsComponent} from "./details/details.component";

const routeConfig: Routes = [

    {
        path: '',
        component: HomeComponent,
        title:'Home Page'
    },
    //5 8:00
    {
        //5 10:34 path: 'details',
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];
export default routeConfig;