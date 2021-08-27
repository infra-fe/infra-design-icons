// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IRefreshSvg from 'infra-design-svgs/lib/asn/IRefresh';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IRefresh = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IRefreshSvg} />;
IRefresh.displayName = 'IRefresh';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IRefresh);