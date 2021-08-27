// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import INotificationSvg from 'infra-design-svgs/lib/asn/INotification';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const INotification = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={INotificationSvg} />;
INotification.displayName = 'INotification';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(INotification);