
import { Injectable } from '@angular/core';




interface ShareObj{

    [id: string] : any;
}

@Injectable()
export class GlobalService {
 
     shareobj : ShareObj= {}
}