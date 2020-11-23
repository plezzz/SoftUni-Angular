import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost, ITheme} from '../shared/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const apiUrl = environment.apiURL;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) {
  }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }

  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`${apiUrl}/themes/${id}`);
  }

}
