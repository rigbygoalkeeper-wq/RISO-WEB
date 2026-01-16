import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private name: string | null = null;

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  hasName() {
    return !!this.name;
  }
}
