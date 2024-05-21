import { GetSection } from '../features/get-section/get-section';
import { Header } from '../features/header/header';
import { Hero } from '../features/hero/hero';
import { PostSection } from '../features/post-section/post-section';

import './styles/index.scss';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <GetSection />
            <PostSection />
        </>
    );
}

export default App;
