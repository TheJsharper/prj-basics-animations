import {
  animate, AnimationTriggerMetadata, group, keyframes, state, style, transition,
  trigger
} from "@angular/animations";

export const markedTrigger: AnimationTriggerMetadata = trigger('markedState',
  [
    state('default', style({border: '1px solid black', backgroundColor: 'transparent', padding: '20px '})),
    state('marked', style({border: '2px solid blue', backgroundColor: '#caeff9', padding: '10px '})),
    //transition('default<=> marked', animate('300ms ease-out')),
    transition('default=> marked', [
      style({border: '1px solid blue', padding: '19px'}),
      animate('300ms ease-out', style({transform: 'scale(1.05)'})),
      animate('300ms')
    ]),
    transition('marked=> default', animate('300ms ease-out')),

  ]);

export class ItemStateTrigger {
  static get itemState(): AnimationTriggerMetadata {
    return trigger('itemState', [
      transition('void => *', [
        animate('2s ease-out', keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15%)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ])),
        group([
          animate(1000, style({backgroundColor: 'pink', transform: 'scale(0.9)'})),
          animate(2000, style({transform: 'translateY(-14%)'}))
        ])
      ]),
      transition('* => void', [
        style({opacity: 1, transform: 'translateX(0)'}),
        animate('500ms ease-out',
          keyframes([
            style({opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({opacity: 1, transform: 'translateX(-15%)', offset: 0.5}),
            style({opacity: 0, transform: 'translateX(-100%)', offset: 1})
          ])
        )
      ]),
      transition('slidup => slidDown', [
        style({transform: 'translateY(-100%)'}),
        animate('2s ease-out', style({transform: 'translateY(0)'}))
      ]),
      transition('slidDown => slidup', [
        style({transform: 'translateY(0)'}),
        animate('2s ease-out', style({transform: 'translateY(-70%)'}))
      ]),
    ]);
  }

  static get slideSateTrigger(): AnimationTriggerMetadata {
    return trigger('slideState', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1300ms ease-out', style({transform: 'translateY(0)'}))]
      ),
      transition(':leave', [
        style({transform: 'translateY(0)'}),
        animate('1300ms ease-out', style({transform: 'translateY(-100%)'}))]
      )

    ]);
  }


}

