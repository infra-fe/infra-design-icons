// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IAlarmSvg from 'infra-design-svgs/lib/asn/IAlarm';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IAlarm = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IAlarmSvg} />;
IAlarm.displayName = 'IAlarm';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IAlarm);