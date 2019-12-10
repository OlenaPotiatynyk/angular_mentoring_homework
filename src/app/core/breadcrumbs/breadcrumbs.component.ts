import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlSegment } from '@angular/router';
import { CoursesService } from '../../courses/courses.service';

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

  public ngOnInit() {
    this.router.events.subscribe(event => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  private parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data.breadcrumb) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });

      const url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');
      this.breadcrumbs.push({
        name: this.resolveNameWhenPathIsId(node, urlSegments),
        url: '/' + url
      });
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

  private resolveNameWhenPathIsId(node, urlSegments): string {
    const courseId = urlSegments[1] && urlSegments[0].path === 'courses'
      && urlSegments[1].path && +urlSegments[1].path;

    if (courseId) {
      this.coursesService.getItemById(courseId).subscribe(resp => resp[0].name);
    } else {
      return node.data.breadcrumb;
    }
  }
}
