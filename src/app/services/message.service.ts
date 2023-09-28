import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})

export class MessageService {


    constructor( 
        private _toastController: ToastController
    ) { }

    public show(message: any, duration = 3000 || undefined) {
        this._toastController.create({
            message: message,
            duration: duration
        }).then(toast => toast.present());
    }
    public error(message: any, duration = 3000 || undefined) {
        this._toastController.create({
            message: message,
            duration: duration,
            cssClass: 'error-toast'
        }).then(toast => toast.present());
    }
}