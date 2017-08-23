import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export const markedTrigger: AnimationTriggerMetadata = trigger('markedState',
  [
    state('default', style({border: '1px solid black', backgroundColor: 'transparent', padding: '20px '})),
    state('marked', style({border: '2px solid blue', backgroundColor: '#caeff9', padding: '10px '})),
    //transition('default<=> marked', animate('300ms ease-out')),
    transition('default=> marked', [
      style({border: '1px solid blue', padding:'19px'}),
      animate('300ms ease-out', style({transform:'scale(1.05)'})),
      animate('300ms')
    ]),
     transition('marked=> default', animate('300ms ease-out')),

  ]);

export class  ItemStateTrigger{
  static get itemState():AnimationTriggerMetadata{
    return trigger('itemState',[
          transition('void => *',[
              style({ opacity: 0, transform:'translateX(-100%)'}),
            animate('500ms ease-out', style({opacity:1, transform: 'translateX(0)'}))
          ]),
      transition('* => void',[
        style({ opacity: 1, transform:'translateX(0)'}),
        animate('500ms ease-in', style({opacity:0, transform: 'translateX(-100%)'}))
      ])
    ]);
  }
}

