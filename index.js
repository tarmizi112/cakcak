//----jangan diubah----//
const dyz = require('aoi.js');
const ferdy = new dyz.Bot({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  autoUpdate: false,
  intents: 'all'
});

const loader = new dyz.LoadCommands(ferdy);loader.load(ferdy.cmd,"./cmd");
ferdy.onMessage();
//---------------------//

//----Status Bot----//
ferdy.status({
  status: 'online', // online, dnd, idle, invisible.
  type: 'PLAYING', // PLAYING, WATCHING, LISTENING, STREAMING, COMPETING.
  text: '𝙊𝙭𝙡𝙚𝙮 𝙎𝙩𝙤𝙧𝙚 | 𝙊𝙣𝙡𝙞𝙣𝙚 𝙎𝙝𝙤𝙥',
  time: 3 // Abaikan.
});

//----Ready Logger----//
ferdy.readyCommand({
  channel: '',
  code: `
$log[$userTag[$clientID] Sudah Online!]`
});

//------------------//
// -
// -
// -
// -
// -
// -
ferdy.command({
  name: 'ann',
  aliases: ['announce','annoucement'],
  code: `$deletecommand
$channelSendMessage[$channelID;{newEmbed:{description:$splitText[2]}{title:$splitText[1]}{color:RANDOM}{footer:announce by#COLON# $userTag[$authorID]}}]
  $onlyIf[$splitText[2]!=;$getServerVar[prefix]announce [title | description]]
  $onlyIf[$splitText[1]!=;$getServerVar[prefix]announce [title | description]]
  $textSplit[$message;|]
  $onlyPerms[admin;Kamu tidak memiliki permission!]`
});

ferdy.command({
  name: 'oxembed',
  aliases: ['embed-builder'],
  code: `
$reply[$messageID;no]
$djsEval[const ferdy = require('simply-djs')
ferdy.embedCreate(message, {
 embed: {
   title: '**Create Embed**',
   description: 'Bot Embed Create By Oxley Store',
   color: '#F9FD00',
   footer: '© Oxley Store - Online Shop 2022',
   credit: false
   }
})]
$onlyPerms[admin;Kamu tidak memiliki permission!]`
})

ferdy.variables({
  prefix: process.env.PREFIX,
});

// 24/7 Supporter //
const express = require('express')
const app = express();
app.get("/", async(req,res) => {
  res.send('Running...')
});
app.listen(8080, async () => {
  console.log('Listening port: 8080')         
}) ;