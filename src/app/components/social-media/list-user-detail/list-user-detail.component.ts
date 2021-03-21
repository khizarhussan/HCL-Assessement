import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialPostService } from 'src/app/services/core/social-post.service';

@Component({
  selector: 'app-list-user-detail',
  templateUrl: './list-user-detail.component.html',
  styleUrls: ['./list-user-detail.component.scss']
})
export class ListUserDetailComponent implements OnInit {

  listOfUserPost;
  selectedUser;
  constructor(
    private route: ActivatedRoute,
    private socialServicePosts: SocialPostService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const userId = paramMap.get('id');
      this.socialServicePosts.getUserPostById(userId).subscribe((response: any) => {
        if (response) {
          this.listOfUserPost = response;
        }
      })
      this.socialServicePosts.getAllSocailMediaUsers().subscribe((allUsers: any) => {
        allUsers.forEach(element => {
          if (this.listOfUserPost) {
            if(this.listOfUserPost[0]?.userId === element.id){
              this.selectedUser = element;
            }
          }
        });
      })
    })
  }

  goBack() {
    this.location.back();
  }

}
