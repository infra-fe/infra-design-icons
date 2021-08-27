// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IGenderSvg from 'infra-design-svgs/lib/asn/IGender';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IGender = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IGenderSvg} />;
IGender.displayName = 'IGender';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IGender);