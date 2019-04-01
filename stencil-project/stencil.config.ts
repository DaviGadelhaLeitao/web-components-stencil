import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'davileitao',
  outputTargets:[
    { type: 'dist' }, // just a collection of components you can share
    { type: 'docs' }
    /*
    Spits out a full project which you could deploy
    to a static host, and that is useful when you build your entire
    frontend out of stencil components and only out of that. So as when
    you use your web components as a replacement for frameworks like React,
    Angular.
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
    */
  ],

  /*
  This bundle configuration is important to highlight:
  Stencil give us automated code splitting by looking into the components
  and their dependencies and only loading what is needed to render it
  into the DOM.

  However, bundles can be manually generated using the bundles config.
  This bundles config is rarely needed as Stencil handles this automatically
  behind the scenes.

  Name the components that should be merged into one package by Stencil.
  Only do this if you know what you are doing as Stencil will handle this
  by default and will try to do as much as code splitting as possible.

  Because smaller code bundles, of course means that your application where
  you use your web components loads up faster.
  */
  bundles: []
};
