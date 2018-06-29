import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramsService } from '../programs.service';
import { Program, ProgramCollectionResponse } from '../program.model';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FuseConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog-component.component';
import { MatDialog, PageEvent, MatButtonToggleGroupMultiple, MatDialogConfig } from '@angular/material';
import { OnDestroy } from '@angular/core';



@Component({
    selector: 'fuse-programs-list',
    templateUrl: './programs-list.component.html',
    styleUrls: ['./programs-list.component.scss']
})

export class FuseProgramsListComponent implements OnInit, OnDestroy {

    programs: ProgramCollectionResponse;
    programsSubscription: Subscription;

    selected = [];

    length = 100;
    pageSize = 20;
    pageSizeOptions = [20];
    cache = {};

    pageEvent: PageEvent;

    columns = [
        {
            prop: 'selected',
            name: '',
            sortable: false,
            canAutoResize: false,
            draggable: false,
            resizable: false,
            headerCheckboxable: true,
            checkboxable: true,
            width: 30
        },
        { name: '_id' },
        { name: 'name' },
        { name: 'applicationId' },
        { name: 'version' }

    ];


    constructor(
        private programsService: ProgramsService,
        public dialog: MatDialog,
        private router: Router
    ) { }
    ngOnInit() {


        this.programsSubscription = this.programsService.programs$.subscribe(
            response => {
                this.programs = response;
                this.programs.data = [...response.data];
            }
        );
        // console.log('looking for id data', this.columns[1]);
    }



    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }


    setPage(pageInfo): void {
        if (this.cache[pageInfo.offset + 1]) {
            return;
        }
        this.cache[pageInfo.offset + 1] = true;
        this.programsService.getPrograms(pageInfo.offset + 1).subscribe();

    }

    onActivate(event: any) {
        if (event.type === 'click' && event.column.prop !== 'selected') {
            this.router.navigate(['/programs', event.row._id]);
        }
    }

    openDialog() {
        // console.log('opened the opendialog', this.selected);
        const dialogRef = this.dialog.open(FuseConfirmDeleteDialogComponent, {
            data: this.selected
        });
    }

    delete(id: string) {
        console.log('everything is good');

        this.programsService.deleteProgram(id)
            .subscribe(
                (sucess) => {
                    this.router.navigate(['/programs']);
                },
                (error) => {
                    console.log('delete program detail error');
                }
            );
    }
    ngOnDestroy() {
        this.programsSubscription.unsubscribe();
    }
}
