// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import ICommentSvg from 'infra-design-svgs/lib/asn/IComment';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const IComment = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ICommentSvg} />;
IComment.displayName = 'IComment';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IComment);