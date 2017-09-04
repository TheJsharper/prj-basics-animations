
import {animate, AnimationTriggerMetadata, style, transition, trigger} from "@angular/animations";

export class RouteAnimation{
  static get RouteFadeStateTrigerr (): AnimationTriggerMetadata{
    return trigger('routeFadeState',[
        transition(':enter',[
          style({opacity:0}),
          animate(300)
        ]),
      transition(':leave',[
        animate(300, style({opacity:0}))
      ])
    ]);
  }
  static  get RouteSlideStateTrigger(): AnimationTriggerMetadata{
    return trigger('routeSlideState',[
      transition(':enter',[
        style({transform:'translateY(-100%)', opacity:0}),
        animate(300)
      ]),
      transition(':leave',[
        animate(300, style({transform:'translateY(100%)', opacity:0}),)
      ])
    ]);
  }
}
