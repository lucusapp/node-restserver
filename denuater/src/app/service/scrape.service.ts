import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ScrapeService {
  readonly UrlApi = "https://servidor2018.herokuapp.com/";
  readonly UrlApi2 = "https://servidor2018.herokuapp.com/data";
}
  constructor(private http: HttpClient) {}

  getScrape() {
    return this.http.get(this.UrlApi).pipe(
      map(data => {
        return data["producto"];
      })
    );
  }

  postScrape(url) {
    return this.http.post(this.UrlApi, url);
  }
  postCsv(forma) {
    return this.http.post(this.UrlApi2, forma);
  }
}
