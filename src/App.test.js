import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {
  render(<App/>);
  //check if the button has the right name and role
  const screenRole = screen.getByRole('button',{name:'Test red'});
  
  //expect the background color to be red
  expect(screenRole).toHaveStyle({backgroundColor:'red'});

  const screenRoleCheckBox = screen.getByRole('checkbox',{name:'Disable Button'});
  expect(screenRoleCheckBox).not.toBeChecked();
  expect(screenRole).toHaveStyle({backgroundColor:'red'});
});

test('button turns blue after click', () => {
  render(<App/>);
  //check if the button has the right name and role
  const screenRole = screen.getByRole('button',{name:'Test red'});
  //expect the click button to have right result
  fireEvent.click(screenRole);

  //expect the bacground color to be blue
  expect(screenRole).toHaveStyle({backgroundColor:'blue'});
  expect(screenRole.textContent).toBe('Test blue');
  const screenRoleCheckBox = screen.getByRole('checkbox',{name:'Disable Button'});
  expect(screenRoleCheckBox).not.toBeChecked();
  expect(screenRole).toHaveStyle({backgroundColor:'blue'});
  
});

test('initial conditions',()=>{
  render(<App/>);
  //check that the button starts out enabled
  const screenRole = screen.getByRole('button');
  expect(screenRole).toBeEnabled();
  //check that the checkbox starts out unchecked
  const screenRoleCheckBox = screen.getByRole('checkbox',{name:'Disable Button'});
  expect(screenRoleCheckBox).not.toBeChecked();
})

test('after check conditions',()=>{
  render(<App/>);
  const screenRoleCheckBox = screen.getByRole('checkbox',{name:'Disable Button'});
  fireEvent.click(screenRoleCheckBox);
  //check that the button starts out enabled
  const screenRole = screen.getByRole('button',{name:'Test red'});
  expect(screenRole).toBeDisabled();
  expect(screenRole).toHaveStyle({backgroundColor:'gray'});
  //check that the checkbox starts out unchecked
  expect(screenRoleCheckBox).toBeChecked();
})

describe('spaces before camel-case capital letters',()=>{
  test('Works for no inner capital leters',()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital leters',()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital leters',()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})




