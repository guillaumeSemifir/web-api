import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {

  private count = 0;
  getHello(): string {
    return 'Hello World!';
  }

  getHostname() : string {
    return 'Vous venez de faire une requête sur l\'instance '+os.hostname();
  }

  getLoop() : string {
    for(let i = 0; i < 90000000; i++){
      this.count+=i;
    }
    return "Incrémentation bien effectuée";
  }
}
