(function (global) {
  System.config({
    paths: {
      'js:': 'node_modules/'
    },
    map: {
      app: 'app',
      '@angular/core': 'js:@angular/core/bundles/core.umd.js',
      '@angular/common': 'js:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'js:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'js:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'js:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'js:@angular/http/bundles/http.umd.js',
      '@angular/router': 'js:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'js:@angular/forms/bundles/forms.umd.js',
      'jquery' :  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
      'rxjs': 'js:rxjs',
      'ngx-webstorage': 'node_modules/ngx-webstorage',
      'angular-in-memory-web-api': 'js:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    packages: {
      app: {  main: './main.js', defaultExtension: 'js' },
      rxjs: {defaultExtension: 'js'},
      'ngx-webstorage': {main: 'bundles/core.umd.js', defaultExtension: 'js'}
    }
  });
})(this);