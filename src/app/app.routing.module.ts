import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuseProgramsListComponent } from './main/content/programs/programs-list/programs-list.component';
import { FuseProgramsDetailComponent } from 'app/main/content/programs/programs-detail/programs-detail.component';
import { FuseUpdaterComponent } from './main/content/updater/updater.component';

const routes: Routes = [
    { path: '', redirectTo: '/programs', pathMatch: 'full' },

    {
        path: 'programs',
        children: [{
            path: '',
            component: FuseProgramsListComponent
        },
        {
                path: ':id',
                component: FuseProgramsDetailComponent
        },
        {
                path: 'new',
                component: FuseUpdaterComponent
        }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
