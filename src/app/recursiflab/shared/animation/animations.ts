import { animate, state, style, transition, trigger } from '@angular/animations';
export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition('void <=> *', [ // autre facon de l'écrire avec des alias comme enter et leave
        // style({ opacity: 0 }), facotrise en ligne 12
        animate(5000)
    ]),
    //transition('* => void', [
    //animate(2000), //style({ opacity: 0 })) opacité factorisé en ligne 12, transiiton et animate factorisé ligne 12 dans les parenthèse
    //])
]);

