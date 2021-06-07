import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTipoCredito () {
    return of ([
      {
        value: 1, 
        label: 'Presento certificado CBA ME CAPACITA' 
      },
      {
        value: 0, 
        label: 'No poseo certificado'
      },
      {
        value: null, 
        label: '--------'
      }
    ]);

  }
  getMontos (tipoId : Number = 1) {
    return of ([
    {
      value : null,
      label : "---",
      tipoId: null
    },
    {
      value: '30000',
      label: '30000',
      tipoId: 1
    },
    {
      value: '15000',
      label: '15000',
      tipoId: 0
    }
    ]
    .filter(entry => {
      if (tipoId) {
        return entry.tipoId == tipoId;
      }
      else {
        return true;
      } 
    })
    );
  }
}
