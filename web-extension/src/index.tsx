import { createRoot } from 'react-dom/client';
import App from './App';

let target_element: HTMLElement | null;
let afterElement: HTMLElement | null;
let isDisplayed = false;

setInterval(() => {
    const is_root_url = /^https:\/\/zenn\.dev\/?$/.test(location.href);

    // render App component
    if (is_root_url && !isDisplayed) {
        target_element = document.querySelector('#featured');
        afterElement = document.createElement('section');

        // set style
        afterElement.style.backgroundColor = 'var(--c-bg-primary-lighter)';
        afterElement.style.marginTop = '2px';

        // render component
        target_element?.after(afterElement);
        createRoot(afterElement).render(<App />);

        isDisplayed = true;
    }

    // remove App component
    if (!is_root_url && isDisplayed) {
        afterElement?.remove();
        isDisplayed = false;
    }
}, 1200);
