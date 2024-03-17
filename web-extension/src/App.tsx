import { useEffect, useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import Tooltip from './lib/Tooltip';
import { HistoryData } from './types/db';
import ArticleCard from './lib/ArticleCard';
import { css } from '@emotion/css';

type FetchData = {
    success: boolean;
    message: string;
    length: number;
    data: HistoryData[];
};
const API_URL = 'https://zenn-trend-history.zuk246.net';

export default function App() {
    const { data, isLoading, error } = useSWRImmutable<FetchData>(
        '/v1/random',
        () => fetch(API_URL + '/v1/random?limit=12').then((res) => res.json())
    );
    const [isRootURL, setIsRootURL] = useState(true);

    useEffect(() => {
        setInterval(() => {
            if (location.href !== 'https://zenn.dev/') {
                setIsRootURL(false);
            } else {
                setIsRootURL(true);
            }
        }, 50);
    }, []);

    if (isLoading || !!error || !data?.success || !isRootURL) return;

    return (
        <div
            className={css`
                max-width: 960px;
                padding: 0 40px;
                margin: 0 auto;
            `}
        >
            <span
                className={css`
                    display: block;
                    height: 3rem;
                    flex-shrink: 0;
                `}
            />
            <div
                className={css`
                    display: flex;
                    gap: 0;
                    flex-direction: row;
                    align-items: center;
                `}
            >
                <h3
                    className={css`
                        font-size: 2.4rem;
                    `}
                >
                    History
                </h3>
                <Tooltip />
            </div>
            <span
                className={css`
                    display: block;
                    height: 2rem;
                    flex-shrink: 0;
                `}
            />
            <div
                className={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    @media (max-width: 768px) {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    @media (max-width: 480px) {
                        grid-template-columns: repeat(1, 1fr);
                    }
                `}
            >
                {data?.data.map((item) => (
                    <ArticleCard article={item} key={item.id} />
                ))}
            </div>
            <span
                className={css`
                    display: block;
                    height: 4rem;
                    flex-shrink: 0;
                `}
            />
        </div>
    );
}
