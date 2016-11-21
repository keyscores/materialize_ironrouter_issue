Router.route('/', function () {
  Router.go('working')
  // this.layout('layout');

});
Router.route('/working', function () {
  this.render('working');
});

Router.route('/broken', function () {
  this.render('broken');
  this.layout('layout_helper');

});

Router.route('/test_area', function () {
  this.render('test_area');
});
