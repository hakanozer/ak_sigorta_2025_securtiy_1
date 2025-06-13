import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { SecurdataService } from '../../../services/securdata.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  name = ''
  constructor( private api:ApiService, private secur: SecurdataService ) {
    try {
        const cipherTextName = localStorage.getItem('name') || ''
        this.name = this.secur.decrypt(cipherTextName)
    } catch (error) {
      localStorage.removeItem('name')
    }

  }

  fncLogout() {
    const answer = confirm('Are you sure you want to logout?')
    if ( answer ) {
      this.api.logout().subscribe({
        next: (res) => {
            localStorage.removeItem('access_token')
            localStorage.clear()
            window.location.replace('/')
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }


}
