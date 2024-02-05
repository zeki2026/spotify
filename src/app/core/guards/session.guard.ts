import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {

  const validCookie = inject(AuthService);
    
  
  return validCookie.checkCookiesSession();
};

