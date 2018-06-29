
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Program, ProgramResponse, ProgramCollectionResponse } from './program.model';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Params } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class ProgramsService implements Resolve<any> {
    route: ActivatedRouteSnapshot;

    private _programs: BehaviorSubject<ProgramCollectionResponse> = new BehaviorSubject(null);
    readonly programs$: Observable<ProgramCollectionResponse> = this._programs.asObservable();

    private _program: BehaviorSubject<Program> = new BehaviorSubject(null);
    readonly program$: Observable<Program> = this._program.asObservable();

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        this.route = route;
        // its detail view, because we have an id in the route url
        if (this.route && this.route.params.hasOwnProperty('id')) {
            // console.log('DETAIL');

            return this.getProgram(this.route.params.id);
        } else {
            // console.log('LIST');

            return this.getPrograms();
            // list view, because we do not have an id in the route url
        }
    }
    constructor(
        private http: HttpClient
    ) { }

    getPrograms(page = 1): Observable<ProgramCollectionResponse> {
        const url = 'http://localhost:3000/programs';
        let params = new HttpParams();
        params = params.append('page', page.toString());
        return this.http.get<ProgramCollectionResponse>(url, { params: params })
            .pipe(
                tap(response => {
                    if (page === 1) {
                        return this._programs.next(response);
                    }
                    const current = this._programs.getValue();
                    current.meta = response.meta;
                    const start = response.meta.page * response.meta.perPage;
                    current.data.splice(start, 0, ...response.data);
                    this._programs.next(current);
                })
            );
    }


    getProgram(id: string): Observable<Program> {

        const url = `http://localhost:3000/programs/${id}`;

        if (id === 'new') {
            const newProgram = new Program();
            this._program.next(newProgram);
            return of(newProgram);
        }

        return this.http.get<Program>(url)
            .pipe(
                tap(program => {
                    // console.log('program there');

                    this._program.next(program);
                }
                )
            );
    }

    deleteProgram(id: string): Observable<Program> {

        const url = `http://localhost:3000/programs/${id}`;

        return this.http.delete<Program>(url);
    }

    updateProgram(program: Program): Observable<Program> {

        const url = `http://localhost:3000/programs/${program._id}`;

        return this.http.put<Program>(url, program);
    }

    createProgram(program: Program): Observable<Program> {

        const url = `http://localhost:3000/programs/${program._id}`;

        return this.http.post<Program>(url, program);

    }

    saveProgram(program: Program): Observable<Program> {

        if (!program._id) {
            return this.createProgram(program);
        } else {
            return this.updateProgram(program);
        }
    }
}
