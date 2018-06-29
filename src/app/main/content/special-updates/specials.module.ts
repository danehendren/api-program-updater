
import { NgModule } from '@angular/core';
import { FuseSpecialsComponent } from './specials.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        FuseSharedModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [FuseSpecialsComponent],
    declarations: [FuseSpecialsComponent],
    providers: [],
})
export class FuseSpecialsModule { }
