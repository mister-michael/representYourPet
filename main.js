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
    } 
}

Danke.meow();
Danke.scratch();
Danke.pee();