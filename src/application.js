class Application {
  constructor() {
    $(this.onReady);
  }

  onReady() {
    $('#root').append(`
      <i class="fa fa-camera-retro fa-5x"></i>
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    `);
  }
}


module.exports = new Application();
