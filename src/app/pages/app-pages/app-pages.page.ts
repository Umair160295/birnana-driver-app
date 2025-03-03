
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-app-pages',
  templateUrl: './app-pages.page.html',
  styleUrls: ['./app-pages.page.scss'],
})
export class AppPagesPage implements OnInit {
  id: any;
  name: any;
  content: any;
  loaded: boolean;
  constructor(
    private route: ActivatedRoute,
    public util: UtilService,
    public api: ApiService,
  ) {
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.id && data.name) {
        this.loaded = false;
        this.id = data.id;
        this.getPageInfo();
      }
    })
  }

  getPageInfo() {
    const param = {
      id: this.id
    };
    console.log('param', param);
    this.api.post_private('v1/pages/getContent', param).then((data: any) => {
      this.loaded = true;
      console.log(data);
      if (data && data.status && data.status == 200 && data.data) {
        this.name = data.data.name;
        this.content = data.data.content;
      }
    }, error => {
      console.log(error);
      this.util.apiErrorHandler(error);
      this.loaded = true;
    }).catch(error => {
      console.log(error);
      this.util.apiErrorHandler(error);
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

  onBack() {
    this.util.onBack();
  }

}
