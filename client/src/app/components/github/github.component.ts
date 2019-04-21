import { Component, OnInit } from '@angular/core';
import { ServerService } from "../../services/server.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile: any;

  constructor(private server: ServerService) { }

  getProfile() {
    this.server.github().subscribe( (result) => {
      this.profile = result;
      console.log("GOT profile", this.profile);
    });
  }


  ngOnInit() {
    this.getProfile();
  }

}
