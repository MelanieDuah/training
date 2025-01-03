import {createRoot} from 'react-dom/client';
import './../index.css';
import PaymentsList from './PaymentsList';

export type PaymentsListProps = {
  serverUrl : string,
}

const mount = (el: Element, props: PaymentsListProps) : void => {
  const root = createRoot(el);
  root.render(<PaymentsList  {...props} />);
}

export { mount };

