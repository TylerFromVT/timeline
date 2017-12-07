import {Injectable} from '@angular/core';
import {Timeline} from './timeline';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {TimelineEvent} from './timeline-event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class TimelineService {

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/timeline';
    this.addEventURL = 'http://localhost:3000/add';
    this.updateURL = 'http://localhost:3000/update';
    this.deleteURL = 'http://localhost:3000/delete';
  }

  url: string;
  addEventURL: string;
  updateURL: string;


  getTimeline(): Observable<any[]> {
    console.log('timelineService.getTimeline');
    return this.http.get<any[]>(this.url);
  }

  addEvent(date: string, title: string, details: string, keywords: string[]): Observable<any[]> {
    console.log('timelineService.addEvent');
    const event = {
      date: date,
      title: title,
      details: details,
      keywords: keywords
    };
    return this.http.post<any[]>(this.addEventURL, event, httpOptions);

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  update(timelineEvent: TimelineEvent): Observable<any[]> {
    return this.http.put<any[]>(this.updateURL, timelineEvent, httpOptions);
  }

  delete(timelineEvent: TimelineEvent): Observable<any[]> {
    const url = `${this.deleteURL}/${timelineEvent.id}`;
    return this.http.delete<any[]>(url, httpOptions);
  }
}
