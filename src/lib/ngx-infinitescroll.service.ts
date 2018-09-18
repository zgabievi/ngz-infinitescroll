import InfiniteScroll from 'infinite-scroll';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxInfiniteScrollOptions } from './ngx-infinitescroll-options';

@Injectable()
export class NgxInfiniteScrollService {
  //
  action$: BehaviorSubject<{
    name: string;
    args?: any[];
  }> = new BehaviorSubject(null);

  //
  instance: InfiniteScroll;

  //
  pageIndex: number;

  //
  loadCount: number;

  //
  loadNextPage() {
    this.action$.next({ name: 'loadNextPage' });
  }

  //
  appendItems(items: NodeList | Element[]) {
    this.action$.next({ name: 'appendItems', args: [items] });
  }

  //
  option(options: NgxInfiniteScrollOptions) {
    this.action$.next({ name: 'option', args: [options] });
  }

  //
  destroy() {
    this.action$.next({ name: 'destroy' });
  }

  //
  getPath(): string {
    return this.instance.getPath();
  }

  //
  getAbsolutePath() {
    return this.instance.getAbsolutePath();
  }

  //
  data(): InfiniteScroll {
    return this.instance;
  }
}
