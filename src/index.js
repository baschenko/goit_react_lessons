import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { App } from 'components/App/App';
import { theme } from "./constants";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// const container = document.getElementById('root');

// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>);

// const container = document.getElementById('root');

// ReactDOM.render(
//   (<React.StrictMode>
//     <App />
//   </React.StrictMode>),
//   document.getElementById('root')
// );
