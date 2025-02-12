import styled from 'styled-components';

export default styled.div`
  body {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    transform: translateY(-20%);
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  form {
    display: flex;
    max-width: 50%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }

  input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: 'Serif ', 'Georgia ';
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #282c34;
    padding: 10px;
    color: 'white';
    width: 80%;
  }
  button {
    background: #282c34;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    color: blue;
  }
`;




