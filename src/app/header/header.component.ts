import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Input() isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStorageService, 
                private authService: AuthService
                ) {

    }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
                this.isAuthenticated = !!user;
        });
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    public onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    public onFetchData() {
        this.dataStorageService.fetchRecipes()
        .subscribe(recipes => {
            console.log(recipes);
        });
    }

    onLogout() {
        this.authService.logout();
    }
}