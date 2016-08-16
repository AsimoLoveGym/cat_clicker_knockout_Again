var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Joey');
  this.imgSrc = ko.observable('img/Joey.jpg');

  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  };
}

ko.applyBindings(new ViewModel());
