import { Injectable } from '@angular/core';
import { Sondage } from './model/sondage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
/*
  getSondages(): Observable<Sondage[]> {
    const sondage = of(Sondage);
    return sondage;
  }*/
}
