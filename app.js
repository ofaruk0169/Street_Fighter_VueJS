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
        }
    }
});