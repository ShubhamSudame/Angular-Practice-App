import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: number;
    display_picture?: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
    private user: User;
    subject = new Subject<User>();

    constructor(private datastorage: DataStorageService) { }

    public setUserProfile(id: string, first_name: string, last_name: string, email: string, phone_number: number, display_picture?: string) {
        this.user = {
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            display_picture: display_picture
        }
        this.subject.next(this.user);
    }

    public setProfile(user: User) {
        this.user = user;
        this.subject.next(this.user);
    }

    public get init() {
        return !!this.user;
    }

    public get userDetail() {
        return {
                first_name: this.init ? this.user.first_name: '',
                last_name: this.init ? this.user.last_name: '',
                email: this.init ? this.user.email: '',
                phone_number: this.init ? this.user.phone_number: '',
                display_picture: this.init ? this.user.display_picture: ''
            }
    }

    public storeUser() {
        this.datastorage.storeUser(this.user);
    }

    public getUser(userid: string) {
        return this.datastorage.getUser(userid);
    }
}