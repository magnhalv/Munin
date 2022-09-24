import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MemorySet} from '../dto/MemorySet';
import {RD, toRD} from '../dto/RD';
import {API_URL} from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class MemorySetsService {

  readonly url = `${API_URL}/api`;

  constructor(private http: HttpClient) {
  }

  getMemorySets(): Observable<RD<MemorySet[]>> {
    return this.http.get<MemorySet[]>(`${this.url}/MemorySets`).pipe(toRD);
  }
}
