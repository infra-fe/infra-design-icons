// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IMenuSvg from 'infra-design-svgs/lib/asn/IMenu';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IMenu = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IMenuSvg} />;
IMenu.displayName = 'IMenu';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IMenu);