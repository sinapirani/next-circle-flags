# next-circle-flags(Powered By next/image) for Next13!

CDN IS CHANGED!
UPDATE THIS PACKAGE TO LATEST VERSION !

> Next circle flags (based on [circle-flags](https://github.com/HatScripts/circle-flags))

[![NPM](https://img.shields.io/npm/v/next-circle-flags.svg)](https://www.npmjs.com/package/next-circle-flags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![codecov](https://codecov.io/gh/sinapirani/next-circle-flags/branch/master/graph/badge.svg)](https://codecov.io/gh/sinapirani/next-circle-flags) ![Node.js CI](https://github.com/sinapirani/next-circle-flags/workflows/Node.js%20CI/badge.svg)

## Install

```bash
npm install --save next-circle-flags
```

## Usage

```jsx
import React from 'react'
import { CircleFlag } from 'next-circle-flags'

export const SpanishFlag = () => <CircleFlag countryCode="es"  height={50} width={50}  />
```

### With custom CDN

```jsx
import React from 'react'
import { CircleFlag } from 'next-circle-flags'

export const SpanishFlag = () => <CircleFlag countryCode="es"  height={50} width={50}  cdnUrl="https://magic-cdn.com/flags/" />
```

You can pass all the next/image props to CircleFlag. :rocket:

## Docs && Gallery

Click [here](https://sinapirani.github.io/next-circle-flags/)!

## License

MIT © [sinapirani](https://github.com/sinapirani)
