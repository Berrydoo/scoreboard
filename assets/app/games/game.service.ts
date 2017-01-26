import {Game, Shot, Player, Team} from "./game.model";
import {OnInit} from "@angular/core";

export class GameService implements OnInit{

    currentGame:Game;

    ngOnInit(){}

    createGame(){

        let game:Game = new Game( "New Game", new Date(), new Array<Team>());

        let team1:Team = new Team('Team 1', new Array<Player>());
        team1.players.push(new Player('John', 11, new Array<Shot>()));
        team1.players.push(new Player('Bill', 23, new Array<Shot>()));
        team1.players.push(new Player('Tom', 31, new Array<Shot>()));
        team1.players.push(new Player('James', 14, new Array<Shot>()));
        team1.players.push(new Player('Brad', 25, new Array<Shot>()));
        game.teams.push(team1);

        let team2:Team = new Team('Team 2', new Array<Player>());
        team2.players.push(new Player('Kevin', 16, new Array<Shot>()));
        team2.players.push(new Player('Amit', 21, new Array<Shot>()));
        team2.players.push(new Player('Sanjay', 43, new Array<Shot>()));
        team2.players.push(new Player('Keith', 41, new Array<Shot>()));
        team2.players.push(new Player('Steve', 25, new Array<Shot>()));
        game.teams.push(team2);

        this.currentGame = game;
    }

    getCurrentGame(){
        return this.currentGame;
    }

    addPlayerToTeam( team:Team, player:Player ){
        let teamIndex = this.currentGame.teams.indexOf(team);
        this.currentGame.teams[teamIndex].players.push(player);
    }

    updatePlayer( team:Team, player:Player){
        let teamIndex = this.currentGame.teams.indexOf(team);
        let playerIndex = this.currentGame.teams[teamIndex].players.indexOf(player);
        this.currentGame.teams[teamIndex].players[playerIndex] = player;
    }

    registerShot( shot:Shot ){
        console.log( shot );
        this.currentGame.teams[shot.teamIndex].players[shot.playerIndex].shots.push(shot);
    }

}