// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import ILoadingSvg from 'infra-design-svgs/lib/asn/ILoading';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const ILoading = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ILoadingSvg} />;
ILoading.displayName = 'ILoading';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ILoading);