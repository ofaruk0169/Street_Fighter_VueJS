new Vue({
    el: '#app',
    data: {
        ryuHealth: 100,
        kenHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.ryuHealth = 100;
            this.kenHealth = 100;
            this.turns = [];
        },
        hadouken: function() {
            var damage = this.calculateDamage(3,10);
            this.kenHealth -= damage;
            this.turns.unshift({
                isRyu: true,
                text: 'Ryu throws a hadouken for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.kenAttacks();
        },
        shoryuken: function() {
            var damage = this.calculateDamage(10,20)
            this.kenHealth -= damage;
            this.turns.unshift({
                isRyu: true,
                text: 'Shoryuken! ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.kenAttacks();
        },
        tatsumaki_senpukyaku: function() {
            if (this.ryuHealth <= 90) {
                this.ryuHealth += 10;
            } else {
                this.ryuHealth = 100;
            }
            this.turns.unshift({
                isRyu: true,
                text: 'Tatsumaki Senpukyaku! '
            });
            this.kenAttacks();
        },
        give_up: function() {
            this.gameIsRunning = false;
        },
        kenAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.ryuHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isRyu: false,
                text: 'Ken spams Shoryuken for ' + damage
            });
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