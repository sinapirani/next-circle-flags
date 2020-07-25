import React from 'react'
import { getCountryFlag } from './flag-maps'

/**
 * @param {import('./CircleFlag').CountryFlagProps} props
 */
export const CircleFlag = (props) => {
  const { country, ...otherProps } = props
  const parsedCountry = country || ''
  const svgProps = {
    ...otherProps,
    title: otherProps.title || parsedCountry,
    height: otherProps.height || 100
  }

  const CircleFlagIcon = getCountryFlag(parsedCountry.toLowerCase())

  return <CircleFlagIcon {...svgProps} />
}
