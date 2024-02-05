import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const token = inject(AuthService);
    let newRequest = req.clone(
      {
        setHeaders:{
          authorization: `Bearer ${token.getToken()}`
        }
      }
    );
    // console.log('se agrego el header');
    return next(newRequest);
  } catch (error) {
    console.log('Error en la interceptor');
    return next(req);
    
  }
};
