import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { SignupLayout } from '../components/SignupLayout';
import { CardContainer } from '../components/Signup/CardContainer';
import { SignupTitle } from '../components/Signup/Title';
import { InputField } from '../components/Signup/InputField';
import { SubmitButton } from '../components/Signup/SubmitButton';
import { ErrorMessage } from '../components/Signup/ErrorMessage';
import { AlternativeText } from '../components/Signup/AlternativeText';

function RegisterPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>(''); 
  const [errorMessage, setErrorMessage] = useState<string>(''); 

  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
        setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
      setPassword(value);
  };

  const handleLoginRoute = () => {
    navigate("/login");
  }
  
  return (
    <SignupLayout>
      <CardContainer>
        <SignupTitle>Sign Up</SignupTitle>
        <InputField 
          inputTitle='Email'
          type='email'
          value={email} 
          placeholder='Enter email'
          onChange={handleEmailChange} 
        />
        <InputField 
          inputTitle='Password'
          type='password' 
          value={password} 
          placeholder='Enter password'
          onChange={handlePasswordChange} 
        />
        <SubmitButton 
          text='Sign Up'
        />
        <ErrorMessage message={errorMessage}/>
        <AlternativeText
          text="Already have an account? "
          signupText="Login"
          onClick={handleLoginRoute}
        />
      </CardContainer>
    </SignupLayout>
  );
}

export default RegisterPage;