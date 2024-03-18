import { GlobalStyle } from 'components/GlobalStyle';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ProductReviewForm } from 'components/ProductReviewForm/ProductReviewForm';
import { Component } from 'react';

export class App extends Component {
  render() {
    return <>
      <GlobalStyle />
      {/* <LoginForm/> */}
      <ProductReviewForm/>

      </>;
  }
}
