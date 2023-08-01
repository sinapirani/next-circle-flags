import React from 'react'
import countries from './countries'
import Image from 'next/image'

const CDN_URL = "http://dl.koochaa.com"
const FILE_SUFFIX = 'svg'

const UNKNOWN_FLAG = 'xx'
const DEFAULT_HEIGHT = 100
const DEFAULT_WIDTH = 100
const DEFAULT_QUALITY = 100


/**
 * @param {string} countryCode
 * @param {string} cdnUrl
 * @param {Omit<import('../index').CircleFlagProps, "countryCode" | "cdnUrl">} otherProps
 */
const getSvgProps = (countryCode, cdnUrl, fill, height, width, quality, otherProps) => ({
  ...otherProps,
  title: otherProps.title || countryCode,
  height: height || DEFAULT_HEIGHT,
  width: width || DEFAULT_WIDTH,
  quality: quality || DEFAULT_QUALITY,
  src: `${cdnUrl || CDN_URL}${countryCode}.${FILE_SUFFIX}`,
  ...!height && !width && { fill },
})

/**
 * @param {string} countryCode
 */
const parseCountryCode = (countryCode) =>
  countries[countryCode] ? countryCode : UNKNOWN_FLAG
/**
 * @param {import('../index').CircleFlagProps} param0
 */
export const CircleFlag = ({ countryCode, cdnUrl, quality, height, width, ...otherProps }) => {
  <Image
    data-testid='circle-country-flag'
    {...getSvgProps(
      parseCountryCode(countryCode).toLowerCase(),
      cdnUrl,
      fill,
      height,
      width,
      quality,
      otherProps,
    )}
/>
}

export { countries }
