import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatIconModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import { FuseProgramsListComponent } from './programs-list/programs-list.component';
import { FuseProgramsDetailComponent } from './programs-detail/programs-detail.component';
import { FuseSpecialsModule } from '../special-updates/specials.module';
import { FuseManagerModule } from '../manager/manager.module';
import { RouterModule } from '@angular/router';
import { FuseConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog-component.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FuseSharedModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        FuseSpecialsModule,
        FuseManagerModule,
        MatInputModule,
        RouterModule,
        MatIconModule,
        MatDialogModule,
        MatPaginatorModule,
        NgxDatatableModule,
        ReactiveFormsModule
    ],
    exports: [
        FuseProgramsListComponent,
        FuseProgramsDetailComponent
    ],
    declarations: [
        FuseProgramsListComponent,
        FuseProgramsDetailComponent,
        FuseConfirmDeleteDialogComponent
    ],
    providers: [],
    entryComponents: [
        FuseConfirmDeleteDialogComponent
    ],
})
export class FuseProgramsModule { }

