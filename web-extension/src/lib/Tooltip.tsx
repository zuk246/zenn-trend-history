import { css } from '@emotion/css';

export default function Tooltip() {
    return (
        <span
            aria-label='Zennで過去にトレンドになった記事の一覧'
            data-tooltip-position='bottom'
            data-tooltip-size='medium'
            role='tooltip'
            className={css`
                display: inline-block;
                align-items: center;
                padding: 1rem 0.5rem 0.4rem;
                position: relative;
                box-sizing: inherit;
                border-radius: var(--rounded-xxs);
            `}
        >
            <span
                aria-label='詳細を確認する'
                className={css`
                    display: flex;
                    align-items: center;
                    width: 17px;
                    height: 17px;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 17px;
                    color: #fff;
                    border-radius: var(--rounded-full);
                    flex-shrink: 0;
                    justify-content: center;
                    background-color: var(--c-text-lower-priority);
                `}
            >
                ？
            </span>
        </span>
    );
}
