import React from 'react'

const CDN_URL = 'https://hatscripts.github.io/circle-flags/flags/'
const FILE_SUFFIX = 'svg'

const DEFAULT_COUNTRY_CODE = 'xx'
const DEFAULT_HEIGHT = 100

/**
 * @param {string} countryCode
 * @param {import('react').SVGProps<SVGSVGElement>} otherProps
 */
const getSvgProps = (countryCode, otherProps) => ({
  ...otherProps,
  title: otherProps.title || countryCode,
  height: otherProps.height || DEFAULT_HEIGHT,
  src: `${CDN_URL}${countryCode}.${FILE_SUFFIX}`
})

/**
 * @param {import('react').SVGProps<SVGSVGElement> & {countryCode: string}} param0
 */
export const CircleFlag = ({ countryCode, ...otherProps }) => (
  <img
    {...getSvgProps(
      (countryCode || DEFAULT_COUNTRY_CODE).toLowerCase(),
      otherProps
    )}
  />
)
