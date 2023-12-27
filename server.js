import express from 'express';
import ViteExpress from 'vite-express'; 

const app = express()

app.use(express.json())

let newOffGlobalId = 4

let offenseDB = [
    {
        id: 1,
        name: 'Cody F(REPLACE ME)',
        receptions: 45,
        yards: 502,
        touchdowns: 11,
        drops: 8,
        conversions: 12
    },
    {
        id:2,
        name: 'Timmah(REPLACE ME)',
        receptions: 52,
        yards: 402,
        touchdowns: 8,
        drops: 1,
        conversions: 9
    },
    {
        id: 3,
        name: 'Billy Joe(REPLACE ME)',
        receptions: 27,
        yards: 295,
        touchdowns: 8,
        drops: 4,
        conversions: 5
    }
]

app.get('/offensive-players', (req,res) => {
    res.status(200).send(offenseDB)
})

app.put('/edit-player/:id', (req, res) => {
    let id = +req.params.id
    let editedPlayer = req.body
    editedPlayer.receptions = +editedPlayer.receptions
    editedPlayer.yards = +editedPlayer.yards
    editedPlayer.touchdowns = +editedPlayer.touchdowns
    editedPlayer.drops = +editedPlayer.drops
    editedPlayer.conversions = +editedPlayer.conversions

    for(let i = 0; i< offenseDB.length; i++){
        if (offenseDB[i].id === id){
            offenseDB.splice(i, 1, editedPlayer)
            break
        }
    }

    res.status(200).send(offenseDB)

})

app.delete('/offensive-players/:id', (req,res) => {
    let id = +req.params.id

    for(let i = 0; i< offenseDB.length; i++){
        if (offenseDB[i].id === id){
            offenseDB.splice(i, 1)
            break
        }
    }

    res.status(200).send(offenseDB)
})


// app.listen(3000, () => {console.log('listening on 3000');})

ViteExpress.listen(app, 3000, () => {console.log('listening on 3000');})