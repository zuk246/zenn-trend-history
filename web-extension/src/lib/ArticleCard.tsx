import { HistoryData } from '../types/db';
import { formatDate, formatURL } from '../utils/format';
import { css } from '@emotion/css';

export default function ArticleCard(props: { article: HistoryData }) {
    const { article } = props;

    return (
        <article>
            <a href={formatURL(article.link)}>
                <img
                    src={article.image}
                    alt={article.title}
                    className={css`
                        border-radius: 5px;
                        box-shadow: rgba(0, 27, 68, 0.25) -6px 6px 10px -2px,
                            rgba(143, 154, 175, 0.1) 0px 0px 3px 0px;
                    `}
                />
                <h2
                    className={css`
                        font-size: 1.05rem;
                        font-weight: 700;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    `}
                >
                    {article.title}
                </h2>
            </a>
            <div
                className={css`
                    display: flex;
                    align-items: center;
                `}
            >
                <div
                    className={css`
                        margin-right: 7px;
                    `}
                >
                    <p
                        className={css`
                            font-size: 12.5px;
                        `}
                    >
                        {article.creator}
                    </p>
                </div>
                <div>
                    <p
                        className={css`
                            font-size: 11.5px;
                        `}
                    >
                        {formatDate(article.createdAt)}日前
                    </p>
                </div>
            </div>
        </article>
    );
}
