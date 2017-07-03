import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'factorial'
})

export class FactorialPipe implements PipeTransform {    
    transform(val: number, arg?: any): number {
        if (val < 0) return 0;

        let res = 1;

        for (let i = 1; i <= res; i++){
            res = res * i;
        }

        return res;
    }
}
