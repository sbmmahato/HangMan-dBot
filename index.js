// import { Client, GatewayIntentBits } from 'discord.js';
const { Client,GatewayIntentBits }=require('discord.js');
require("dotenv").config();
// const GatewayIntentBits=require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const list=['yo','word','elephant'];
const b=list.length;
var a=null;

var repeat = function(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}

// async function generateWord() {
//     return new Promise((resolve, reject) => {
//         let a = list[Math.floor(Math.random() * b)];
//         resolve(a);
//     });
// }
// async function countWord(word){
//     return new Promise((resolve,reject)=>{
//         let c=word.length;
//         console.log(c);
//         resolve(c);
//     })
// }

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
            n=[]; count=8;
           a=list[Math.floor(Math.random()*b)];
            // let a = await generateWord();
            let c=a.length ;
            // let c = await countWord(a);
         await interaction.reply({content:`Guess the word: \n\`${repeat('_ ',c)}\``})
        for(let i=0;i<a.length;i++){
            n.push('_');
        }
        }
     }  
})

client.on('interactionCreate',async (interact)=>{
    if( interact.commandName==='g'){
        if(a){
            let length=a.length;
            const text=await interact.options.getString("letter");
            var z=0;
            for(let i=0;i<a.length;i++){
                if(a[i]===text){
                    n[i]= text;z=1;
                }
            }
            // interact.reply(`\`${n.join(' ')}\``);
            if(z===1 && count!==0){await interact.reply({content:`\`${n.join(' ')}\``})
                if(!n.includes('_')){await interact.followUp({content:'Congrats! You found the word!\nUse command \`/start\` to play again'})}
            }else if(z===0 && count!==0){
                count--;
                await interact.reply({content:`'${text}' does not exist in the word.\nYou have ${count} chances left.\n\`${n.join(' ')}\``})
            }
            if(count===0){await interact.reply({content:`You used up all your chances. Better Luck next time!\nUse command \`/start\` to play again`})}
        }else{
            await interact.reply({content:'do /start first'});
        }
    }
})

client.on('interactionCreate',async (interact)=>{
    if(interact.isCommand()){
        if(interact.commandName==='gw'){
            let word=await interact.options.getString("word");
            if(word===a){
                await interact.reply({content:`Congrats! You guessed it right!\nUse command \`/start\` to play again.`});
            }else{
                count--;
                await interact.reply({content:`You guessed it wrong\nYou have ${count} chances left.`});
            }
        }
    }
})

client.login(process.env.TOKEN);