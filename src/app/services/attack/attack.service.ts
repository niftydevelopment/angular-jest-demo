import { Injectable } from '@angular/core';

@Injectable()
export class AttackService {
  constructor() { }

  hello = (): string => {
    return 'hello';
  }

}
