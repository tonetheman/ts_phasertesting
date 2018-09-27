
class Main {
    game : Phaser.Game;
    constructor() {
        let opts = { width : 300, height : 300};
        this.game = new Phaser.Game(opts);
    }
    preload() {

    }
    create() {
        
    }
    static mainline() {
        let app : Main = new Main();
    }
}
window.onload = function() {
    Main.mainline();
}