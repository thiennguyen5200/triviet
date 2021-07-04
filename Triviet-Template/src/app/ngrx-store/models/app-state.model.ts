import { User } from './user.model';
import { AccountState } from '../reducers/auth.reducer';

export interface AppState{
    readonly account: AccountState
};