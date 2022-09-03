import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export interface MuninError {
  msg: string;
}

export type RD<D> = RemoteData<D, MuninError>;
type RemoteData<D, E> =
  { status: 'NOT_ASKED' }
  | { status: 'LOADING' }
  | { status: 'SUCCESS'; data: D }
  | { status: 'ERROR'; error: E };


const test = (s: string): string => s + 'test';

export const toRD = <D>(obs: Observable<D>): Observable<RD<D>> => obs.pipe(
    map((r) => ({ status: 'SUCCESS', data: r} as RD<D>)),
    catchError((err) => of({status: 'ERROR', error: { msg: 'UNKNOWN'}} as RD<D>))
  );

