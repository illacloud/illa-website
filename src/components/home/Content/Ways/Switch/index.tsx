import LayoutAutoChange from '@/layout/LayoutAutoChange';
import SwitchPC from './PC';
import SwitchMobile from './Mobile';

const Switch = (props) => {
  return (
    <LayoutAutoChange
      pc={<SwitchPC {...props} options={options} />}
      mobile={<SwitchMobile {...props} options={options} />}
    />
  );
};
export default Switch;
