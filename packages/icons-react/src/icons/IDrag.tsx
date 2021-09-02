// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IDragSvg from 'infra-design-svgs/lib/asn/IDrag';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IDrag = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IDragSvg} />;
IDrag.displayName = 'IDrag';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IDrag);