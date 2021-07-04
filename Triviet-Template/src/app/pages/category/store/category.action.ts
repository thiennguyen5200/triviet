import { Action } from '@ngrx/store'
import { Category } from '../../../ngrx-store/models/category.model'

export enum CategoryActionTypes {
    LOAD_ITEM = '[Category] Load item',
    LOAD_ITEM_SUCCESS = '[Category] Load item success',
    LOAD_ITEM_FAILURE = '[Category] Load item failure',
    ADD_ITEM = '[Category] Add item',
    ADD_ITEM_SUCCESS = '[Category] Add item success',
    ADD_ITEM_FAILURE = '[Category] Add item failure',
    UPDATE_ITEM = '[Category] UPDATE item',
    UPDATE_ITEM_SUCCESS = '[Category] UPDATE item success',
    UPDATE_ITEM_FAILURE = '[Category] UPDATE item failure',
    DELETE_ITEM = '[Category] Delete item',
    DELETE_ITEM_SUCCESS = '[Category] Delete item success',
    DELETE_ITEM_FAILURE = '[Category] Delete item failure'
}
export class LoadCategoryAction implements Action {
    readonly type = CategoryActionTypes.LOAD_ITEM;
}

export class LoadCategorySuccessAction implements Action {
    readonly type = CategoryActionTypes.LOAD_ITEM_SUCCESS;
    constructor(public payload: Category){}
}

export class LoadCategoryFailureAction implements Action {
    readonly type = CategoryActionTypes.LOAD_ITEM_FAILURE;
    constructor(public payload: Error){}
}

export class AddCategoryAction implements Action {
    readonly type = CategoryActionTypes.ADD_ITEM;
    constructor(
        public payload: Category
    ){}
}
export class AddCategorySuccessAction implements Action {
    readonly type = CategoryActionTypes.ADD_ITEM_SUCCESS;
    constructor(
        public payload: Category
    ){}
}
export class AddCategoryFailureAction implements Action {
    readonly type = CategoryActionTypes.ADD_ITEM_FAILURE;
    constructor(
        public payload: Error
    ){}
}


export class UpdateCategoryAction implements Action {
    readonly type = CategoryActionTypes.UPDATE_ITEM;
    constructor(
        public payload: Category
    ){}
}
export class UpdateCategorySuccessAction implements Action {
    readonly type = CategoryActionTypes.UPDATE_ITEM_SUCCESS;
    constructor(
        public payload: Category
    ){}
}
export class UpdateCategoryFailureAction implements Action {
    readonly type = CategoryActionTypes.UPDATE_ITEM_FAILURE;
    constructor(
        public payload: Error
    ){}
}

export class DeleteCategoryAction implements Action {
    readonly type = CategoryActionTypes.DELETE_ITEM;
    constructor(
        public id: string
    ){}
}
export class DeleteCategorySuccessAction implements Action {
    readonly type = CategoryActionTypes.DELETE_ITEM_SUCCESS;
    constructor(
        public payload: Category
    ){}
}
export class DeleteCategoryFailureAction implements Action {
    readonly type = CategoryActionTypes.DELETE_ITEM_FAILURE;
    constructor(public payload: Error){}
}

export type CategoryAction = |
LoadCategoryAction| 
LoadCategorySuccessAction|
LoadCategoryFailureAction|
AddCategoryAction|
AddCategorySuccessAction|
AddCategoryFailureAction|
UpdateCategoryAction|
UpdateCategorySuccessAction|
UpdateCategoryFailureAction|
DeleteCategoryAction|
DeleteCategorySuccessAction|
DeleteCategoryFailureAction;