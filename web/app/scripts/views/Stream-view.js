FBHack.Views.StreamView = Backbone.View.extend({
  el: '#main',
  template: FBHack.getTemplate('stream'),
  qrTemplate: FBHack.getTemplate('qr'),
  model: FBHack.Collections.StreamCollection,
  initialize: function () {
    this.model.on('add', this.renderAdd, this);
  },
  events: {
    'click #qrlink': 'showQR',
    'click .modal .x': 'hideQR'
  },
  modalVisible: false,
  showQR: function (e) {
    if (!this.modalVisible) {
      $('#qr')
        .find('.content')
        .html(this.qrTemplate({ id : this.id }))
        .end()
      .slideDown('slow');
      this.modalVisible = true;
    }
    e.preventDefault();
  },
  hideQR: function (e) {
    $('#qr').slideUp('slow');
    this.modalVisible = false;
    e.preventDefault();
  },
  fetchNext: function () {
    this.model.fetchNext();
  },
  renderAdd: function () {
    this.render();
    $('#main').scrollLeft(FBHack.router.view.model.maxPos);
  },
  render: function () {
    this.$el.find('#stream_container').html(this.template({
      images: this.model.computeLayout(this.$el.width(), this.$el.height()).toJSON()
    }));
  }
});
