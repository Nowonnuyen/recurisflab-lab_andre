import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'secondToMinutes' })
export class SecondToMinutes implements PipeTransform {
    transform(value: number, ...args: any[]): string {
        let minutes = (value - (value % 60)) / 60;
        let seconds = ((value % 60) - (value % 1)) / 1;
        return (
            (minutes < 10 ? '0' : '') +
            minutes +
            ':' +
            (seconds < 10 ? '0' : '') +
            seconds
        );
    }
}
