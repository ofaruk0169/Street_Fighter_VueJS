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
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.kenHealth -= damage;

            if (this.kenHealth <= 0) {
                alert('You Won!');
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 5;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.ryuHealth -= damage;

            if (this.ryuHealth <= 0) {
                alert('You Lost!');
                this.gameIsRunning = false;
            }
        },
        shoryuken: function() {

        },
        tatsumaki_senpukyaku: function() {

        },
        give_up: function() {

        }
    }
});