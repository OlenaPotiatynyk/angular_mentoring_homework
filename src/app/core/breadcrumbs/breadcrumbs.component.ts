import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: {
    name: string;
    url: string
  }[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });

      const url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');
      this.breadcrumbs.push({
        name: node.data['breadcrumb'],
        url: '/' + url
      });
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
}
