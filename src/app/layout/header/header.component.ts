import { Component, OnInit, Input } from '@angular/core';
import { ServersService } from 'src/app/Servers/servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ser:ServersService, private router:Router) { }


  SeTests

  OnInput(value) {
    this.SeTests =  value;
    this.router.navigate(["search", this.SeTests]);
  }

  ngOnInit() {

  }

}
