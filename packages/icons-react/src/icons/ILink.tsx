// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import ILinkSvg from 'infra-design-svgs/lib/asn/ILink';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const ILink = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ILinkSvg} />;
ILink.displayName = 'ILink';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ILink);