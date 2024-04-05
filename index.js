// import { Client, GatewayIntentBits } from 'discord.js';
const { Client, GatewayIntentBits }=require('discord.js');
// const GatewayIntentBits=require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const list=['yo','word','elephant'];
const b=list.length+1;

var repeat = function(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}

client.on('messageCreate', (message)=>{
    console.log(message.content);
    if(message.author.bot) return;
    message.reply({
        content:'yo from bot '
    })
})

client.on('interactionCreate',(interaction)=>{
    // function
    if(interaction.commandName==='ping'){
        a=list[Math.floor(Math.random()*b)];
     interaction.reply(`Guess the word: \n\`${repeat('_ ',a.length)}\``)}
})


client.login('MTIyNTUwNzUyMTEzMzgwNTU5OA.GekSAD.Ndz7HT1ESqI7HajMep4fgRltBHvGxpFmrebxUI');