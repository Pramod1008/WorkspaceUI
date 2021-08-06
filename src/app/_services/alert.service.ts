// import { Injectable } from '@angular/core';
// import { Router, NavigationStart } from '@angular/router';
// import { Observable, Subject } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AlertService {
//     private subject = new Subject<any>();
//     private keepAfterRouteChange = false;

//     constructor(private router: Router) {
//         // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
//         this.router.events.subscribe(event => {
//             if (event instanceof NavigationStart) {
//                 if (this.keepAfterRouteChange) {
//                     // only keep for a single route change
//                     this.keepAfterRouteChange = false;
//                 } else {
//                     // clear alert message
//                     this.clear();
//                 }
//             }
//         });
//     }

//     getAlert(): Observable<any> {
//         return this.subject.asObservable();
//     }

//     success(message: string, keepAfterRouteChange = false) {
//         this.keepAfterRouteChange = keepAfterRouteChange;
//         this.subject.next({ type: 'success', text: message });
//     }

//     error(message: string, keepAfterRouteChange = false) {
//         this.keepAfterRouteChange = keepAfterRouteChange;
//         this.subject.next({ type: 'error', text: message });
//     }

//     clear() {
//         // clear by calling subject.next() without parameters
//         this.subject.next();
//     }
// }

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from '../_components/alert.model';


@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

    // main alert method    
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new Alert({ id }));
    }
}