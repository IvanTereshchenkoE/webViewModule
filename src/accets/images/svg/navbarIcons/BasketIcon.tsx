import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const BasketIcon = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M34.286 19.25H27.5v-5H35l-.714 5Zm-1.072 7.5H27.5v-5h6.429l-.715 5Zm-.714 5a2.5 2.5 0 0 1-2.5 2.5h-2.5v-5h5.358l-.358 2.5ZM15 14.25h10v5H15v-5Zm0 7.5h10v5H15v-5Zm0 7.5h10v5H15v-5Zm-2.5-10H5.358l-.358-5h7.5v5Zm0 7.5H5.892l-.356-5H12.5v5Zm0 7.5H8.75a2.5 2.5 0 0 1-2.5-2.5l-.179-2.5H12.5v5Zm26.25-22.5h-8.157l2.532-5h3.125a1.249 1.249 0 1 0 0-2.5h-5l-3.855 7.5H12.71l-3.96-7.5h-5a1.249 1.249 0 1 0 0 2.5h3.125l2.682 5H1.25a1.25 1.25 0 1 0 0 2.5H2.5l1.25 17.5a5 5 0 0 0 5 5H30a5 5 0 0 0 5-5l2.5-17.5h1.25a1.249 1.249 0 1 0 0-2.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BasketIcon;
