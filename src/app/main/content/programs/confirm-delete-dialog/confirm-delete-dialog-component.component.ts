import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProgramsService } from '../programs.service';
import { Router } from '@angular/router';
import { Program } from '../program.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'fuse-confirm-delete-dialog-component',
    templateUrl: 'confirm-delete-dialog-component.component.html',
})
export class FuseConfirmDeleteDialogComponent implements OnInit {
    program$: Observable<Program>;

    constructor(
        @Inject(MAT_DIALOG_DATA) public selectedPrograms: Program[],
        private router: Router,
        private programsService: ProgramsService,
        private dialogRef: MatDialogRef<FuseConfirmDeleteDialogComponent>

    ) { }

    ngOnInit() {
        this.program$ = this.programsService.program$;
    }

    close() {
        const selectedPrograms = this.selectedPrograms;

        this.dialogRef.close();
    }



    delete(id: string) {
        console.log('CDDComponent with the selected programs in delete', this.selectedPrograms);

        const selectedPrograms = this.selectedPrograms;

        close(); {
            this.dialogRef.close('delete');
        }

        // this.programsService.deleteProgram(selectedPrograms)
        //     .subscribe(
        //         (success) => {
        //             close();
        //             console.log('miracle');
        //             this.router.navigate(['/programs']);
        //         },
        //         (error) => {
        //             console.log('delete program detail error');
        //         }
        //     );

        this.programsService.deleteProgram(id)
            .subscribe(
                (success) => {
                    close();
                    this.router.navigate(['/programs']);
                    console.log('service has happened and now with success');
                },
                (error) => {
                    console.log('delete program detail error');
                }
            );
    }
}
