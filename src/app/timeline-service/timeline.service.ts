import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {TimelineEvent} from '../timeline-event';
import {EventData} from '../event-data';

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
  deleteURL: string;

  get(): Observable<EventData[]> {
    console.log('timelineService.get');
    return this.http.get<EventData[]>(this.url);
  }

  add(eventData: EventData): Observable<EventData[]> {
    console.log('timelineService.addEvent');
    return this.http.post<EventData[]>(this.addEventURL, eventData, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  update(timelineEvent: TimelineEvent): Observable<EventData[]> {
    return this.http.put<EventData[]>(this.updateURL, timelineEvent, httpOptions);
  }

  delete(timelineEvent: TimelineEvent): Observable<EventData[]> {
    const url = `${this.deleteURL}/${timelineEvent.id}`;
    return this.http.delete<EventData[]>(url, httpOptions);
  }
}
