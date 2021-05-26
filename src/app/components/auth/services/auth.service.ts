import { Injectable } from '@angular/core';
import { Session } from 'src/generated/graphql';

@Injectable()
export class AuthService {
    constructor() { }

    registerToken(token): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    registerCurrentUser(user): void {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getCurrentUser(): Session {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    getCurrentRole(): string {
        return this.getCurrentSession().user.role;
    }

    registerCurrentSession(session) {
        localStorage.setItem('currentSession', JSON.stringify(session));
    }

    getCurrentSession() {
        return JSON.parse(localStorage.getItem('currentSession'));
    }


    clearStorage() {
        localStorage.clear();
    }

    logout() {
        this.clearStorage();
    }

    isConnected(): boolean {
        return Boolean(localStorage.getItem('token'));
    }
}
