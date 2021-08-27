// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react'
import ISearchSvg from 'infra-design-svgs/lib/asn/ISearch';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
const ISearch = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ISearchSvg} />;
ISearch.displayName = 'ISearch';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ISearch);