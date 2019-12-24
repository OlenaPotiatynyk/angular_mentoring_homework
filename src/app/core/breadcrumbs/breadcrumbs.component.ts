import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, UrlSegment } from '@angular/router';

import { CoursesService } from '../../courses/courses.service';

import { filter } from 'rxjs/operators';

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

  constructor(private router: Router, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(event => {
        this.breadcrumbs = [];
        const courseId = +event.url.split('/')[2];
        if (courseId) {
          this.coursesService.getItemById(courseId).subscribe(resp => {
            this.breadcrumbs = [];
            this.parseRoute(this.router.routerState.snapshot.root, resp.name);
          });
        } else {
          this.parseRoute(this.router.routerState.snapshot.root);
        }
      });
  }

  private parseRoute(node: ActivatedRouteSnapshot, courseName = null) {
    if (node.data.breadcrumb) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });

      const url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');
      this.breadcrumbs.push({
        name: node.data.breadcrumb === 'ID' ? courseName : node.data.breadcrumb,
        url: '/' + url
      });
    }

    if (node.firstChild) {
      this.parseRoute(node.firstChild, courseName);
    }
  }
}
