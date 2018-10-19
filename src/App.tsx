import * as React from 'react';
import Button from './components/button/button'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
  render() {
    return (
      <Button>12345</Button>
    )
  }
}

export default Hello;
