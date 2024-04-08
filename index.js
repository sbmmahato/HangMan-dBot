// import { Client, GatewayIntentBits } from 'discord.js';
const { Client,GatewayIntentBits }=require('discord.js');
require("dotenv").config();
// const GatewayIntentBits=require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const list=['yo','word','elephant'];
const b=list.length+1;
var a=null;

var repeat = function(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}

client.on('messageCreate',async (message)=>{
    if(message.author.bot) return;
    await message.reply({
        content:'yo from bot '
    })
})

client.on('interactionCreate',async (interaction)=>{
     if(interaction.isCommand()){
        if(interaction.commandName==='start'){
           a=list[Math.floor(Math.random()*b)];
         await interaction.reply(`Guess the word: \n\`${repeat('_ ',a.length)}\``)}
     }  
})

client.on('interactionCreate',(interact)=>{
    if( interact.commandName==='g'){
        if(a){
            const text=interact.options.getString("letter");
            console.log(interact);
        }else{
            interact.reply('do /start first');
        }
    }
})

client.login(process.env.TOKEN);