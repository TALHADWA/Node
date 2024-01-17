const monogos=require("mongoose");
const dta=monogos.Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer
});

// dta.pre("save", function(next){
//    this.name="Fuck"
//     console.log(this.name);

// });
module.exports=monogos.model("Fuck",dta);