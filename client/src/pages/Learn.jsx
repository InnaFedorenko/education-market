import { useQuery } from '@apollo/client';
import {QUERY_VERSES, QUERY_USER} from '../utils/queries';
import VerseList from '../components/VerseList';

const Learn = () => {

    return (
      <main>
       <div >
            <VerseList
              verses1= "" //{verses}
              profile1="" //{profile}
              title="Explore Learning Topics"
              type="false"
            />
      </div>
      </main>
    );
  };
  export default Learn;