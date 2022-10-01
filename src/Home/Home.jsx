import { Input } from '../components/Input/index.jsx';
import { CardList } from '../components/CardList/index.jsx';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { memo } from 'react';


export const HomeNoMemo = () => (
    <div className="Main">
        <Input />
        <ErrorBoundary>
            <CardList />
        </ErrorBoundary>
    </div>
)
export const Home = memo(HomeNoMemo);