import { useQuery } from '@apollo/client';
import {QUERY_VERSES, QUERY_USER} from '../utils/queries';
import VerseList from '../components/VerseList';
// import { useContext } from 'react';

const Learn = () => {
   const { loading: loading, data: data, refetch: refetch } = useQuery(QUERY_VERSES);

    return (
      <main>
       <div >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <VerseList
              title="Explore Learning Topics"
              type="false"
            />
           )}  
      </div>
      </main>
    );
  };
  export default Learn;