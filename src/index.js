import React from 'react'
import countries from './countries'
import Image from 'next/image'

const CDN_URL = "https://d11h29rvzk0dwa.cloudfront.net/flags/"
const FILE_SUFFIX = 'svg'

const UNKNOWN_FLAG = 'un'
const DEFAULT_HEIGHT = 100
const DEFAULT_WIDTH = 100
const DEFAULT_QUALITY = 100



/**
 * @param {string} countryCode
 * @param {string} cdnUrl
 * @param {Omit<import('../index').CircleFlagProps, "countryCode" | "cdnUrl">} otherProps
 */
const getSvgProps = (countryCode, cdnUrl, otherProps) => ({
  ...otherProps,
  title: otherProps?.title || countryCode,
  quality: otherProps?.quality || DEFAULT_QUALITY,
  src: `${cdnUrl || CDN_URL}${countryCode}.${FILE_SUFFIX}`,
})

/**
 * @param {string} countryCode
 */
const parseCountryCode = (countryCode) =>
  countries[countryCode] ? countryCode : UNKNOWN_FLAG
/**
 * @param {import('../index').CircleFlagProps} param0
 */

export const CircleFlag = ({ countryCode, cdnUrl, ...otherProps }) => (
  <Image
    data-testid='circle-country-flag'
    {...getSvgProps(
      parseCountryCode(countryCode).toLowerCase(),
      cdnUrl,
      otherProps
    )}
/>
)

export { countries }
