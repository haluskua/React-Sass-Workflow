
import styled from 'styled-components'
import '../src/project_styles/index.scss'



// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: calc(0.651rem + 1.1vw);
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    color: white;
    background-color: maroon;
  }
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  background: maroon;
  color: yellow;
  border-color: white;

`;

function App() {
  return (
    <section className="y-align">
      <div className="container  dpy-f fdxn-c bg-error text-white br-sm">
          <h1 className="fs-lg p-md title-primary">CRA = NO GULP</h1>
          <p className="p-md mw-lg bg-orange m-2 anchor r-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit perspiciatis quam odio quis voluptatibus qui mollitia ipsa eos minima! Earum, corrupti quibusdam.<br />
          
          </p>
         <p className="r-paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati, vero, perspiciatis assumenda nesciunt dolorem, labore eaque perferendis optio temporibus quibusdam dicta.
         </p>
          <a href="https://google.com" className="btn-one text-white bg-green mw-sm dpy-f fs-xl p-lg br-sm text-hover-purple bg-hover-orange">I am a Button</a>
          <div className="x-center mt-4 ">
          <h2 className="fs-xl p-md">No CRA * REACT</h2>
          <h2 className="r-paragraph">No CRA * REACT</h2>
          </div>
      </div>
      <Button className="r-font">Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <button className="btn-Lg r-paragraph">
    LARGE button
    </button>
    <button className="btn-Md r-paragraph">
    MEDIUM button
    </button>
    </section>
  );
  
}

export default App;
