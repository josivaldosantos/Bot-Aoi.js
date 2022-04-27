//principal
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: "TOKEN_DO_SEU_BOT",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//variaveis
bot.variables({
    prefix: "t/",
})

// setar prefixo
bot.command({
name: "setprefix",
code: `
$description[Ok, meu novo prefixo neste servidor é \`$message\`]
$color[$random[0;999999]]
$addTimestamp
$setServerVar[prefix;$message]
$argsCheck[>1;Use: \`$getServerVar[prefix]setprefix <NewPrefix>\`]
$onlyPerms[admin;❌ **Você precisa ter permissão de adm para usar esse comando!!**]`
 })

// comando ping
bot.command({
    name: "ping",
    code: "Pong! $pingms"
})

//Up time
bot.command({
    name: "uptime",
    aliases: ["up", "time", "up-time", "ut"],
    code: `Estou ligado a $uptime`
})

// ban
bot.command({
    name: "ban",
    aliases: "bn",
    code: `
    $ban[$mentioned[1]]
    $argsCheck[>2;Use: \`$getServerVar[prefix]ban <@user> <Reason>\`]
    $onlyPerms[manageserver;❌ **Você precisa ter permissão de banir membros para usar esse comando!**]
    `
})
 //votação
 bot.command({
    name: "poll",
    code: `$title[Hora da votação]
  $addReactions[👍;👎;❔]
  $description[$message] 
  $footer[👍 Sim - 👎 Não - ❔ Talvez]
  $color[$random[0;999999]]
  $argsCheck[>1;**Use:** \`$getServerVar[prefix]poll <PollMessage>\`]
  $onlyPerms[admin;❌ **Você precisa de permissões de administrador!**]`
 
 })




// Final dos comandos

//logs
bot.onMessage()
bot.readyCommand({
    channel: "",
    code: `$log[Logado como: $userTag[$clientID]]`
})
