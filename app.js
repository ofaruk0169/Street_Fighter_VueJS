new Vue({
    el: '#app',
    data: {
        ryuHealth: 100,
        kenHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.ryuHealth = 100;
            this.kenHealth = 100;
        },
        hadouken: function() {
            this.kenHealth -= this.calculateDamage(3,10);

            if (this.checkWin()) {
                return;
            }
            this.ryuHealth -= this.calculateDamage(5, 12);
            this.checkWin();
        },
        shoryuken: function() {

        },
        tatsumaki_senpukyaku: function() {

        },
        give_up: function() {

        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.kenHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.ryuHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});