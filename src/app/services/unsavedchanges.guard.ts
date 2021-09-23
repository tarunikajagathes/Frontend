import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentLeave {
  canLeave: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(
    component: CanComponentLeave) {
    if (component.canLeave()) {
      return true;
    }
    return false;
  }

}
