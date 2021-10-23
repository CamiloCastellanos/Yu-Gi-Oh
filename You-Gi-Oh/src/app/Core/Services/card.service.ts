import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardInfo } from '../../Model/CardInfo/CardInfo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private httpclient: HttpClient) { }

  /**
   *
   * @param nameCard
   * @returns CardInfo
   */
  public SharedCard(nameCard: String): Observable<CardInfo> {
    return this.httpclient.get<CardInfo>(`${environment.dbCard}${environment.dbCardInfo}?fname=${nameCard}`)
  }

  /**
   *
   * @returns CardInfo
   */
  public RandomCard():Observable<CardInfo>{
    return this.httpclient.get<CardInfo>(`${environment.dbCard}${environment.dbCardRandom}`)
  }

  /**
   *
   * @param setCode
   * @returns
   */
  public SharedCardSetInfo(setCode:string):Observable<CardInfo>{
    return this.httpclient.get<CardInfo>(`${environment.dbCard}${environment.dbCardSetInfo}?setcode=${setCode}`)
  }

}
