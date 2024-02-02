import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  public sendCredentials(email:string, password:string):Observable<any>
  {
    const body = {email,password}

    return this.http.post(`${this.URL}/auth/login`,body)
    .pipe(
      tap((response: any)=>{
        const { tokenSession } = response;
        this.cookie.set("token",tokenSession,4,"/");
      })
    )
  
  }

  checkCookiesSession():boolean
  {
    try {
      const token:boolean = this.cookie.check('token');
      if(!token) this.router.navigate(['/','auth']);
      
      return token
    } catch (error) {
      console.log('No se pudo autenticar la sesion');
      return false;
    }
  }

  getToken():string 
  {
    return this.cookie.get('token');
  }
}
