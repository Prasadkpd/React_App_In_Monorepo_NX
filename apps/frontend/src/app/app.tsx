// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }
  main {
    padding: 0 36px;
  }
  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }
  .ticket {
    color: #0094ba;
    height: 36px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
`;

type Ticket = {
  title: string;
  id: number;
};

const App = () => {

  const tickets: Ticket[] = [
    {
      title: `Install updates`,
      id: 1
    },
    {
      title: `Restore the backup`,
      id: 2
    }
  ];

  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to tickets!</h1>
      </header>
      <main>
        { tickets.map(t => (
          <p className="ticket flex" key={ t.id }>
            { t.title }
          </p>
        )) }
      </main>
    </StyledApp>
  );
}

export default App;
