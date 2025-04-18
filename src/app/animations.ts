import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

// Page route transitions
const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('400ms ease-out', style({ opacity: 1 }))
  ])
]);

// Single element fade-in
const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-out', style({ opacity: 1 }))
  ])
]);

// Staggered fade-in for groups of elements
const staggeredFadeIn = trigger('staggeredFadeIn', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger(120, [
        animate('500ms ease-out', style({ opacity: 1 }))
      ])
    ], { optional: true })
  ])
]);

export { routeAnimations, fadeIn, staggeredFadeIn };
