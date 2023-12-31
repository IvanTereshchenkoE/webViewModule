import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const OrdersIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" {...props}>
    <Path
      fill="#000"
      d="m31.52 25.17-1.44-.68a.687.687 0 0 0-.68 0l-8.6 4.08c-.48.24-1.08.24-1.56 0l-8.64-4.08a.687.687 0 0 0-.68 0l-1.44.68c-.64.32-.64 1.16 0 1.48l10.72 5.08c.48.24 1.08.24 1.56 0l10.72-5.08c.68-.32.68-1.2.04-1.48Z"
    />
    <Path
      fill="#000"
      d="m31.52 19.57-1.48-.68a.687.687 0 0 0-.68 0l-8.56 4.08c-.48.24-1.08.24-1.56 0l-8.6-4.08a.687.687 0 0 0-.68 0l-1.48.68c-.64.32-.64 1.16 0 1.48l10.72 5.12c.48.24 1.08.24 1.56 0l10.72-5.08c.68-.32.68-1.2.04-1.52Z"
    />
    <Path
      fill="#000"
      d="m8.48 15.45 10.72 5.08c.48.24 1.08.24 1.56 0l10.72-5.08c.64-.32.64-1.16 0-1.48L20.76 8.89a1.78 1.78 0 0 0-1.56 0L8.48 14.01a.78.78 0 0 0 0 1.44Z"
    />
  </Svg>
);
export default OrdersIcon;
