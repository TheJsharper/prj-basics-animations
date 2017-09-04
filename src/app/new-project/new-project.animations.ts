import {AnimationTriggerMetadata, style, animate, transition, trigger, state, group, query} from "@angular/animations";

export class NewProjectAnimations {
  static get activeBtnStateTrigger(): AnimationTriggerMetadata {
    return trigger('activeBtnState', [
      state('active', style({backgroundColor: 'lightgreen', borderColor: 'green', color: 'green'})),
      state('inactive', style({backgroundColor: 'red', borderColor: 'darkred', color: 'white'})),
      transition('inactive=>active', [
        group([
          animate(100, style({transform: 'scale(1.5)'})),
          animate(200, style({backgroundColor: 'green'}))
        ]),
        animate(300, style({transform: 'scale(1)'}))

      ]),
      transition('active=> inactive', [
        group([
          animate(100, style({transform: 'scale(1.5)'})),
          animate(200, style({backgroundColor: 'red'}))
        ]),
        animate(300, style({transform: 'scale(1)'}))
      ])

    ]);
  }
  static  get formStateTrigger():AnimationTriggerMetadata{
    return trigger('formState',[
      transition('* => *',[
        query('input.ng-invalid:focus',[
          animate(200, style({backgroundColor:'red'})),
          animate(200)
        ],{optional:true})
      ])
    ]);
  }
}
