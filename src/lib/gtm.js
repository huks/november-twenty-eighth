import TagManager from 'react-gtm-module'

const gtmConfig = {
  containerId: 'GTM-KMGL46M'
}

const warn = (...args) => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  console.warn(...args);
};

class GTM {
  constructor() {
    this.CONTAINER_ID = null;

    this.initialized = false;
  }

  configure(config) {
    this.CONTAINER_ID = config.containerId;
  }

  initialize() {
    if (this.initialized) {
      warn('GTM can only be initialized once.');
      return;
    }

    // Maybe you want to load events from server side (in NextJS apps for example),
    // those can be queued.
    // SSR queued events can be loaded in the initialize script.
    // For the moment we do not implement it, but in future we might add it.

    if (!document) {
      warn('GTM can be initialized only on client side.');
      return;
    }

    if (!gtmConfig.containerId) {
      warn('GTM requires a GTM ID to be loaded.');
      return;
    }

    this.configure(gtmConfig);

    TagManager.initialize({ gtmId: this.CONTAINER_ID })

    // const script = document.createElement('script');
    // const noscript = document.createElement('noscript');

    // script.innerHTML = `
    //   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //   })(window,document,'script','dataLayer','${this.CONTAINER_ID}');
    // `;
    // noscript.innerHTML = `
    //   <iframe src="https://www.googletagmanager.com/ns.html?id=${this.CONTAINER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    // `;

    // document.head.insertBefore(script, document.head.childNodes[0]);
    // document.body.insertBefore(noscript, document.body.childNodes[0]);
  }

  // eslint-disable-next-line class-methods-use-this
  push(...args) {
    if (!window) {
      warn('GTM push works only on client side.');
      return;
    }

    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push(...args);
  }

  _pushDataLayer(dataLayer) {
    TagManager.dataLayer({ dataLayer })
  }

  pageview(url) {
    console.log(`[gtm] pageview ${url}`)
    this._pushDataLayer({
      event: 'pageview',
      eventLabel: url,
      pagePath: url,
    })
  }

  event({ action, category, label, value, ...args }) {
    console.log(`[gtm] event ${action}, ${category}, ${label}, ${value}`, args)
    this._pushDataLayer({
      event: action,
      eventCategory: category,
      eventLabel: label,
      value: value,
      ...args,
    })
  }
}

// Singleton
const gtm = new GTM();

export default gtm;
