import {Component, HostBinding, OnInit} from '@angular/core';
import {ItemStateTrigger, markedTrigger} from "../projects/project.animations"

import {Project} from './project.model';
import {AnimationEvent} from '@angular/animations'
import {ProjectsService} from './projects.service';
import {RouteAnimation} from "../shared/route-animation";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [markedTrigger, ItemStateTrigger.itemState, ItemStateTrigger.slideSateTrigger, RouteAnimation.RouteFadeStateTrigerr, RouteAnimation.RouteSlideStateTrigger]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  displayProjs: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;
  @HostBinding('@routeFadeState') routeFadeAnimation=true;
  @HostBinding('@routeSlideState') routeSlideAnimation=true;
  constructor(private prjService: ProjectsService) {
  }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length >= 1) {
            this.displayProjs.push(this.projects[0])
          }
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.push(project);
  }

  onDone(event: AnimationEvent, index: number): void {
    if (event.toState == "void") return;
    if (this.projects.length > index + 1)
      this.displayProjs.push(this.projects[index + 1]);
    else
      this.projects = this.displayProjs;
  }
}
