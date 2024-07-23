let bowling = {
    players: [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    creapunteggio: function(){
        this.players.forEach(giocatore =>{
            for (let i = 1; i <= 10 ; i++) {                
                giocatore.scores.push(Math.floor(Math.random()* (10 - 1 + 1) + 1))
            }
            
        })
    },

    nuovoGiocatore: function(nome){
        let newPlayer = {name: nome, scores: []}
            for (let i = 1; i <= 10 ; i++) {                
            newPlayer.scores.push(Math.floor(Math.random()* (10 - 1 + 1) + 1))
        }
        this.players.push(newPlayer)
        
    },

    punteggioFinale: function(){
        this.players.forEach(giocatore => {
            let tot = giocatore.scores.reduce((acc, num)=> acc + num)
            giocatore.totale = tot
            
        })
        this.players.sort((a,b)=> b.totale - a.totale)
    },

    vincitore: function(){
        let winner = this.players[0]
        console.log(`IL VINCITORE E' ${winner.name} con ${winner.totale} punti`);
    },

    classifica: function(){
        console.log(`CLASSIFICA FINALE:`);
        this.players.forEach(giocatore => {
            console.log(`${giocatore.name} con ${giocatore.totale}`);
        })
    }
}

bowling.creapunteggio()
bowling.nuovoGiocatore(`Mario`)
bowling.punteggioFinale()
bowling.vincitore()
bowling.classifica()