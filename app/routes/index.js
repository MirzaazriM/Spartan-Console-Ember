import Route from '@ember/routing/route';

export default Route.extend({
  // set route hooks

  // at start of the application default route is index, but with this hook we redirect application to the statistic route
  beforeModel(){

    // on opening of the app set current page
    sessionStorage.setItem('currentPage', 'statistic');

    // redirect to the statistic page
    this.replaceWith('/statistic');
  }

});
