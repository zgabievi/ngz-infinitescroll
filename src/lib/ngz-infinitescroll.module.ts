import { NgModule } from '@angular/core';
import { NgzInfiniteScrollComponent } from './ngz-infinitescroll.component';
import { NgzInfiniteScrollService } from './ngz-infinitescroll.service';

@NgModule({
  declarations: [NgzInfiniteScrollComponent],
  exports: [NgzInfiniteScrollComponent],
  providers: [NgzInfiniteScrollService]
})
export class NgzInfiniteScrollModule {}
