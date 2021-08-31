import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resolve } from 'url';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name = '';
  welcomeMessageFromService = '';
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService(this.name).subscribe(
      response => this.successResponse(response),
      error => this.failResponse(error)
    );

  }

  successResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  failResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }





}
