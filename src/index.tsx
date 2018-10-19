import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name="Daniel" enthusiasmLevel={3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
