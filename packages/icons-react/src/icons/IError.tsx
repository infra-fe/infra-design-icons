// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import IErrorSvg from 'infra-design-svgs/lib/asn/IError';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IError = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IErrorSvg} />;
IError.displayName = 'IError';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IError);