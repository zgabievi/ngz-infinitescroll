import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import InfiniteScroll from 'infinite-scroll';
import { NgxInfiniteScrollOptions } from './ngx-infinitescroll-options';
import { NgxInfiniteScrollService } from './ngx-infinitescroll.service';

@Component({
  selector: 'ngx-infinitescroll',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class NgxInfiniteScrollComponent implements OnInit, OnDestroy {
  //
  @Output()
  scrollThreshold: EventEmitter<null> = new EventEmitter();

  //
  @Output()
  request: EventEmitter<string> = new EventEmitter();

  //
  @Output()
  load: EventEmitter<{
    response: Document | string;
    path: string;
  }> = new EventEmitter();

  //
  @Output()
  append: EventEmitter<{
    response: Document | string;
    path: string;
    items: NodeList;
  }> = new EventEmitter();

  //
  @Output()
  error: EventEmitter<{
    error: Error | string;
    path: string;
  }> = new EventEmitter();

  //
  @Output()
  last: EventEmitter<{
    response: Document | string;
    path: string;
  }> = new EventEmitter();

  //
  @Output()
  history: EventEmitter<{
    title: string;
    path: string;
  }> = new EventEmitter();

  //
  @Input()
  options: NgxInfiniteScrollOptions;

  //
  private infScroll: InfiniteScroll;

  //
  constructor(
    private el: ElementRef,
    private infScrollService: NgxInfiniteScrollService
  ) {}

  //
  ngOnInit() {
    this.infScroll = new InfiniteScroll(this.el.nativeElement);

    this.infScrollService.instance = this.infScroll;

    this.infScroll.on('scrollThreshold', () => this.scrollThreshold.emit());
    this.infScroll.on('request', path => this.request.emit(path));
    this.infScroll.on('load', (response, path) => {
      this.infScrollService.pageIndex = this.infScroll.pageIndex;
      this.infScrollService.loadCount = this.infScroll.loadCount;

      this.load.emit({ response, path });
    });
    this.infScroll.on('append', (response, path, items) =>
      this.append.emit({ response, path, items })
    );
    this.infScroll.on('error', (error, path) =>
      this.error.emit({ error, path })
    );
    this.infScroll.on('last', (response, path) =>
      this.last.emit({ response, path })
    );
    this.infScroll.on('history', (title, path) =>
      this.history.emit({ title, path })
    );
  }

  //
  ngOnDestroy() {
    this.infScroll.off('scrollThreshold', () => this.scrollThreshold.emit());
    this.infScroll.off('request', path => this.request.emit(path));
    this.infScroll.off('load', (response, path) => {
      this.infScrollService.pageIndex = this.infScroll.pageIndex;
      this.infScrollService.loadCount = this.infScroll.loadCount;

      this.load.emit({ response, path });
    });
    this.infScroll.off('append', (response, path, items) =>
      this.append.emit({ response, path, items })
    );
    this.infScroll.off('error', (error, path) =>
      this.error.emit({ error, path })
    );
    this.infScroll.off('last', (response, path) =>
      this.last.emit({ response, path })
    );
    this.infScroll.off('history', (title, path) =>
      this.history.emit({ title, path })
    );

    this.infScroll.destroy();
  }
}
