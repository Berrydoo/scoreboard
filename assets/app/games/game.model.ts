

export class Shot {

    constructor( public teamIndex:number,
                 public playerIndex:number,
                 public points:number,
                 public madeIt:boolean,
                 public x: number,
                 public y: number ){}

}

export class Player{

    constructor( public playerName:string,
                 public jerseyNumber:number,
                 public shots:Shot[]){}

    score(){
        return this.shots.reduce( function(cum:number, shot:Shot ){
            return cum + (shot.madeIt ? shot.points : 0);
        }, 0);
    }

    numberOfShots(){
        return this.shots.length;
    }

    numberOfMadeShots(){
        return this.shots
                    .filter( shot => shot.madeIt )
                    .length;
    }

    numberOfMissedShots(){
        return this.shots
                    .filter( shot => !shot.madeIt )
                    .length;
    }

    shotMadePct(){
        if( this.numberOfShots() == 0 ){
            return 0;
        } else {
            return (this.numberOfMadeShots() / this.numberOfShots()) * 100;
        }
    }

    shotsSummary(){
        return {
            points: this.score(),
            shotsMade: this.numberOfMadeShots(),
            shotsMissed: this.numberOfMissedShots(),
            pctMade: this.shotMadePct()
        };
    }

}

export class Team {

    constructor( public teamName:string,
                 public players:Player[]){}

    score(){
        return this.players.reduce( function(cum:number, player:Player ){
            return cum + player.score();
        }, 0);
    }
}

export class Game {

    constructor( public gameName:string,
                 public gameDate:Date,
                 public teams:Team[]){}

}