import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataUser } from '../../models/IDataUsers';
import { PhonePipe } from '../../pipes/phone.pipe';
import { PagetitleDirective } from '../../directives/pagetitle.directive';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [PhonePipe, PagetitleDirective],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:DataUser[] = []
  selectUser?:DataUser

  constructor( private api: ApiService, private seo: SeoService ) {}

  ngOnInit() {
    this.seo.seo('Users', 'This is the users page of our application');
    this.api.getAllUsers().subscribe( {
      next: ( res ) => {
        this.users = res.data;
        this.selectUser = res.data[0];
      },
      error: ( err ) => {
        console.log(err);
      }
    })
  }

  fncSelectUser( tr:any, user: DataUser ) {
    console.log(tr);
    this.selectUser = user
  }

}
