import { Routes, RouterModule, Router } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },

    {
        path: 'manage',
        component: ManageComponent
    }
];

export const AppRoutes: RouterModule = RouterModule.forRoot(routes);
