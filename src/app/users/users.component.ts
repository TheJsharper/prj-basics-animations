import {Component, HostBinding, OnInit} from '@angular/core';
import {RouteAnimation} from "../shared/route-animation";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations:[RouteAnimation.RouteFadeStateTrigerr, RouteAnimation.RouteSlideStateTrigger]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeFadeState') routeFadeAnimation=true;
  @HostBinding('@routeSlideState') routeSlideAnimation=true;
  constructor() { }

  ngOnInit() {
  }

}
