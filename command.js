const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require("dotenv").config();

const token=process.env.TOKEN;
const clientid=process.env.CLIENT_ID;

const commands = [
    new SlashCommandBuilder()
    .setName("start")
    .setDescription(" start the game"),

    new SlashCommandBuilder()
    .setName("g")
    .setDescription(" guess a letter")
    .addStringOption(option=>{
      return option
      .setName("letter")
      .setDescription("type a letter")
      .setMinLength(1)
      .setMaxLength(1)
    })
  ];

  const rest = new REST({ version: '10' }).setToken(token);

  (async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(clientid), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
  })();
