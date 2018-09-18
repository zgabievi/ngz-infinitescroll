# ngz-infinitescroll

[![NPM Version](https://img.shields.io/npm/v/ngz-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngz-infinitescroll)
[![NPM Size + Gzip](https://img.shields.io/bundlephobia/minzip/ngz-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngz-infinitescroll)
[![NPM Downloads](https://img.shields.io/npm/dt/ngz-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngz-infinitescroll)
[![NPM License](https://img.shields.io/npm/l/ngz-infinitescroll.svg?style=flat-square)](https://www.npmjs.com/package/ngz-infinitescroll)

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
npm install --save ngz-infinitescroll
```

```bash
yarn add ngz-infinitescroll
```

## Usage

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { NgzInfiniteScrollModule } from 'ngz-infinitescroll';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ NgzInfiniteScrollModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

**app.component.html**

```html
<ngz-infinitescroll class="container">
  <article class="post">...</article>
  <article class="post">...</article>
  <article class="post">...</article>
  ...
</ngz-infinitescroll>
```

### Options

You can pass options input to `ngx-ngz-infinitescroll` element;

```html
<ngz-infinitescroll [options]="{ history: false }">
  <!-- ITEMS -->
</ngz-infinitescroll>
```

or create object inside **app.component.ts** using interface `NgzInfiniteScrollOptions` and pass to element;

```ts
infScrollOptions: NgzInfiniteScrollOptions = {
  path: '.pagination__next',
  append: '.post',
  history: false
};
```

```html
<ngz-infinitescroll [options]="infScrollOptions">
  <!-- ITEMS -->
</ngz-infinitescroll>
```

Full list of options can be found [here](https://infinite-scroll.com/options.html).

### Events

Infinite-scroll element outputs some events;

For example: "Triggered when the next page has been successfully loaded, but not yet added to the container"

```html
<ngz-infinitescroll (load)="handleLoad($event)">
  <!-- ITEMS -->
</ngz-infinitescroll>
```

Full list of events can be found [here](https://infinite-scroll.com/events.html).

### Methods

If you want to call some methods on infinite-scroll element, you can use service created speacially for this;

For example if you want to load the next page you can do it:

```ts
constructor(private infScrollService: NgzInfiniteScrollService) {}

loadNextPage() {
  this.infScrollService.loadNextPage();
}
```

Full list of methods can be found [here](https://infinite-scroll.com/api.html).

## Changelog

Please see [Changelog Page](https://github.com/zgabievi/ngz-infinitescroll/releases) for more information what has changed recently.

## Paperwork

### Contributing

Please see [CONTRIBUTING.md](https://github.com/zgabievi/ngz-infinitescroll/blob/master/CONTRIBUTING.md) for details.

### Issue / Feature Request

To submit an issue correctly, please follow [instructions](https://github.com/zgabievi/ngz-infinitescroll/blob/master/.github/ISSUE_TEMPLATE.md#bug-report)

If you have an idea, and you want to request feature, then read [this one](https://github.com/zgabievi/ngz-infinitescroll/blob/master/.github/ISSUE_TEMPLATE.md#feature-request)

### Pull Request

To crearte new pull request and add your piece of work in our project, go through this [steps](https://github.com/zgabievi/ngz-infinitescroll/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Credits

- [Zura Gabievi](https://github.com/zgabievi)
- [All contributors](https://github.com/zgabievi/ngz-infinitescroll/graphs/contributors)

## License

The MIT License (MIT). Please see [License file](https://github.com/zgabievi/ngz-infinitescroll/blob/master/LICENSE) for more information.
