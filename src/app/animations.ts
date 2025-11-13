import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF' // Pode-se passar 'background-color' (com aspas simples) ou backgroundColor sem aspas simples. Mas o valor é sempre entre aspas simples.
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('200ms ease-out',  style({
      transform: 'scale(1.02)'
    })),
    animate(200) //outras formas: '200ms' '2s'
  ])
])
