import { NgModule } from '@angular/core';
import { NgxInfiniteScrollComponent } from './ngx-infinitescroll.component';
import { NgxInfiniteScrollService } from './ngx-infinitescroll.service';

@NgModule({
  declarations: [NgxInfiniteScrollComponent],
  exports: [NgxInfiniteScrollComponent],
  providers: [NgxInfiniteScrollService]
})
export class NgxInfiniteScrollModule {}
