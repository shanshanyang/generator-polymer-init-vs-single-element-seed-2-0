'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    // this.log(yosay(
    //   'Welcome to the shining ' + chalk.red('generator-polymer-init-template-vs') + ' generator!'
    // ));

    var prompts = [{
      type: 'input',
      name: 'elementName',
      message: 'What would you like your root element to be called?',
      default: 'vs-element'
    },
    {
      type: 'input',
      name: 'elementDescription',
      message: 'Brief description of your element',
      default: 'awesome element'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },
  
  writing: function () {
    const elementName = this.props.elementName;
    this.props.appname = _.camelCase(this.props.elementName);

    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props
    );
  
    this.fs.copyTpl(
      this.templatePath('_element.html'),
      this.destinationPath(`${elementName}.html`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_element.js'),
      this.destinationPath(`${elementName}.js`),
      this.props
    );
    
    this.fs.copyTpl(
      this.templatePath('test/_element.html'),
      this.destinationPath(`test/${elementName}.html`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('test/_element.js'),
      this.destinationPath(`test/${elementName}.js`),
      this.props
    );
  },

  install: function () {
    // run bower install && npm install
    this.installDependencies();
  }
});
