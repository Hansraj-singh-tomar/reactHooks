import {Suspense, lazy} from 'react';

const Homee = lazy(()=> import('./Homee'));
const Aboutt= lazy(()=> import('./Aboutt'));

const App1 = () => {
     return(
        <>
            <h1>Lazy Loading</h1>
            <Suspense fallback={<div>please wait.. Home component is loading </div>}>
                <Homee/>
            </Suspense><br/>
            <Suspense fallback={<div>please wait.. About component is loading </div>}>
                <Aboutt/>
            </Suspense>
        </>
     )
}

export default App1;