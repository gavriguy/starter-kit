var App = Em.Application.create({
  ready: function(){
    App.TabItemController.loadItems();
    App.tabItemView.append();
   
  }
});



//models

App.TabItem = Em.Object.extend({
  title: ''
});

//views

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  },
  itemsCountBinding: 'App.TabItemController.countItems'
});

App.tabItemView = Ember.View.create({
  templateName: 'tab-item',
});



//controllers

App.TabItemController = Ember.ArrayController.create({
  content: [],
  
  countItems: function() {
    return this.content.length
  }.property('content@each'),

  loadItems: function() {
    var self = this;
    $.getJSON('js/data.json',function(data){
      data.forEach(function(item){
        self.pushObject(App.TabItem.create(item));
      });
    });
  }
});
