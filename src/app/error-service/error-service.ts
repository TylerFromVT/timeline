import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  message: string;

  clear() {
    delete this.message;
  }

}
