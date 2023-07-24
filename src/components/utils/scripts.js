import {URL_HOST} from './constanst'

var location = undefined;

export function visitas() {
    const api = URL_HOST;
    const prodApi = URL_HOST;

    if (api !== prodApi)
        return;

    if (location === window.location.href)
        return;

    location = window.location.href;

    window.dataLayer = window.dataLayer || [];
    function gtag(){
        window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-176716852-30'); 
}