import { player1, player2 } from './assets/libs/characters.js';
import generateLogs from './assets/libs/logs.js';
import { createPlayer } from './assets/libs/createPlayer.js';
import { roundFight } from './assets/libs/roundFight.js';
import { checkWinner } from './assets/libs/roundEnd.js';
import { $arenas, $formFight } from './assets/libs/gameScene.js';

function gameStart(player1, player2) {
    $arenas.append(createPlayer(player1), createPlayer(player2));
    generateLogs('start', player1, player2);

    $formFight.addEventListener('submit', function(e) {
        e.preventDefault();
        roundFight(player1, player2);
        checkWinner(player1, player2);
    });
}

gameStart(player1, player2);