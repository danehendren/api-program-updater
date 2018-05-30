
import { NgModule } from '@angular/core';
import { FuseManagerComponent } from './manager.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        FuseSharedModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [FuseManagerComponent],
    declarations: [FuseManagerComponent],
    providers: [],
})
export class FuseManagerModule { }
