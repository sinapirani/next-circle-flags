# next-circle-flags

> React circle flags (based on [circle-flags](https://github.com/HatScripts/circle-flags))

[![NPM](https://img.shields.io/npm/v/next-circle-flags.svg)](https://www.npmjs.com/package/next-circle-flags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/sinapirani/next-circle-flags/branch/master/graph/badge.svg)](https://codecov.io/gh/sinapirani/next-circle-flags) ![Node.js CI](https://github.com/sinapirani/next-circle-flags/workflows/Node.js%20CI/badge.svg)

## Install

```bash
npm install --save next-circle-flags
```

## Usage

```jsx
import React from 'react'
import { CircleFlag } from 'next-circle-flags'

export const SpanishFlag = () => <CircleFlag countryCode="es" height="35" />
```

### With custom CDN

```jsx
import React from 'react'
import { CircleFlag } from 'next-circle-flags'

export const SpanishFlag = () => <CircleFlag countryCode="es" height="35" cdnUrl="https://magic-cdn.com/flags/" />
```

You can pass all the react's `React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>` props to CircleFlag. :rocket:

## Docs && Gallery

Click [here](https://sinapirani.github.io/next-circle-flags/)!

## License

MIT © [sinapirani](https://github.com/sinapirani)
