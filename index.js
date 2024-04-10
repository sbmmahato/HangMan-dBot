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
let n=[], count=0;
client.on('interactionCreate',async (interaction)=>{
    //  n=[];
     if(interaction.isCommand()){
        if(interaction.commandName==='start'){
            n=[]; count=7;
           a=list[Math.floor(Math.random()*b)];
         await interaction.reply(`Guess the word: \n\`${repeat('_ ',a.length)}\``)
        for(let i=0;i<a.length;i++){
            n.push('_');
        }
        }
     }  
})

client.on('interactionCreate',async (interact)=>{
    if( interact.commandName==='g'){
        if(a){
            const text=await interact.options.getString("letter");
            var z=0;
            for(let i=0;i<a.length;i++){
                if(a[i]===text){
                    n[i]= text;z=1;
                }
            }
            // interact.reply(`\`${n.join(' ')}\``);
            if(z===1){await interact.reply(`\`${n.join(' ')}\``)}else{
                console.log(z);
                count--;
                await interact.reply(`'${text}' does not exist in the word.\nYou have ${count} chances left.\n\`${n.join(' ')}\``)
            }
        }else{
            await interact.reply('do /start first');
        }
    }
})

client.login(process.env.TOKEN);