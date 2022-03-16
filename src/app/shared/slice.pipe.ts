import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'slicer'
})
export class SlicePipe implements PipeTransform {
    transform(value: string, start: number, end ?: number) {
        return value.slice(start, end);
        //throw new Error("Method not implemented.");
    }
    
}