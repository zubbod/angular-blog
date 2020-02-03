import { Component, OnInit } from '@angular/core';
import { DadataService } from '../../shared/services/dadata.service';
import { delay } from 'rxjs/operators';
import { IDadataOrg } from '../../shared/interfaces/i-dadata-org';

@Component({
  selector: 'app-test-prime',
  templateUrl: './test-prime.component.html',
  styleUrls: ['./test-prime.component.scss'],
  providers: [DadataService]
})

export class TestPrimeComponent implements OnInit {

  public def: IDadataOrg = {
    value: 'value',
    inn: 'inn',
    kpp: 'kpp',
    toString: () => `${this.def.inn}, ${this.def.value}`
  };
  public results: Array<IDadataOrg> = [];

  constructor(
    private dadata: DadataService
  ) { }

  ngOnInit() {
  }

  public search(event: any) {
    this.dadata.getSuggestions(event.query).pipe(
      delay(500)
    ).subscribe(res => {
      this.results = res['suggestions'].map(suggestion => {
        return {
          value: suggestion.value,
          inn: suggestion.data.inn,
          kpp: suggestion.data.kpp,
          toString: () => `${suggestion.data.inn}, ${suggestion.value}`
        } as IDadataOrg
      })
    })
  }

  changeValue() {
    this.def = {
      value: 'new',
      inn: 'new',
      kpp: 'new',
      toString: () => `${this.def.inn}, ${this.def.value}`
    };
  }
}
