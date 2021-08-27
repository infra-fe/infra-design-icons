// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IPendingSvg from 'infra-design-svgs/lib/asn/IPending';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IPending = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IPendingSvg} />;
IPending.displayName = 'IPending';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IPending);