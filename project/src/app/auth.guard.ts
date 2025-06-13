import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiService } from './services/api.service';
import { SecurdataService } from './services/securdata.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route.url[0].path);
  const token = localStorage.getItem('access_token');
  const loginStatus = token ? true : false;
  if (!loginStatus) {
    window.location.replace('/');
  }
  const objSecur = inject(SecurdataService)
  inject(ApiService).profileMe().subscribe({
    next: (res) => {
      
      const plainTextName = objSecur.encrypt(res.data.name)
      localStorage.setItem('name', plainTextName)
    },
    error: (err) => {
      console.log(err)
      localStorage.removeItem('access_token');
      window.location.replace('/');
    }
  })
  return loginStatus
};
