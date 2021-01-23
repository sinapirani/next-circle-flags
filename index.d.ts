import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface CircleFlagProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  countryCode: string;
}

/**
 *
 * Demos:
 * - https://tnovau.github.io/react-circle-flags/gallery
 *
 * Docs:
 * - https://tnovau.github.io/react-circle-flags/
 */
declare function CircleFlag(props: CircleFlagProps): JSX.Element;

declare var countries: Record<string, boolean>;

export { CircleFlag, CircleFlagProps, countries }

