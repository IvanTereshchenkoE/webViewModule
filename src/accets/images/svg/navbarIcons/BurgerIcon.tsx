import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BurgerIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" {...props}>
    <Path
      fill="#1D1D1B"
      d="M38.333 18.833H1.667v3.334h36.666v-3.334ZM38.333 8.833H1.667v3.334h36.666V8.833ZM38.333 28.833H1.667v3.334h36.666v-3.334Z"
    />
  </Svg>
);
export default BurgerIcon;
