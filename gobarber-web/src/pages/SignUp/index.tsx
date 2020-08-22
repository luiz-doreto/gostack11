import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Register</h1>
        <Input name="name" icon={FiUser} placeholder="Name" />
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Password"
          type="password"
        />

        <Button type="submit">Register</Button>
      </form>

      <a href="newAccount">
        <FiArrowLeft />
        Back to logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
