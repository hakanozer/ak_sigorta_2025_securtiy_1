import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiService } from './services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route.url[0].path);
  const token = localStorage.getItem('access_token');
  const loginStatus = token ? true : false;
  if (!loginStatus) {
    window.location.replace('/');
  }
  inject(ApiService).profileMe().subscribe({
    next: (res) => {
      localStorage.setItem('name', res.data.name)
    },
    error: (err) => {
      console.log(err)
      localStorage.removeItem('access_token');
      window.location.replace('/');
    }
  })
  return loginStatus
};
