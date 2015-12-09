Projects = new Mongo.Collection("projects");

if (Meteor.isClient) {
  
  Router.route('/', function () {
    this.render('projects');
  });

  Router.route('/jabbr');
  Router.route('/hackfeed');
  Router.route('/zvsv');
  Router.route('/menu');
  Router.route('/about');

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
