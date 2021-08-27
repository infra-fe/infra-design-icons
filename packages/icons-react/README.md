<h1 align="center">
Infra design Icons for React
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/infra-design-icons)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/infra-design-icons)

</div>

## Install

```bash
yarn add infra-design-icons
```

## Basic Usage

You can import it directly or destructure from `infra-design-icons` when tree-shaking enabled.

```ts
import { SmileOutlined } from 'infra-design-icons';
```

## Component Interface

```ts
interface AntdIconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```

## Release

```bash
npm run generate
npm run compile
npm publish
```
