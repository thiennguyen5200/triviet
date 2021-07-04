import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as category from '../store/category.action';

@Injectable({
    providedIn: 'root'
})
export class CategoryEffects {
    constructor(private actions$: Actions) {}

    actionName$ = this.actions$.pipe(ofType(category.));

}