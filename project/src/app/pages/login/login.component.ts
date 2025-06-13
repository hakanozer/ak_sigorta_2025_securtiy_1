import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tcControll } from '../../utils/control';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = 'hakanozer02@gmail.com';
  password = '123456';
  error = '';

  constructor( private router: Router, private api: ApiService ) {
    // sınıf başlatıcı - html katmanınından önce çalışır
    const loginStatus = localStorage.getItem('access_token');
    if (loginStatus) {
      window.location.replace('/dashboard');
    }
  }
   

  userLogin( ) {

    const obj1: any = 10
    const obj2: any = '10'
    
    if (obj1 == obj2) {
      // değer açısından kıyaslama
    }

    if (obj1 === obj2) {
      // değer ve tür açısından kıyaslama
    }

    if(this.username == '') {
      this.error = 'Username is required';
    }else if(this.password == '') {
      this.error = 'Password is required';
    }else {
      this.error = '';
      this.api.login(this.username, this.password).subscribe({
        next: (res) => {
          console.log(res.data.access_token)
          localStorage.setItem('access_token', res.data.access_token);
          // this.router.navigate(['/dashboard']);
          window.location.replace('/dashboard');
        },
        error: (err) => {
          this.error = 'Username or password is incorrect';
          console.log(err)
        }
      })
      // this line
      // window.location.href = '/dashboard'; // sayfa yönlendirme - hata
      // this.router.navigate(['/dashboard']); // sayfa yönlendirme - doğru
    }
  }

  userNameControl() {
    this.error = '';
    console.log('Username:', this.username);
    tcControll(this.username)
  }

}
