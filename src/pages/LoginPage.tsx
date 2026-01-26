import { SignupLayout } from '../components/SignupLayout';
import { CardContainer } from '../components/Signup/CardContainer';
import { SignupTitle } from '../components/Signup/Title';

function LoginPage() {
    return (
      <SignupLayout>
        <CardContainer>
          <SignupTitle>
            Login
          </SignupTitle>
        </CardContainer>
      </SignupLayout>
  );
}

export default LoginPage;
