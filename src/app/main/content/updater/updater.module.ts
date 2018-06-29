import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseUpdaterComponent } from './updater.component';
import { FuseSpecialsModule } from '../special-updates/specials.module';
import { FuseManagerModule } from '../manager/manager.module';


import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FuseManagerComponent } from '../manager/manager.component';
import { FuseProgramsModule } from '../programs/programs.module';


const routes = [
    {
        path: 'updater',
        component: FuseUpdaterComponent
    }
];

@NgModule({
    declarations: [
        FuseUpdaterComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        FuseSpecialsModule,
        FuseManagerModule,
        FuseProgramsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        FuseUpdaterComponent
    ]
})

export class FuseUpdaterModule {
}
