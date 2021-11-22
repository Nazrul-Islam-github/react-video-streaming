const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')
app.use(cors());

const port = process.env.port || 5000;


const
    video = [

        {
            id: 1,
            video: "1.mp4",
            thumbnail: "thumbnail/1.jpg"

        }, {
            id: 2,
            video: "2.mp4",
            thumbnail: "thumbnail/2.jpg"
        }, {
            id: 3,
            video: "3.mp4",
            thumbnail: "thumbnail/3.jpg"
        }, {
            id: 4,
            video: "4.mp4",
            thumbnail: "thumbnail/4.jpg"
        }, {
            id: 5,
            video: "5.mp4",
            thumbnail: "thumbnail/5.jpg"
        },
    ]


app.get('/video', async (req, res) => {
    console.log(video)
    res.status(200).json(video)

});


app.get('/thumbnail/:thumbnail', async (req, res) => {
    var options = {
        root: path.join(__dirname, 'thumbnails')
    };

    var fileName = req.params.thumbnail;
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});



app.get('/playing/:id', (req, res) => {
    console.log(req.params.id)
})

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
})