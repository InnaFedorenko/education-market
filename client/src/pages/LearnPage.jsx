// import { useQuery } from '@apollo/client';
// import {QUERY_VERSES} from '../utils/queries';
// import VerseList from '../components/VerseList';
import Learn from './Learn';
import { useState } from 'react';


export default function LearnPage (props) {
    const [seed,setSeed] = useState(0)
    return (
<Learn setSeed={setSeed} seed={seed} />
    );
  };