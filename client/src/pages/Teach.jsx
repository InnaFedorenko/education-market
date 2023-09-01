
import { useQuery } from '@apollo/client';
import {QUERY_VERSES, QUERY_USER} from '../utils/queries';
import VerseList from '../components/VerseList';

const Teach = () => {

    return (
      <main>
       <div >
            <VerseList
              verses1=""
              profile1=""
              title="Explore Teaching Topics"
              type="true"
             />
      </div>
      </main>
    );
  };
  export default Teach;