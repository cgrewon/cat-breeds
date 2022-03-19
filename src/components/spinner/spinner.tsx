import { SpinnerProps } from "../../types/spinner.props";
import { ImSpinner6 } from "react-icons/im";
import './spinner.scss';

export default function Spinner(props: SpinnerProps) {
  
  return props.isLoading ? <ImSpinner6 className="spinner" color="white" {...props.style} /> : null;
}
