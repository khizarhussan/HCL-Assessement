import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { MediaUsersState } from 'src/app/store/state/media-users.state';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  allSocialMediaUsers: any;
  @Select(MediaUsersState.getAllSocialMediaUsers) getAllSocialMediaUsers$;
  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  viewPosts(item) {
    this.router.navigate(['list-user-detail', item.id])
  }
}
