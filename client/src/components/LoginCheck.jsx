import { useQuery } from '@apollo/client';
import { useLogin } from '../utils/LoginContext';
import { QUERY_ME } from '../utils/queries';
import LoginCheckHelper from './LoginCheckHelper';
export default function LoginCheck(props) {
  const [state, dispatch] = useLogin();

  const { loading, data:loginData } = useQuery(QUERY_ME);
  // console.log({loading, loginData});
  
  const token = state.token;

  const user = loginData?.me;
  // console.log({loginData});

  return (<>
    {/* loading must be false, token must be there, and user cannot be undefined */}
    {loading || token.length === 0? (
      <></>
    ) : (
      !user ? (
        <LoginCheckHelper login={false} />
      ): (
        <LoginCheckHelper login={true} token={token} user={user}/>
      )
    )}
  </>); // this component is simply used to initialize login and organize code
}