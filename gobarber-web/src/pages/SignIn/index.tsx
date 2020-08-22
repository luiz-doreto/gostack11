import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Logon</h1>
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Password"
          type="password"
        />

        <Button type="submit">Logon</Button>
        <a href="forgot">Forgot password</a>
      </form>

      <a href="newAccount">
        <FiLogIn />
        Create account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
