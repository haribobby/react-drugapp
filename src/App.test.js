import { render, screen } from '@testing-library/react';
import App from './App';
test('should pritin learreact ', () => {
  
  //Arrange

  render(<App/>);

  //Act
  // Nothing 

  //Assertion

  const linkElement = screen.getByText("learn react"); // prepare object
  expect(linkElement).toBeInTheDocument();

})

