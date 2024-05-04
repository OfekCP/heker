import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';

function MyButton(props) {
  let { children, onPress } = props;
  let ref = useRef();
  let { buttonProps } = useButton({ onPress }, ref);

  return (
    <button {...mergeProps(buttonProps, props)} ref={ref}>
      {children}
    </button>
  );
}
