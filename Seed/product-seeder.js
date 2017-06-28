var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost: 27017/shopping');


var products =
    [new Product({
    imagePath : 'https://www.killping.com/blog/wp-content/uploads/2015/10/dota-2-reborn-lag.jpg',
    title : 'Dota 2',
    description : 'Awesome Game!!!!',
    price : 200

}),
        new Product({
            imagePath : 'http://media1.santabanta.com/full1/Sports/Games/games-311a.jpg',
            title : 'Black Flag',
            description : 'Awesome Game!!!!',
            price : 300

        }),
        new Product({
            imagePath : 'http://wallpaperget.com/images/games-hd-wallpapers-4.jpg',
            title : 'Medal of honor',
            description : 'Awesome Game!!!!',
            price : 250

        }),
        new Product({
            imagePath : 'https://c.s-microsoft.com/en-ca/CMSImages/Windows_Games_v04_1920_GearsofWar_img.jpg?version=cd086aef-8999-a57b-0e50-97e05062ec64',
            title : 'Gears of War',
            description : 'Awesome Game!!!!',
            price : 100

        }),
        new Product({
            imagePath : 'http://www.intrawallpaper.com/static/images/35-Latest-HD-Game-Wallpapers-For-Download-2.jpg',
            title : 'Call of Duty',
            description : 'Awesome Game!!!!',
            price : 150

        }),
        new Product({
            imagePath : 'http://www.intrawallpaper.com/static/images/445595.jpg',
            title : 'Batman',
            description : 'Awesome Game!!!!',
            price : 700

        }),
        new Product({
            imagePath : 'http://www.intrawallpaper.com/static/images/175630042_dcacc113c4.jpg',
            title : 'Assasin Creed 2',
            description : 'Awesome Game!!!!',
            price : 290

        }),
        new Product({
            imagePath : 'http://www.intrawallpaper.com/static/images/Battlefield_2_Bad_Company_Wallpaper_by_Stiannius.jpg',
            title : 'Battlefield',
            description : 'Awesome Game!!!!',
            price : 400

        }),
        new Product({
            imagePath : 'http://www.intrawallpaper.com/static/images/Car-Game-Wallpaper.jpg',
            title : 'Need For Speed Run',
            description : 'Awesome Game!!!!',
            price : 1000

        }),



    ];

var done = 0;

for (var i = 0 ; i < products.length ; i++){
    products[i].save(function (err, result) {
        done ++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();

}