import React, { useState } from 'react';

import { SignupLayout } from '../components/SignupLayout';
import { CardContainer } from '../components/Signup/CardContainer';
import { SignupTitle } from '../components/Signup/Title';
import { InputField } from '../components/Signup/InputField';
import { SubmitButton } from '../components/Signup/SubmitButton';

function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>(''); 

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    return (
      <SignupLayout>
        <CardContainer>
          <SignupTitle>Login</SignupTitle>
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
            text='Login'
          />
        </CardContainer>
      </SignupLayout>
    );
}

export default LoginPage;