import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost, ITheme} from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) {
  }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiURL}/themes`);
  }

  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`${apiURL}/themes/${id}`);
  }
}
