import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>,args: string | null = null, sort: string = 'asc'): Array<TrackModel> {
    try {
      if (args === null) return value;
      
      const tmpList = value.sort((a,b)=>{
        if (a[args] > b[args]) return 1;
        if (a[args] < b[args]) return -1;
        return 0;
      });

      return sort==='asc' ? tmpList : tmpList.reverse();
    } catch (e) {
      console.log('proccess died');
      return value;
    }
    
  }

}
