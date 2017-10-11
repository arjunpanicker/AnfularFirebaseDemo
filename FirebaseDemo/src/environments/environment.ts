// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyB-7HCAnxJpBssZE__54D3hPU4xnaMWPC4',
    authDomain: 'fir-demo-a2ea1.firebaseapp.com',
    databaseURL: 'https://fir-demo-a2ea1.firebaseio.com',
    projectId: 'fir-demo-a2ea1',
    storageBucket: 'fir-demo-a2ea1.appspot.com',
    messagingSenderId: '978573134577'
  }
};
