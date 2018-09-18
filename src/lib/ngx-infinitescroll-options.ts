export interface NgxInfiniteScrollOptions {
  //
  path?: string | Function;

  //
  append?: boolean | string;

  //
  checkLastPage?: boolean | string;

  //
  prefill?: boolean;

  //
  responseType?: string;

  //
  outlayer?: any;

  //
  onInit?: Function;

  //
  scrollThreshold?: number | boolean;

  //
  elementScroll?: any;

  //
  loadOnScroll?: boolean;

  //
  history?: boolean | string;

  //
  historyTitle?: boolean;

  //
  hideNav?: string;

  //
  status?: string;

  //
  button?: string;

  //
  debug?: boolean;
}
