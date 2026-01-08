# ngx20-query-builder

An Angular query builder component for building nested rule trees (rules + rulesets) with AND/OR conditions.

This repository contains:
- The library in `projects/ngx20-query-builder`
- A demo app in `demo/`

## Credits / Origin

This project is a modernized fork of:
- `angular2-query-builder` on npm: https://www.npmjs.com/package/angular2-query-builder
- Upstream repository: https://github.com/zebzhao/Angular-QueryBuilder

## Requirements

- Angular `>=20 <21`
- RxJS `>=7.8 <8`

## Install

```bash
npm install ngx20-query-builder
```

## Basic usage

1) Import the module:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxQueryBuilderModule } from 'ngx20-query-builder';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxQueryBuilderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

2) Provide a query model and config:

```ts
import { QueryBuilderConfig } from 'ngx20-query-builder';

export class AppComponent {
  query = {
    condition: 'and',
    rules: [{ field: 'age', operator: '>=', value: 18 }]
  };

  config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      name: { name: 'Name', type: 'string' }
    }
  };
}
```

3) Render it:

```html
<query-builder [(ngModel)]="query" [config]="config"></query-builder>
```

## Custom templates

You can override UI parts (field/operator/input/buttons/etc.) via the provided template directives (e.g. `*queryInput`, `*queryOperator`, `*queryField`, ...).

## Local development

From the repo root:

```bash
# Build the library
npm run build

# Run the demo app (installs the local dist package and serves)
npm run demo:start
```

## Publishing

```bash
# Build + publish from dist/ngx20-query-builder
npm run publish:npm
```

Notes:
- You must be logged in via `npm login`.
- Bump the version before publishing (e.g. `npm version patch`).
