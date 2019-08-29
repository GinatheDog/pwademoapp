import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [ReversePipe],
  imports: [IonicModule],
  exports: [ReversePipe]
})
export class PipesModule {}
