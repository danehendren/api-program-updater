

import { Component, OnInit } from '@angular/core';
import { Program } from '../program.model';
import { ProgramsService } from '../programs.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FuseConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog-component.component';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators/tap';


@Component({
    selector: 'fuse-programs-detail',
    templateUrl: './programs-detail.component.html',
    styleUrls: ['./programs-detail.component.scss']
})




export class FuseProgramsDetailComponent implements OnInit {

    program$: Observable<Program>;



    constructor(
        private router: Router,
        private programsService: ProgramsService,
        public dialog: MatDialog,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    // detailForm: FormGroup;
    detailForm = new FormGroup({
        name: new FormControl()
    });
    showError = false;


    createForm() {
        this.detailForm = this.fb.group({
            name: ['', Validators.required],
            version: ['', Validators.required],
            applicationId: ['', Validators.required]
        });
    }




    ngOnInit() {
        this.program$ = this.programsService.program$.pipe(
            tap(program => {
                console.log(program);
            })
        );
    }



    openDialog() {

        this.dialog.open(FuseConfirmDeleteDialogComponent, {
            disableClose: true

        });
    }


    // Services Actions
    delete(id: string) {

        this.programsService.deleteProgram(id)
            .subscribe(
                (sucess) => {
                    this.router.navigate(['/programs']);
                    console.log('service has happened and now with success');

                },
                (error) => {
                    console.log('delete program detail error');

                }
            );
    }

    update(program: Program) {

        this.programsService.updateProgram(program)
            .subscribe(
                (success) => {
                    this.showError = false;
                    this.router.navigate(['/programs']);
                    console.log('programs detail componnent success');
                },
                (error) => {
                    this.showError = true;
                    console.error('programs detail component', error);
                }
            );
    }

    save(program: Program) {

        this.programsService.saveProgram(program)
            .subscribe(
                (success) => {
                    this.router.navigate(['/programs']);
                    this.showError = false;
                },
                (error) => {
                    this.showError = true;
                    console.error('Saving Error:', error);
                }
            );
    }

}
