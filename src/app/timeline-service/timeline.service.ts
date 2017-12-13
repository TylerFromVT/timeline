import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {TimelineEvent} from '../timeline-event';
import {EventData} from '../event-data';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class TimelineService {

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/timeline';
  }

  url: string;

  getEvents(): Observable<EventData[]> {
    return this.http.get<EventData[]>(this.url).pipe(
      catchError(this.handleError<EventData[]>(`getTimeline`, [])));
  }

  addEvent(eventData: EventData): Observable<EventData[]> {
    return this.http.post<EventData[]>(this.url, eventData, httpOptions).pipe(
      catchError(this.handleError<EventData[]>(`addEvent`, [])));
  }

  updateEvent(eventData: EventData): Observable<EventData[]> {
    return this.http.put<EventData[]>(this.url, eventData, httpOptions).pipe(
      catchError(this.handleError<EventData[]>(`updateEvent`, [])));
  }

  deleteEvent(eventId: number): Observable<EventData[]> {
    const url = `${this.url}/${eventId}`;
    return this.http.delete<EventData[]>(url, httpOptions).pipe(
      catchError(this.handleError<EventData[]>(`deleteEvent`, [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (): Observable<T> => {
      console.error('Error on operation: ' + operation);
      return of(result as T);
    };
  }

}
