import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EUrls } from '../enums/urls.enum';
import { environment } from '../../../environments/environment';

const DEFAULT_COUNT = 5;

@Injectable()

export class DadataService {

  constructor(
    private http: HttpClient
  ) {}

  public getSuggestions(query: string): Observable<any> {
    const body = { query, count: DEFAULT_COUNT };
    const options = {
      headers : {
        Authorization: `Token ${environment.dadataApiKey}`
      }
    }
    return this.http.post(EUrls.DadataOrg, body, options);
  }

}
