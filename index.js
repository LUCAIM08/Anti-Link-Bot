const Discord = require("discord.js")
const links = require("./links.json")
const token = require("./token.json")

const client = new Discord.Client({
    intents: 32767
})

client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    let parolacce = links;
    let trovata = false;
    let testo = message.content;
    let utente = message.author

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
        }
    })

    if (trovata) {
        if(message.channel.id === "933749490693840926") return
        message.delete();
        let embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("[Link detected] DO NOT SEND LINK!")
            .setDescription(`${utente} sent a message with a link!`)
            .addField("Do not send scam link!", `Automatic action carried by ${client.user.username}`, false)
            .setTimestamp()

        message.channel.send({embeds: [embed]})
    }
})

client.login(token.token)
