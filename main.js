const Danke = {
    name: "Danke",
    species: "cat",
    nicknames: [`dummy`, `danke-berb`],
    age: 3,

    meow: function () {
        window.alert("i'm a whiny runt")
    },

    scratch: function () {
        window.alert("owwww!");
    },

    pee: function () {
        window.alert("stinky!");
    },

    toys: {
        toy1: "mouse",
    },

    favoriteToys: [],

    play: function(toy) {
        
        this.favoriteToys.push(toy);
            
        },
    }


Danke.play(Danke.toys.toy1);

console.log(Danke.favoriteToys);

Danke.meow();
Danke.scratch();
Danke.pee();