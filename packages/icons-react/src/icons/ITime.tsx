// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import ITimeSvg from 'infra-design-svgs/lib/asn/ITime';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const ITime = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ITimeSvg} />;
ITime.displayName = 'ITime';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ITime);