# ngx-infinitescroll

[![NPM Version](https://img.shields.io/npm/v/ngx-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngx-infinitescroll)
[![NPM Size + Gzip](https://img.shields.io/bundlephobia/minzip/ngx-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngx-infinitescroll)
[![NPM Downloads](https://img.shields.io/npm/dt/ngx-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngx-infinitescroll)
[![NPM License](https://img.shields.io/npm/l/ngx-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngx-infinitescroll)

Angular 2+ wrapper package around [Infinite Scroll by Metafizzy](https://infinite-scroll.com). Automatically add next page.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Changelog](#changelog)
- [Paperwork](#paperwork)
  - [Contributing](#contributing)
  - [Issue / Feature Request](#issue--feature-request)
  - [Pull Request](#pull-request)
- [Credits](#credits)
- [License](#license)

## Installation

```bash
npm install --save ngx-infinitescroll
```

```bash
yarn add ngx-infinitescroll
```

## Usage

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { NgxInfiniteScrollModule } from 'ngx-infinitescroll';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ NgxInfiniteScrollModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

**app.component.html**

```html
<ngx-infinitescroll class="container">
  <article class="post">...</article>
  <article class="post">...</article>
  <article class="post">...</article>
  ...
</ngx-infinitescroll>
```

### Options

You can pass options input to `ngx-ngx-infinitescroll` element;

```html
<ngx-infinitescroll [options]="{ history: false }">
  <!-- ITEMS -->
</ngx-infinitescroll>
```

or create object inside **app.component.ts** using interface `NgxInfiniteScrollOptions` and pass to element;

```ts
infScrollOptions: NgxInfiniteScrollOptions = {
  path: '.pagination__next',
  append: '.post',
  history: false
};
```

```html
<ngx-infinitescroll [options]="infScrollOptions">
  <!-- ITEMS -->
</ngx-infinitescroll>
```

Full list of options can be found [here](https://infinite-scroll.com/options.html).

### Events

Packery element outputs some events;

For example: "Triggered when the next page has been successfully loaded, but not yet added to the container"

```html
<ngx-infinitescroll (load)="handleLoad($event)">
  <!-- ITEMS -->
</ngx-infinitescroll>
```

Full list of events can be found [here](https://infinite-scroll.com/events.html).

### Methods

If you want to call some methods on infinite-scroll element, you can use service created speacially for this;

For example if you want to load the next page you can do it:

```ts
constructor(private infScrollService: NgxInfiniteScrollService) {}

loadNextPage() {
  this.infScrollService.loadNextPage();
}
```

Full list of methods can be found [here](https://infinite-scroll.com/api.html).

## Changelog

Please see [Changelog Page](https://github.com/zgabievi/ngx-infinitescroll/releases) for more information what has changed recently.

## Paperwork

### Contributing

Please see [CONTRIBUTING.md](https://github.com/zgabievi/ngx-infinitescroll/blob/master/CONTRIBUTING.md) for details.

### Issue / Feature Request

To submit an issue correctly, please follow [instructions](https://github.com/zgabievi/ngx-infinitescroll/blob/master/.github/ISSUE_TEMPLATE.md#bug-report)

If you have an idea, and you want to request feature, then read [this one](https://github.com/zgabievi/ngx-infinitescroll/blob/master/.github/ISSUE_TEMPLATE.md#feature-request)

### Pull Request

To crearte new pull request and add your piece of work in our project, go through this [steps](https://github.com/zgabievi/ngx-infinitescroll/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Credits

- [Zura Gabievi](https://github.com/zgabievi)
- [All contributors](https://github.com/zgabievi/ngx-infinitescroll/graphs/contributors)

## License

The MIT License (MIT). Please see [License file](https://github.com/zgabievi/ngx-infinitescroll/blob/master/LICENSE) for more information.
