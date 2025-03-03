
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.page.html',
  styleUrls: ['./api-error.page.scss'],
})
export class ApiErrorPage implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onRefresh() {
    window.location.reload();
  }
}
