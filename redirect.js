/* Fixed destination; preserve the old URL's path, query and fragment. */
(function () {
  'use strict';
  var destination = new URL('https://americanpoliticalhistory.org/');
  var path = window.location.pathname;
  destination.pathname = path === '/index.html' ? '/' : path;
  destination.search = window.location.search;
  destination.hash = window.location.hash;
  window.location.replace(destination.href);
}());
