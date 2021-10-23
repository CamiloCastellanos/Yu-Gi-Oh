import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardInfo } from '../../Model/CardInfo/CardInfo';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpclient: HttpClient) { }



  public SharedCard(nameCard: String):Observable<CardInfo>{
    return this.httpclient.get<CardInfo>(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${nameCard}`)
  }




}
