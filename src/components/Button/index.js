
import { ButtonContainer } from './styles';

const Button = ({label, onClick, special }) => {
    return (
      <ButtonContainer onClick={onClick} type="button" special={special}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;