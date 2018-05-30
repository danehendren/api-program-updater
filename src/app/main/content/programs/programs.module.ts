import { NgModule } from '@angular/core';
import { FuseProgramsComponent } from './programs.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { FuseProgramsListComponent } from './programs-list/programs-list.component';
import { FuseProgramsDetailComponent } from './programs-detail/programs-detail.component';

@NgModule({
    imports: [
        FuseSharedModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [
        FuseProgramsComponent,
        FuseProgramsListComponent,
        FuseProgramsDetailComponent
    ],
    declarations: [
        FuseProgramsComponent,
        FuseProgramsListComponent,
        FuseProgramsDetailComponent
    ],
    providers: [],
})
export class FuseProgramsModule { }

