import { render,screen } from "@testing-library/react";
import App from "./App";
test("Test First Reacct",()=>{
  render(<App/>);
  const text=screen.getByText(/First React test case/i);
  const title=screen.getByTitle('one')
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();  
})

test('Test Input Field',()=>{
  render(<App/>)
  const text=screen.getByRole('textbox');
  const textInput =screen.getByPlaceholderText("Enter title");
  expect(text).toHaveAttribute("name","uername");
  expect(text).toHaveAttribute("id","userId");
  expect(text).toHaveAttribute('type','text');
  expect(textInput).toBeInTheDocument()
  expect(text).toBeInTheDocument()
})