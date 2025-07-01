import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SneaksService  {
  private readonly BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Search sneakers by keyword
   * @param keyword e.g. 'Yeezy'
   * @param limit number of results (optional, default = 10)
   */
  searchSneakers(keyword: string, limit: number = 10): Observable<any> {
    return this.http.get(`${this.BASE_URL}/search/${keyword}?limit=${limit}`);
  }

  /**
   * Get price and details using style ID
   * @param styleID e.g. 'FY2903'
   */
  getSneakerPrices(styleID: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/prices/${styleID}`);
  }

  /**
   * Get most popular sneakers from StockX
   * @param limit number of results (optional, default = 10)
   */
  getPopularSneakers(limit: number = 10): Observable<any> {
    return this.http.get(`${this.BASE_URL}/popular?limit=${limit}`);
  }
}
