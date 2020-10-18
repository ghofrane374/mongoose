const mongoose = require("mongoose");
const Person = require("./UserModel").User
mongoose.connect("mongodb://localhost:27017/checkpoint")
    .then(() => {
        //creation person ghofrane
        const person = new Person({ name: "ghofrane", age: 27, favFood: ["pizza", "lazania"] })
        person.save();
        //create many person:
        Person.create({ name: "oussama", age: 25, favFood: ["couscous", "spaghetti"] },
            { name: "mohamed", age: 12, favFood: ["pizza", "couscous", "lazania"] },
            { name: "ahmed", age: 27, favFood: ["spaghetti", "couscous", "lazania"] },
            { name: "oussama", age: 25, favFood: ["couscous", "spaghetti"] })
        //find name oussama
        Person.find({ name: "oussama" }).then((persons) => { console.log(persons) }).catch((error) => { })
        //find one by favorite food
        Person.findOne({ favFood: { $contains: "lazania" } }).then((persons) => { console.log(persons) }).catch((error) => { })
        // find By id 
        Person.findById("5f7f4b71986f2918d48e574a").then((person) => { console.log(persons) }).catch((error) => { })
        //find edit save
        Person.findById("5f7f4b71986f2918d48e574a").then((person) => {
            person.favFood.push("hamburger")
            person.save()
        })
            .catch((error) => { })
        //findOneandpdate
        Person.findOneAndUpdate({ name: "oussama" }, { $set: { age: 20 } }).then((resp) => { }).catch((err) => { })
        //findByidand remove
        Person.findOneAndRemove("5f7f4b71986f2918d48e574a").then((resp) => { }).catch((err) => { })
        //delete many
        Person.delete({ name: "ghofrane" }).then((resp) => { }).catch((err) => { })

        //chaine search
        Person.find({ favFood: { $contains: "lazania" } }).sort("name").limit(2).select("-age").exec()

    })
    .catch((err) => { console.log(err); });