// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import ISuccessSvg from 'infra-design-svgs/lib/asn/ISuccess';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const ISuccess = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ISuccessSvg} />;
ISuccess.displayName = 'ISuccess';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ISuccess);