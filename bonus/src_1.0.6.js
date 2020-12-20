const Discord = require('discord.js')
const chancejs = require("chance");
const math = require("math-expression-evaluator");
var base64 = require('base-64');
const chance = new chancejs();
const fs = require("fs");
search = require("youtube-search");
const fetch = require("node-fetch");
var utf8 = require('utf8');
const snekfetch = require("snekfetch");
const hastebins = require("hastebin-gen");
const backups = require("./Data/backups.json");
const rpcGenerator = require("discordrpcgenerator");
const os = require("os");
const randomPuppy = require('random-puppy');
var adminname = "𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩";
const translate = require('@k3rn31p4nic/google-translate-api');
const {
    exec
} = require('child_process');
const cuaca = require('weather-js');
const isTuesday = require('is-tuesday');
const https = require('https');
const ameClient = require("amethyste-api");
const ameApi = new ameClient("0cd5eb5940b533a97e15e5b3b80b88a109123120c3ba1df1ab3b49c5caefa2dd6dd499ac5e8a8ef9b987026c587702462e521ce5b709f695d9dccc8bf462367f");

const request = require("request")
let cpuStat = require("cpu-stat");
const Minesweeper = require('discord.js-minesweeper');

snekfetch.get('https://legend-safe-meteor.glitch.me/version.json').then(r => {
    var versionself = r.body.version
    commandIntervals = [];
    /////////////////////////////////////
    const configfile = require('./config.json');
    var token = configfile.token;
    var prefix = configfile.prefix;
    var image = configfile.image;
    var color = configfile.color;
    var twitch = configfile.twitch;
    var statusperso = configfile.multi_status
    var nsfw = configfile.nsfw
    var nitroclaimer = configfile.nitro_claimer
    /////////////////////////////////////
    ////////////rich presence 
    var title = configfile.title
    var details = configfile.details
    var state = configfile.state
    var st = configfile.smalltext
    var lt = configfile.largetext
    var nb1 = configfile.sizeplayer
    var nb2 = configfile.sizeplayermax
    var appid = configfile.application_id
    var rpimg = configfile.imagerpc

    if (!title) {
        title = "none"
    }
    if (!details) {
        details = "none"
    }
    if (!state) {
        state = "none"
    }
    if (!st) {
        st = "none"
    }
    if (!lt) {
        lt = "none"
    }
    if (!nb1) {
        nb1 = "404"
    }
    if (!nb2) {
        nb2 = "404"
    }
    if (!appid) {
        appid = "719905369723502602"
    }
    if (!rpimg) {
        rpimg = "unknown"
    }

    if (!image) {
        image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67401945-34fc-46b8-8e8f-1982847277d4/ddba22b-2fad9d00-1d3f-4ec8-a65d-199a09dfa4e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc0MDE5NDUtMzRmYy00NmI4LThlOGYtMTk4Mjg0NzI3N2Q0XC9kZGJhMjJiLTJmYWQ5ZDAwLTFkM2YtNGVjOC1hNjVkLTE5OWEwOWRmYTRlMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._-whxwEBEaTLWUvSWL80KTGiwpoy9dSPzXSRhfTAzeM"
    }

    //////////

    if (!configfile.token) {
        console.clear()
        setTimeout(function() {
            console.clear();
            console.log("- [ERROR] Le token n'a pas été trouvé. Vérifi si tu as bien rentré le token dans le config.json".red);
        }, 1000);
    }

    let url = "https://discordapp.com/api/v7/users/@me";
    request(
        url, {
            method: "GET",
            headers: {
                authorization: token
            }
        },
        function(error, response, body) {
            if (response.statusCode === 200) {} else {
                console.clear();
                console.log(`- [ERROR] Échec de l'authentification avec Discord. Suivez les instructions et entrez votre token dans config.json.`.red)
                console.log('- le fichier README.txt va se lancer automatiquement '.green);
                exec("start", "README.md");
                process.exit();
            }
        })


    ///////////////////const fun
    const veski = [
        'https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif',
        'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif',
        'https://media1.tenor.com/images/6a535d0f8da2f51f3296747481bad7da/tenor.gif?itemid=15809709',
        'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif'
    ]
    const issou = [
        'https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif',
        'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif',
        'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif',
        'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif',
        'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif',
        'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif',
        'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif',
        'https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif',
        'https://cdn.discordapp.com/attachments/603949531700396032/603954611405062157/tenor_1.gif'
    ]


    /////////////////////
    snekfetch.get('https://legend-safe-meteor.glitch.me/update.json').then(r => {
        var servself = r.body.servself
        var lienupdate = r.body.update
        var fid = r.body.fondatid
        var newupdate = r.body.new

        var vactuel = "1.0.6"
        snekfetch.get('https://legend-safe-meteor.glitch.me/index.json').then(r => {
            var white = r.body.white



            function sleep(delay) {
                var start = new Date().getTime();
                while (new Date().getTime() < start + delay);
            }


            client.on('ready', function() {
                if (versionself.includes(vactuel)) {} else {
                    function UpdateFile(FileName, Link) {
                        let a = FileName;
                        let b = Link;
                        fs.unlink(`./${a}`, function(err) {
                            if (err && err.code == 'ENOENT') {
                                // file doens't exist
                                console.info("Un fichier n'existe pas, ne fermez pas la fenetre je vais l'installer.");
                            } else if (err) {
                                // other errors, e.g. maybe we don't have enough permission
                                console.error("Une erreur s'est produite lors de la tentative de suppression du fichier".bgred);
                            } else {
                                //continue
                            }
                        });
                        const request = require("request")
                        var file = fs.createWriteStream(`./${a}`);
                        var r = request(`${b}`).pipe(file);
                        r.on('error', function(err) {
                            console.log(err);
                        });
                        r.on('finish', function() {
                            file.close(sleep(1));
                        });
                    }

                    function OpenProgram(name) {
                        let code = `${name}`

                        const util = require('util');
                        const exec = util.promisify(require('child_process').exec);

                        async function ls(b) {
                            const {
                                stdout,
                                stderr
                            } = await exec(`${b}`);
                            if (`${stdout}` == "") {
                                if (`${stderr}` !== "") {
                                    output = stderr;
                                } else {
                                    output = "output: " + stdout;
                                }
                            } else {
                                output = "output: " + stdout;
                            }
                            if (`${stdout}` == "" | `${stderr}` == "") {
                                output = "output: " + stdout + "\n error: " + stderr;
                            }
                            return await console.log(`${output}`);
                        }
                        ls(`${code}`);
                    }

                    print("[Selfbot] mise à jour du punchnox-project...");
                    UpdateFile("index.js", "https://raw.githubusercontent.com/punchnox/punchnox-project/master/index.js");
                    UpdateFile("README.md", "https://raw.githubusercontent.com/punchnox/punchnox-project/master/README.md");
                    UpdateFile("start.bat", "https://raw.githubusercontent.com/punchnox/punchnox-project/master/start.bat");
                    print("Mise à jour terminer vous pouvez relancer le selfbot.");

                    function print(a) {
                        console.log(`${a}`);
                    }
                }
            });



            client.on('ready', function() {
                if (versionself.includes(vactuel)) {
                    exec('cd Data')
                    console.clear()
                    setTimeout(function() {
                        console.log("[Selfbot] Fr: Je ne suis pas responsable si vous êtes banni de Discord ou de certains serveurs.".bgRed.italic)
                        console.log("[Selfbot] En: I am not responsible if you get banned from Discord or any guilds.".bgRed.italic)
                    }, 1000)
                    setTimeout(function() {
                        console.log('Selfbot dev by punchnox'.blue.italic);
                        console.log(`Bienvenue sur la version ${versionself} du punchnox-project`.yellow.italic);

                        if (nsfw == ("on")) {
                            var nswfda = 'activé'
                        } else {
                            var nswfda = 'désactivé'
                        }

                        if (nitroclaimer == ('on')) {
                            var autoclaimer = "activé"
                        } else {
                            var autoclaimer = "désactivé"
                        }

                        if (white.includes(client.user.id)) {
                            var whiteliste = 'activé'
                        } else {
                            var whiteliste = 'désactivé'
                        }

                        var logoconsole = [`
██████╗ ██╗   ██╗███╗   ██╗ ██████╗██╗  ██╗███╗   ██╗ ██████╗ ██╗  ██╗
██╔══██╗██║   ██║████╗  ██║██╔════╝██║  ██║████╗  ██║██╔═══██╗╚██╗██╔╝
██████╔╝██║   ██║██╔██╗ ██║██║     ███████║██╔██╗ ██║██║   ██║ ╚███╔╝ 
██╔═══╝ ██║   ██║██║╚██╗██║██║     ██╔══██║██║╚██╗██║██║   ██║ ██╔██╗ 
██║     ╚██████╔╝██║ ╚████║╚██████╗██║  ██║██║ ╚████║╚██████╔╝██╔╝ ██╗
╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
`,
                            `                        _                     
                        | |                    
  _ __  _   _ _ __   ___| |__  _ __   _____  __
 | '_ \ | | | | '_ \ / __| '_ \ | '_ \ / _ \ \ / /
 | |_) | |_| | | | | (__| | | | | | | (_) >  < 
 | .__/ \ __,_|_| |_|\ ___|_| |_|_| |_|\ ___/_/\ _\
 | |                                           
 |_|`,
                            `                _               
 ___ _ _ ___ ___| |_ ___ ___ _ _ 
| . | | |   |  _|   |   | . |_'_|
|  _|___|_|_|___|_|_|_|_|___|_,_|
|_|                              
`,

                            `
 ██▓███   █    ██  ███▄    █  ▄████▄   ██░ ██  ███▄    █  ▒█████  ▒██   ██▒
▓██░  ██▒ ██  ▓██▒ ██ ▀█   █ ▒██▀ ▀█  ▓██░ ██▒ ██ ▀█   █ ▒██▒  ██▒▒▒ █ █ ▒░
▓██░ ██▓▒▓██  ▒██░▓██  ▀█ ██▒▒▓█    ▄ ▒██▀▀██░▓██  ▀█ ██▒▒██░  ██▒░░  █   ░
▒██▄█▓▒ ▒▓▓█  ░██░▓██▒  ▐▌██▒▒▓▓▄ ▄██▒░▓█ ░██ ▓██▒  ▐▌██▒▒██   ██░ ░ █ █ ▒ 
▒██▒ ░  ░▒▒█████▓ ▒██░   ▓██░▒ ▓███▀ ░░▓█▒░██▓▒██░   ▓██░░ ████▓▒░▒██▒ ▒██▒
▒▓▒░ ░  ░░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒ ░ ░▒ ▒  ░ ▒ ░░▒░▒░ ▒░   ▒ ▒ ░ ▒░▒░▒░ ▒▒ ░ ░▓ ░
░▒ ░     ░░▒░ ░ ░ ░ ░░   ░ ▒░  ░  ▒    ▒ ░▒░ ░░ ░░   ░ ▒░  ░ ▒ ▒░ ░░   ░▒ ░
░░        ░░░ ░ ░    ░   ░ ░ ░         ░  ░░ ░   ░   ░ ░ ░ ░ ░ ▒   ░    ░  
            ░              ░ ░ ░       ░  ░  ░         ░     ░ ░   ░    ░  
                             ░                                             
`,
                            `
██████  ██    ██ ███    ██  ██████ ██   ██ ███    ██  ██████  ██   ██ 
██   ██ ██    ██ ████   ██ ██      ██   ██ ████   ██ ██    ██  ██ ██  
██████  ██    ██ ██ ██  ██ ██      ███████ ██ ██  ██ ██    ██   ███   
██      ██    ██ ██  ██ ██ ██      ██   ██ ██  ██ ██ ██    ██  ██ ██  
██       ██████  ██   ████  ██████ ██   ██ ██   ████  ██████  ██   ██ 
`
                        ]
                        var consolerandoml = logoconsole[Math.floor(Math.random() * logoconsole.length)]


                        console.log(consolerandoml.cyan);
                        var friendCount = client.user.friends.size


                        if (client.user.premium > 0) {
                            var nitroyn = ('activé');
                        } else {
                            var nitroyn = ("disable")
                        }

                        if (client.user.bot) {
                            var botyn = (`Tu es robot je ne peux pas charger le self desolé :/`);
                            process.exit(1)
                        } else {
                            var botyn = (`non`)
                        }

                        console.log(`
  ────────────────────────────────────────────────────────────────────
  |-->  User Name : ${client.user.username}
  |──────────────────────────────────────────────────────────────────|
  |-->  Prefix   : ${prefix}
  |──────────────────────────────────────────────────────────────────|
  |-->  Users    : ${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}
  |──────────────────────────────────────────────────────────────────|
  |-->  Bots     : ${client.users.filter(user => user.bot).size}
  |──────────────────────────────────────────────────────────────────|
  |-->  Channels : ${client.channels.size}
  |──────────────────────────────────────────────────────────────────|
  |-->  Guilds   : ${client.guilds.size}
  |──────────────────────────────────────────────────────────────────|
  |-->  Friends  : ${friendCount}
  |──────────────────────────────────────────────────────────────────|
  |-->  premium  : ${whiteliste}
  |──────────────────────────────────────────────────────────────────|
  |-->  Nsfw     : ${nswfda}
  |──────────────────────────────────────────────────────────────────|
  |-->  Nitro    : ${nitroyn}
  |──────────────────────────────────────────────────────────────────|
  |-->  Bot      : ${botyn}
  |──────────────────────────────────────────────────────────────────|
  |-->  nitro claimer : ${autoclaimer}
  ────────────────────────────────────────────────────────────────────
  `.magenta);
                    }, 1500)
                } else {}
            })

            client.on('ready', function() {
                if (versionself.includes(vactuel)) {
                    setTimeout(function() {
                        console.log('{logs} :'.red.italic);
                    }, 1555)
                } else {}
            });



            client.on('ready', function() {
                if (white.includes(client.user.id)) {
                    var whitepres = '𝙥𝙧𝙚𝙢𝙞𝙪𝙢'
                } else {
                    var whitepres = '𝙛𝙧𝙚𝙚'
                }


                const imagerandom = ["logopunchnox", "logopunchnox1", "logopunchnox2", "logopunchnox3"]

                var logopunchnoxproject = imagerandom[Math.floor(Math.random() * imagerandom.length)]


                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                rpcGenerator.getRpcImage("713451199730548837", logopunchnoxproject)
                    .then(image => {
                        let presence = new rpcGenerator.Rpc()
                            .setName(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-${whitepres}`)
                            .setUrl(twitch)
                            .setType("PLAYING")
                            .setApplicationId("713451199730548837")
                            .setAssetsLargeImage(image.id)
                            .setAssetsSmallImage(image.id)
                            .setAssetsLargeText(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-${whitepres}`)
                            .setState(`version ${versionself}`)
                            .setDetails("dev by punchnox")
                            .setJoinSecret("MTI4NzM0OjFpMmhuZToxMjMxMjM=")
                            .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                            .setSpectateSecret('MTIzNDV8MTIzNDV8MTMyNDU0')
                            .setStartTimestamp(Date.now())

                            .setParty({
                                id: uuid()
                            })

                        client.user.setPresence(presence.toDiscord())
                    }).catch(console.error)
            });


            /////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////

            if (versionself.includes(vactuel)) {
                client.on('message', message => {
                    if (white.includes(client.user.id)) {
                        var whiterequis = ''
                    } else {
                        var whiterequis = '|「Premium Requis」'
                    }

                    var mentionuser = message.mentions.users.first();

                    if (message.content.includes(prefix + "about")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU ABOUT」 **')
                                .addField('** 「Créateur」 **', "```𝙥𝙪𝙣𝙘𝙝𝙣𝙤𝙭```")
                                .addField('** 「Version」 **', "```" + versionself + "```")
                                .addField('** 「Serveur」 **', "```" + servself + "```")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "help")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU HELP」 **')
                                .setDescription('')
                                .addField(' ```𝗔𝗯𝗼𝘂𝘁``` ', "***Affiche les infos du Self***")
                                .addField(' ```𝘀𝘁𝗮𝘁𝘂𝘀``` ', "***Affiche les infos status***")
                                .addField(' ```𝙃𝙖𝙘𝙠``` ', "***Affiche les infos h4x0r***")
                                .addField(' ```𝗙𝘂𝗻``` ', "***Affiche les infos Fun***")
                                .addField(' ```𝙍𝙖𝙞𝙙``` ', "***Affiche les infos Raid***")
                                .addField(' ```𝗧𝗼𝗼𝗹𝘀``` ', "***Affiche les infos Tools***")
                                .addField(' ```𝙈𝙤𝙙``` ', "***Affiche les infos Modération***")
                                .addField(' ```𝙉𝙨𝙛𝙬``` ', "***Affiche les infos nsfw +18***")
                                .addField(' ```𝗚𝗲𝗻``` ', `***Affiche le generateur*** ${whiterequis}`)
                                .addField(' ```𝗧𝗲𝘅𝘁𝗲``` ', "***Affiche les infos texte***")
                                .addField(' ```𝗗𝗶𝘃𝗲𝗿𝘀``` ', "***Affiche le menu Divers***")
                                .addField(' ```𝘀𝘆𝘀𝘁𝗲𝗺𝗲``` ', "***Affiche les infos du systeme***")
                                .addField(' ```𝗛𝗯𝗮𝗰𝗸𝘂𝗽``` ', "***Affiche le menu backup***")
                                .addField(' ```𝗨𝗽𝗱𝗮𝘁𝗲``` ', "***Affiche le menu update***")
                                .addField(' ```𝙋𝙧𝙚𝙢𝙞𝙪𝙢``` ', "***Affiche les infos premium***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "divers")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU DIVERS」 **')
                                .setDescription('')
                                .addField(' ```𝗹𝗲𝗻𝗻𝘆``` ', "***( ͡° ͜ʖ ͡°)***")
                                .addField(' ```𝗗𝗮𝗻𝗰𝗲``` ', "***> (°□°）>͡***")
                                .addField(' ```𝗼_𝗼``` ', "***0_o***")
                                .addField(' ```𝗶𝗱𝗰``` ', "***╭∩╮（︶︿︶）╭∩╮***")
                                .addField(' ```𝗱𝗼𝘂𝗯𝗹𝗲𝗳𝗹𝗶𝗽``` ', "***┻━┻︵ \(°□°)/ ︵ ┻━┻***")
                                .addField(' ```𝘁𝗮𝗯𝗹𝗲𝗳𝗹𝗶𝗽``` ', "***(╯°□°）╯︵ ┻━┻***")
                                .addField(' ```𝘂𝗻𝗳𝗹𝗶𝗽``` ', "***┬──┬ ノ( ゜-゜ノ)***")
                                .addField(' ```𝗴𝗶𝗺𝗺𝗲``` ', "***༼ つ ◕_◕ ༽つ***")
                                .addField(' ```𝘀𝗲𝗿𝗶𝗼𝘂𝘀``` ', "***(ಠ_ಠ)***")
                                .addField(' ```𝗺𝗼𝗻𝗲𝘆``` ', "***[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]***")
                                .addField(' ```𝗲𝘂𝘂𝘂``` ', "***(′ʘ⌄ʘ‵)***")
                                .addField(' ```𝘆𝗼𝗽``` ', "***'=͟͟͞͞( ✌°∀° )☛***")
                                .addField(' ```𝗺𝗲𝗿𝗰𝗶``` ', "***(＾▽＾)***")
                                .addField(' ```...``` ', "***...***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content === (prefix + "dox")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU DOX」 **')
                                .setDescription('')
                                .addField(' ```𝗡𝗲𝗹𝗲𝘁𝗵``` ', "||https://doxbin.org/upload/doxneleth||")
                                .addField(' ```𝗠𝗲𝗻𝗸𝗼𝗵``` ', " ||https://pastebin.com/cxH6tVA2||")
                                .addField('```𝗡𝘄𝗥·𝗔𝗱𝗮𝗺```', "||https://pastebin.com/SZPnShV3||")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "texte")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU TEXTE」 **')
                                .setDescription('')
                                .addField("```𝗔𝘀𝗰𝗶𝗶 + (msg)```", "***Transforme votre texte en ascii***")
                                .addField("```𝗥𝗲𝘃𝗲𝗿𝘀𝗲 + (msg)```", `***reverse votre message*** ${whiterequis}`)
                                .addField("```𝗖𝘆𝗮𝗻𝗲 + (msg)```", "***Transforme votre texte en bleue***")
                                .addField("```𝗥𝗲𝗱 + (msg)```", "***Transforme votre texte en rouge***")
                                .addField("```𝗚𝗿𝗲𝗲𝗻 + (msg)```", "***Transforme votre texte en vert***")
                                .addField("```𝗬𝗲𝗹𝗹𝗼𝘄 + (msg)```", "***Transforme votre texte en jaune***")
                                .addField("```𝗼𝗿𝗮𝗻𝗴𝗲 + (msg)```", "***Transforme votre texte en orange***")
                                .addField("```𝘀𝗼𝘂𝗹𝗶 + (msg)```", "***Souligne votre texte***")
                                .addField("```𝗴𝗿𝗮s + (msg)```", "***Met votre texte en gras***")
                                .addField("```𝗯𝗮𝗿𝗿e + (msg)```", "***Barre votre texte***")
                                .addField("```𝗜𝘁𝗮 + (msg)```", "***Met votre texte en italique***")
                                .addField("```𝘀𝘂𝗿𝗹𝗶 + (msg)```", "***Surligne votre texte***")
                                .addField("```retourne + (msg)```", "***Retourne le texte***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "status")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU STATUS」 **')
                                .setDescription('')
                                .addField('```𝗚𝗮𝗺𝗲𝗽𝗲𝗿𝘀𝗼 + {msg}```', "***Autre status perso (Riche présence)***")
                                .addField('```𝗰𝘂𝘀𝘁𝗼𝗺 + {msg}```', "***status perso***")
                                .addField('```𝗿𝗽𝗰```', `***Riche présence custom*** ${whiterequis}`)
                                .addField('```𝗿𝗽𝗰𝗳𝗿𝗲𝗲```', `***Riche présence custom free***`)
                                .addField('```𝗗𝗲𝗳𝗮𝘂𝘁```', "***status par Défaut***")
                                .addField('```𝗦𝘁𝗿𝗲𝗮𝗺 + {msg}```', "***Active ton status en*** **Streaming**")
                                .addField('```𝗠𝘂𝗹𝘁𝗶𝗦𝘁𝗿𝗲𝗮𝗺```', `***Active plusieurs stream*** ${whiterequis}`)
                                .addField('```𝗦𝗽𝗼𝘁𝗶𝗳𝘆 + {msg}```', `***Active ton status en*** **Spotify** ${whiterequis}`)
                                .addField('```𝗠𝘂𝘀𝗶𝗰 + {msg}```', "***Active ton status en*** **Ecoute de la Music**")
                                .addField('```𝗣𝗹𝗮𝘆 + {msg}```', "***Active ton status en*** **Playing**")
                                .addField('```𝗟𝗼𝗼𝗸 + {msg}```', "***Active ton status en*** **Watching**")
                                .addField('```𝗼𝗻𝗹𝗶𝗻𝗲```', "***Active ton status en ligne***")
                                .addField('```𝗶𝗱𝗹𝗲```', "***Active ton status en inactif***")
                                .addField('```𝗱𝗻𝗱```', "***Active ton status en ne pas déranger***")
                                .addField('```𝗶𝗻𝘃𝗶𝘀𝗶𝗯𝗹𝗲```', "***Active ton status en invisible***")
                                .addField('```𝗱𝗲𝗲𝘇𝗲𝗿𝘀 + {msg}```', "***Active ton status en deezers***")
                                .addField('```github + {msg}```', "***Active ton status en github***")
                                .addField('```𝗬𝘁𝗯 + {msg}```', `***Active ton status en YouTube*** ${whiterequis}`)
                                .addField('```𝗧𝘄𝗶𝘁𝘁𝗲𝗿 + {msg}```', `***Active ton status en Twitter*** ${whiterequis}`)
                                .addField('```𝗦𝗽𝗼𝗿𝗻𝗵𝘂𝗯 + {msg}```', "***Active ton status en pornhub***")
                                .addField('```𝗱𝗲𝗹𝗮𝗰𝘁```', "***Reset ton profil***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content === (prefix + "raid")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle("** 「MENU RAID」 **")
                                .setDescription('')
                                .addField('```𝗦𝗲𝗿𝘃𝗲𝗿𝗶𝗻𝗳𝗼```', "***Affiche les infos du serveur actuel***")
                                .addField('```𝗶𝗻𝗳𝗼𝗽𝗹𝘂𝘀```', "***Affiche plus d'infos du serveur actuel***")
                                .addField('```𝗚𝘂𝗶𝗹𝗱𝗱𝗲𝗹𝗲𝘁𝗲```', `***supprime le serveur ou avez fait la commande*** ${whiterequis}`)
                                .addField('```𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝗶𝗻𝗳𝗼```', "***Affiche les infos des channel et category***")
                                .addField("```𝗦𝙥𝙖𝙢+[text]```", `***Spam un message*** ${whiterequis}`)
                                .addField("```𝗦𝙩𝙤𝙥𝙨𝙥𝙖𝙢```", `***Stop le spam*** ${whiterequis}`)
                                .addField('```𝗥𝗼𝗹𝗲𝗖𝗿𝗲𝗮𝘁𝗲```', "***créer des roles de toutes les couleurs***")
                                .addField("```𝗗𝗲𝘀𝘁𝗿𝗼𝘆```", `***detruit le serveur actuel***`)
                                .addField("```𝗱𝗲𝗳𝗮𝗰𝗲```", "***Renomme le serveur, change la région et change la photo du serveur***")
                                .addField("```𝗰𝗵𝗮𝗻𝗴𝗲𝗶```", "***change l'image du serveur actuel***")
                                .addField("```𝗰𝗵𝗮𝗻𝗴𝗲n```", "***change le nom du serveur actuel***")
                                .addField("```𝗗𝗲𝗹```", `***supprime tous les channel*** ${whiterequis}`)
                                .addField("```𝗗𝗲𝗹𝗿𝗼𝗹𝗲```", "***supprime tous les roles***")
                                .addField("```𝗿𝗲𝗻𝗮𝗺𝗲𝗮𝗹𝗹```", "***renommer tous les membres possible***")
                                .addField("```𝗕𝗮𝗻𝗮𝗹𝗹```", `***Bannir tous les membres possible*** ${whiterequis}`)
                                .addField("```𝗞𝗶𝗰𝗸𝗮𝗹𝗹```", `***Kick tous les membres possible*** ${whiterequis}`)
                                .addField("```𝗨𝗻𝗯𝗮𝗻𝗮𝗹𝗹```", "***débannir tous les membres du serveur actuel***")
                                .addField("```𝗺𝗽𝗮𝗹𝗹+[text]```", "***Envoie un message privé à tous les membres du serveur (à vos risques et periles)***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "fun")) {
                        if (message.author.id === client.user.id) {
                            message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU FUN 1」 **')
                                .setDescription('')
                                .addField('```𝗞𝗶𝘀𝘀```', "***Faire un Bisous***")
                                .addField('```𝗟𝗼𝘃𝗲```', "***Affiche une image Love***")
                                .addField('```𝗜𝘀𝘀𝗼𝘂```', "***issouflerie***")
                                .addField('```𝗕𝗹𝗰```', "***Je m'en Bat Les Couilles***")
                                .addField('```𝗣𝗮𝘁𝗮𝘁𝗲```', "***Patate dans ta mère***")
                                .addField('```𝗞𝗮𝗿𝗺𝗮```', "***Affiche le Karma***")
                                .addField('```𝗦𝗮𝗱```', "***Je suis Triste***")
                                .addField('```𝗯𝗼𝗼𝗺```', "***t'explose fdp***")
                                .addField('```𝗡𝗲𝗸𝗼```', "***Neko ❤️***")
                                .addField('```𝗧𝗴```', "***Tg fdp***")
                                .addField('```𝗗𝗲𝗮𝘁𝗵𝗻```', "***t'es le prochain sur la liste***")
                                .addField('```𝗗𝗮𝗿𝗼𝗻𝗻𝗲𝗱```', "***daronned***")
                                .addField('```𝗥𝗮𝗻𝗱𝗼𝗺```', "***Affiche un nombre random***")
                                .addField('```𝗳𝗮𝗰𝗲𝗽𝗮𝗹𝗺```', "***facepalm***")
                                .addField('```𝗟𝗼𝗮𝗱```', "***fais un chargement***")
                                .addField('```𝗧𝗿𝗼𝗹𝗹```', "***troll ascii***")
                                .addField('```𝗕𝗶𝗳𝗳𝗹𝗲```', "***je te biffle salope***")
                                .addField('```𝗖𝗹𝗮𝗾𝘂𝗲𝘁𝘁𝗲𝘀```', "***t'offre des claquettes***")
                                .addField('```𝗰𝗮𝗱𝗲𝗮𝘂```', "***un cadeau sauvage apparaît***")
                                .addField('```𝗵𝗼𝘁𝗱𝗼𝗴```', "***un hotdog sauvage apparaît***")
                                .addField('```𝗵𝟰𝘅𝟬𝗿```', "***h4x0r détecté***")
                                .addField('```𝗯𝗼𝗻𝘁𝗼𝘂𝘁𝗼𝘂```', "***bon toutou***")
                                .addField('```𝗰𝗮𝗹𝗰𝘂𝗹```', "***résous le calcul***")
                                .addField('```𝟴𝗕𝗮𝗹𝗹```', `***Répond à ta question*** ${whiterequis}`) ////103
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "fun")) {
                        if (message.author.id === client.user.id) {

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU FUN 2」 **')
                                .setDescription('')
                                .addField('```𝗛𝘂𝗴```', "***Faire un Câlin***")
                                .addField("```𝗦𝘂𝗶𝗰𝗶𝗱𝗲```", "***Kill Me***")
                                .addField('```𝗿𝗶𝗽```', "***repose en paix***")
                                .addField('```𝗯𝗼𝗼𝗺```', "***t'explose fdp***")
                                .addField('```𝗩𝗲𝘀𝗸𝗶```', "***veski***")
                                .addField('```𝗝𝘂𝗶𝗳```', "***juif detecté***")
                                .addField('```𝘀𝘀𝗮𝘆𝗮𝗻```', "***super ssayan***")
                                .addField('```𝗼𝗺𝗴```', "***omg regarde moi ça***")
                                .addField('```𝗥𝗼𝘂𝘅```', "***mais tema la Geule du roux***")
                                .addField('```𝗴𝗮𝘆𝗰𝗮𝗹𝗰```', "***calcule si tu es pd***")
                                .addField('```𝗗𝗲́𝗯𝗶𝘁𝗮𝗴𝗲 ```', "***je débite aussi vite que tu suces des bites***")
                                .addField('```𝗙𝗱𝗽 ```', "***jvétniker fdp***")
                                .addField('```𝗺𝗲𝗺𝗲```', "***génère un meme***")
                                .addField('```𝗯𝘁𝗰 ```', "***Affiche la courbe du bitcoincoin***")
                                .addField('```𝗘𝘁𝗵 ```', "***Affiche la courbe Ethereum***")
                                .addField('```𝗟𝘁𝗰 ```', "***Affiche la courbe LTC***")
                                .addField('```𝘁𝗼𝗱𝗮𝘆 ```', "***Check si on est mardi***")
                                .addField('```𝗚𝗿𝗮𝗳𝗳 + {msg}```', `***Génère un graffity avec le texte*** ${whiterequis}`)
                                .addField('```𝗡𝗲𝗼𝗻 + {msg}```', `***Génère une image neon avec le texte*** ${whiterequis}`)
                                .addField('```𝗕𝗲𝗮𝗰𝗵 + {msg}```', `***Génère une image beach avec le texte*** ${whiterequis}`)
                                .addField('```𝗡𝗲𝗼𝗻𝗲𝗳𝗳𝗲𝗰𝘁 + {msg}```', `***Génère une image neon sing avec le texte*** ${whiterequis}`)
                                .addField('```𝗡𝗼𝗲𝗹 + {msg}```', `***Génère une image de noel avec le texte*** ${whiterequis}`)
                                .addField('```𝗕𝗹𝗼𝗼𝗱 + {msg}```', `***Génère une image avec le texte écris en sang*** ${whiterequis}`)
                                .addField('```𝗟𝗶𝗴𝗵𝘁 + {msg}```', `***Génère une image light avec le texte*** ${whiterequis}`)
                                .addField('```𝗥𝗲𝘁𝗿𝗼 + {msg}```', `***Génère une image RETRO avec le texte*** ${whiterequis}`)
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "fun")) {
                        if (message.author.id === client.user.id) {


                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU FUN 3」 **')
                                .setDescription('')
                                .addField('```𝗣𝗳```', "***Pile ou Face***")
                                .addField('```𝗥𝗮𝗻𝗱𝗼𝗺𝗰𝗮𝗿𝗱```', "***Choisis un carte (Ace,Rois...)***")
                                .addField('```𝗼𝗽𝗶𝗻𝗶𝗼𝗻```', "***Répond à ton opinion***")
                                .addField('```𝗰𝗮𝘁```', "***image de chat***")
                                .addField('```𝗱𝗼𝗴𝘀```', "***image de chiens***")
                                .addField('```𝗯𝗶𝗿𝗱```', "***image d'oiseaux***")
                                .addField('```𝗮𝗿𝗼𝘂𝗳```', "***Arouf partout même dans ton trou***")
                                .addField('```𝗮𝗿𝗼𝘂𝗳𝘃𝗶𝗱𝗲𝗼```', "***Arouf partout même dans ton trou***")
                                .addField('```𝗰𝗵𝗼𝗺𝗲𝘂𝗿 ```', "***Trouve toi une passion sale chômeur***")
                                .addField('```𝗰𝗼𝗻```', "***t con -_-***")
                                .addField('```𝗰𝗵𝗼𝗾𝘂𝗲𝗿 ```', "***choquer***")
                                .addField('```𝗿𝗮𝗰𝗶𝘀𝗺𝗲```', "***Vive l'humour noir :)***")
                                .addField('```𝗰𝗼𝗿𝗼𝗻𝗮```', "***Avez vous une chance de survivre au coronavirus ???***")
                                .addField('```𝗴𝘁𝘄𝗶𝘁𝘁𝗲𝗿```', "***Génère un pseudo twitter***")
                                .addField('```𝘁𝘄𝗲𝗲𝘁 + {pseudo} + {msg}```', "***Génère tweet***")
                                .addField('```𝗽𝗵𝗰𝗼𝗺𝗺𝗲𝗻𝘁 + {mention} + {msg}```', `***Génère un commentaire sur pornhub avec l'utilisateur mentionnée*** ${whiterequis}`)
                                .addField('```𝗺𝗮𝗴𝗶𝗸 + {intencity}```', "***Génère une image wtf intencitée (0 à 10)***")
                                .addField('```𝗷𝗽𝗲𝗴```', "***Génère une image avec ta pdp (pixelisée)***")
                                .addField('```𝗰𝗵𝗮𝗻𝗴𝗲𝗺𝗶𝗻𝗱 + {msg}```', "***Changemind***")
                                .addField('```𝗰𝗹𝘆𝗱𝗲 + {msg}```', "***Envoi un message de Clyde***")
                                .addField('```𝗯𝗮𝗴𝘂𝗲𝘁𝘁𝗲```', "***Mange du pain***")
                                .addField('```𝘁𝗵𝗿𝗲𝗮𝘁𝘀```', "***Génère une image threats***")
                                .addField('```𝗶𝗺𝗮𝗴𝗲𝗰𝗮𝗽𝘁𝗰𝗵𝗮```', `***Génère un captcha avec ta pdp*** ${whiterequis}`)
                                .addField('```𝘁𝗿𝘂𝗺𝗽𝘁𝘄𝗲𝗲𝘁 + {msg}```', `***Génère un tweet de trump*** ${whiterequis}`)
                                .addField('```𝗶𝗽𝗵𝗼𝗻𝗲𝘅```', "***Génère un iphone X***") ///////163
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "fun")) {
                        if (message.author.id === client.user.id) {

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU FUN 4」 **')
                                .setDescription('')
                                .addField('```𝗪𝗮𝘀𝘁𝗲𝗱 + {mention}```', "***WASTED***")
                                .addField('```𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱 + {mention}```', "***TRRRRIIIIIGGGGRRREEEDDD!!!!!!!!!!!!***")
                                .addField('```𝗚𝗮𝘆 + {mention}```', "***Met la pp de l'utilisateur mentionné avec le drapeau des pd.***")
                                .addField('```𝗚𝗿𝗲𝘆𝘀𝗰𝗮𝗹𝗲 + {mention}```', "***Met la pp de l'utilisateur mentionné en noir et blanc.***")
                                .addField('```𝗜𝗻𝘃𝗲𝗿𝘁 + {mention}```', `***Inverser les couleurs de la pp de l'utilisateur mentionné.*** ${whiterequis}`)
                                .addField('```𝗣𝗮𝗻𝗱𝗮 𝗿𝗼𝘂𝘅```', "***Image de panda roux***")
                                .addField('```𝗣𝗮𝗻𝗱𝗮```', "***Image de panda***")
                                .addField('```𝗪𝗶𝗻𝗸 + {mention}```', "***Bien gamin***")
                                .addField('```𝗙𝗼𝘅```', "***Image de renard***")
                                .addField('```𝗸𝗼𝗮𝗹𝗮```', "***Image de koala***")
                                .addField('```𝗣𝗶𝗸𝗮𝗰𝗵𝘂```', "***Image de pikachu***")
                                .addField('```𝗣𝗼𝗸𝗲𝗱𝗲𝘅 + {pokemon}```', "***Affiche toutes les infos d'un pokemon***")
                                .addField('```𝗣𝗲𝗰𝗵𝗼```', "***Pecho vite fais bien fais***")
                                .addField('```𝗥𝘂𝘀𝘀𝗶𝗮𝗻𝗿𝗼𝘂𝗹𝗲𝘁𝘁𝗲```', "***jou à la roulette russe***")
                                .addField('```𝗖𝗵𝗮𝘁𝗯𝗼𝘁 + {msg}```', `***Parle avec le punchnox project*** ${whiterequis}`)
                                .addField('```𝗰𝗮𝗹𝗺𝗲```', "***Calme***")
                                .addField('```𝗙𝗶𝘀𝗵```', "***Peche un poisson***")
                                .addField('```𝗰𝗮𝗽𝘁𝗰𝗵𝗮𝘃𝟮 + {msg}```', "***Génère un captcha***")
                                .addField('```𝘀𝗰𝗿𝗼𝗹𝗹 + {msg}```', "***Génère une image scroll***")
                                .addField('```𝗱é + {paris}```', "***Fais un Paris***")
                                .addField('```𝘀𝗮𝘁𝘂𝗿𝗮𝘁𝗶𝗼𝗻 + {mention}```', "***Génère une image saturée***") /////178
                                .addField('```𝗰𝗼𝗺𝗺𝘂𝗻𝗶𝘀𝘁 + {mention}```', "***Génère une image de communist***")
                                .addField('```𝘀𝗻𝗼𝘄 + {mention}```', "***Que c'est beaux***")
                                .addField('```𝗱𝗶𝗱𝘆𝗼𝘂𝗺𝗲𝗮𝗻 + {msg}```', `***did you mean*** ${whiterequis}`)
                                .addField('```𝘀𝘂𝗽𝗿𝗲𝗺 + {msg}```', "***Génère le logo suprem avec le text***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "fun")) {
                        if (message.author.id === client.user.id) {

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU FUN 5」 **')
                                .setDescription('')
                                .addField('```𝗿𝗮𝗻𝗱𝗼𝗺𝗻𝗮𝗺𝗲```', `***gen un pseudo random*** ${whiterequis}`)
                                .addField('```𝗱𝗿𝗮𝗸𝗲```', "***drake meme***")
                                .addField('```𝗽𝗵𝗹𝗼𝗴𝗼 + {msg}```', "***Génère le logo pornhub avec le text choisis***")
                                .addField('```𝗮𝘄𝗼𝗼𝗶𝗳𝘆```', "***awooify***")
                                .addField('```𝘁𝗼𝗯𝗲𝗰𝗼𝗻𝘁𝗶𝗻𝘂𝗲𝗱```', "***Tobecontinued***")
                                .addField('```𝗽𝘀𝟰```', `***Génère un jeu ps4*** ${whiterequis}`)
                                .addField('```𝗰𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲𝗿```', "***challenger***")
                                .addField('```Threshold```', "***jsp comment expliquer ça zebi***")
                                .addField('```𝗯𝗿𝗮𝘇𝘇𝗲𝗿𝘀```', `***Génère une affiche brazzers*** ${whiterequis}`)
                                .addField('```𝗯𝘂𝗿𝗻```', "***ça bruuuuule***")
                                .addField('```𝗯𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹```', "***splendide***")
                                .addField('```𝗳𝗶𝗿𝗲```', "***Brule l'utilisateur mentioné***")
                                .addField('```𝗰𝗿𝘂𝘀𝗵```', `***crush*** ${whiterequis}`)
                                .addField('```𝗲𝗺𝗯𝗼𝘀𝘀```', "***petite saturation***")
                                .addField('```𝗽𝗼𝘀𝘁𝗲𝗿𝗶𝘇𝗲```', "***posterize***")
                                .addField('```𝘄𝗮𝗻𝘁𝗲𝗱```', "***Tête mise à prix***")
                                .addField('```𝗸𝗮𝗻𝗻𝗮𝗴𝗲𝗻```', "***kannagen***")
                                .addField('```𝘀𝗲𝗻𝗱𝗻𝘂𝗱𝗲```', "***Send nude stp :)***")
                                .addField('```𝗲𝗺𝗼𝗷𝗶𝗿𝗮𝗻𝗱𝗼𝗺```', "***pleins d'emojis aléatoire***")
                                .addField('```morse```', "***ecris l'argument en morse***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content.includes(prefix + "tools")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU TOOLS」 **')
                                .setDescription('')
                                .addField('```𝗩𝗲𝗿𝗶𝗳```', "***Bienvenue sur le selfbot***")
                                .addField('```𝗨𝘀𝗲𝗿𝗜𝗻𝗳𝗼```', "***Affiche les infos sur la personne mentionner*** (sur serveur)")
                                .addField('```𝗨𝘀𝗲𝗿𝗣𝘃𝗜𝗻𝗳𝗼```', "***Affiche les infos en DM (Moins d'infos)***")
                                .addField('```𝗴𝗲𝘁𝗶𝗱```', "***récupère l'id de la personne mentionnée***")
                                .addField('```𝗣𝗶𝗻𝗴```', "***Affiche la latance du self***")
                                .addField('```𝗛𝗮𝘀𝘁```', "***créer un hastebins***")
                                .addField('```𝗧𝗶𝗺𝗲```', "***Affiche l'heurs***")
                                .addField('```𝗪𝗮𝗿𝗻```', `***report la personne mentionnée*** ${whiterequis}`)
                                .addField('```𝗚𝗵𝗼𝘀𝘁𝗽𝗶𝗻𝗴```', "***fais un ghost ping***")
                                .addField('```𝗔𝘃𝗮𝘁𝗮𝗿```', "***Affiche l'avatar de la personne mentionner***")
                                .addField("```𝙥𝙥 + {lien}```", `***Change t'as pp par l'image choisis*** ${whiterequis}`)
                                .addField('```𝗺𝘆𝘁𝗼𝗸𝗲𝗻```', "***montre ton token les logs (la console)***")
                                .addField('```myip```', `***montre ton ip les logs (la console)*** ${whiterequis}`)
                                .addField('```myhostname```', `***montre ton hostename les logs (la console)***`)
                                .addField('```𝗻𝗲𝘄𝘁𝗼𝗸𝗲𝗻```', `***te créer un nouveau token sans changer ton mdp (relancer discord une fois la commande faite)*** ${whiterequis}`)
                                .addField('```𝘀𝗵𝘂𝘁𝗱𝗼𝘄𝗻```', "***étein le selfbot***")
                                .addField('```𝗿𝗲𝘀𝘁𝗮𝗿𝘁```', "***relance le selfbot***")
                                .addField('```𝗹𝗰𝗹𝗲𝗮𝗿```', "***clear les logs (de la console)***")
                                .addField('```𝗥𝗼𝗹𝗲𝗶𝗻𝗳𝗼```', "***Affiche les infos d'un role***")
                                .addField('```𝗰𝗵𝗲𝗰𝗸𝗵𝗼𝘀𝘁```', `***flèmme d'expliquer*** ${whiterequis}`)
                                .addField('```𝗨𝗽𝘁𝗶𝗺𝗲```', "***montre combien de temps vous avez passez sur le self***")
                                .addField('```𝗿𝗲𝘃𝗮𝘃 + {mention}```', "***fais une recherche avec la pdp de la personne mentionnée***")
                                .addField('```embed```', "***Fait un embed***")
                                .addField('```𝗦𝗼𝗻𝗱 + 𝘁𝗲𝘅𝘁𝗲```', `***Fait un sondage*** ${whiterequis}`) ////199
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "tools")) {
                        if (message.author.id === client.user.id) {

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU UTILS (tools 2)」 **')
                                .setDescription('')
                                .addField('```𝗼𝘀𝘂 + {pseudo} ```', "***Affiche les stats osu***")
                                .addField('```𝗺𝗲𝘁𝗲𝗼 + {region ou ville} ```', "***Affiche la météo de la ville mentionnée***")
                                .addField('```𝗾𝗿𝗰𝗼𝗱𝗲 + {lien} ```', `***Créer un qrcode*** ${whiterequis}`)
                                .addField('```𝗶𝗻𝘃𝗶𝘁𝗲𝗯𝗼𝘁 + {mention}```', "***creer une invitations {bot}***")
                                .addField('```𝗚𝗼𝗼𝗴𝗹𝗲```', "***Fais une recherche sur google***")
                                .addField('```searchspotify```', "***Fais une recherche sur spotify***")
                                .addField('```𝘀𝗶𝗻𝗴𝗼𝘀𝘂 ```', "***Fais une recherche sur osu***")
                                .addField('```𝗬𝗼𝘂𝘁𝘂𝗯𝗲```', "***Fais une recherche sur YouTube***")
                                .addField('```𝗘𝘅𝗲𝗰 + {commande}```', "***Exécute une commande Windows (star cmd...) ne pas faire si vous ne s'avez pas ce que vous faites***")
                                .addField('```𝗲𝘃𝗮𝗹```', "***Exécute un scripte (Java, Javascripte, js...)***")
                                .addField('```𝗵𝘆𝗽𝗲𝘀𝗾𝘂𝗮𝗱 + {bravery,brilliance,balance ou random}```', `***Change votre hypesquad*** ${whiterequis}`)
                                .addField('```𝗺𝗶𝗻𝗲𝘀𝘄𝗲𝗲𝗽𝗲𝗿 + {10 10 10 (exemple)}```', "***joue au démineur***")
                                .addField('```𝗱𝗺 + {user} + {message} ```', `***envoi un message mp*** ${whiterequis}`)
                                .addField('```𝗳𝗶𝗿𝘀𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 ```', `***Montre le premier message du channel*** ${whiterequis}`)
                                .addField('```𝗰𝗼𝗺𝗯𝗶𝗻𝗲 {msg1} + {msg2} ```', `***combines les deux msg*** ${whiterequis}`)
                                .addField('```𝗲𝗻𝗰𝗼𝗱𝗲 + {text}```', "***Encode votre texte en base64***")
                                .addField('```𝗱𝗲𝗰𝗼𝗱𝗲 + {text}```', "***Decode votre texte en base64***")
                                .addField('```𝗰𝗮𝗰𝗵𝗲 + {text}```', "***Cache votre texte***")
                                .addField('```𝘁𝗶𝗻𝘆𝘂𝗿𝗹 + {url}```', "***raccourci l'url avec tinyurl***")
                                .addField('```𝗲𝗺𝗽𝘁𝘆```', `***Envoie un message vide*** ${whiterequis}`)
                                .addField('```𝗲𝗺𝗼𝗷𝗶𝘀𝗹𝗶𝘀𝘁```', "***Affiche tous les emojis du serveur actuel***")
                                .addField('```𝗿𝗼𝗹𝗲𝗹𝗶𝘀𝘁```', "***Affiche tous les roles du serveur actuel***") //////224
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "tools")) {
                        if (message.author.id === client.user.id) {

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU UTILS (tools 3)」 **')
                                .setDescription('')
                                .addField('```𝗯𝗶𝗻𝗮𝗶𝗿𝗲𝗲𝗻𝗰𝗼𝗱𝗲 + {msg}```', `***Encode en binaire*** ${whiterequis}`)
                                .addField('```𝗯𝗶𝗻𝗮𝗶𝗿𝗲𝗱𝗲𝗰𝗼𝗱𝗲 + {msg}```', `***Decode en binaire*** ${whiterequis}`)
                                .addField('```𝗻𝗽𝗺 + {module}```', "***Fais un recherche complète sur un module (npm)***")
                                .addField('```𝗱𝗲𝗳𝗮𝘂𝘁𝗮𝗹𝗹```', `***met tous les pseudos par défaut*** ${whiterequis}`)
                                .addField('```𝗦𝗲𝘁𝗮𝗳𝗸 + {raison} ```', "***Te met en afk***")
                                .addField('```𝗨𝗻𝗮𝗳𝗸```', "***Enleve le afk***")
                                .addField('```𝗠𝘆𝗽𝗿𝗲𝗺𝘀```', "***Affiche t'es perms***")
                                .addField('```𝗠𝘆𝗻𝗶𝗰𝗸𝗻𝗮𝗺𝗲```', "***Met ton pseudo par défaut sur le serveur actuel***")
                                .addField('```𝗖𝗵𝗮𝗻𝗴𝗲𝗻𝗶𝗰𝗸 + {pseudo}```', "***Change ton pseudo sur le serveur actuel***")
                                .addField('```𝗦𝗲𝗮𝗿𝗰𝗵𝗺𝘂𝘀𝗶𝗰 + {musique}```', "***Fais une recherche sur une musique (auteur, titre, paroles...)***")
                                .addField('```𝗮𝗻𝗶𝗺𝗮𝗹```', "***Génère le nom d'un animal random***")
                                .addField('```𝗻𝗮𝗺𝗲```', "***Génère un nom et un prénom***")
                                .addField('```𝗺𝗮𝘀𝘁𝗲𝗿𝗰𝗮𝗿𝗱```', `***Génère un faux code mastercard*** ${whiterequis}`)
                                .addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗗𝗿𝘂𝗴𝘀```', "***Hiddenwiki drugs***")
                                .addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀```', "***Hiddenwiki Commercial Services***")
                                .addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗙𝗼𝗿𝘂𝗺𝘀```', "***Hiddenwiki Forums and Chans***")
                                .addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗛𝗮𝗰𝗸𝗶𝗻𝗴```', "***Hiddenwiki Hacking and Warez***")
                                .addField('```𝗛𝗶𝗱𝗱𝗲𝗻𝘄𝗶𝗸𝗶 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹```', "***Hiddenwiki Marketplace Financial***")
                                .addField('```𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿```', "***Random wallpaper***")
                                .addField('```𝘁𝗳𝗼𝗿𝘁𝗻𝗶𝘁𝗲 + {msg}```', "***Ecris votre texte avec la police de fortnite***")
                                .addField('```𝘀𝗮𝘆 + {mention} + {msg}```', "***Fais dire se que vous voulez à la personne de votre chois (perm webhook, que sur les serv)***")
                                .addField('```𝗿𝗼𝗯𝗽𝗽 + {mention}```', `***Vole la photo de profil de l'utilisateur mentionné*** ${whiterequis}`)
                                .addField('```𝗽𝗽 + {lien}```', "***Change photo de profil de l'utilisateur avec le lien***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content.includes(prefix + "mod")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU MODERATION」 **')
                                .setDescription('')
                                .addField('```𝗕𝗮𝗻```', "***Ban le personne mentionner***")
                                .addField('```𝗕𝗮𝗻𝗶𝗱```', `***Ban un utilisateur avec l'id (vous pouvez ban même si la personne est pas sur le serveur actuel)*** ${whiterequis}`)
                                .addField('```𝗞𝗶𝗰𝗸```', "***Kick la personne mentionner***")
                                .addField('```𝗣𝘂𝗿𝗴𝗲```', "***Supprime tout les message (DM)***")
                                .addField('```𝗖𝗹𝗲𝗮𝗿```', "***Efface le nombre de message voulu (Serv)***")
                                .addField('```𝗔𝗻𝘁𝗶𝗿𝗮𝗶𝗱𝗼𝗻```', `***Active le mod raid (Serv)*** ${whiterequis}`)
                                .addField('```𝗔𝗻𝘁𝗶𝗿𝗮𝗶𝗱𝗼𝗳𝗳```', `***Désactive le mod raid (Serv)*** ${whiterequis}`)
                                .addField('```𝘄𝗮𝗿𝗻 + {mention}```', `***Warn la personne mentiennée (envoi un message en mp)*** ${whiterequis}`) //////246
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    var nsfwembedfalse = new Discord.RichEmbed()
                        .setTitle('Nsfw disable')
                        .setDescription('***Le nsfw est actuellement désactivé si vous voulez l\'activer allez dans le config.json et suivez les instructions***')
                        .setTimestamp()
                        .setColor(color)
                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);

                    var nsfwembedtrue = new Discord.RichEmbed()
                        .setTitle('** 「MENU NSFW」 **')
                        .setDescription('')
                        .addField('```𝗔𝘀𝘀```', "***Affiche du nsfw***")
                        .addField('```𝗽𝘂𝘀𝘀𝘆```', "***Affiche du nsfw***")
                        .addField('```𝗻𝘀𝗳𝘄-𝗴𝗶𝗳```', "***Affiche un gif nsfw***")
                        .addField('```𝗮𝗻𝗮𝗹```', "***Affiche du nsfw***")
                        .addField('```𝘁𝗵𝗶𝗴𝗵```', "***Affiche du nsfw***")
                        .addField('```𝟰𝗸```', "***Affiche une image nsfw en 4K***")
                        .addField('```𝗵𝗲𝗻𝘁𝗮𝗶```', "***Affiche un hentai***")
                        .addField('```𝗰𝘂𝗺```', "***Affiche du cum***")
                        .addField('```𝗻𝗲𝗸𝗼𝗹𝗲𝘄𝗱 ```', "***Affiche du nekolwd***")
                        .setImage(image)
                        .setColor(color)
                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                        .setTimestamp()


                    if (message.content === prefix + 'nsfw') {
                        if (nsfw.includes("on" || "true" || "activate")) {
                            message.edit(nsfwembedtrue)
                        } else {
                            message.edit(nsfwembedfalse)
                        }
                    }

                    if (message.content.includes(prefix + "gen")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU GEN」 **')
                                .setDescription("")
                                .addField(' ```𝗡𝗶𝘁𝗿𝗼``` ', "***gen un nitro random***")
                                .addField(' ```𝗠𝗲𝘁𝗮𝗹``` ', "***gen un metal dungeon***")
                                .addField(' ```𝗣𝘀𝗻``` ', "***gen un code psn random***")
                                .addField(' ```𝗫𝗯𝗼𝘅``` ', "***gen un code xbox random***")
                                .addField(' ```𝗚𝘀𝗽𝗼𝘁𝗶𝗳𝘆``` ', `***gen un spotify*** ${whiterequis}`)
                                .addField(' ```𝗡𝗼𝗿𝗱𝘃𝗽𝗻``` ', `***gen un nord vpn*** ${whiterequis}`)
                                .addField(' ```𝗨𝗽𝗹𝗮𝘆``` ', `***gen un uplay*** ${whiterequis}`)
                                .addField(' ```𝗽𝗼𝗿𝗻𝗵𝘂𝗯``` ', `***gen un pornhub*** ${whiterequis}`)
                                .addField(' ```𝗚𝘁𝗼𝗸𝗲𝗻``` ', `***drop un token pour spam (valid)*** ${whiterequis}`)
                                .addField(' ```𝗗𝗼𝗳𝘂𝘀``` ', `***gen un dofus*** ${whiterequis}`)
                                .addField(' ```𝗡𝗲𝘁𝗳𝗹𝗶𝘅``` ', `***gen un neflix uncheck*** ${whiterequis}`)
                                .addField(' ```𝗥𝗮𝗻𝗱𝗼𝗺𝗰𝗼𝗹𝗼𝗿``` ', "***gen une couleur random***")
                                .addField(' ```𝗘𝗺𝗮𝗶𝗹``` ', "***gen une adresse gmail random***")
                                .addField(' ```𝗖𝗖``` ', `***gen un carte de crédit discord (ne pas payer de nitro sur son compte risque de ban)*** ${whiterequis}`) /////269
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }

                    ///////////////////////////////HIDDEN WIKI//////////////////////////////
                    if (message.content.includes(prefix + "hiddenwiki drugs")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** Hidden Wiki Drugs **')
                                .setDescription(">>> ***Marketplace Drugs*** \n http://rso4hutlefirefqp.onion \n / – EuCanna – Medical Grade Cannabis Buds, Rick Simpson Oil, Ointments and Creams \n http://newpdsuslmzqazvr.onion \n/ – Peoples Drug Store – The Darkweb’s Best Online Drug Supplier! \n http://smoker32pk4qt3mx.onion/\n– Smokeables – Finest Organic Cannabis shipped from the USA \n http://fzqnrlcvhkgbdwx5.onion/\n – CannabisUK – UK Wholesale Cannabis Supplier \n http://kbvbh4kdddiha2ht.onion/\n – DeDope – German Weed and Hash shop. (Bitcoin) \n http://s5q54hfww56ov2xc.onion/ \n– BitPharma – EU vendor for cocaine, speed, mdma, psychedelics and subscriptions \n http://ll6lardicrvrljvq.onion/ \n – Brainmagic – Best psychedelics on the darknet \n http://25ffhnaechrbzwf3.onion/ \n – NLGrowers – Coffee Shop grade Cannabis from the netherlands \n http://fec33nz6mhzd54zj.onion/index.php \n – Black Market Reloaded Forums \n http://atlmlxbk2mbupwgr.onion/ \n – Atlantis Marketplace Forums \n http://atlantisrky4es5q.onion/\n – Atlantis Marketplace \n http://dkn255hz262ypmii.onion/ – Silk Road Forums \n http://4yjes6zfucnh7vcj.onion/\n – Drug Market \n http://k4btcoezc5tlxyaf.onion/ \n – Kamagra for BitCoins \n http://silkroadvb5piz3r.onion/silkroad/home \n – Silk Road Marketplace \n http://5onwnspjvuk7cwvk.onion/")
                                .setImage("https://p0.storage.canalblog.com/03/53/1450433/110403700.gif")
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.includes(prefix + "hiddenwiki services")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** Hidden Wiki **')
                                .setDescription(">>> ***Hiddenwiki Commercial Services*** \n http://6w6vcynl6dumn67c.onion/ \n – Tor Market Board – Anonymous Marketplace Forums \n http://wvk32thojln4gpp4.onion/ \n – Project Evil \n http://5mvm7cg6bgklfjtp.onion/ \n – Discounted electronics goods \n http://lw4ipk5choakk5ze.onion/raw/evbLewgkDSVkifzv8zAo/ \n  – Unfriendlysolution – Legit hitman service \n http://nr6juudpp4as4gjg.onion/torgirls.html  \n – Tor Girls \n http://tuu66yxvrnn3of7l.onion/ \n  – UK Guns and Ammo \n http://nr6juudpp4as4gjg.onion/torguns.htm \n  – Used Tor Guns \n http://ucx7bkbi2dtia36r.onion/  \n – Amazon Business \n http://nr6juudpp4as4gjg.onion/tor.html \n  – Tor Technology \n http://hbetshipq5yhhrsd.onion/ \n  – Hidden BetCoin \n http://cstoreav7i44h2lr.onion/ \n  – CStore Carded Store \n http://tfwdi3izigxllure.onion/ – Apples 4 Bitcoin \n http://e2qizoerj4d6ldif.onion/ – Carded Store \n http://jvrnuue4bvbftiby.onion/  \n – Data-Bay \n http://bgkitnugq5ef2cpi.onion/ \n  – Hackintoshhttp://vlp4uw5ui22ljlg7.onion/ \n  – EuroArmshttp://b4vqxw2j36wf2bqa.onion/ \n  – Advantage Products \n http://ybp4oezfhk24hxmb.onion/  \n – Hitman Network \n http://mts7hqqqeogujc5e.onion/  \n – Marianic Technology Services \n http://mobil7rab6nuf7vx.onion/  \n – Mobile Store \n http://54flq67kqr5wvjqf.onion/ \n  – MSR Shop \n http://yth5q7zdmqlycbcz.onion/ \n  – Old Man Fixer’s Fixing Services \n http://matrixtxri745dfw.onion/neo/uploads/MATRIXtxri745dfwONION_130827231336IPA_pc.png \n  – PC Shop \n http://storegsq3o5mfxiz.onion/ \n  – Samsung Stor \n Ehttp://sheep5u64fi457aw.onion/  \n – Sheep Marketplace \n http://nr6juudpp4as4gjg.onion/betcoin.htm  \n – Tor BetCoin \n http://qizriixqwmeq4p5b.onion/  \n – Tor Web Developer \n http://vfqnd6mieccqyiit.onion/  \n – UK Passports \n http://en35tuzqmn4lofbk.onion/ \n  – US Fake ID Store \n http://xfnwyig7olypdq5r.onion/ \n  – USA Citizenship \n http://uybu3melulmoljnd.onion/ \n  – iLike Help Guy \n http://dbmv53j45pcv534x.onion/ \n  – Network Consulting and Software Development")
                                .setImage("https://p0.storage.canalblog.com/03/53/1450433/110403700.gif")
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.includes(prefix + "hiddenwiki forums")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** Hidden Wiki **')
                                .setDescription(">>> ***Forums and Chans*** \n http://2gxxzwnj52jutais.onion/phpbb/index.php \n – Onion Forum 2.0 renewed \n http://3fyb44wdhnd2ghhl.onion/ib/  \n – Onii-Chan \n http://bx7zrcsebkma7ids.onion  \n – Jisko \n http://npdaaf3s3f2xrmlo.onion/  \n – Twitter clone \n http://jv7aqstbyhd5hqki.onion  \n – HackBB – Hacking & cracking forum \n http://xdagknwjc7aaytzh.onion/20/http/1.4.7.9/forummain.htm  \n – Read only access to the Freenet FMS forums via the Anonet Webproxy \n http://sbforumaz7v3v6my.onion/ \n  – SciBay Forums \n http://kpmp444tubeirwan.onion/  \n – DeepWeb \n http://r5c2ch4h5rogigqi.onion/ \n  – StaTorsNet \n http://hbjw7wjeoltskhol.onion  \n – The BEST tor social network! File sharing, messaging and much more. Use a fake email to register. \n http://t4is3dhdc2jd4yhw.onion/ \n  – OnionForum 3.0 – New Onionforum for general talk, now with marketplace \n http://zw3crggtadila2sg.onion/imageboard/  \n – TorChan – One of the oldest chans on Tor")
                                .setImage("https://p0.storage.canalblog.com/03/53/1450433/110403700.gif")
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.includes(prefix + "hiddenwiki hacking")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** Hidden Wiki **')
                                .setDescription(">>> ***Hacking and Warez*** \n http://salted7fpnlaguiq.onion/\n – SALT \n http://yj5rbziqttulgidy.onion/\n – Itanimulli \n http://bbxdfsru7lmmbj32.onion/marketplace/ \n – Delta Initiative \n http://2ogmrlfzdthnwkez.onion/  \n – Rent-A-Hacker \n http://2gxxzwnj52jutais.onion/ \n  – The Nowhere Server (restored from backup after FH) \n http://jntlesnev5o7zysa.onion/ \n  – The Pirate Bay – Torrents \n http://am4wuhz3zifexz5u.onion/ \n  – Tor Library – library of books and other media files \n http://uj3wazyk5u4hnvtk.onion/ \n  – The Pirate Bay – Torrents (official .onion) \n http://doxbindtelxceher.onion/ – DOXBIN \n http://wuvdsbmbwyjzsgei.onion/ \n  – Music Downloads \n http://lolicore75rq3tm5.onion/ \n  – Lolicore and Speedcore Music \n http://xfmro77i3lixucja.onion/ \n – ebooks \n http://vt27twhtksyvjrky.onion/ \n  – lol 20th Century Western Music Recordings and Scores \n http://2ygbaoezjdmacnro.onion/ \n  – Pony at Noisebridge \n http://xfmro77i3lixucja.onion/ \n  – Imperial Library of Trantor \n http://c3jemx2ube5v5zpg.onion/ \n  – Jotunbane’s Reading Club")
                                .setImage("https://p0.storage.canalblog.com/03/53/1450433/110403700.gif")
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.includes(prefix + "hiddenwiki financial")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** Hidden Wiki **')
                                .setDescription(">>> ***Marketplace Financial*** \n http://torbrokerge7zxgq.onion/ \n  – TorBroker – Trade securities anonymously with bitcoin, currently supports nearly 1000 stocks and ETF \n http://fogcore5n3ov3tui.onion/ \n– Bitcoin Fog – Bitcoin Laundry \n http://2vx63nyktk4kxbxb.onion/ \n– AUTOMATED PAYPAL AND CREDIT CARD STORE \n http://samsgdtwz6hvjyu4.onion  \n Safe, Anonymous, Fast, Easy escrow service. \n http://easycoinsayj7p5l.onion/ \n– EasyCoin – Bitcoin Wallet with free Bitcoin Mixer \n http://jzn5w5pac26sqef4.onion/ \n– WeBuyBitcoins – Sell your Bitcoins for Cash (USD), ACH, WU/MG, LR, PayPal and more \n http://ow24et3tetp6tvmk.onion/ \n– OnionWallet – Anonymous Bitcoin Wallet and Bitcoin Laundry \n http://qc7ilonwpv77qibm.onion/ \n– Western Union Exploit \n http://3dbr5t4pygahedms.onion/ \n– ccPal Store \n http://y3fpieiezy2sin4a.onion/ \n– HQER – High Quality Euro Replicas \n http://qkj4drtgvpm7eecl.onion/ \n– Counterfeit USD \n http://nr6juudpp4as4gjg.onion/pptobtc.html \n  – PayPal to BitCoins \n http://nr6juudpp4as4gjg.onion/doublecoins.html \n – Double Your BitCoins \n http://lw4ipk5choakk5ze.onion/raw/4588/ \n – High Quality Tutorials")
                                .setImage("https://p0.storage.canalblog.com/03/53/1450433/110403700.gif")
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }

                    //////////////////////////////////////END HIDDEN WIKI///////////////////////

                    if (message.content.startsWith(prefix + 'hack')) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            let cmdList = new Discord.RichEmbed()
                                .setTitle('** 「MENU HACK」 **')
                                .setDescription("")
                                .setColor(color)
                                .addField("```𝗗𝗼𝘀 + [ip]```", `***D0S une IP (vrais dos)(pas ddos)*** ${whiterequis}`)
                                .addField("```𝗶𝗽𝗹𝗼𝗴 + [lien]```", "***Envoie un IP logger cammouflé***")
                                .addField("```𝗚𝗲𝗼𝗶𝗽 + [Ip]```", "***Localise une ip***")
                                .addField("```𝗺𝗮𝗰 + [address mac]```", "***fais une recherche sur un address mac***")
                                .addField("```𝗥𝘁𝗼𝗸𝗲𝗻 + [mention]```", `***affiche un token*** ${whiterequis}`)
                                .addField("```𝗮𝗱𝗱𝗿𝗲𝘀𝘀 + [mention]```", `***génère une Adresse*** ${whiterequis}`)
                                .addField("```𝗩𝗶𝗿𝘂𝘀```", "***Creer un virus comme un h4x0r***")
                                .addField("```𝗗𝗗𝗼𝘀𝘃𝗼𝗰```", "***ddos la voc comme un vrais h4x0r***")
                                .addField("```𝗲𝗯𝗮𝘆𝘃𝗶𝗲𝘄 + {link} + {view}```", `***ebay view bot*** ${whiterequis}`)
                                .addField("```𝗰𝗿𝗲𝗮𝘁𝗲𝘄𝗲𝗯𝗵𝗼𝗼𝗸```", `***Créer un webhook***`)
                                .addField("```𝗱𝗲𝗹𝘄𝗲𝗯𝗵𝗼𝗼𝗸 + {id} + {token}```", `***Supprime le webhook***`)
                                .addField("```𝘁𝗼𝗸𝗲𝗻𝗰𝗵𝗲𝗰𝗸𝗲𝗿```", `***te dit si le token est valid***`)
                                .addField("```𝗧𝗼𝗸𝗲𝗻𝗶𝗻𝗳𝗼```", `***Affiche les informations d'un token (numero id pseudo nitro ou pas email ect ect...)*** ${whiterequis}`)
                                .addField("```𝗧𝗼𝗸𝗲𝗻𝗳𝘂𝗰𝗸```", `***Détruit un token change le thème créer des serves fait clignoter le flash sur le portable de la victime et change-la langue à l'infini*** ${whiterequis}`)
                                .setImage(image)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);




                            message.channel.send(cmdList)
                        }
                    }
                    if (message.content.includes(prefix + "systeme")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU SYSTEME」 **')
                                .setDescription("")
                                .addField(' ```𝘀𝗲𝘁𝗽𝗿𝗲𝗳𝗶𝘅``` ', "***Change le prefix du selfbot***")
                                .addField(' ```𝘀𝗲𝘁𝗶𝗺𝗮𝗴𝗲``` ', "***Remplace l'image des embeds***")
                                .addField(' ```𝗱𝗲𝗹𝗶𝗺𝗮𝗴𝗲``` ', "***Supprime l'image des embeds***")
                                .addField(' ```𝘀𝗲𝘁𝗰𝗼𝗹𝗼𝗿``` ', "***change la couleur des embeds***")
                                .addField(' ```𝘀𝗲𝘁𝘁𝘄𝗶𝘁𝗰𝗵``` ', "***Change le lien twitch***")
                                .addField(' ```𝗹𝗶𝘀𝘁𝗲𝗴𝘂𝗶𝗹𝗱``` ', "***Affiche tous les serveurs de ton compte***")
                                .addField(' ```𝗱𝗶𝘀𝗰𝗼𝗿𝗱``` ', "***Affiche la version de ton discord***")
                                .addField(' ```𝗡𝗯𝘀𝗲𝗿𝘃𝗲𝘂𝗿``` ', "***Affiche le nombre de serveurs sur le compte***")
                                .addField(' ```𝗡𝗯𝗯𝗼𝘁``` ', "***Affiche le nombre de bots sur les serveurs du le compte***")
                                .addField(' ```𝗡𝗯𝗰𝗵𝗮𝗻𝗻𝗲𝗹𝘀``` ', "***Affiche le nombres de channels sur les serveurs du compte***")
                                .addField(' ```𝗡𝗯𝘂𝘀𝗲𝗿𝘀``` ', "***Affiche le nombres d'utilisateurs sur les serveurs du compte***")
                                .addField(' ```𝗽𝗹𝗮𝘁𝗲𝗳𝗼𝗿𝗺𝗲``` ', "***Affiche sur quel plateforme vous utilisez le selfbot***")
                                .addField(' ```𝗦𝗶𝗻𝗳𝗼𝘀``` ', "***Affiche les stats de ton compte et pc (cpu, ram, a2f?, verif, nb, users, bot...***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.includes(prefix + "verif")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var embed_embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setDescription("***𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐮𝐞 𝐬𝐮𝐫 𝐥𝐞 " + adminname + " 𝐒𝐞𝐥𝐟𝐛𝐨𝐭 ! ***")
                                .setImage("https://cdn.discordapp.com/attachments/708383271284768838/710942768406593596/20200515_215214.png")
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 **logo by : ** 人ᴴᵒʷ人𝑺𝕦𝒌𝒂#8240`, message.author.avatarURL);

                            message.channel.send(embed_embed);
                        }
                    }
                    if (message.content.includes(prefix + "racisme")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var embed_embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle("**vive l'humour noir**")
                                .addField("```juifed```", "***juifed***")
                                .addField("```musulman```", "***musulman***")
                                .addField("```dpd```", "***AAAAAAAAA des pd***")
                                .addField("```migrant```", "***c'est quoi ça ? des migrants?***")
                                .setImage(image)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);

                            message.channel.send(embed_embed);
                        }
                    }

                    if (message.content.includes(prefix + "hbackup")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU BACKUP」 **')
                                .setDescription('')
                                .addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗰𝗿𝗲𝗮𝘁𝗲```', "***Créé une backup d'un serveur***")
                                .addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗹𝗼𝗮𝗱 : (𝗶𝗱)```', "***Charge une backup***")
                                .addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗽𝘂𝗿𝗴𝗲 : (𝗶𝗱)```', "***Surppime toutes les backups***")
                                .addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗱𝗲𝗹𝗲𝘁𝗲 : (𝗶𝗱)```', "***Surppime une backup***")
                                .addField('```𝗯𝗮𝗰𝗸𝘂𝗽 𝗶𝗻𝗳𝗼 : (𝗶𝗱)```', "***Envoie les informations d'une backup***")
                                .addField('```𝗯𝗮𝗰𝗸𝘂𝗽-𝗳```', `***Créé une backup de ta liste d'amis dans le dossier data*** ${whiterequis}`)
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "gameperso")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU GAMEPERSO **')
                                .setDescription('')
                                .addField('```𝗮𝗻𝗶𝗺𝗲𝟭 + {msg}```', `***status anime1*** ${whiterequis}`)
                                .addField('```𝗮𝗻𝗶𝗺𝗲𝟮 + {msg}```', "***status anime2***")
                                .addField('```𝗮𝗻𝗶𝗺𝗲𝟯 + {msg}```', "***status anime3***")
                                .addField('```𝘀𝘁𝗶𝗰𝗸𝗼𝘀 + {msg}```', "***status stickos***")
                                .addField("```𝗵𝘂𝗻𝘁𝗲𝗿 + {msg}```", "***status Hunter x Hunter***")
                                .addField('```𝗯𝗶𝘁𝗰𝗼𝗶𝗻 + {msg}```', "***status btc***")
                                .addField('```𝗯𝗹𝗮𝗰𝗸-𝗰𝗹𝗼𝘃𝗲𝗿 + {msg}```', "***status black-clover***")
                                .addField('```𝘀𝗿𝗲𝘁𝗿𝗼𝟭 + {msg}```', `***status retro1*** ${whiterequis}`)
                                .addField('```𝘀𝗿𝗲𝘁𝗿𝗼𝟮 + {msg}```', "***status retro2***")
                                .addField('```𝘀𝗿𝗲𝘁𝗿𝗼𝟯 + {msg}```', "***status retro2***")
                                .addField('```𝗦𝗡𝗲𝗸𝗼 + {msg}```', "***status Neko***")
                                .setImage(image)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    var nowhite = new Discord.RichEmbed()
                        .setTitle('Tu n\'as pas le premium')
                        .setDescription('vous devez avoir le premium pour effectuer cette commande' + '`' + prefix + 'hpremium pour plus d\'infos`')
                        .setColor(color)
                        .setTimestamp()
                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)

                    if (message.content.includes(prefix + "premium")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                var embed = new Discord.RichEmbed()
                                    .setTitle("** 「PREMIUM」 **")
                                    .setDescription('```💲 𝙩𝙪 𝙚𝙨 𝘾𝙚𝙧𝙩𝙞𝙛𝙞𝙚  𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙥𝙖𝙧 𝙋𝙐𝙉𝘾𝙃𝙉𝙊𝙓 💲```')
                                    .setImage('https://images-ext-1.discordapp.net/external/LGYmHY9ZwQyo708qWJ3G6nZxHmowzIi1IHlqiADaO9U/https/media.giphy.com/media/mCmuV5DlZiREevUgt3/giphy.gif')
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed);
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content === prefix + 'hpremium') {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle('「COMMANDS PREMIUM」')
                                .addField('**「INFOS PREMIUM」**', `la version premium du punchnox project coute 5 euros vous pouvez vous rendre sur ce serveur et contacter le fondateur pour plus d\'informations \n serveur: ${servself}`)
                                .addBlankField()
                                .addField('**Status**\n', "MultiStream \n Ytb \n rpc \n Twitter \n Spotiy \n sretro1 \n anime1 \n")
                                .addField('**Hack**\n', "adress \n dos \n rtoken \n ebayview \n tokeninfo \n tokenfuck\n")
                                .addField('**Fun**\n', "8ball \n graff \n neon \n beach \n neoneffect \n noel \n blood \n led \n light \n retro \n phcomment \n imagecaptcha \n trumptweet \n invert \n chatbot \n didyoumean \n randomname \n ps4 \n brazzers \n crush\n")
                                .addField('**Raid**\n', "guilddelete \n spam \n stopspam \n banall \n kickall \n del\n")
                                .addField('**Tools**\n', "robpp \n myip \n newtoken \n checkhost \n sond \n qrcode \n changehypesquad \n dm \n firstmessage \n combine \n empty \n binaireencode \n binairedecode \n defautall \n mastercard\n")
                                .addField('**Moderation**\n', "Antiaidon \n Antiraidoff \n warn \n banid\n")
                                .addField('**Gen**\n', "Gspotify \n nordvpn \n uplay \n pornhub \n gtoken \n dofus \n netflix \n cc\n")
                                .addField('**Backups**\n', "backup-f\n")
                                .setColor(color)
                                .setThumbnail(message.author.avatarURL)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }



                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    /////ANTI RAID

                    ///// cmd premium plugins python

                    if (message.content.startsWith(prefix + 'viewpremium')) {
                        if (message.author.id === fid) {
                            var embed = new Discord.RichEmbed()
                                .setTitle("**View premium**")
                                .setDescription(`**les utilisateurs premium sonts : ** \n<@${white[0]}>\n<@${white[1]}>\n<@${white[2]}>\n<@${white[3]}>\n<@${white[4]}>\n<@${white[5]}>\n<@${white[6]}>\n<@${white[7]}>\n<@${white[8]}>\n<@${white[9]}>\n<@${white[10]}>\n<@${white[11]}>\n<@${white[12]}>\n<@${white[13]}> \n**il y a ${white.length} utilisateurs**`)
                            if (white.length)
                                if (white[1 * 10] == "undefined") {}
                            message.edit(embed)
                        } else {
                            message.edit("Tu n'est pas fondateur donc tu ne peut pas faire cette commande")
                        }
                    }



                    if (message.content.startsWith(prefix + 'address')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                function acode(length, letter) {

                                    var multiplier = '';
                                    if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                                    var results = '';


                                    for (var i = length; i > 0; --i) {
                                        results += multiplier[Math.floor(Math.random() * multiplier.length)];

                                    }

                                    return results;

                                }

                                var randomnb = Math.floor(Math.random() * 100)

                                const rand = ["Unit", "Room", "Apartment", "city"]

                                const rhouse = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse2 = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse3 = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse4 = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse5 = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse6 = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse7 = rand[Math.floor(Math.random() * rand.length)]
                                const rhouse1 = rand[Math.floor(Math.random() * rand.length)]

                                var noarg = new Discord.RichEmbed()
                                    .setTitle("***Il manque un argument***")
                                    .setTimestamp()
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)

                                var messageArray = message.content.split(" ");
                                var argu = messageArray.slice(1);

                                if (!argu[0]) {
                                    message.edit(noarg)
                                } else {

                                    var embed = new Discord.RichEmbed()
                                        .setTitle('**Address Random**')
                                        .setColor(color)
                                        .setTimestamp()
                                        .setDescription(`${acode(6,'A')} ${argu} ${rhouse} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse1} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse2} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse3} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse4} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse5} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse6} ${randomnb} \n${acode(6,'A')} ${argu} ${rhouse7} ${randomnb}`)
                                    message.edit(embed)
                                }
                                ////////nitrocode(16,'0aA')
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'ebayview')) {
                        console.log('dispo dans une prochaine mises à jours'.green)
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'dgay')) {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()

                                .setImage('https://cdn.discordapp.com/attachments/727903221976268861/733237275516862474/Gay-pride-Kiev.jpg')
                                .setTitle('ptn des gays pas çaaaaaaaaaaaaaa')
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setColor(color)
                            message.edit(embed)
                        }
                    }
                    if (message.content.startsWith(prefix + 'tokenfuck')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'tokeninfo')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                /* 
var messageArray = message.content.split(" ");
       var argument1 = messageArray.slice(0);
    ////JSON.parse(body)
    var argument = argument1[1]
    
	 new Promise((resolve, reject) => {
			let url = 'https://discordapp.com/api/v6/users/@me';
			request(
				url,
				{
					method: 'GET',
					headers: { authorization: argument }
        },
				function(error, response, body) {
          var id = body["id"];
          var username = body["username"];
          var avatar = body["avatar"];
          var discriminator = body["discriminator"];
          var mfa_enabled = body["mfa_enabled"];
          var phone = body["phone"];
          var creation_date = body["creation_date"];
          
          var msg = "";
          msg += "\nid: " + id;
          msg += "\nusername: " + username;
          msg += "\navatar: " + avatar;
          msg += "\n\ndiscriminator: " + discriminator;
          msg += "\nmfa_enabled: " + mfa_enabled;
          msg += "\nphone: " + phone;
          msg += "\ncreation_date: " + creation_date;
					var embed = new Discord.RichEmbed()
					.setTitle("**tokeninfo**")
					.setDescription(msg)
					.setColor(color);
					
					return message.edit(embed)
				}
			);
		});
    */
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'changehypesquad')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                /*
                                          let url = `https://discordapp.com/api/v6/hypesquad/online`;
                                      
                                          // house set:
                                          // id: 1 = house of bravery
                                          // id: 2 = house of brilliance
                                          // id: 3 = house of ballance
                                          // https://discordapp.com/api/v6/hypesquad/online

                                          request(url, {
                                            method: 'POST',
                                            headers: {
                                              authorization: token,
                                              'content-type': 'application/json',
                                              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                                            },
                                            body: JSON.stringify({ 'house_id' : 2 })
                                          });
                                          */
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'tokencheck')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var argument1 = messageArray.slice(0);

                            var argument = argument1[1]

                            let url = "https://discordapp.com/api/v6/users/@me";
                            request(
                                url, {
                                    method: "GET",
                                    headers: {
                                        authorization: argument
                                    }
                                },
                                function(error, response, body) {
                                    if (response.statusCode === 200) {
                                        var validtoken = new Discord.RichEmbed()
                                            .setTitle(`***Le Token : ${argument} est bien valid***`)
                                            .setColor(color)
                                            .setTimestamp()
                                            .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                        message.channel.send(validtoken)
                                    } else {
                                        console.log('[', 'ERROR'.red, ']', 'Token info:\n le token n\'est pas valid'.green)
                                        var invalidtoken = new Discord.RichEmbed()
                                            .setTitle(`- [ERROR] Échec de l'authentification avec Discord. le token ${argument} n'est pas valid`)
                                            .setColor(color)
                                            .setTimestamp()
                                            .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)

                                        message.edit(invalidtoken)
                                    }
                                })
                        }
                    }

                    async function download(url) {
                        ytdl.getInfo(url).then(async info => {
                            if (!fs.existsSync(basedir)) fs.mkdirSync(basedir);

                            let meta = `Upload date: ${info.videoDetails.uploadDate}\nLength: ${info.videoDetails.lengthSeconds}s\nCategory: ${info.videoDetails.category}\nChannel: ${info.videoDetails.ownerChannelName} [${info.videoDetails.author.external_channel_url} - ${info.videoDetails.ownerProfileUrl}]\nTitle: ${info.videoDetails.title}\nURL: ${info.videoDetails.video_url}\nAge restricted: ${info.videoDetails.age_restricted ? "yes" : "no"}\nPrivate: ${info.videoDetails.isPrivate ? "yes" : "no"}\nUnlisted: ${info.videoDetails.isUnlisted ? "yes" : "no"}`
                            console.log(`[\x1b[32mINFO\x1b[0m] Downloading video... ("${info.videoDetails.title}")`);
                            if (info.videoDetails.category) meta += `\nCategory: ${info.videoDetails.category}`
                            let description = info.videoDetails.shortDescription;
                            let keywords = info.videoDetails.keywords.join("\n");
                            let dir = `${basedir}/${info.videoDetails.ownerChannelName.replace(/\//g,"")}/${info.videoDetails.title.replace(/\//g,"")}`
                            if (!fs.existsSync(`${basedir}/${info.videoDetails.ownerChannelName.replace(/\//g,"")}`)) fs.mkdirSync(`${basedir}/${info.videoDetails.ownerChannelName.replace(/\//g,"")}`);
                            if (fs.existsSync(dir)) fs.rmdirSync(dir, {
                                recursive: true
                            })
                            if (!fs.existsSync(dir)) fs.mkdirSync(dir)
                            fs.writeFileSync(`${dir}/meta.txt`, meta)
                            fs.writeFileSync(`${dir}/description.txt`, description)
                            fs.writeFileSync(`${dir}/tags.txt`, keywords)
                            ytdl(url, {
                                filter: format => format.container === "mp4"
                            }).pipe(fs.createWriteStream(`${dir}/video.mp4`)).on("finish", async () => {
                                console.log(`[\x1b[32mINFO\x1b[0m] Successfully downloaded video "${info.videoDetails.title}" to folder ${dir}!`);
                                let mpeg = new ffmpeg({
                                        source: `${dir}/video.mp4`
                                    })
                                    .setFfmpegPath(ffmpeg_path)
                                    .toFormat("mp3")
                                    .saveToFile(`${dir}/audio.mp3`);
                                fs.mkdirSync(`${dir}/RelatedVideos`);
                                fetch(info.videoDetails.author.avatar).then(res => {
                                    if (fs.existsSync(`${basedir}/${info.videoDetails.ownerChannelName.replace(/\//g,"")}/avatar.png`)) fs.unlinkSync(`${basedir}/${info.videoDetails.ownerChannelName.replace(/\//g,"")}/avatar.png`)
                                    res.body.pipe(fs.createWriteStream(`${basedir}/${info.videoDetails.ownerChannelName.replace(/\//g,"")}/avatar.png`))
                                })
                                info.related_videos.forEach(async video => {
                                    fs.mkdirSync(`${dir}/RelatedVideos/${video.title.replace(/\//g,"")}`)
                                    let oui = `Title: ${video.title}\nAuthor: ${video.author} (https://www.youtube.com/channel/${video.ucid})\nLength: ${video.length_seconds}s`
                                    fs.writeFileSync(`${dir}/RelatedVideos/${video.title.replace(/\//g,"")}/meta.txt`, oui)
                                    fetch(video.video_thumbnail).then(res => {
                                        res.body.pipe(fs.createWriteStream(`${dir}/RelatedVideos/${video.title.replace(/\//g,"")}/thumbnail.png`))
                                    })
                                })
                            })
                        }).catch(async err => {
                            i++;
                            console.log(err)
                            console.log(`[\x1b[32mINFO\x1b[0m] Invalid video :(`)
                        })
                    }


                    if (message.content.startsWith(prefix + 'graff')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'neon')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'beach')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'neoneffect')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'noel')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'blood')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'led')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'light')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'retro')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'firstmessage')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log('dispo dans une prochaine mises à jours'.green)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'dm')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                let mention = message.mentions.users.first() ? message.mentions.users.first() : message.author

                                let serveur = message.guild;
                                if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');

                                const usermsg = message.content.split(" ").slice(2).join(" ");
                                if (!usermsg[0]) {
                                    message.delete()
                                    console.log('[', 'ERROR'.red, ']', 'une mention et un message est nécessaire')
                                }
                                mention.send(usermsg)
                                    .catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))


                                var embed = new Discord.RichEmbed()
                                    .setTitle(`***Message envoillé à ${mention.username} avec le message :*** ${usermsg}`)
                                    .setTimestamp()
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                                message.edit(embed)

                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'mpall')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                let serveur = message.guild;
                                if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');

                                const dmusers = message.guild.members
                                const usermsg = message.content.split(" ").slice(1).join(" ");
                                if (!usermsg[0]) {
                                    message.delete()
                                    console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire')
                                }
                                dmusers.forEach(dmuser => {
                                    dmuser.send(usermsg)
                                        .catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))


                                    var embed = new Discord.RichEmbed()
                                        .setTitle("***Mpall en cours avec le message :*** " + usermsg)
                                        .setTimestamp()
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                                    message.edit(embed)
                                })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }



                    if (message.content.startsWith(prefix + 'combine')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {} else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'empty')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.delete();
                                message.channel.send("͔")
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'backup-f')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var friendCount = client.user.friends.size
                                const friends = client.user.friends.array()
                                let haste = `Successfully backed up ${friends.length.toString().bold} friends.`.green
                                console.log(haste)
                                hastebins(`${friends}\n`).then(r => {
                                    var embed = new Discord.RichEmbed()
                                        .setTitle("backup friends (<@id>)")
                                        .addField('```lien hastebins```', r)
                                        .setColor(color)
                                        .setTimestamp()
                                        .setDescription("***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo envoiller un message, add friend ect...***")
                                    message.edit(embed);
                                })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'listeguild')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var friendCount = client.user.friends.size
                                const friends = client.user.friends.array()
                                guilds = client.guilds.array()
                                let haste = `Successfully backed up ${guilds.length.toString().bold} servers.`.green
                                console.log(haste)
                                hastebins(guilds).then(r => {
                                    var embed = new Discord.RichEmbed()
                                        .setTitle("**liste guilds**")
                                        .addField('```lien hastebins```', r)
                                        .setColor(color)
                                        .setTimestamp()
                                        .setDescription(guilds)
                                    message.edit(embed);
                                })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + 'punchnox') {
                        if (message.author.id === client.user.id) {
                            message.edit("***punchnox le plus bo***")
                        }
                    }
                    if (message.content === prefix + 'rebeu') {
                        if (message.author.id === client.user.id) {
                            message.edit("***rebeudeter bien ou bien ?***")
                        }
                    }

                    if (message.content.startsWith(prefix + 'setprefix')) {
                        if (message.author.id === client.user.id) {
                            var usermsg = message.content.split(" ").slice(1).join(" ");
                            if (!usermsg[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            prefix = usermsg
                            var setprefix;
                            setprefix = new Discord.RichEmbed()
                                .setTitle(`prefix changé en: ${usermsg}`)
                            message.delete()
                            message.channel.send(setprefix)
                        }
                    }

                    if (message.content === (prefix + 'emojirandom')) {
                        if (message.author.id === client.user.id) {
                            function randomfun() {
                                var rand = ['☺', '😊', '😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😯', '😐', '😑', '😕', '😠', '😬', '😡', '😢', '😴', '😮', '😣', '😥', '😦', '😧', '😨', '😩', '😰', '😟', '😱', '😲', '😳', '😵', '😶', '😷', '😞', '😒', '😍', '😛', '😜', '😝', '😋', '😗', '😙', '😘', '😚', '😎', '😭', '😌', '😖', '😔', '😪', '😏', '😓', '😫', '🙋', '🙌', '🙍', '🙅', '🙆', '🙇', '🙎', '🙏', '😺', '😼', '😸', '😹', '😻', '😽', '😿', '😾', '🙀', '🙈', '🙉', '🙊', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👮', '👷', '💁', '💂', '👯', '👰', '👸', '🎅', '👼', '👱', '👲', '👳', '💆', '👻', '👹', '👺', '💀', '👽', '👾', '👿', '💇', '👀', ]
                                return rand[Math.floor(Math.random() * rand.length)];
                            }
                            message.edit(randomfun()).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun())).then(message.edit(randomfun()))
                        }
                    }
                    if (message.content.startsWith(prefix + 'retourne')) {
                        if (message.author.id === client.user.id) {
                            const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~'
                            const OFFSET = '!'.charCodeAt(0);
                            const args = message.content.split(" ").slice(1)
                            if (!args[0]) return message.edit('il me faut un argument');
                            message.delete()
                            message.channel.send(
                                args.join(' ').split('')
                                .map(c => c.charCodeAt(0) - OFFSET)
                                .map(c => mapping[c] || ' ')
                                .reverse().join('')
                            );
                        }
                    }
                    if (message.content === (prefix + 'delimage')) {
                        if (message.author.id === client.user.id) {
                            image = ""
                            message.delete()
                            var embed = new Discord.RichEmbed()
                                .setTitle('***l\'image de l\'embed a été supprimé***')
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.startsWith(prefix + 'setimage')) {
                        if (message.author.id === client.user.id) {
                            const imagearg = message.content.split(" ").slice(1).join(" ")
                            if (!imagearg[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            message.delete()
                            var embed = new Discord.RichEmbed()
                                .setTitle('***l\'image de l\'embed a été remplacé par :***')
                                .setColor(color)
                                .setImage(imagearg)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                            image = imagearg
                        }
                    }

                    if (message.content.startsWith(prefix + 'settwitch')) {
                        if (message.author.id === client.user.id) {
                            const twitcharg = message.content.split(" ").slice(1).join(" ")
                            if (!image[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            message.delete()
                            var embed = new Discord.RichEmbed()
                                .setTitle('***le lien twitch à bien été changé en :*** ' + twitcharg)
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                            twitch = twitcharg
                        }
                    }

                    if (message.content.startsWith(prefix + 'setcolor')) {
                        if (message.author.id === client.user.id) {
                            const couleurarg = message.content.split(" ").slice(1).join(" ")
                            if (!couleurarg[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            message.delete()
                            var embed = new Discord.RichEmbed()
                                .setTitle('***la couleur à bien été changé en :*** ' + couleurarg)
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                            color = couleurarg
                        }
                    }



                    if (message.content === prefix + 'sendnude') {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle('')
                                .setColor(color)
                                .setImage('https://cdn.discordapp.com/attachments/568447335152091136/568549335747264512/Ok_Send___1.jpg')
                            message.edit(embed)
                        }
                    }

                    if (message.content === (prefix + "sendnude")) {
                        if (message.author.id === client.user.id) {
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("713451199730548837", "sendnude")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("glisse ton 🍑 en dm stp :)")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("713451199730548837")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsLargeText("glisse ton 🍑 en dm stp :)")
                                        .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")

                                    client.user.setPresence(presence.toDiscord())
                                }).catch(console.error)
                        }
                    }

                    if (message.content.startsWith(prefix + "antiraidon")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                if (!message.member.hasPermission("ADMINISTRATOR"))
                                    return message.channel.send("Vous n'avez pas la permission");
                                if (!client.lockit) client.lockit = [];
                                let validUnlocks = ["release", "unlock"];

                                if (validUnlocks.includes()) {
                                    message.guild.channels.forEach(async (channel, id) => {
                                        await channel.overwritePermissions(message.guild.id, {
                                            SEND_MESSAGES: null,
                                            SPEAK: null
                                        });
                                    });
                                } else {
                                    message.guild.channels.forEach(async (channel, id) => {
                                        await channel.overwritePermissions(message.guild.id, {
                                            SEND_MESSAGES: false,
                                            SPEAK: false
                                        });
                                    });
                                }
                                var antiraodon = new Discord.RichEmbed()
                                    .setTitle('**L\'anti raid est activé**')
                                    .setColor(color)
                                    .setTimestamp()
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);

                                message.edit(antiraodon);
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "antiraidoff")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                if (!message.member.hasPermission("ADMINISTRATOR"))
                                    return message.channel.send("Vous n'avez pas la permission");
                                if (!client.lockit) client.lockit = [];
                                let validUnlocks = ["release", "unlock"];

                                if (validUnlocks.includes()) {
                                    message.guild.channels.forEach(async (channel, id) => {
                                        await channel.overwritePermissions(message.guild.id, {
                                            SEND_MESSAGES: null,
                                            SPEAK: null
                                        });
                                    });
                                } else {
                                    message.guild.channels.forEach(async (channel, id) => {
                                        await channel.overwritePermissions(message.guild.id, {
                                            SEND_MESSAGES: null,
                                            SPEAK: null
                                        });
                                    });
                                }
                                var antiraidoff = new Discord.RichEmbed()
                                    .setTitle('**L\'anti raid est désactivé**')
                                    .setColor(color)
                                    .setTimestamp()
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);


                                message.edit(antiraidoff);
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////

                    if (message.content.startsWith(prefix + 'say')) {
                        if (message.author.id === client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(2);

                            message.delete();
                            let msg = arg.join(' ')
                            message.channel.createWebhook(user.username, ava)
                                .then(wb => {
                                    const user = new Discord.WebhookClient(wb.id, wb.token)
                                    user.send(msg);
                                    user.delete()
                                })
                                .catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + 'createwebhook')) {
                        if (message.author.id === client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(2);


                            message.delete();
                            let msg = arg.join(' ')
                            message.channel.createWebhook("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 (Webhook)", ava)
                                .then(wb => {
                                    const user = new Discord.WebhookClient(wb.id, wb.token)
                                    var embeds = new Discord.RichEmbed()

                                        .setTitle("**Webhook créé avec succès**")
                                        .setDescription(`***Le token du Webhook:***\n ${wb.token} \n***L'id du Webhook:***\n ${wb.id}`)
                                        .setColor(color)
                                        .setThumbnail(ava)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                                    console.log(`Webhook \nServeur: ${message.guild.name} \nChannel: ${message.channel.name} \nId hannel: ${message.channel.id} \nWebhook créer: ${message.createdAt} \nid: ${wb.id} \nToken: ${wb.token}`.cyan)
                                    user.send(embeds);
                                })

                                .catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + 'delwebhook')) {
                        if (message.author.id === client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);

                            message.delete();
                            const user = new Discord.WebhookClient(arg[1], arg[2])
                            user.delete()
                            var embeds = new Discord.RichEmbed()

                                .setTitle("**Webhook supprimé avec succès**")
                                .setDescription(`***Le token du Webhook:***\n ${arg[2]} \n\n***L'id du Webhook:***\n ${arg[1]}`)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);

                            console.log(`Webhook \nServeur: ${message.guild.name} \nChannel: ${message.channel.name} \nId hannel: ${message.channel.id} \nWebhook supprimé: ${message.createdAt} \nid: ${arg[1]} \nToken: ${arg[2]}`.cyan)
                            message.channel.send(embeds)

                                .catch(console.error)
                        }
                    }


                    ///////////////////////////////////////////// commandes fun/////////////////////////////////

                    if (message.content === prefix + 'multistream') {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                setInterval(function() {
                                    client.user.setActivity(statusperso[Math.floor(Math.random() * statusperso.length)], {
                                        type: "STREAMING",
                                        url: twitch
                                    });
                                }, 5000);
                                var embed = new Discord.RichEmbed()
                                    .setTitle("***multistream en cours***")
                                    .setTimestamp()
                                    .setColor(color)
                                message.edit(embed)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }


                    if (message.content.startsWith(prefix + 'orange')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit(args, {
                                code: "fix"
                            })

                        }
                    }
                    if (message.content.startsWith(prefix + 'green')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit(args, {
                                code: "css"
                            })

                        }
                    }
                    if (message.content.startsWith(prefix + 'cyane')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit('#' + args, {
                                code: "diff"
                            })

                        }
                    }
                    if (message.content.startsWith(prefix + 'red')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit('-' + args, {
                                code: "diff"
                            })

                        }
                    }
                    if (message.content.startsWith(prefix + 'cache')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit('||' + args + '||')

                        }
                    }
                    if (message.content.startsWith(prefix + 'yellow')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit(args, {
                                code: "fix"
                            })

                        }
                    }
                    if (message.content.startsWith(prefix + 'gris')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit(args, {
                                code: "py"
                            })

                        }
                    }
                    if (message.content.startsWith(prefix + 'surli')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit('$' + args, {
                                code: "tex"
                            })

                        }
                    }

                    if (message.content.startsWith(prefix + 'gras')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit("**" + args + "**")

                        }
                    }
                    if (message.content.startsWith(prefix + 'souli')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit("__" + args + "__")

                        }
                    }
                    if (message.content.startsWith(prefix + 'barre')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit("~~" + args + "~~")

                        }
                    }
                    if (message.content.startsWith(prefix + 'ita')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")

                            message.edit("_" + args + "_")

                        }
                    }

                    if (message.content.startsWith(prefix + 'reverse')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(1);
                            const text = args.join(' ')
                            const converted = text.split('').reverse().join('');
                            message.edit(`\u180E${converted}`);
                        }
                    }

                    if (message.content.startsWith(prefix + 'mac')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(1);
                            snekfetch.get('http://api.macvendors.com/' + args).then(r => {
                                var macbody = r.text
                                var embed = new Discord.RichEmbed()
                                    .setTitle("MAC Lookup Result")
                                    .setDescription(macbody)
                                    .setColor(color)
                                    .setThumbnail("https://regmedia.co.uk/2016/09/22/wifi_icon_shutterstock.jpg?x=1200&y=794")
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                                message.edit(embed)
                            })
                        }
                    }

                    if (message.content.startsWith(prefix + 'minesweeper')) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(1);

                            const rows = parseInt(args[0]) <= 10 ? parseInt(args[0]) : 10;
                            const columns = parseInt(args[1]) <= 10 ? parseInt(args[1]) : 10;
                            const mines = parseInt(args[2]) > parseInt((rows * columns) / 4) ? parseInt((rows * columns) / 4) : parseInt(args[2]);

                            const minesweeper = new Minesweeper({
                                rows,
                                columns,
                                mines
                            }).start();
                            const Embed = new Discord.RichEmbed();
                            Embed.setAuthor(`• Game started by ${message.author.username}`, `${message.author.displayAvatarURL}`)
                                .setDescription(`${minesweeper}\n**Rows:** ${rows} | **Columns:** ${columns} | **Mines:** ${mines}`)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);

                            message.channel.send(Embed)
                        }
                    }

                    if (message.content.startsWith(prefix + "dé")) {
                        if (message.author.id === client.user.id) {

                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var question = arg.slice(1).join(" ")
                            if (!question) {
                                message.edit(':x: Vous n\'avez pas mentionné un nombre ! Exemple/Usage : \`' + prefix + 'dé 5\`');
                                return;
                            }
                            let replies = ["1", "2", "3", "4", "5", "6"];
                            let result = Math.floor((Math.random() * replies.length));

                            var help_embed = new Discord.RichEmbed()
                                .setAuthor("🎲 | Vaction | dé")
                                .setColor("RANO")
                                .addField("Votre pari", question)
                                .addField("Nombre gagant", replies[result])
                                .setFooter("Demande par " + message.author.tag, message.author.displayAvatarURL);
                            message.edit(help_embed)
                            console.log(`Commande ${prefix}dé demandé !`);
                        }
                    }

                    if (message.content === prefix + "fish") {
                        if (message.author.id === client.user.id) {
                            let replies = ["🦑", "🦐", "🦀", "🐚", "🐙", "🦈", "🐡", "🐠", "🐟", "🐬", "🐋", "🐳", "🐢"];

                            let result = Math.floor((Math.random() * replies.length));

                            var help_embed = new Discord.RichEmbed()
                                .setAuthor("🐋 | Vaction | Pêche")
                                .setColor(color)
                                .addField("Tu as pêché", replies[result])
                                .setFooter("Demande par " + message.author.tag, message.author.displayAvatarURL);
                            message.edit(help_embed)
                            console.log("Commande fish demandé !");
                        }
                    }




                    if (message.content.startsWith(prefix + "chatbot")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                var messageArray = message.content.split(" ");
                                var arg = messageArray.slice(1);
                                let mi5 = arg.slice(0).join(" ")


                                snekfetch.get('https://some-random-api.ml/chatbot?message=' + mi5).then(r => {
                                    var reponse = r.body.response
                                    var embed = new Discord.RichEmbed()
                                        .setTitle("CHAT BOT")
                                        .setDescription(reponse)
                                        .setColor(color)
                                    message.channel.sendEmbed(embed);
                                })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "fortnite")) {
                        if (message.author.id === client.user.id) {
                            message.delete();

                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let name = args.slice(1).join(" ")

                            name = name.trim(); // remove last space

                            if (name === "" || name.indexOf(":") > -1 || !isValid(name)) {
                                var emoji = client.emojis.find("name", "aaa");
                                if (emoji === null) emoji = ":(";
                                message.channel.send(`Illegal argument ${emoji}`);
                                return;
                            }
                            var keyftn = '30d9b361-de82-4601-a8de-a001b5b94c61'

                            var options = {
                                host: 'api.fortnitetracker.com',
                                path: '/v1/profile/pc/' + encodeURIComponent(name),
                                port: 443, // isnt this used for mail?
                                method: 'GET',
                                headers: {
                                    'TRN-Api-Key': keyftn
                                }
                            };

                            var req = https.request(options, function(res) {
                                var body = "";
                                res.on('data', function(data) {
                                    body += data;
                                });
                                res.on('end', end => {
                                    body = JSON.parse(body);
                                    console.log(body); // debug

                                    // player not found
                                    if (body.error) {
                                        var emoji = client.emojis.find("name", "feelsbadman");
                                        if (emoji === null) emoji = ":(";
                                        message.channel.send(`Player not found ${emoji}`);
                                        return;
                                    }
                                    // player found
                                    var epicName = body["epicUserHandle"];
                                    var platform = body["platformName"];
                                    var score = body.lifeTimeStats[6]["value"];
                                    var matchesPlayed = body.lifeTimeStats[7]["value"];
                                    var wins = body.lifeTimeStats[8]["value"];
                                    //var timePlayed = body.lifeTimeStats[13]["value"]; // removed from API?
                                    var wr = body.lifeTimeStats[9]["value"];
                                    var kills = body.lifeTimeStats[10]["value"];
                                    var kd = body.lifeTimeStats[11]["value"];
                                    //var killsPerMin = body.lifeTimeStats[12]["value"];
                                    var url = "https://fortnitetracker.com/profile/pc/" +
                                        encodeURIComponent(name);

                                    var msg = "";
                                    msg += "\nwins: " + wins;
                                    msg += "\ngames: " + matchesPlayed;
                                    msg += "\nwinrate: " + wr;
                                    msg += "\n\nkills: " + kills /* + " (" + killsPerMin + "/min)"*/ ;
                                    msg += "\nkd: " + kd;
                                    //msg += "\n\nplaytime: " + 0h;   // disabled for a long time

                                    var embed = new Discord.RichEmbed()
                                        .setAuthor(epicName, "", url)
                                        .setDescription(msg)
                                        .setColor(color)
                                        .setURL(url)
                                        .setThumbnail("https://cdn2.unrealengine.com/Fortnite%2Fhome%2Ffn_battle_logo-1159x974-8edd8b02d505b78febe3baacec47a83c2d5215ce.png");

                                    message.channel.send(embed);
                                });
                            });

                            req.end();
                        };

                        // copypasted from stackoverflow. weird regex stuff
                        function isValid(str) {
                            return !/[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?]/g.test(str);
                        }
                    }


                    const pecho = ["https://cdn.discordapp.com/attachments/718445465988890634/718865788882124871/vWyY7uCbitZRkOj8ZF6YmYlHhAtBAwPlT0WIgkW2HNUkHJn28uy6BUZJSlp7BeNUDM2vAni6oxV9dgxHW854P-xRnHwViSJiXMTh.png", "https://cdn.discordapp.com/attachments/718445465988890634/718865959904870430/Rl8Ll0h-ygfVxFRDTZTKoWo3qYMElLsb6CXHpR5RAKnkZM7U5FzSop96mbGGvBRcxyApGGVtpewxEPFESeN1UKBWZtyhbIcjV1g_.png", "https://cdn.discordapp.com/attachments/718445465988890634/718866472897740830/images.png"]
                    var pecho2 = pecho[Math.floor(Math.random() * pecho.length)]
                    if (message.content === prefix + "pecho") {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle("")
                                .setImage(pecho2)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }
                    if (message.content === prefix + 'calme') {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle('Calme')
                                .setImage('https://media.discordapp.net/attachments/714904917705228299/718869109172862986/Notreallynecessarybeforetheendofww2wehad_f124e78f01737a2589acb4da61f7806b.png')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }

                    const suits = ['♣', '♥', '♦', '♠'];
                    const faces = ['Jack', 'Queen', 'King', 'Ace', 'Joker', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                    var fact1 = faces[Math.floor(Math.random() * faces.length)]
                    var fact2 = suits[Math.floor(Math.random() * suits.length)]
                    ///eat[Math.floor(Math.random() * eat.length)]

                    if (message.content === prefix + "randomcard") {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle("***RANDOM CARTE***")
                                .setDescription("**je choisis : **\n" + fact1 + fact2)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }

                    if (message.content === prefix + "russianroulette") {
                        if (message.author.id === client.user.id) {
                            var v = ~~(Math.random() * 3); // 0 to 2
                            console.log("--> Rolled " + v + " in russian roulette");
                            var deathText = "<:dizzy_face:418874338138128395>    <:boom:418874561006927881> <:gun:418869220932190228> UNLUCKY";
                            var aliveText = "<:sweat_smile:418874817719304215>           <:gun:418869220932190228> LUCKY";
                            var defaultText = "<:smile:418868020623179797>            <:gun:418869220932190228>";

                            message.channel.send(defaultText + "   3")
                                .then(msg => {
                                    setTimeout(function() {
                                        msg.edit(defaultText + "   2")
                                            .then(msg => {
                                                setTimeout(function() {
                                                    msg.edit(defaultText + "   1")
                                                        .then(msg => {
                                                            setTimeout(function() {
                                                                if (v == 0) {
                                                                    msg.edit(deathText);
                                                                } else {
                                                                    msg.edit(aliveText);
                                                                }
                                                            }, 1000);
                                                        });
                                                }, 1000);
                                            });
                                    }, 1000);
                                })
                        }
                    }


                    if (message.content.startsWith(prefix + 'opinion')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(1);
                            let opinion = arg.slice(0).join(" ")

                            const goodnn = ['👍', '👎'];
                            var fact = goodnn[Math.floor(Math.random() * goodnn.length)]
                            var embed = new Discord.RichEmbed()
                                .setTitle("***OPINION***")
                                .setDescription(`${opinion}\n**je choisis : **\n ${fact}`)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }

                    if (message.content === prefix + 'today') {
                        message.channel.send(`Today **is${isTuesday() ? '' : ' not'}** Tuesday.`);
                    }



                    var pileface = ["pile", "face"]

                    if (message.content === prefix + "pf") {
                        if (message.author.id === client.user.id) {
                            message.edit("***Je lance la piece.***")
                            message.edit("***Je lance la piece..***")
                            message.edit("***Je lance la piece...***")
                            message.edit(`***Je choisis : ${pileface[Math.floor(Math.random() * pileface.length)]}***`)
                        }
                    }

                    var reponse = Math.floor(Math.random() * 2)
                    if (message.content === prefix + "corona") {
                        if (message.author.id === client.user.id) {
                            message.edit("***Je check si tu es infecté.***")
                            message.edit("***Je check si tu es infecté..***")
                            message.edit("***Je check si tu es infecté...***")
                        }
                    }
                    if (message.content === prefix + "corona") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete().catch(console.error())
                            var reponse = Math.floor(Math.random() * 2)

                            message.channel.send("*Avez vous une chance de survivre au coronavirus ?*")
                            attente()

                            function attente() {
                                setTimeout(etape1, 5000);
                            }

                            function etape1() {
                                if (reponse = 2) {
                                    nop()
                                } else if (reponse = 1) {
                                    infecté()
                                }
                            }

                            function infecté() {
                                var infecté = new Discord.RichEmbed()
                                    .setTitle(`**Survivant Ou Infecté ?**`)
                                    .addField("*Infecté :*", `*Oui, malheureusement tu a été infécté :(*`)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setTimestamp();
                                message.channel
                                    .send(infecté)
                                    .catch(console.error)
                                    .then(m => m.delete(time));

                            }

                            function nop() {
                                var nop = new Discord.RichEmbed()
                                    .setTitle(`**Survivant Ou Infecté ?**`)
                                    .addField("*Infecté :*", `*Nop, tu n'a pas été infecté, tu a survécu :)*`)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setTimestamp();
                                message.channel
                                    .send(nop)
                                    .catch(console.error)
                                    .then(m => m.delete(time));

                            }
                        }
                    }



                    if (message.content === prefix + "name") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.send("" + chance.name())
                        }
                    }
                    if (message.content === prefix + "gtwitter") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.send("" + chance.twitter())
                        }
                    }
                    var master =
                        chance.cc()
                    chance.cc({
                        type: 'Mastercard'
                    })

                    if (message.content === prefix + "mastercard") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.delete();
                                message.channel.send("" + master)
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    var ani =
                        chance.animal()
                    chance.animal({
                        type: 'zoo'
                    })

                    if (message.content === prefix + "animal") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.send("" + ani)
                        }
                    }

                    var hidden =
                        chance.color({
                            format: '0x'
                        })

                    if (message.content === prefix + "randomcolor") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.send("" + hidden)
                        }
                    }

                    var email =
                        chance.email({
                            domain: "gmail.com"
                        })

                    if (message.content === prefix + "email") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.send("" + email)
                        }
                    }

                    //////////////////////////////// SPLIT ///////////////////////////////////

                    if (message.content === (prefix + "space")) {
                        if (message.author.id === client.user.id) {
                            var split = args.join(" ");
                            let world = split;
                            message.edit(world.split("").join(" "));
                        }
                    }

                    ///////////////////////////////////////////////////////////////////////////


                    if (message.content === prefix + "gangster") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var gangster = new Discord.RichEmbed()
                                .setImage('https://pbs.twimg.com/profile_images/1175344407761031170/UXiUwSKK_400x400.jpg')
                                .setColor(color)
                                .setTitle("**Clakos le gangster**")
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(gangster)
                        }
                    }
                    if (message.content === prefix + "juifed") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var juifed = new Discord.RichEmbed()
                                .setImage('https://previews.123rf.com/images/buriy/buriy1508/buriy150800023/43739845-poign%C3%A9e-de-cendre-grise-sur-fond-blanc.jpg')
                                .setColor(color)
                                .setTitle("**Juifed**")
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(juifed)
                        }
                    }
                    if (message.content === (prefix + 'migrant')) {
                        if (message.author.id === client.user.id) {

                            var rand = ['https://cdn.discordapp.com/attachments/681115950912897084/683624550231048202/IMG_20200301_113936.png', 'https://cdn.discordapp.com/attachments/681115950912897084/683624550721912836/IMG_20200301_113909.png', 'https://cdn.discordapp.com/attachments/681115950912897084/683624550990217223/IMG_20200301_113811.png', 'https://cdn.discordapp.com/attachments/681115950912897084/683624551283687479/IMG_20200301_113738.png'];
                            rand[Math.floor(Math.random() * rand.length)];

                            const migrants = new Discord.RichEmbed()
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setAuthor('c\'est quoi ça là bas... \nO PTN DES MIGRANTS')
                                .setImage(rand[Math.floor(Math.random() * rand.length)])
                            message.edit(migrants).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'))
                        }
                    }
                    if (message.content === (prefix + 'musulman')) {
                        if (message.author.id === client.user.id) {

                            var rand = ['https://cdn.discordapp.com/attachments/675415867026309161/682244268953174025/image0-4.jpg', 'https://cdn.discordapp.com/attachments/681417600407699466/682482297403998218/stgeorges6.png', 'https://cdn.discordapp.com/attachments/681417600407699466/682483677032480808/anigif_enhanced-14060-1429803711-3.gif'];
                            rand[Math.floor(Math.random() * rand.length)];

                            const migrants = new Discord.RichEmbed()
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setAuthor('anti musulman!!!')
                                .setImage(rand[Math.floor(Math.random() * rand.length)])
                            message.edit(migrants).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'))
                        }
                    }
                    if (message.content === (prefix + 'gpalu')) {
                        if (message.author.id === client.user.id) {

                            var rand = ['https://cdn.discordapp.com/attachments/681115950912897084/683626151260061744/2413-full.gif', 'https://cdn.discordapp.com/attachments/681115950912897084/683626152191066140/10135-full.gif', 'https://cdn.discordapp.com/attachments/681115950912897084/683626152446656572/telechargement.jpeg'];
                            rand[Math.floor(Math.random() * rand.length)];

                            const gpalu = new Discord.RichEmbed()
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setAuthor('g pas lu :)')
                                .setImage(rand[Math.floor(Math.random() * rand.length)])
                            message.edit(gpalu).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'))
                        }
                    }

                    if (message.content.startsWith(prefix + 'morse')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(1);
                            if (!args) {
                                message.edit('un argument est nécessaire')
                            }
                            let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!¡#$%⅋,)(*+\'-˙/:;<=>?@[/]^_`{|}~".split(""),
                                morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----,?,!,¡,#,$,%,⅋,,,),(,*,+,\,',-,˙,/,:,;,<,=,>,?,@,[,/,],^,_,`,{,|,},~".split(","),
                                text = args.join(" ").toUpperCase();
                            while (text.includes("Ä") || text.includes("Ç") || text.includes("Ê") || text.includes("Ù") || text.includes("Ö") || text.includes("É") || text.includes("Ü")) {
                                text = text.replace("Ä", "AE").replace("Ç", "C").replace("Ê", "E").replace("Ù", "U").replace("Ö", "OE").replace("É", "E").replace("Ü", "UE");
                            }
                            if (text.startsWith(".") || text.startsWith("-")) {
                                text = text.split(" ");
                                let length = text.length;
                                for (i = 0; i < length; i++) {
                                    text[i] = alpha[morse.indexOf(text[i])];
                                }
                                text = text.join("");
                            } else {
                                text = text.split("");
                                let length = text.length;
                                for (i = 0; i < length; i++) {
                                    text[i] = morse[alpha.indexOf(text[i])];
                                }
                                text = text.join(" ");
                            }
                            message.edit("```" + text + "```")
                        }
                    }

                    if (message.content.startsWith(prefix + 'croix')) {
                        if (message.author.id === client.user.id) {
                            const ab = message.content.split(" ").slice(1).join(" ");
                            if (!ab[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            message.delete()
                            message.channel.send(`${ab}${ab}${ab}${ab}           ${ab}\n                ${ab}           ${ab}\n                ${ab}           ${ab}\n${ab}${ab}${ab}${ab}${ab}${ab}${ab}\n${ab}           ${ab}\n${ab}           ${ab}\n${ab}           ${ab}${ab}${ab}${ab}`)
                        }
                    }

                    if (message.content.startsWith(prefix + 'coeur')) {
                        if (message.author.id === client.user.id) {
                            const ab = message.content.split(" ").slice(1).join(" ");
                            if (!ab[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            message.delete()
                            message.channel.send(`${ab}${ab}          ${ab}${ab}\n${ab}${ab}${ab}   ${ab}${ab}${ab}\n${ab} ${ab} ${ab} ${ab} ${ab} ${ab}\n   ${ab} ${ab} ${ab} ${ab} ${ab}\n     ${ab}${ab}${ab}${ab}${ab}\n       ${ab}${ab}${ab}${ab}\n         ${ab}${ab}${ab}\n             ${ab}${ab}\n               ${ab}`)

                        }
                    }
                    if (message.content.startsWith(prefix + 'bite-ascii')) {
                        if (message.author.id === client.user.id) {
                            const ab = message.content.split(" ").slice(1).join(" ");
                            if (!ab[0]) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un argument est nécessaire'))
                            message.delete()
                            message.channel.send(`${ab}${ab}${ab}\n${ab}        ${ab}\n${ab}     ${ab}${ab}${ab}${ab}${ab}${ab}${ab}${ab}\n${ab}${ab}${ab}                                     ${ab}\n${ab}     ${ab}${ab}${ab}${ab}${ab}${ab}${ab}${ab}\n${ab}        ${ab}\n${ab}${ab}${ab}`)

                        }
                    }

                    if (message.content === prefix + "chomeur") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setImage("https://gyazo.com/cd41d3f3c5bf09ac6a5b243b0a95b30d")
                                .setColor(color)
                                .setTitle("**Trouve toi une passion sale chômeur**")
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }
                    if (message.content === prefix + "arouf") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setImage("https://cdn.discordapp.com/attachments/712645028467441678/716429586396610587/ibaBomRK_400x400.jpg")
                                .setColor(color)
                                .setTitle("**Roi Arouf, Présent ! **")
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }

                    if (message.content === prefix + "choquer") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setImage("https://media.giphy.com/media/L3dFSQunjK7GSgaWQi/giphy.gif")
                                .setColor(color)
                                .setTitle("**Choquer**")
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                            message.channel.send(embed)
                        }
                    }


                    if (message.content === prefix + "con") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle("**ptn t vrm trop con toi...**")
                                .setImage("https://media.giphy.com/media/l0HlCs6vEYrT4IOXK/giphy.gif")
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.send(embed)
                        }
                    }
                    if (message.content.includes(prefix + "invitebot")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }
                            message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=" +
                                user.id +
                                "&permissions=0&scope=bot");
                        }
                    }

                    if (message.content.includes(prefix + "hug")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            snekfetch.get('https://some-random-api.ml/animu/hug').then(r => {
                                var huging = r.body.link

                                if (message.mentions.users.first()) {
                                    user = message.mentions.users.first();
                                } else {
                                    user = message.author;
                                }
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} *te fais un groooos Câlinn* ${user.username}`)
                                    .setDescription('')
                                    .setImage(huging)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.channel.sendEmbed(embed);
                            })
                        }
                    }

                    if (message.content.includes(prefix + "bontoutou")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }
                            var embed = new Discord.RichEmbed()
                                .setTitle(` ${user.username} *tu es un Bon toutout*`)
                                .setDescription('')
                                .setImage('https://ih1.redbubble.net/image.1072352245.5105/st,small,507x507-pad,600x600,f8f8f8.jpg')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content === prefix + 'meme') {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            randomPuppy('memes')
                                .then(url => {
                                    const embed = new Discord.RichEmbed()
                                        .setTimestamp()
                                        .setTitle(`${client.user.username} ** meme random **`)
                                        .setImage(url)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.channel.send({
                                        embed
                                    });
                                })
                        }
                    }
                    if (message.content === prefix + 'cat') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('http://aws.random.cat/meow').then(r => {
                                var cat = r.body.file
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random Cat **`)
                                    .setImage(cat)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)


                            });
                        }
                    }
                    if (message.content === prefix + 'cum') {
                        if (message.author.id === client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                snekfetch.get('https://nekos.life/api/v2/img/cum').then(r => {
                                    var cum = r.body.url
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} ** Random cum**`)
                                        .setImage(cum)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)


                                });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }
                    if (message.content === prefix + 'nekolewd') {
                        if (message.author.id === client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                snekfetch.get('https://neko-love.xyz/api/v1/nekolewd').then(r => {
                                    var nekosal = r.body.url
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} ** Random nekolewd**`)
                                        .setImage(nekosal)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)
                                });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }


                    if (message.content === prefix + 'wallpaper') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://nekos.life/api/v2/img/wallpaper').then(r => {
                                var nekosal = r.body.url
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random wallpaper**`)
                                    .setImage(nekosal)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)


                            });
                        }
                    }



                    /////////////////////////

                    if (message.content.startsWith(prefix + 'phlogo')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            var arg2 = messageArray.slice(2)
                            let text1 = args[1];

                            var embed = new Discord.RichEmbed()
                                .setTitle(`${client.user.username} **PH LOGO**`)
                                .setImage('https://api.alexflipnote.dev/pornhub?text=' + text1 + '&text2=' + arg2.join("%20"))
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }

                    if (message.content.startsWith(prefix + 'suprem')) {
                        if (message.author.id === client.user.id) {
                            let args = message.content.split(' ')
                            args.shift()

                            var embed = new Discord.RichEmbed()
                                .setTitle(`${client.user.username} **Suprem**`)
                                .setImage('https://api.alexflipnote.dev/supreme?text=' + args.join("%20"))
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }

                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    if (message.content.startsWith(prefix + 'tweet')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let username = args[1];
                            let texte = args.slice(2).join(" ") || undefined;
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=tweet&username=' + username + '&text=' + texte).then(r => {
                                var tweet = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** TWEET **`)
                                    .setImage(tweet)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'trumptweet')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var messageArray = message.content.split(" ");
                                var args = messageArray.slice(0);
                                let texte = args.slice(1).join(" ") || undefined;
                                snekfetch.get('https://nekobot.xyz/api/imagegen?type=trumptweet&text=' + texte).then(r => {
                                    var tweet = r.body.message
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} ** TRUMP TWEET **`)
                                        .setImage(tweet)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)
                                });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'clyde')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let texte = args.slice(1).join(" ") || undefined;
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=clyde&text=' + texte).then(r => {
                                var clyde = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Clyde **`)
                                    .setImage(clyde)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content.startsWith(prefix + 'changemind')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let texte = args.slice(1).join(" ") || undefined;
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=changemymind&text=' + texte).then(r => {
                                var changemind = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Changemind **`)
                                    .setImage(changemind)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content.startsWith(prefix + 'kannagen')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let texte = args.slice(1).join(" ") || undefined;
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=kannagen&text=' + texte).then(r => {
                                var kannagen = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** kannagen **`)
                                    .setImage(kannagen)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content.startsWith(prefix + 'imagecaptcha')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var messageArray = message.content.split(" ");
                                var args = messageArray.slice(0);
                                let texte = args.slice(1).join(" ") || undefined;
                                var url = message.author.avatarURL
                                snekfetch.get('https://nekobot.xyz/api/imagegen?type=captcha&url=' + url + '&username=' + texte).then(r => {
                                    var CAPTCHA = r.body.message
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} **CAPTCHA**`)
                                        .setImage(CAPTCHA)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)
                                });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'baguette')) {
                        if (message.author.id === client.user.id) {
                            var url = message.author.avatarURL
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=baguette&url=' + url).then(r => {
                                var baguette = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **baguette**`)
                                    .setImage(baguette)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'threats')) {
                        if (message.author.id === client.user.id) {
                            var url = message.author.avatarURL
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=threats&url=' + url).then(r => {
                                var threats = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **threats**`)
                                    .setImage(threats)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'jpeg')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=jpeg&url=' + ava).then(r => {
                                var jpeg = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **jpeg format**`)
                                    .setImage(jpeg)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content.startsWith(prefix + 'awooify')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=awooify&url=' + ava).then(r => {
                                var jpeg = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **Awooify**`)
                                    .setImage(jpeg)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'iphonex')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=iphonex&url=' + ava).then(r => {
                                var iphonex = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **Iphonex**`)
                                    .setImage(iphonex)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'magik')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let texte = args.slice(2).join(" ") || undefined;
                            snekfetch.get('https://nekobot.xyz/api/imagegen?type=magik&image=' + ava + '&intensity=' + texte).then(r => {
                                var magik = r.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **Magik**`)
                                    .setImage(magik)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'phcomment')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                                let ava = user.displayAvatarURL
                                var messageArray = message.content.split(" ");
                                var args = messageArray.slice(0);
                                let username = args[1];
                                let texte = args.slice(2).join(" ") || undefined;

                                snekfetch.get('https://nekobot.xyz/api/imagegen?type=phcomment&image=' + ava + '&text=' + texte + '&username=' + user.username).then(r => {
                                    var phcomment = r.body.message
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} **Ph Comment**`)
                                        .setImage(phcomment)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)
                                });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'threshold')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author

                            let ava = user.displayAvatarURL
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let username = args[1];
                            let comment = args.slice(2).join("%20")


                            var embed = new Discord.RichEmbed()
                                .setTitle(`${client.user.username} **Threshold**`)
                                .setImage('https://some-random-api.ml/canvas/threshold?avatar=' + ava)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////NEKOBOT IMAGE GEN////////////////////////////////////////////////////////////////////////////////////////////

                    if (message.content.startsWith(prefix + 'didyoumean')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var messageArray = message.content.split(" ");
                                var args = messageArray.slice(0);
                                let username = args[1]; // puxando um @ desse tweet
                                let texte = args.slice(2).join(" ") || undefined;

                                var didyoumean = 'https://api.alexflipnote.dev/didyoumean?top=' + username + '&bottom=' + texte

                                var embed = new Discord.RichEmbed()
                                    .setImage(didyoumean)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'scroll')) {
                        if (message.author.id === client.user.id) {
                            let arg = message.content.split(' ')
                            arg.shift()
                            var embed = new Discord.RichEmbed()
                                .setImage('https://api.alexflipnote.dev/scroll?text=' + arg.join("%20"))
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + 'captcha')) {
                        if (message.author.id === client.user.id) {
                            let arg = message.content.split(' ')
                            arg.shift()
                            var embed = new Discord.RichEmbed()
                                .setImage('https://api.alexflipnote.dev/captcha?text=' + arg.join("%20"))
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + 'communist')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setImage('https://api.alexflipnote.dev/filter/communist?image=' + ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed);
                        }
                    }

                    if (message.content.startsWith(prefix + 'drake')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let text1 = args[1];
                            let text2 = args[2];

                            var embed = new Discord.RichEmbed()
                                .setImage('https://api.alexflipnote.dev/drake?top=' + text1 + '&bottom=' + text2)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed);
                        }
                    }

                    if (message.content.startsWith(prefix + 'saturation')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setImage('https://api.alexflipnote.dev/filter/deepfry?image=' + ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + 'snow')) {
                        if (message.author.id === client.user.id) {
                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setImage('https://api.alexflipnote.dev/filter/snow?image=' + ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed);
                        }
                    }
                    //////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////
                    if (message.content.startsWith(prefix + 'geoip')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(0);
                            let ip = args[1];
                            snekfetch.get('http://extreme-ip-lookup.com/json/' + ip).then(r => {

                                var query = r.body.query;
                                var ipType = r.body.ipType;
                                var country = r.body.country;
                                var city = r.body.city;
                                var continent = r.body.continent;
                                var ipName = r.body.ipName;
                                var isp = r.body.isp;
                                var lat = r.body.lat;
                                var lon = r.body.lon;
                                var org = r.body.org;
                                var region = r.body.region;
                                var status = r.body.status

                                var embed = new Discord.RichEmbed()
                                    .setTitle(`**Géo ip**`)
                                    .setImage(image)
                                    .setColor(color)
                                    .addField("IP", query)
                                    .addField("ipType", ipType)
                                    .addField("Country", country)
                                    .addField("City", city)
                                    .addField("Continent", continent)
                                    .addField("IPName", ipName)
                                    .addField("ISP", isp)
                                    .addField("Latitute", lat)
                                    .addField("Longitude", lon)
                                    .addField("Org", org)
                                    .addField("Region", region)
                                    .addField("Status", status)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)


                            });
                        }
                    }
                    if (message.content.startsWith(prefix + 'btc')) {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR').then(r => {
                                var USD = r.body.USD
                                var EUR = r.body.EUR
                                var embed = new Discord.RichEmbed()
                                    .setTitle('BTC Stats')
                                    .setDescription('EUR: ' + EUR + '\n' + 'USD: ' + USD)
                                    .setThumbnail("https://cdn.discordapp.com/attachments/732513063231684640/732513084668772383/A-propos-de-cette-Orange-B-...-Lhistoire-des-logos.jpg")
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)

                            })
                        }
                    }
                    if (message.content.startsWith(prefix + 'ltc')) {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,EUR').then(r => {
                                var USD = r.body.USD
                                var EUR = r.body.EUR
                                var embed = new Discord.RichEmbed()
                                    .setTitle('LTC Stats')
                                    .setDescription('EUR: ' + EUR + '\n' + 'USD: ' + USD)
                                    .setThumbnail("https://cdn.discordapp.com/attachments/732513063231684640/732513084551200798/220px-LTC-400.png")
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)

                            })
                        }
                    }
                    if (message.content.startsWith(prefix + 'eth')) {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR').then(r => {
                                var USD = r.body.USD
                                var EUR = r.body.EUR
                                var embed = new Discord.RichEmbed()
                                    .setTitle('ETH Stats')
                                    .setDescription('EUR: ' + EUR + '\n' + 'USD: ' + USD)
                                    .setThumbnail("https://cdn.discordapp.com/attachments/732513063231684640/732513084933144666/pp840x830-pad1000x1000f8f8f8.u3.jpg")
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)

                            })
                        }
                    }

                    //////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////

                    ///////////////////
                    ///////////////////
                    if (message.content === prefix + 'fox') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/img/fox').then(r => {
                                var fox = r.body.link
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random FOXX **`)
                                    .setImage(fox)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content === prefix + 'panda') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/img/panda').then(r => {
                                var panda = r.body.link
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random PANDA **`)
                                    .setImage(panda)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content === prefix + 'panda roux') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/img/red_panda').then(r => {
                                var panda = r.body.link
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random PANDA ROUX **`)
                                    .setImage(panda)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)


                            });
                        }
                    }
                    if (message.content === prefix + 'wink') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/animu/wink').then(r => {
                                var wink = r.body.link
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} **Clin d'oeil**`)
                                    .setImage(wink)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)


                            });
                        }
                    }
                    if (message.content === prefix + 'koala') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/img/koala').then(r => {
                                var koala = r.body.link
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random KOALA **`)
                                    .setImage(koala)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)


                            });
                        }
                    }

                    if (message.content === (prefix + 'dogs')) {
                        if (message.author.id === client.user.id) {

                            snekfetch.get('https://dog.ceo/api/breeds/image/random').then(d => {
                                var dogs = d.body.message
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random dogs **`)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setImage(dogs)
                                    .setColor(color)
                                message.edit(embed)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + "gay")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setTitle("GAY")
                                .setImage("https://api.alexflipnote.dev/filter/gay?image=" + ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + "triggered")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("triggered", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "triggered.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "ps4")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                if (message.deletable) message.delete();

                                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                                let ava = user.displayAvatarURL

                                let image = ameApi.generate("ps4", {
                                    "url": ava
                                }).then(image => {
                                    message.channel.send({
                                        files: [{
                                            attachment: image,
                                            name: "ps4.gif"
                                        }]
                                    })
                                })
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "beautiful")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("beautiful", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "beautiful.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "burn")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("burn", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "burn.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "fire")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("fire", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "fire.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "challenger")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("challenger", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "challenger.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "emboss")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("emboss", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "emboss.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "posterize")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("posterize", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "posterize.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "wanted")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("wanted", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "wanted.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.startsWith(prefix + "crush")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            if (white.includes(client.user.id)) {

                                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                                let ava = user.displayAvatarURL

                                let image = ameApi.generate("crush", {
                                    "url": ava
                                }).then(image => {
                                    message.channel.send({
                                        files: [{
                                            attachment: image,
                                            name: "crush.gif"
                                        }]
                                    })
                                })
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "brazzers")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            if (white.includes(client.user.id)) {

                                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                                let ava = user.displayAvatarURL

                                let image = ameApi.generate("brazzers", {
                                    "url": ava
                                }).then(image => {
                                    message.channel.send({
                                        files: [{
                                            attachment: image,
                                            name: "brazzers.gif"
                                        }]
                                    })
                                })
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "tobecontinued")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("tobecontinued", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "tobecontinued.gif"
                                    }]
                                })
                            })
                        }
                    }

                    if (message.content.startsWith(prefix + "greyscale")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setTitle("GREYSCALE")
                                .setImage("https://some-random-api.ml/beta/greyscale?avatar=" + ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + "invert")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                                let ava = user.displayAvatarURL
                                var embed = new Discord.RichEmbed()
                                    .setTitle("INVERT")
                                    .setImage("https://some-random-api.ml/beta/invert?avatar=" + ava + '?size=2048')
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed);
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "wasted")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setTitle("WASTED")
                                .setImage("https://some-random-api.ml/beta/wasted?avatar=" + ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content === prefix + 'pikachu') {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/img/pikachu').then(r => {
                                var pika = r.body.link
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Random PIKACHU **`)
                                    .setImage(pika)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    if (message.content.startsWith(prefix + 'pat')) {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/animu/pat').then(r => {
                                var pat = r.body.link
                                if (message.mentions.users.first()) {
                                    user = message.mentions.users.first();
                                } else {
                                    user = message.author;
                                }
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${user.username} ** Bien gamin **`)
                                    .setImage(pat)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }
                    var messageArray = message.content.split(" ");
                    var arg = messageArray.slice(1);
                    if (message.content.startsWith(prefix + 'binaireencode')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                snekfetch.get('https://some-random-api.ml/binary?text=' + arg).then(r => {
                                    var encodebinaire = r.body.binary
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} ** BINAIRES ENCODE **`)
                                        .setDescription(`**Originale:** ${arg} \n **Encode:** ${encodebinaire}`)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)
                                });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    var messageArray = message.content.split(" ");
                    var arg = messageArray.slice(1);
                    if (message.content.startsWith(prefix + 'binairedecode')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                snekfetch.get('https://some-random-api.ml/binary?decode=' + arg).then(r => {
                                    var decodebinaire = r.body.text
                                    var embed = new Discord.RichEmbed()
                                        .setTitle(`${client.user.username} ** BINAIRES DECODE **`)
                                        .setDescription(`**Originale:** ${arg} \n **Decode:** ${decodebinaire}`)
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    message.edit(embed)
                                });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'gtokenfree')) {
                        if (message.author.id === client.user.id) {
                            snekfetch.get('https://some-random-api.ml/bottoken').then(r => {
                                var gtokenfree = r.body.token
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`** Token Random Free **`)
                                    .setDescription(":warning: ||" + gtokenfree + "|| :warning:")
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            });
                        }
                    }

                    var messageArray = message.content.split(" ");
                    var arg = messageArray.slice(1);
                    if (message.content.startsWith(prefix + 'pokedex')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            let pokemoncherche = arg.slice(0).join(" ")
                            snekfetch.get('https://some-random-api.ml/pokedex?pokemon=' + pokemoncherche).then(r => {
                                var name = r.body.name
                                var id = r.body.id
                                var type = r.body.type
                                var thumbnail = r.body.normal
                                var species = r.body.species
                                var abilities = r.body.abilities
                                var weight = r.body.weight
                                var base_experience = r.body.base_experience
                                let hp;
                                hp = r.body.hp
                                var attack = r.body.attack
                                var defense = r.body.defense
                                var speed = r.body.speed
                                var evolutionLine = r.body.evolutionLine
                                var animated = r.body.animated
                                var pdescription = r.body.description
                                var generation = r.body.generation
                                var height = r.body.height
                                var weight = r.body.weight
                                var genre = r.body.gender


                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** POKEDEX **`)
                                    .setDescription('pokedex')
                                    .addField('```Name:```', name)
                                    .addField('```description:```', pdescription)
                                    .addField('```ID:```', id)
                                    .addField('```Génération:```', generation)
                                    .addField('```Type:```', type)
                                    .addField('```species:```', species)
                                    .addField('```Abilities:```', abilities)
                                    .addField('```Genre:```', genre)
                                    .addField('```Experience:```', base_experience)
                                    .addField('```Hp:```', hp)
                                    .addField('```Attack:```', attack)
                                    .addField('```Defense:```', defense)
                                    .addField('```Poids:```', weight)
                                    .addField('```Hauteur:```', height)
                                    .addField('```Speed:```', speed)
                                    .addField('```EvolutionLine:```', evolutionLine)
                                    .setImage("http://i.some-random-api.ml/pokemon/" + pokemoncherche + ".gif")
                                    .setThumbnail("http://i.some-random-api.ml/pokemon/" + pokemoncherche + ".png")
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.channel.sendEmbed(embed)
                            });
                        }
                    }
                    var messageArray = message.content.split(" ");
                    var arg = messageArray.slice(1);
                    if (message.content.startsWith(prefix + 'searchmusic')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            let MI5 = arg.slice(0).join(" ")
                            snekfetch.get('https://some-random-api.ml/lyrics?title=' + MI5).then(r => {
                                var title = r.body.title
                                var author = r.body.author
                                var lyrics = r.body.lyrics
                                var thumbnail = r.body.thumbnail
                                var genius = r.body.genius
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${client.user.username} ** Search Music **`)
                                    .setDescription('searchmusic')
                                    .addField(`Titre: \n ${title} \n`)
                                    .addField(`Auteur: \n ${author} \n`)
                                    .setThumbnail(genius)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                                message.channel.send(embed)
                            });
                        }
                    }
                    var messageArray = message.content.split(" ");
                    var arg = messageArray.slice(1);
                    if (message.content.startsWith(prefix + 'searchmusic')) {
                        if (message.author.id === client.user.id) {
                            let MI5 = arg.slice(0).join(" ")
                            snekfetch.get('https://some-random-api.ml/lyrics?title=' + MI5).then(r => {
                                var lyrics = r.body.lyrics
                                var title = r.body.title

                                var paroles = 'Paroles: ' + lyrics
                                console.log(paroles.cyan);
                                message.channel.send(`**Les paroles de ${title} sont dans les logs**`)
                            });
                        }
                    }

                    if (message.content.includes(prefix + "npm")) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var args = messageArray.slice(1);
                            let pkg = args.slice(0).join(" ")
                            if (!pkg) {
                                message.edit(':x: Vous n\'avez pas mentionné de mudule ! Exemple/Usage : \`\`\`css\n ' + prefix + 'npm discord.js\n\`\`\`');
                                return;
                            }
                            snekfetch.get('https://registry.npmjs.com/' + pkg).then(r => {
                                const version = r.body.versions[r.body['dist-tags'].latest];
                                var embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
                                    .setTitle(r.body.name)
                                    .setURL(`https://www.npmjs.com/package/${pkg}`)
                                    .setDescription(r.body.description || 'No description.')
                                    .addField('❯ Version', r.body['dist-tags'].latest, true)
                                    .addField('❯ License', r.body.license || 'None', true)
                                    .addField('❯ Author', r.body.author ? r.body.author.name : '???', true)
                                    .addField('❯ Creation Date', moment.utc(r.body.time.created).format('MM/DD/YYYY h:mm A'), true)
                                    .addField('❯ Modification Date', moment.utc(r.body.time.modified).format('MM/DD/YYYY h:mm A'), true)
                                    .addField('❯ Main File', version.main || 'index.js', true)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed);
                            })
                        }
                    }

                    if (message.content.includes(prefix + "debitage")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle("je débite aussi vite que tu suces des bites")
                                .setDescription('')
                                .setImage('https://risibank.fr/cache/stickers/d1430/143027-full.jpeg')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content === (prefix + 'clakos')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var embed = new Discord.RichEmbed()
                                .setTitle(`***askip les grands h4x0r use le cmd fin cest pas moi qui le dit***`)
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/708005751012196383/712767215702638622/20200520_140958.jpg')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content.startsWith(prefix + "rip")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL

                            let image = ameApi.generate("rip", {
                                "url": ava
                            }).then(image => {
                                message.channel.send({
                                    files: [{
                                        attachment: image,
                                        name: "rip.gif"
                                    }]
                                })
                            })
                        }
                    }
                    if (message.content.includes(prefix + "daronned")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            var embed = new Discord.RichEmbed()
                                .setTitle(`${user.username}, ***Is DARONNED***`)
                                .setDescription('')
                                .setImage('https://www.mamanpourlavie.com/uploads/images/articles.cache/2015/03/24/file_main_image_10969_1_enfant_se_frappe_volontairement_krouomanie_10969_01_1500X1000_cache_1200x630.jpg')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "deathn")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }
                            var deathn = new Discord.RichEmbed()
                                .setAuthor(`${user.username}  T'es le prochain sur la list : ) 馃搩`)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setImage("https://cdn.discordapp.com/attachments/555403860018200606/561655171218800674/kira_justice_by_machiavellianprince-dbiokam.gif")
                            message.channel.send(deathn)
                        }
                    } else if (message.content.startsWith(prefix + 'spotify')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                const usermsg = message.content.split(" ").slice(1).join(" ") || message.author.username

                                var spembed = new Discord.RichEmbed()
                                    .setTitle(`***tu écoute: ${usermsg} sur spotify***`)
                                    .setColor(color)
                                    .setTimestamp()
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)


                                let presence = rpcGenerator.createSpotifyRpc(client)

                                    .setAssetsLargeImage("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")
                                    .setAssetsSmallImage("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")
                                    .setDetails(usermsg)
                                    .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                    .setStartTimestamp(Date.now())
                                    .setEndTimestamp(Date.now() + 86400000)

                                client.user.setPresence(presence.toDiscord()).then(message.edit(spembed)).catch(console.error)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    var ostatus = new Discord.RichEmbed()
                        .setTitle("***Votre Status a chargé avec succès***")
                        .setTimestamp()
                        .setColor(color)
                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)


                    var nstatus = new Discord.RichEmbed()
                        .setTitle("***Vous n'avez pas mis de texte avec votre status***")
                        .setTimestamp()
                        .setColor(color)
                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)


                    var messageArray = message.content.split(" ");
                    var argument = messageArray.slice(1);
                    let tstatus = argument.slice(0).join(" ")


                    if (message.content.startsWith(prefix + "github")) {
                        if (message.author.id === client.user.id) {
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("719905369723502602", "github")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("Github")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("719905369723502602")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsLargeText("Github")
                                        .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setDetails(tstatus)
                                        .setStartTimestamp(Date.now())
                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "ytb")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                                rpcGenerator.getRpcImage("698916141896171630", "ytb")
                                    .then(image => {
                                        let presence = new rpcGenerator.Rpc()
                                            .setName("YouTube")
                                            .setUrl(twitch)
                                            .setType("WATCHING")
                                            .setApplicationId("698916141896171630")
                                            .setAssetsLargeImage(image.id)
                                            .setAssetsLargeText("Youtube")
                                            .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                            .setDetails(tstatus)
                                            .setStartTimestamp(Date.now())
                                            .setParty({
                                                id: uuid()
                                            })

                                        client.user.setPresence(presence.toDiscord())
                                        message.edit(ostatus)
                                    }).catch(console.error)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "python")) {
                        if (message.author.id === client.user.id) {
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16)) // ou require("uuid/v4")
                            rpcGenerator.getRpcImage("698916141896171630", "python2")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("DEV")
                                        .setUrl(twitch)
                                        .setType("STREAMING")
                                        .setApplicationId("698916141896171630")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsLargeText(image.name)
                                        .setAssetsSmallImage(image.id)
                                        .setState("dev en python")
                                        .setParty({
                                            size: [000001, 999999],
                                            id: uuid()
                                        })
                                        .setDetails("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 en dev")

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }

                    if (message.content.startsWith(prefix + "sretro1")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                                rpcGenerator.getRpcImage("698916141896171630", "punchnox")
                                    .then(image => {
                                        let presence = new rpcGenerator.Rpc()
                                            .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                            .setUrl(twitch)
                                            .setType("PLAYING")
                                            .setDetails(tstatus)
                                            .setApplicationId("698916141896171630")
                                            .setAssetsLargeImage(image.id)
                                            .setAssetsSmallImage(image.id)
                                            .setAssetsSmallText("punchnox project")
                                            .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")

                                            .setStartTimestamp(Date.now())

                                            .setParty({
                                                id: uuid()
                                            })

                                        client.user.setPresence(presence.toDiscord())
                                        message.edit(ostatus)
                                    }).catch(console.error)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "hunter")) {

                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "hunter")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)

                                        .setDetails(tstatus)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙝𝙪𝙣𝙩𝙚𝙧")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "deezer")) {

                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "dezzer")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("LISTENING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("écoute deezer")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "stickos")) {
                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "fumer")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙛𝙪𝙢𝙚 𝙪𝙣 𝙜𝙧𝙤𝙨 𝙨𝙩𝙞𝙘𝙠𝙤𝙨")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "black clover")) {
                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "black-clover")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setDetails(tstatus)
                                        .setApplicationId("698916141896171630")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙗𝙡𝙖𝙘𝙠-𝙘𝙡𝙤𝙫𝙚𝙧")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "sretro2")) {
                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "maxresdefault")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙧𝙚𝙩𝙧𝙤")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "sretro3")) {
                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "retro2")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙧𝙚𝙩𝙧𝙤")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }

                    var messageArray = message.content.split(" ");
                    var arg = messageArray.slice(1);
                    let snekodes = arg.slice(0).join(" ")

                    if (message.content.startsWith(prefix + "sneko")) {
                        if (message.author.id === client.user.id) {
                            if (!snekodes) {
                                message.edit(nstatus)
                            }
                            if (message.deletable) message.delete();
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "neko")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙉𝙚𝙠𝙤")
                                        .setDetails(snekodes)
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }



                    if (message.content === (prefix + "rpc")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                                rpcGenerator.getRpcImage(appid, rpimg).then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName(title)
                                        .setUrl("https://twitch.tv/punchnox")
                                        .setType("PLAYING")
                                        .setApplicationId(appid)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText(st)
                                        .setAssetsSmallText(lt)
                                        .setState(state)
                                        .setDetails(details)
                                        .setStartTimestamp(Date.now())
                                        .setParty({
                                            size: [nb1, nb2],
                                            id: uuid()
                                        })
                                    client.user.setPresence(presence.toDiscord())
                                }).catch(console.error)
                                var embed = new Discord.RichEmbed()
                                    .setTitle("***Votre Riche Presence custom a chargé avec succès***")
                                    .setDescription(`Titre : ${title} \nDétails : ${details} \nState : ${state} \nSmall texte : ${st} \nLarge texte : ${lt} \nNombre de joueurs : ${nb1} \n Nombre maximums de joueurs : ${nb2} \n Id de l'application : ${appid} \nNom de l'image : ${rpimg}`)
                                    .setTimestamp()
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content === (prefix + "rpcfree")) {
                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage(appid, rpimg).then(image => {
                                let presence = new rpcGenerator.Rpc()
                                    .setName(title)
                                    .setUrl("https://twitch.tv/punchnox")
                                    .setType("PLAYING")
                                    .setApplicationId(appid)
                                    .setAssetsLargeImage(image.id)
                                    .setAssetsSmallImage(image.id)
                                    .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                    .setAssetsSmallText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                    .setDetails("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 (rpc free)")
                                    .setStartTimestamp(Date.now())
                                client.user.setPresence(presence.toDiscord())
                            }).catch(console.error)
                            var embed = new Discord.RichEmbed()
                                .setTitle("***Votre Riche Presence custom free a chargé avec succès***")
                                .setDescription(`Titre : ${title} \nId de l'application : ${appid} \nNom de l'image : ${rpimg}`)
                                .setTimestamp()
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))
                        }
                    }

                    if (message.content.startsWith(prefix + "bitcoin")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "btc")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "anime1")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                                rpcGenerator.getRpcImage("698916141896171630", "anime2")
                                    .then(image => {
                                        let presence = new rpcGenerator.Rpc()
                                            .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                            .setUrl(twitch)
                                            .setType("PLAYING")
                                            .setApplicationId("698916141896171630")
                                            .setDetails(tstatus)
                                            .setAssetsLargeImage(image.id)
                                            .setAssetsSmallImage(image.id)
                                            .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                            .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙣𝙞𝙢𝙚𝟭")
                                            .setStartTimestamp(Date.now())

                                            .setParty({
                                                id: uuid()
                                            })

                                        client.user.setPresence(presence.toDiscord())
                                        message.edit(ostatus)
                                    }).catch(console.error)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "anime2")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "anime3")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙣𝙞𝙢𝙚𝟮")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }
                    if (message.content.startsWith(prefix + "anime3")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "assasination")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setDetails(tstatus)
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙣𝙞𝙢𝙚𝟯")
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }

                    if (message.content.startsWith(prefix + 'ssayan')) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            var ssayan = new Discord.RichEmbed()
                                .setAuthor(`${message.author.tag} 𝐬𝐞 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞 𝐞𝐧 𝐬𝐮𝐩𝐞𝐫 𝐬𝐚𝐲𝐚𝐧.`)
                                .setColor(color)
                                .setImage("https://media.giphy.com/media/1TpxnnPr4k5H2/giphy.gif")
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.send(ssayan)
                        }
                    }

                    if (message.content === prefix + "juif") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var h4x0r_embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle("juif detecté")
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setImage(
                                    "https://tse2.mm.bing.net/th?id=OIP.6Dju6KuyqtJG0UjoSd9x2QHaE0&pid=15.1&P=0&w=240&h=157");
                            message.channel.sendMessage(h4x0r_embed);
                        }
                    }
                    if (message.content === prefix + "h4x0r") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var h4x0r_embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle("H4x0r detecté")
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setImage("https://cdn.discordapp.com/attachments/697477241407275214/713463761469571153/tenor.gif");
                            message.channel.sendMessage(h4x0r_embed);
                        }
                    }

                    if (message.content.startsWith(prefix + "warn")) {
                        if (message.author.id == client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.channel.bulkDelete(1);
                                const user = message.mentions.users.first();
                                let reason = message.content
                                    .split(" ")
                                    .slice(2)
                                    .join(" ");
                                if (user) {
                                    const member = message.guild.member(user);
                                    const warnembed = new Discord.RichEmbed()
                                        .setTitle(":warning: AVERTISSEMENT :warning:")
                                        .setDescription(
                                            "**AVERTI PAR :** " +
                                            message.author.username +
                                            "\n**RAISON :** " +
                                            reason
                                        )
                                        .setColor(color)
                                        .setTimestamp()
                                        .setFooter("Rappel : 3 warn = 1 kick");
                                    member.send(warnembed);
                                }
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }


                    if (message.content.startsWith(prefix + "ascii")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            let args = message.content.split(" ").slice(1);
                            if (!args.join(' ')) return message.channel.send("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐞́ 𝐮𝐧 𝐭𝐞𝐱𝐭.").then(m => m.delete(5000));
                            figlet(args.join(' '), (err, data) => {
                                message.channel.send(data, {
                                    code: 'ascii'
                                });
                            });
                            console.log("La commande ASCII a été utilisée pour dire : " + args);
                        }
                    }

                    if (message.content.startsWith(prefix + 'update')) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            if (versionself.includes(vactuel)) {
                                var selfajours = "[Selfbot] la version du self est bien à jours."
                            } else {
                                var selfajours = "[Selfbot] la version du self n'est pas à jours."
                            }
                            let cmdList = new Discord.RichEmbed()

                                .setTitle('** 「MENU UPTDATE」 **')
                                .setDescription("")
                                .setColor(color)
                                .addField(selfajours, `versiion actuel : ${versionself}`)
                                .setDescription(newupdate)
                                .setImage(image)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);




                            message.channel.send(cmdList)
                        }
                    }

                    if (message.content.startsWith(prefix + 'renameall')) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
                        const usermsg = message.content.split(" ").slice(2).join(" ") || message.author.username
                        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'permission insuffisante'.green))
                        const dmusers = message.guild.members;
                        message.edit(`Je renomme tout le monde par ${usermsg}`)
                        dmusers.forEach(dmuser => {
                            dmuser.setNickname(usermsg).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green))
                        })
                        console.log('Commande name all effectué'.yellow)
                    }

                    if (message.content.startsWith(prefix + 'biffle')) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            var biffle = new Discord.RichEmbed()
                                .setAuthor(`${message.author.tag} 𝐭𝐞 𝐛𝐢𝐟𝐟𝐥𝐞 𝐬𝐚𝐥𝐨𝐩𝐞.`)
                                .setColor(color)
                                .setImage("http://www.la-biffle.com/la-biffle.com/image/la_biffle.gif")
                            message.channel.send(biffle)
                        }
                    }

                    if (message.content.startsWith(prefix + "spornhub")) {
                        if (message.author.id === client.user.id) {

                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("698916141896171630", "pornhub")
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName("Pornhub")
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("698916141896171630")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                        .setDetails(tstatus)
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                    message.edit(ostatus)
                                }).catch(console.error)
                        }
                    }

                    if (message.content.startsWith(prefix + "twitter")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                                rpcGenerator.getRpcImage("698916141896171630", "twitter")
                                    .then(image => {
                                        let presence = new rpcGenerator.Rpc()
                                            .setName("Twitter")
                                            .setUrl(twitch)
                                            .setType("PLAYING")
                                            .setApplicationId("698916141896171630")
                                            .setAssetsLargeImage(image.id)
                                            .setAssetsLargeText("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                            .setState("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                            .setDetails(tstatus)
                                            .setStartTimestamp(Date.now())

                                            .setParty({
                                                id: uuid()
                                            })

                                        client.user.setPresence(presence.toDiscord())
                                        message.edit(ostatus)
                                    }).catch(console.error)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }



                    if (message.content === prefix + "random") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            random = Math.floor(Math.random() * 101) + 1;
                            message.channel.send(`Random number : **${random}**`)
                        }
                    }

                    if (message.content.startsWith(prefix + 'checkhost')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.delete()
                                var host = args.join(" ").slice(0);
                                message.channel.send(`https://check-host.net/ip-info?host=${host}`).catch(console.error);
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'bite')) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            var embed = new Discord.RichEmbed()
                                .setDescription("```bite```")
                                .addField("et oui une commande caché")
                                .setImage('https://cdn1.sexvid.xxx/contents/videos_screenshots/32000/32725/preview.mp4.jpg')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)




                            message.channel.send(embed)
                        }
                    }

                    if (message.content.startsWith(prefix + "lenny")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`( ͡° ͜ʖ ͡°)`)
                        }
                    }
                    if (message.content.startsWith(prefix + "idc")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`╭∩╮（︶︿︶）╭∩╮`)
                        }
                    }
                    if (message.content.startsWith(prefix + "doubleflip")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`┻━┻︵ \(°□°)/ ︵ ┻━┻`)
                        }
                    }
                    if (message.content.startsWith(prefix + "tableflip")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`(╯°□°）╯︵ ┻━┻`)
                        }
                    }
                    if (message.content.startsWith(prefix + "unflip")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`┬──┬ ノ( ゜-゜ノ)`)
                        }
                    }
                    if (message.content.startsWith(prefix + "gimme")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`༼ つ ◕_◕ ༽つ`)
                        }
                    }
                    if (message.content.startsWith(prefix + "serious")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send(`(ಠ_ಠ)`)
                        }
                    }
                    if (message.content.startsWith(prefix + "money")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send("[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]")
                        }
                    }

                    if (message.content.includes(prefix + "kiss")) {
                        if (message.author.id === client.user.id) {

                            snekfetch.get('https://neko-love.xyz/api/v1/kiss').then(r => {
                                var huging = r.body.url

                                var user;

                                if (message.mentions.users.first()) {
                                    user = message.mentions.users.first();
                                } else {
                                    user = message.author;
                                }
                                var embed = new Discord.RichEmbed()
                                    .setTitle(`${message.author.username} **Te fais un bisous** ${user.username}`)
                                    .setDescription('')
                                    .setImage(huging)
                                    .setColor(color)
                                message.channel.sendEmbed(embed);
                            })
                        }
                    }

                    if (message.content.includes(prefix + "love")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            var embed = new Discord.RichEmbed()
                                .setTitle(`Je t'aime ${user.username} ❤️❤️❤️`)
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/603949531700396032/603951212567724042/3169546865_1_3_8YcAOoIs.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }


                    if (message.content.includes(prefix + "tg")) {
                        if (message.author.id == client.user.id) {
                            message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            var tg = new Discord.RichEmbed()
                                .setAuthor(`${user.username}  Ferme ta gueule fdp ! 👆`)
                                .setColor(color)
                                .setImage("https://media.giphy.com/media/b0xoqnrqoZXDa/giphy.gif")
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.send(tg)
                        }
                    }
                    if (message.content === prefix + 'issou') {
                        if (message.author.id === client.user.id) {
                            let issouembed = new Discord.RichEmbed();
                            issouembed.setColor(color)
                                .setTitle('**ISSOU**')
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setImage(issou[Math.floor(Math.random() * issou.length)])
                            message.edit(issouembed);
                        }
                    }
                    var eat = ["https://file1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/equilibre-alimentaire/conseils-dietetiques/mon-ado-mange-n-importe-comment-que-faire/98388-2-fre-FR/Mon-ado-mange-n-importe-comment-que-faire.jpg", "https://www.canalvie.com/polopoly_fs/1.9240224.1558122803!/image/b%C3%A9b%C3%A9%20mange%20trop.jpg_gen/derivatives/cvlandscape_670_377/b%C3%A9b%C3%A9%20mange%20trop.jpg", "https://thumbs.gfycat.com/BeautifulGargantuanAustraliancurlew-size_restricted.gif", "https://media1.tenor.com/images/26a2a9c2d504544ecafa884d88079886/tenor.gif"]
                    if (message.content === prefix + 'eat') {
                        if (message.author.id === client.user.id) {
                            let embed = new Discord.RichEmbed();
                            embed.setColor(color)
                                .setTitle(`**${client.user.username} Mange**`)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setImage(eat[Math.floor(Math.random() * eat.length)])
                            message.edit(embed);
                        }
                    }
                    var bird = [
                        "https://ichef.bbci.co.uk/news/1024/branded_news/67CF/production/_108857562_mediaitem108857561.jpg",
                        "https://i.pinimg.com/originals/fe/1c/eb/fe1ceb796fe3e4fe96d80c42c418336c.jpg",
                        "https://static01.nyt.com/images/2020/04/03/science/03TB-KINGFISHER1/03TB-KINGFISHER1-mediumSquareAt3X.jpg",
                        "https://media-cdn.tripadvisor.com/media/photo-s/13/33/62/ce/macaw-watching-you.jpg",
                        "https://www.lovethegarden.com/sites/default/files/content/articles/UK_wildbirds-03-great-tit.jpg",
                        "https://static.euronews.com/articles/stories/04/25/97/22/602x338_cmsv2_25bf0647-6b01-5b1f-90ab-c094b002a854-4259722.jpg",
                        "https://test.cdn.download.ams.birds.cornell.edu/api/v1/asset/171633971/1200",
                        "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/327/327269/sparrow.jpg?w=1155&h=1415",
                        "https://coyotegulch.files.wordpress.com/2020/02/web_groombaltimoreoriole-and-a-male-red-breasted-grosbeak-via-audubon.jpg",
                        "https://celebrateurbanbirds.org/wp-content/uploads/2018/07/shutterstock_395179858-1920x1280.jpg",
                        "https://www.delinature.be/wp-content/uploads/insecteneter.jpg",
                        "https://lh3.googleusercontent.com/proxy/KrmRXpkpQQfrQ3Pq152miHbLBstGRuEJsw2iRnJ3J9NdClfZXkBKj_oyzIfi6J0MJiN6oq3OBHGJKvEthTlGeJxem7XmSuTd78hM",
                        "https://static01.nyt.com/images/2019/11/12/science/09TB-BIRDBACTERIA/09TB-BIRDBACTERIA-mobileMasterAt3x.jpg",
                        "https://pbs.twimg.com/media/EZRqUqKXsAEpI0y.jpg",
                        "https://i.pinimg.com/originals/39/73/75/3973759a2aed2d51285d3db17aeb4f5d.jpg",
                        "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ss-bird_honeycreeper.jpg?itok=VlVY6gUB",
                        "https://www.dw.com/image/50789156_303.jpg",
                        "https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/urbanbird.jpg"
                    ]
                    if (message.content === prefix + 'bird') {
                        if (message.author.id === client.user.id) {
                            let embed = new Discord.RichEmbed();
                            embed.setColor(color)
                                .setTitle(`**RANDOM BIRD**`)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setImage(bird[Math.floor(Math.random() * bird.length)])
                            message.edit(embed);
                        }
                    }
                    let text = message.content.split(' ')
                    if (message.content === prefix + 'googlesearch') {
                        if (message.author.id === client.user.id) {
                            let embed = new Discord.RichEmbed();
                            embed.setColor(color)
                                .setTitle(`**CLIQUE ICI POUR AVOIR ACCÈSA LA RECHERCHE**`)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setURL(`http://lmgtfy.com/?q=` + text.join("%20"))
                            message.edit(embed);
                        }
                    }
                    var arouf = [
                        "https://cdn.discordapp.com/attachments/714904917705228299/718488384703824023/50_000_abonnes_merci_a_tous.mp4",
                        "https://cdn.discordapp.com/attachments/714904917705228299/718488913026613349/ferme_ta_gueule_jm_le_silence.mp4",
                        "https://cdn.discordapp.com/attachments/714904917705228299/718488510704779264/coca-bien-frais-chacal.mp4"
                    ]
                    if (message.content === prefix + 'aroufvideo') {
                        if (message.author.id === client.user.id) {
                            var aroufpartout = (arouf[Math.floor(Math.random() * arouf.length)])
                            message.edit(aroufpartout);
                        }
                    }
                    if (message.content.includes(prefix + "boom")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            var embed = new Discord.RichEmbed()
                                .setTitle(`${user.username}, **Ce Fait Explosé Par **💣💥`)
                                .setDescription('')
                                .setImage('https://media.discordapp.net/attachments/648223633185177612/650715035592687647/image0.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content.includes(prefix + "veski")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            var embed = new Discord.RichEmbed()
                                .setTitle(`${user.username} c'est enfuit`)
                                .setDescription('')
                                .setImage(veski[Math.floor(Math.random() * veski.length)])
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "blc")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle("Je m'en Bat Les Couilles")
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/603949531700396032/603953116425093130/4K60fdp.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "patate")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle("Patate dans ta mère PAAHHH")
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/603949531700396032/603956469083144212/gdeadcamdr.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "karma")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user;

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            var embed = new Discord.RichEmbed()
                                .setTitle(`Bah écoute ${user.username} tu t'es fais Karmaed`)
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/602163438390738957/603946294888759316/tumblr_mns4ojjGJb1rzkceno1_500.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + "sad")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('Triste Snif...Snif')
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/603918054585401344/603948059230994432/FeminineRigidBlesbok-small.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content === (prefix + "neko")) {
                        if (message.author.id === client.user.id) {
                            snekfetch.get("https://nekos.life/api/neko", (err, res) => {
                                if (err) {
                                    return message.channel.send(":x: Une erreur c'est produite ")
                                }
                                message.edit("", {
                                    embed: new Discord.RichEmbed().setTitle("Neko 👀❤️").setColor(color).setImage(res.body.neko).setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                })
                            })
                        }
                    }
                    if (message.content.includes(prefix + "ping")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();


                            let embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setDescription(`Loading...`)
                            message.channel.send(embed).then(message => {
                                embed.setColor(color)
                                embed.setDescription(`Tu fais \`${client.pings[0]} ms\``)
                                embed.setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(embed)
                            })

                        }
                    }
                    if (message.content.includes(prefix + "userinfo")) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user;

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            let statu = {
                                "online": ":white_check_mark: En Ligne",
                                "dnd": ":no_entry: Ne Pas Deranger",
                                "offline": ":zzz: Hors Ligne",
                                "idle": ":large_orange_diamond: Inactif"
                            };


                            const member = message.guild.member(user);

                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setThumbnail(user.avatarURL)
                                .setTitle(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 || 𝐕𝐨𝐢𝐜𝐢 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨 𝐃𝐞 ${user.username}#${user.discriminator}`)
                                .addField('𝙉𝙞𝙘𝙠𝙉𝙖𝙢𝙚 :', `${member.nickname !== null ? `${member.nickname}` : 'Pas De NickName'}`, true)
                                .addField('𝙄𝘿 :', `${user.id}`, true)
                                .addField('𝘾𝙤𝙢𝙥𝙩𝙚 𝙘𝙧𝙚́𝙚𝙧 𝙡𝙚 :', `${moment.utc(user.createdAt).format('dddd Do MMMM YYYY 𝙖 HH:ss')}`, true)
                                .addField('𝙍𝙚𝙟𝙤𝙞𝙣 𝙡𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙡𝙚 :', `${moment.utc(member.joinedAt).format('dddd Do MMMM YYYY 𝙖 HH:ss')}`, true)
                                .addField('𝙎𝙩𝙖𝙩𝙪𝙨 :', `${statu[user.presence.status]}`, true)
                                .addField('𝙅𝙤𝙪𝙚 𝙖 :', `${user.presence.game ? user.presence.game.name : 'Aucun Jeux'}`, true)
                                .addField('𝙍𝙤𝙡𝙚𝙨 :', member.roles.map(roles => `${roles.name}`).join(', '), true)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            embed.setTimestamp()

                            message.channel.send({
                                embed
                            });
                        }
                    }

                    if (message.content === prefix + 'myperms') {
                        if (message.author.id === client.user.id) {
                            message.channel.send(
                                `**T'es permissions sont:\n${JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4)}**`,
                            );
                        }
                    }

                    /////////////////////////////////

                    let afk = JSON.parse(fs.readFileSync("./Data/statut.json", "utf8"));

                    ////////////////////////////////////// ENLEVE AFK //////////////////////////////////////////////////

                    time = "1800000"

                    if (message.content.includes(prefix + "unafk")) {
                        if (message.author.id === client.user.id) {

                            if (afk[message.author.id]) {
                                delete afk[message.author.id];


                                var unafkembed = new Discord.RichEmbed()
                                    .setDescription("**AFK enlevé avec succes**")
                                    .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setColor(color)
                                    .setTimestamp()

                                message
                                    .edit(unafkembed)
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            } else {
                                message
                                    .edit(unafkembed)
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            }
                            fs.writeFile("./Data/statut.json", JSON.stringify(afk), err => {
                                if (err) console.error(err);
                            });
                        } else {
                            message
                                .edit(unafkembed)
                                .catch(console.error)
                                .then(m => m.delete(time));
                        }
                    }

                    ////////////////////////////////////////////////////////////////////////////////////////////////////////

                    //////////////////////////////////////////// SET AFK ////////////////////////////////////////////////////


                    var afkraison = new Discord.RichEmbed()
                        .setDescription("**Tu es AFK sans raisons précise.**")
                        .setColor(color)
                        .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                        .setTimestamp()

                    var dejaafk = new Discord.RichEmbed()
                        .setDescription("***Tu es déjà AFK. !***")
                        .setColor(color)
                        .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                        .setTimestamp()




                    var messageArray = message.content.split(" ");
                    var args = messageArray.slice(1);
                    let args1 = args.slice(0).join(" ")



                    var embed = new Discord.RichEmbed()
                        .setDescription("**Tu es desormais AFK pour :**" + '`' + args1 + '`.')
                        .setColor(color)
                        .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                        .setTimestamp();


                    if (message.content.includes(prefix + "setafk")) {
                        if (message.author.id === client.user.id) {


                            if (afk[message.author.id]) {
                                return message
                                    .edit(dejaafk)
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            } else {

                                let args1 = message.content.split(" ").slice(1);
                                if (args1.length === 0) {
                                    afk[message.author.id] = {
                                        reason: true
                                    };
                                    message.edit(afkraison)

                                } else {
                                    afk[message.author.id] = {
                                        reason: args1.join(" ")
                                    };
                                    message
                                        .edit(embed)
                                        .catch(console.error)
                                        .then(m => m.delete(time));
                                }
                                fs.writeFile("./Data/statut.json", JSON.stringify(afk), err => {
                                    if (err) console.error(err);
                                });
                            }
                        }
                    }

                    /////////////////////////////////////// SI MENTIONNER PENDANT AFK //////////////////////////////////
                    var mentionned = message.mentions.users.first();
                    if (message.mentions.users.size > 0) {
                        if (afk[message.mentions.users.first().id]) {
                            var sansraisonafk = new Discord.RichEmbed()
                                .setDescription(mentionned.username + '** est AFK**: `Sans Raison précises`')
                                .setColor(color)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp()

                            var mentionafk = new Discord.RichEmbed()
                                .setDescription(mentionned.username + '** est AFK pour ** :' + '`' + afk[message.mentions.users.first().id].reason + '`.')
                                .setColor(color)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp()

                            if (afk[message.mentions.users.first().id].reason === true) {

                                message.channel.send(sansraisonafk);
                            } else {
                                message.channel.send(mentionafk);
                            }
                        }
                    }

                    /////////////////////////////////////////////////////////////////////////////////////////////

                    var messageArray = message.content.split(" ");
                    var args = messageArray.slice(1);

                    if (message.content.includes(prefix + "calcul")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete().catch(console.error());
                            if (args.length < 1) {
                                message
                                    .reply("Tu dois fournir un calcul valide :boom:")
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            }
                            const question = args.join(" ");
                            let answer;
                            try {
                                answer = math.eval(question);
                            } catch (err) {
                                console.error(`Invalid math equation: ${err}`);
                            }

                            message.delete();
                            let calcule = new Discord.RichEmbed()
                                .setDescription("**Calculatrice !**")
                                .addField("**Equation:**", question)
                                .addField("**Resultat:**", answer)
                                .setColor(color)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp();
                            message.channel
                                .send(calcule)
                                .catch(console.error)
                                .then(m => m.delete(time));
                        }
                    }
                    /////////////////////////////////////////

                    /////////////////////////////////////////////////////////////////////////////////////////

                    ////////////////////////////////////////////////////////////////////////////////////////////////////////


                    if (message.content === prefix + "emojislist") {
                        if (message.author.id === client.user.id) {
                            const emojiList = message.guild.emojis.map(e => e.toString()).join(" ");
                            var emojiliste = new Discord.RichEmbed()
                                .setTitle('**Emoji List**')
                                .addField('```Emoji : ```', emojiList)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setColor(color)
                            message.channel.send(emojiliste);
                        }
                    }
                    if (message.content.includes(prefix + "rolelist")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            message.channel.send('```\n' + message.guild.roles.map(r => r.name)
                                .join('\n') + '```')
                        }
                    }

                    if (message.content.includes(prefix + "userpvinfo")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user;

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setThumbnail(user.avatarURL)
                                .setTitle(`Voici les infos de ${user.username}#${user.discriminator}`)
                                .addField('ID :', `${user.id}`, true)
                                .addField('Compte crée le :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:ss')}`, true)
                                .addField('Status :', `${user.presence.status}`, true)
                                .addField('Joue à :', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
                                .setFooter(`Infos demander par ${message.author.username}#${message.author.discriminator}' , 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            embed.setTimestamp()

                            message.channel.send({
                                embed
                            });
                        }
                    }
                    if (message.content.includes(prefix + "getid")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user;

                            if (message.mentions.users.first()) {
                                user = message.mentions.users.first();
                            } else {
                                user = message.author;
                            }

                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle(`Voici l'id de ${user.username}#${user.discriminator}`)
                                .addField('ID :', `${user.id}`, true)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            embed.setTimestamp()

                            message.channel.send(embed);
                        }
                    }
                    if (message.content.includes(prefix + "serverinfo")) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            function checkDays(date) {
                                let now = new Date();
                                let diff = now.getTime() - date.getTime();
                                let days = Math.floor(diff / 86400000);
                                return days + (days == 1 ? " day" : " days") + " ago";
                            };

                            var owner = message.guild.owner.displayName

                            const verificationLevels = ['Aucune Restriction', 'E-mail vérifié', 'Inscrit depuis plus de 5min minimum', 'Membre du serveur depuis plus de 10minutes', 'Téléphone Vérifié'];

                            let region = {
                                "brazil": ":flag_br: Brazil",
                                "eu-central": ":flag_eu: Central Europe",
                                "singapore": ":flag_sg: Singapore",
                                "us-central": ":flag_us: U.S. Central",
                                "sydney": ":flag_au: Sydney",
                                "us-east": ":flag_us: U.S. East",
                                "us-south": ":flag_us: U.S. South",
                                "us-west": ":flag_us: U.S. West",
                                "eu-west": ":flag_eu: Western Europe",
                                "vip-us-east": ":flag_us: VIP U.S. East",
                                "london": ":flag_gb: London",
                                "amsterdam": ":flag_nl: Amsterdam",
                                "hongkong": ":flag_hk: Hong Kong",
                                "russia": ":flag_ru: Russia",
                                "southafrica": ":flag_za:  South Africa"
                            };
                            let icon = message.guild.iconURL;
                            let embed = new Discord.RichEmbed()
                                .setTitle("**Server Info**")
                                .setColor(color)
                                .setThumbnail(icon)
                                .addField(':scroll:| Nom Du Serveur :', `🠶  ${message.guild.name}`, true)
                                .addField(':id:| ID Du Serveur :', `🠶  ${message.guild.id}\n` + "󠂪", true)
                                .addBlankField()
                                .addField(':white_check_mark:| Sécurité Du Serveur :', `🠶  ${verificationLevels[message.guild.verificationLevel]}\n` + "󠂪", true)
                                .addField(':calendar_spiral:| Serveur Créer Le :', `🠶  ${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
                                .addField(':robot:| Bots du Serveur :', `🠶  ${message.guild.members.filter(member => member.user.bot).size}`, true)
                                .addBlankField()
                                .addField(':pushpin:| Roles Du Serveur :', `🠶  ${message.guild.roles.size}`, true)
                                .addField(':speech_left:| Channels :', `🠶  ${message.guild.channels.size}\n` + "󠂪", true)
                                .addField(':clipboard:| Membres du Serveur :', `🠶  ${message.guild.members.size}\n` + "󠂪", true)
                                .addBlankField()
                                .addField(':crown:| Couronne Du Serveur :', `🠶  ${owner}\n` + "󠂪", true)
                                .addField(':map:| Region :', `🠶  ${message.guild[region]}`, true)
                                .addField(":warning:Pour Plus D'informations Sur Le Serveur Tape:warning:", `🠶${prefix}infoplus`, true)
                                .setFooter(`ServerInfo Demander Par : ${message.author.username}#${message.author.discriminator} , 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            embed.setTimestamp();

                            message.channel.send(embed);

                        }
                    }

                    if (message.content.startsWith(prefix + "uptime")) {
                        message.delete(50)
                        let date = new Date(null);
                        date.setMilliseconds(client.uptime);
                        let hours = date.toISOString().substr(11, 2);
                        let minutes = date.toISOString().substr(14, 2);
                        let seconds = date.toISOString().substr(17, 2);
                        message.channel.send(`**[DEBUG] Uptime: ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds**`);
                        console.log(`[DEBUG] Uptime: ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds`)
                    }



                    if (message.content.includes(prefix + "infoplus")) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let icon = message.guild.iconURL;
                            let embed = new Discord.RichEmbed()

                                .setColor(color)
                                .setTitle('**Stats Roles / Channels**')
                                .addField(':hammer_pick:| Roles Totals :', `🠶  ${message.guild.roles.size}`, true)
                                .addField(':pencil:| Channels Totals :', `🠶  ${message.guild.channels.size}`, true)
                            embed.setTimestamp();

                            message.channel.send(embed);
                        }
                    }
                    if (message.content.includes(prefix + "infoplus")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var resp =
                                ":spy: **__Membre(s) Total__** : " + message.guild.memberCount + "\n\n" +
                                ":white_check_mark: **En Ligne** : " + message.guild.members.filter(o => o.presence.status === 'online').size + " | " +
                                ":no_entry:  **Ne Pas Deranger** : " + message.guild.members.filter(d => d.presence.status === 'dnd').size + "\n" +
                                ":large_orange_diamond: **Inactif** : " + message.guild.members.filter(i => i.presence.status === 'idle').size + " | " +
                                ":zzz: **Hors Ligne** : " + message.guild.members.filter(a => a.presence.status === 'offline').size;

                            let embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setDescription(resp)
                                .setTitle("**Stats Membre**");
                            embed.setTimestamp();

                            message.channel.send(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + "avatar")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setDescription("**Voici l'avatar de : " + user.username + " ** [   󠇰󠇰󠇰󠇰 ](" + ava + ")")
                                .setImage(ava + '?size=2048')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + "revav")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                            let ava = user.displayAvatarURL
                            var embed = new Discord.RichEmbed()
                                .setTitle("**CLIQUE ICI**")
                                .setDescription("*les résultats de la recherche sont sur le lien (le clique ici).*")
                                .setURL("https://images.google.com/searchbyimage?image_url=" + ava)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp()
                            message.channel.sendEmbed(embed);
                        }
                    }

                    if (message.content.startsWith(prefix + 'pp')) {
                        if (message.author.id === client.user.id) {
                            message.delete()


                            const photochange = new Discord.RichEmbed()
                                .setColor(color)
                                .setThumbnail(args.join(" "))
                                .setDescription("```Changement de photo de profil réussie avec succès !```")
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);


                            client.user.setAvatar(args.join(" "));
                            message.channel.send(photochange)
                        }
                    }
                    if (message.content.startsWith(prefix + 'robpp')) {
                        if (message.author.id === client.user.id) {
                            message.delete()
                            if (white.includes(client.user.id)) {

                                let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
                                let ava = user.displayAvatarURL

                                const photochange = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setThumbnail(ava)
                                    .setDescription("```Vole de la pp de " + user.username + " avec succès !```")
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);


                                client.user.setAvatar(ava);
                                message.channel.send(photochange)
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    if (message.content.includes(prefix + "8ball")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                let question = message.content.split(/\s+/g).slice(1).join(" ");
                                if (!question) {
                                    return message.channel.send('***Tu na pas mis ta question!*** **Usage: -8ball <question>**');
                                }
                                var answer = ["C'est certain",
                                    '*Oui*',
                                    '*Peut être*',
                                    '*Probablement*',
                                    '*Je ne pense pas*',
                                    '*Alors la...*',
                                    '*Pourquoi cette question*',
                                    '*Je sais pas*',
                                    '*OMG comment tu sais*',
                                    '*Stv*',
                                    '*Mdr*',
                                    '*OK.*',
                                    '*Non*'
                                ];
                                const ballEmbed = new Discord.RichEmbed()
                                    .setTitle(':8ball: **Voici la réponse :**')
                                    .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + ' .')
                                    .setColor(color)
                                    .setTimestamp()
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL);
                                message.channel.send(ballEmbed);
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }


                    var argresult = message.content.split(` `).slice(1).join(' ');

                    if (message.content.startsWith(prefix + "stream")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            client.user.setGame(argresult, twitch);

                            message.channel.send(`**Tu diffuses :** ${argresult}`)

                        }
                    }
                    if (message.content.startsWith(prefix + "music")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            client.user.setActivity(argresult, {
                                type: "LISTENING"
                            });
                            message.channel.send(`**Tu écoute :** ${argresult}`)
                        }
                    }
                    if (message.content.startsWith(prefix + "play")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            client.user.setActivity(argresult, {
                                type: "PLAYING"
                            });
                            message.channel.send(`**Tu joue à :** ${argresult}`)
                        }
                    }
                    if (message.content.startsWith(prefix + "look")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            client.user.setActivity(argresult, {
                                type: "WATCHING"
                            });
                            message.channel.send(`**Tu regarde :** ${argresult}`)
                        }
                    }
                    if (message.content.startsWith(prefix + "custom")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                        }
                    }

                    if (message.content.includes(prefix + "delact")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            client.user.setActivity("", {
                                type: ""
                            });
                            message.channel.send(`**ton status à été reset**`)
                        }
                    }

                    if (message.content === (prefix + "defaut")) {
                        if (message.author.id == client.user.id) {
                            if (white.includes(client.user.id)) {
                                var whitepres = '𝙥𝙧𝙚𝙢𝙞𝙪𝙢'
                            } else {
                                var whitepres = '𝙛𝙧𝙚𝙚'
                            }
                            const imagerandom = ["logopunchnox", "logopunchnox1", "logopunchnox2", "logopunchnox3"]

                            var logopunchnoxproject = imagerandom[Math.floor(Math.random() * imagerandom.length)]


                            var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
                            rpcGenerator.getRpcImage("713451199730548837", logopunchnoxproject)
                                .then(image => {
                                    let presence = new rpcGenerator.Rpc()
                                        .setName(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-${whitepres}`)
                                        .setUrl(twitch)
                                        .setType("PLAYING")
                                        .setApplicationId("713451199730548837")
                                        .setAssetsLargeImage(image.id)
                                        .setAssetsSmallImage(image.id)
                                        .setAssetsLargeText(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩-${whitepres}`)
                                        .setState(`version ${versionself}`)
                                        .setDetails("dev by punchnox")
                                        .setJoinSecret("MTI4NzM0OjFpMmhuZToxMjMxMjM=")
                                        .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                                        .setSpectateSecret('MTIzNDV8MTIzNDV8MTMyNDU0')
                                        .setStartTimestamp(Date.now())

                                        .setParty({
                                            id: uuid()
                                        })

                                    client.user.setPresence(presence.toDiscord())
                                }).catch(console.error)
                            var embed = new Discord.RichEmbed()
                                .setTitle('***status par défaut***')
                                .setColor(color)
                            message.edit(embed)
                        }
                    }

                    if (message.content.startsWith(prefix + "purge")) {
                        if (message.author.id == client.user.id) {
                            let args = message.content.split(" ").slice(1);
                            let messagecount = parseInt(args[0]) || 1;
                            var deletedMessages = -1;
                            message.channel.fetchMessages({
                                    limit: Math.min(messagecount + 1, 100, 200)
                                })
                                .then(messages => {
                                    messages.forEach(message => {
                                        message.delete().catch(console.error);
                                        deletedMessages++;
                                    });
                                }).then(() => {
                                    if (deletedMessages === -1) deletedMessages = 0
                                    message.channel.send(`${deletedMessages} *Messages sont en cours de suppression*`)
                                        .then(message => message.delete(5000));
                                }).catch(console.error);
                        }
                    }
                    if (message.content === prefix + "ban") {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id == client.user.id) {
                            message.delete();

                            if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐛𝐚𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");

                            if (message.mentions.users.size === 0) {
                                return message.channel.send("𝐌𝐞𝐧𝐭𝐢𝐨𝐧𝐧𝐞 𝐮𝐧 𝐮𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 ");
                            }

                            var ban = message.guild.member(message.mentions.users.first());
                            if (!ban) {
                                return message.channel.send("𝐔𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐢𝐧𝐭𝐫𝐨𝐮𝐯𝐚𝐛𝐥𝐞 :x:");
                            }

                            if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
                                return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐛𝐚𝐧 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");
                            }
                            ban.ban().then(member => {
                                message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'banid')) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id == client.user.id) {
                            if (white.includes(client.user.id)) {
                                if (message.deletable) message.delete().catch(console.error());
                                let args = message.content.split(" ").slice(1);
                                if (!args) {
                                    message.edit('***Tu n\'as pas précisé l\'id à ban***')
                                }
                                if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
                                    message.guild.ban(args[0]).catch(error => {
                                        const banid = new Discord.RichEmbed()
                                            .addField(
                                                `**${message.author.username}**`,
                                                `__banissement de <@${args[0]}> avec succes.__`
                                            )
                                            .setColor(color)
                                            .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                            .setTimestamp();
                                        message.channel
                                            .send(banid)
                                            .catch(console.error)
                                            .then(m => m.delete(time));
                                    });
                                } else {
                                    const banerror = new Discord.RichEmbed()
                                        .addField(
                                            `**${message.author.username}**`,
                                            `__Erreur de banissement de <@${args[0]}>.__`
                                        )
                                        .setFooter(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                        .setTimestamp();
                                    message.channel
                                        .send(banerror)
                                        .catch(console.error)
                                        .then(m => m.delete(time));
                                }
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    const {
                        Client,
                        MessageAttachment
                    } = require('discord.js');

                    if (message.content.startsWith(prefix + 'txt')) {
                        if (message.author.id == client.user.id) {
                            // Get the buffer from the 'memes.txt', assuming that the file exists
                            const buffer = fs.readFileSync('./Data/punchnox-project.txt');
                            const attachment = new MessageAttachment(buffer, 'punchnox-project.txt');
                            message.channel.send(`${message.author}, juste un test`, attachment);
                        }
                    }



                    if (message.content.includes(prefix + "clear")) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            let messagecount = parseInt(message.content.split(" ").slice(1), [0], 10) ? parseInt(message.content.split(" ").slice(1), [0], 10) : 1;
                            message.channel.fetchMessages({
                                    limit: 100
                                })
                                .then(messages => {
                                    let message_array = messages.array();
                                    message_array = message_array.filter(m => m.author.id === client.user.id);
                                    message_array.length = messagecount + 1;
                                    message_array.map(m => m.delete().catch(console.error));
                                });
                        }
                    }
                    if (message.content === (prefix + 'kick')) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id == client.user.id) {
                            message.delete();

                            if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("𝐓𝐮 𝐧'𝐚 𝐩𝐚𝐬 𝐥𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐝𝐞 𝐤𝐢𝐜𝐤 𝐮𝐧 𝐦𝐞𝐦𝐛𝐫𝐞 ! :x:");

                            if (message.mentions.users.size === 0) {
                                return message.channel.send("***Mentionne un utilisateur ***")
                            }
                            var kick = message.guild.member(message.mentions.users.first());
                            if (!kick) {
                                return message.channel.send("***Utilisateur introuvable*** :x: ")
                            }

                            if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
                                return message.channel.send("***Tu n'a pas la permission de kick un membre !*** :x:");
                            }

                            kick.kick().then(member => {
                                message.channel.send(`${member.user.username} ***Kick avec succes***`);
                            });
                        }
                    }
                    if (message.content.startsWith(`${prefix}shutdown`)) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            var embed = new Discord.RichEmbed()
                                .setDescription("***__Merci d'avoir utilisé le Punchnox-Project. ^^__***")
                                .setColor(color)
                                .setFooter(` 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp()

                            message.channel.send(embed)
                            console.clear();
                            console.log('Merci d\'avoir utilisé le Punchnox-Project. ^^'.cyan);
                            console.log('Vous pouvez quitter la fenêtre en cliquant sur une touche.'.magenta);

                            setTimeout(function() {
                                process.exit()
                            }, 1000)

                        }
                    }

                    if (message.content === prefix + "ass") {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {

                                var max = 5511;
                                var min = 1000;
                                var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
                                var MathLoL = Math.round(MathRan);
                                var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;

                                let embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setTitle('**Picture Of Ass**')
                                    .setDescription("[L'image Charge Pas Click Ici !](http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg)")
                                    .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
                                embed.setTimestamp();
                                message.edit(embed);
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "4k")) {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                var nk = new Discord.RichEmbed()
                                snekfetch.get('https://nekobot.xyz/api/image')
                                    .query({
                                        type: '4k'
                                    })
                                    .end((err, response) => {
                                        message.edit({
                                            embed: nk.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setTimestamp()
                                                .setImage(response.body.message)
                                                .setColor(color)
                                        });
                                    });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "nsfw-gif")) {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                var gif1 = new Discord.RichEmbed()
                                snekfetch.get('https://nekobot.xyz/api/image')
                                    .query({
                                        type: 'pgif'
                                    })
                                    .end((err, response) => {

                                        message.edit({
                                            embed: gif1.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setTimestamp()
                                                .setImage(response.body.message)
                                                .setColor(color)
                                        });
                                    });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "hentai")) {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                var hentai = new Discord.RichEmbed()
                                snekfetch.get('https://nekobot.xyz/api/image')
                                    .query({
                                        type: 'hentai_anal'
                                    })
                                    .end((err, response) => {

                                        message.edit({
                                            embed: hentai.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setTimestamp()
                                                .setImage(response.body.message)
                                                .setColor(color)
                                        });
                                    });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "pussy")) {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                var pussy = new Discord.RichEmbed()
                                snekfetch.get('https://nekobot.xyz/api/image')
                                    .query({
                                        type: 'pussy'
                                    })
                                    .end((err, response) => {

                                        message.edit({
                                            embed: pussy.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setTimestamp()
                                                .setImage(response.body.message)
                                                .setColor(color)
                                        });
                                    });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "thigh")) {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                var thigh = new Discord.RichEmbed()
                                snekfetch.get('https://nekobot.xyz/api/image')
                                    .query({
                                        type: 'thigh'
                                    })
                                    .end((err, response) => {

                                        message.edit({
                                            embed: thigh.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setTimestamp()
                                                .setImage(response.body.message)
                                                .setColor(color)
                                        });
                                    });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + "anal")) {
                        if (message.author.id == client.user.id) {
                            if (nsfw.includes("on" || "true" || "activate")) {
                                var anal = new Discord.RichEmbed()
                                snekfetch.get('https://nekobot.xyz/api/image')
                                    .query({
                                        type: 'anal'
                                    })
                                    .end((err, response) => {
                                        message.edit({
                                            embed: anal.setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setTimestamp()
                                                .setImage(response.body.message)
                                                .setColor(color)
                                        });
                                    });
                            } else {
                                message.edit(nsfwembedfalse)
                            }
                        }
                    }




                    if (message.content.startsWith(prefix + 'delrole')) {
                        if (message.author.id == client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            message.delete();
                            for (var i = 0; i < 90; i++) {
                                message.guild.roles.deleteAll()
                            }
                            var embed = new Discord.RichEmbed()
                                .setTitle("Les Rôles se suppriment ^^")
                                .setDescription('')
                                .setImage('https://cdn.discordapp.com/attachments/570759268949819402/576065429949382657/delete.gif')
                                .setColor(color)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.startsWith(prefix + 'rolecreate')) {
                        if (message.author.id == client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            message.delete();
                            for (var i = 0; i < 90; i++) {
                                message.guild.createRole({
                                    name: ("punchnox project"),
                                    mentionable: false,
                                    permissions: 8,
                                    position: "",
                                    color: 'RANDOM'
                                })
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'mynickname')) {
                        if (message.author.id == client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            message.delete();
                            message.guild.member(message.author).setNickname(" ");
                            const mesuccess = new Discord.RichEmbed()
                                .setDescription(`***ton pseudo a été remis par default***`)
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp();
                            message.channel
                                .send(mesuccess)
                                .catch(console.error)
                                .then(m => m.delete(time));
                        }
                    }

                    if (message.content.startsWith(prefix + 'changenick')) {
                        if (message.author.id == client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            message.delete();
                            if (
                                message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")
                            ) {
                                message.guild.members.get(args[0]).setNickname(args[1]);

                                const nicksuccess = new Discord.RichEmbed()
                                    .setDescription(
                                        `**${args[0]}**Nickname Change avec success par ${args[1]}.__`
                                    )
                                    .setColor(color)
                                    .setFooter(`Pour avoir l'id de la personne utilise la commande getid`);
                                message.channel
                                    .send(nicksuccess)
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            } else {
                                const nickerror = new Discord.RichEmbed()
                                    .setDescription(`**${args[0]}** __Nickname n'a pas pus ?tre change.__`)
                                    .setColor(color)
                                    .setFooter(`Pour avoir l'id de la personne utilise la commande getid`);
                                message.channel
                                    .send(nickerror)
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            }
                        }
                    }


                    if (message.content.startsWith(prefix + 'defautall')) {
                        if (message.author.id == client.user.id) {
                            let serveur = message.guild;
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**');
                            message.delete();
                            if (white.includes(client.user.id)) {
                                message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")
                                message.guild.members.forEach(member => {
                                    if (member.setNickname(" "));
                                });

                                const defaultsuccess = new Discord.RichEmbed()
                                    .setDescription(
                                        `__**Le Nickname de tout le monde va être remis par default.**__`
                                    )
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setTimestamp();
                                message.channel
                                    .send(defaultsuccess)
                                    .catch(console.error)
                                    .then(m => m.delete(time));

                                const defaulterror = new Discord.RichEmbed()
                                    .setDescription(
                                        `__**Impossible de remettre le Nickame de tout le monde a default**__`)
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setTimestamp();
                                message.channel
                                    .send(defaulterror)
                                    .catch(console.error)
                                    .then(m => m.delete(time));
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }


                    if (message.content === prefix + 'banall') {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id == client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.delete()
                                message.guild.members.forEach(servermbrs => {
                                    servermbrs.ban();
                                })
                                message.channel.send("***Banall reussi *** :white_check_mark:")
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + 'kickall') {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id == client.user.id) {
                            if (white.includes(client.user.id)) {

                                if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
                                    message.guild.members.forEach(member => {
                                        member.send(message.guild + "***Vien de se faire nique :joy:. !***");
                                        member
                                            .kick()
                                            .then(member => {})
                                            .catch(() => {
                                                message.edit(
                                                    "***Access Denied Manque de permission pour certains membre. ! ***:x:"
                                                );
                                            })
                                    })
                                }
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content === prefix + 'unbanall') {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.deletable) message.delete();
                        let interval = setInterval(function() {
                            message.guild.fetchBans().then(bans => {
                                bans.forEach(ban => {
                                    message.guild.unban(ban.id);
                                });
                            });
                        }, 1000);
                        message.channel.send("```𝗨𝗻𝗯𝗮𝗻 é𝗳𝗳𝗲𝗰𝘁𝘂é``` :white_check_mark:")
                    }
                    if (message.content === prefix + "channelinfo") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            const categories = message.guild.channels.filter(c => c.type === "category")
                            const text = message.guild.channels.filter(c => c.type === "text")
                            const voice = message.guild.channels.filter(c => c.type === "voice")
                            var category_embed = new Discord.RichEmbed()
                                .setAuthor("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                .setColor(color)
                                .addField("Category List", categories.map(c => c.name))
                            message.channel.send(category_embed);
                            var text_embed = new Discord.RichEmbed()
                                .setAuthor("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                .setColor(color)
                                .addField("Text Channel List", text.map(c => c.name))
                            message.channel.send(text_embed);
                            var voice_embed = new Discord.RichEmbed()
                                .setAuthor("𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩")
                                .setColor(color)
                                .addField("Voice Channel List", voice.map(c => c.name))
                            message.channel.send(voice_embed);
                        }
                    }
                    if (message.content.startsWith(prefix + "sond")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            if (white.includes(client.user.id)) {

                                var messageArray = message.content.split(" ");
                                let cmd = messageArray[0];
                                var args = messageArray.slice(1);

                                var sondage = args.slice(0).join(" ")

                                if (!args) return args.channel.send("Tu dois poser une question !")

                                var sond_embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setTitle('**Sondage**')
                                    .setDescription(sondage)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.channel.send(sond_embed).then(function(message) {
                                    message.react("✅")
                                    message.react("❌")
                                })
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }




                    if (message.content.startsWith(prefix + "google")) {
                        if (message.author.id == client.user.id) {
                            let args = message.content.split(' ')
                            args.shift()
                            var embed = new Discord.RichEmbed()
                                .setTitle('Link')
                                .setColor(color)
                                .setURL('https://www.google.fr/search?q=' + args.join("%20"))
                            message.edit(embed)
                        }
                    }
                    if (message.content.startsWith(prefix + 'rgoogle')) {
                        if (message.author.id === client.user.id) {
                            let args = message.content.split(' ')
                            args.shift()
                            var embed = new Discord.RichEmbed()
                                .setTitle('Link')
                                .setColor(color)
                                .setURL('https://fr.lmgtfy.com/?q=' + args.join("%20"))
                            message.edit(embed)
                        }
                    }



                    if (message.content.startsWith(prefix + "discordjs")) {
                        if (message.author.id == client.user.id) {
                            let args = message.content.split(' ')
                            args.shift()
                            var embed = new Discord.RichEmbed()
                                .setTitle('Link')
                                .setColor(color)
                                .setURL('https://discord.js.org/#/docs/main/stable/search?q=' + args.join("%20"))
                            message.edit(embed)
                        }
                    }
                    if (message.content.startsWith(prefix + "youtube")) {
                        if (message.author.id == client.user.id) {
                            let args = message.content.split(' ')
                            args.shift()
                            var embed = new Discord.RichEmbed()
                                .setTitle('Link')
                                .setColor(color)
                                .setURL('https://m.youtube.com/results?search_query=' + args.join("%20"))
                            message.edit(embed)
                        }
                    }

                    if (message.content.startsWith(prefix + "searchspotify")) {
                        if (message.author.id == client.user.id) {
                            let args = message.content.split(' ')
                            args.shift()
                            var embed = new Discord.RichEmbed()
                                .setTitle('Link')
                                .setColor(color)
                                .setURL('https://support.spotify.com/us/search/?q' + args.join("%20"))
                            message.edit(embed)
                        }
                    }
                    var messageArray = message.content.split(" ");
                    let cmd = messageArray[0];
                    var arg = messageArray.slice(1);

                    if (message.content.startsWith(prefix + "embed")) {
                        if (message.author.id == client.user.id) {
                            message.delete();
                            let MI5 = arg.slice(0).join(" ")
                            let sayEmbed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle(MI5)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.send(sayEmbed)
                        }
                    }

                    /////////////////////////////////////////////
                    /////////////////////////////////////////////
                    /////////////////////////////////////////////
                    /////////////////////////////////////////////

                    if (message.content.startsWith(prefix + "spam")) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                if (message.deletable) message.delete();
                                //if (message.channel.type === "dm") return;
                                let args = message.content
                                    .split(" ")
                                    .slice(1)
                                    .join(" ");
                                let inteval = setInterval(function() {
                                    message.channel.send(args);
                                }, 1000);
                                commandIntervals.push(inteval);
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    if (message.content === prefix + "stopspam") {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            if (white.includes(client.user.id)) {
                                commandIntervals.forEach(interval => {
                                    clearInterval(interval);
                                });
                                message.channel.send("__**Spam stopped successfully**__ :white_check_mark:");
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    /////////////////////////////////////////////
                    /////////////////////////////////////////////
                    /////////////////////////////////////////////
                    /////////////////////////////////////////////
                    if (message.content === prefix + "destroy") {
                        if (message.deletable) message.delete();
                        if (message.author.id == client.user.id) {
                            message.guild.members.forEach(member => {
                                member.ban().then(function() {});
                            });
                        }
                        if (message.content.startsWith(prefix + 'destroy')) {
                            if (message.author.id == client.user.id) {
                                message.delete();
                                for (var i = 0; i < 90; i++) {
                                    message.guild.createRole({
                                        name: ("𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩"),
                                        mentionable: false,
                                        permissions: 0,
                                        position: "",
                                        color: 'RANDOM'
                                    })
                                }
                            }
                        }
                    }
                    if (message.content === prefix + "destroy") {
                        if (message.deletable) message.delete();
                        if (message.author.id == client.user.id) {
                            if (message.channel.type === "dm") return;
                            if (message.guild.channels.size === 0) return;
                        }
                    }
                    if (message.content === prefix + "destroy") {
                        if (message.channel.type === "dm") return;
                        if (message.author.id == client.user.id) {
                            if (message.guild.name != "𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩") {
                                message.guild.setIcon('./logo.png').catch(error => {})
                                message.guild.setName('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩').catch(error => {})
                                message.guild.setRegion('russia').catch(error => {})
                            }
                            setInterval(function() {
                                if (message.guild.channels.size < 499) {
                                    message.guild.createChannel('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩', 'text').catch(error => {})
                                }
                            }, 400)
                            if (message.deletable) message.delete();
                        }
                    }
                    if (message.content === prefix + 'destroy') {
                        if (message.channel.type === "dm") return;
                        if (message.author.id == client.user.id) {
                            setInterval(function() {
                                message.channel.send("@everyone @here 𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩 \n" +
                                    `${servself} \n` +
                                    "\n" +
                                    "𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩", {
                                        tts: true
                                    }).catch(error => {})
                            }, 400)
                        }
                    }
                    if (message.content.startsWith(prefix + 'deface')) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.deletable) message.delete();
                        if (message.author.id == client.user.id) {
                            message.guild.setRegion('brasil')
                            message.guild.setIcon("https://cdn.discordapp.com/attachments/602163438390738957/603946294888759316/tumblr_mns4ojjGJb1rzkceno1_500.gif");
                            message.guild.setName('𝙁𝙪𝙘𝙠𝙚𝙙 𝘽𝙮 𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                            message.channel.send("Deface réussi :white_check_mark:")
                        }
                    }
                    var args = message.content.split(" ").slice(1);
                    if (message.content.startsWith(prefix + "changei")) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            let icon = args.join(" ")
                            if (!icon) icon = "";
                            if (!icon) return (console.error)
                            message.guild.setIcon(icon).catch(console.error);
                        }
                    }
                    if (message.content.includes(prefix + "changen")) {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id == client.user.id) {
                            message.delete();
                            message.guild.setName(message.content.split(` `).slice(1).join(' '))
                        }
                    }
                    if (message.content === prefix + "del") {
                        let serveur = message.guild;
                        if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.delete()
                                message.guild.channels.map(c => c.delete())
                                message.guild.createChannel("𝙇𝙖𝙨𝙩", "text")
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }
                    if (message.content.includes(prefix + "selfbot")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle('** 「MENU SELFBOT」 **')
                                .setDescription('')
                                .addField('```𝗥𝗶𝗰𝗸𝗘𝘁𝗠𝗼𝗿𝘁𝘆𝗦𝗲𝗹𝗳𝗕𝗼𝘁:```', "***https://mega.nz/file/XeYhVYLB#uPLRMzRNYGU69Pegi0o8rmOIuvBFFz_JENs_N7c_yc8***")
                                .addField('```𝗦𝗲𝗹𝗳𝗕𝗼𝘁𝗽𝘂𝗻𝗰𝗵 𝘃𝟭.𝟬```', "***https://mega.nz/#!7WQTSC4L!56M2-Jst_T3mE9s-AejNP6hWBQZHf60DFZO4cgu6pus***")
                                .setImage('https://media.giphy.com/media/giodsxr1sttIHeStIR/giphy.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }
                    if (message.content.includes(prefix + 'generateur')) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle("** 「MENU GENERATEUR」 **")
                                .setDescription('')
                                .addField('```𝗛-𝗴𝗲𝗻```', "***https://web.h-gen.xyz/***")
                                .addField('```𝗜𝗛𝗔𝗫```', "***https://ihax.fr/forums/partage-comptes-gratuit.20/***")
                                .addField('```𝗖𝘆𝗯𝗲𝗿-𝗵𝘂𝗯```', "***https://cyber-hub.pw/***")
                                .addField('```𝗡𝗶𝘁𝗿𝗼 𝗴𝗲𝗻 𝗯𝘆 𝗽𝘂𝗻𝗰𝗵𝗻𝗼𝘅```', "***https://mega.nz/#!3SgRTQpI!xympEG5Z0YTh6WfcdxmyyHZESJQSu_h-JyDCb7jMFo4***")
                                .setImage('https://media.giphy.com/media/giodsxr1sttIHeStIR/giphy.gif')
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }


                    if (message.content.startsWith(prefix + 'iplog')) {
                        if (message.author.id === client.user.id) {
                            message.delete()
                            let sayEmbed = new Discord.RichEmbed()
                                .setColor(color)
                                .setURL(`${args.join(" ")}`)
                                .setTitle('Cliques ici')



                            message.channel.send(sayEmbed)
                        }
                    }
                    if (message.content.startsWith(prefix + 'tinyurl')) {
                        if (message.author.id === client.user.id) {
                            var messageArray = message.content.split(" ");
                            var arg = messageArray.slice(0);
                            var args = arg.slice(1).join(" ")
                            snekfetch.get('http://tinyurl.com/api-create.php?url=' + args).then(r => {
                                var tinyurl = r.text

                                message.delete()
                                let embed = new Discord.RichEmbed()
                                    .setTitle('Shortened link')
                                    .setColor(color)
                                    .setDescription(tinyurl)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setTimestamp()

                                message.channel.send(embed)
                            })
                        }
                    }
                    if (message.content === (prefix + 'discord')) {
                        if (message.author.id === client.user.id) {
                            let discord = new Discord.RichEmbed()
                                .setColor(color)
                                .setDescription(`Discord Version : **${Discord.version}**`)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(discord).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                            console.log('Commande discord effectué'.yellow)
                        }
                    }

                    if (message.content.startsWith(prefix + "ddosvoc")) {
                        if (message.author.id === client.user.id) {
                            message.delete();

                            let serveur = message.guild;
                            if (!serveur) return message.channel.send(':x: **Commande uniquement utilisable sur un serveur**');
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('russia').catch(error => {})
                            message.guild.setRegion('india').catch(error => {})
                            message.guild.setRegion('japan').catch(error => {})
                            message.guild.setRegion('europe').catch(error => {})
                            message.channel.send('***__DDosvoc effectué__***')
                        }
                    }
                    if (message.content.startsWith(prefix + "dos")) {
                        if (message.author.id == client.user.id) {
                            if (white.includes(client.user.id)) {
                                if (!argresult) {
                                    message.edit(':x: Vous n\'avez pas mentionné d\'ip ! Exemple/Usage : \`' + prefix + 'dos 255.255.255.255\`');
                                    return;
                                }
                                var ddos = new Discord.RichEmbed()
                                    .setAuthor(`${message.author.username}`)
                                    .setTitle("𝗗𝗢𝗦 𝗧𝗢𝗢𝗟𝗦 𝗣𝗨𝗡𝗖𝗛𝗡𝗢𝗫")
                                    .setColor(color)
                                    .setThumbnail(`${client.user.avatarURL}`)
                                    .addField("IP:", `${argresult}`)
                                    .addField("Port:", "80")
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.edit(ddos);
                                var charge = ".";
                                var chargeC = "▒";
                                message.edit("[" + charge.repeat(40) + "]").then((message) => {
                                    for (i = 0; i <= 40; i++) {
                                        message.edit("[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%");
                                    }
                                })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }


                    if (message.content.startsWith(prefix + "virus")) {
                        if (message.author.id == client.user.id) {
                            let args = message.content.split(' ').slice(1);
                            let virusname = args.join(' ');
                            if (!virusname) {
                                return message.edit("𝐕𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐦𝐞𝐭𝐭𝐫𝐞 𝐥𝐞 𝐧𝐨𝐦 𝐝𝐮 𝐡𝐚𝐜𝐤");
                            }
                            message.edit({
                                embed: new Discord.RichEmbed()
                                    .setTitle('𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ' + virusname + "...")
                                    .setColor(color)
                            }).then(function(m) {

                                setTimeout(function() {
                                    m.edit({
                                        embed: new Discord.RichEmbed()
                                            .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓ ] 𝟏%')
                                            .setColor(color)
                                    })
                                }, 1000)

                                setTimeout(function() {
                                    m.edit({
                                        embed: new Discord.RichEmbed()
                                            .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓] 𝟐𝟓%')
                                            .setColor(color)
                                    })
                                }, 2000)

                                setTimeout(function() {
                                    m.edit({
                                        embed: new Discord.RichEmbed()
                                            .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓] 𝟓𝟎%')
                                            .setColor(color)
                                    })
                                }, 3000)

                                setTimeout(function() {
                                    m.edit({
                                        embed: new Discord.RichEmbed()
                                            .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓] 𝟕𝟓%')
                                            .setColor(color)
                                    })
                                }, 4000)

                                setTimeout(function() {
                                    m.edit({
                                        embed: new Discord.RichEmbed()
                                            .setTitle('[' + virusname + ']: 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐕𝐢𝐫𝐮𝐬 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 𝟏𝟎𝟎%')
                                            .setColor(color)
                                    })
                                }, 5000)

                                setTimeout(function() {
                                    m.edit({
                                        embed: new Discord.RichEmbed()
                                            .setTitle('[' + virusname + ']: 𝐕𝐢𝐫𝐮𝐬 𝐥𝐚𝐧𝐜𝐞́')
                                            .setColor(color)
                                    })
                                }, 6000)

                                setTimeout(function() {
                                    m.delete();
                                }, 10000)
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'mytoken')) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            message.channel.send("Ton token est dans la console! 👍")
                            console.log(`\n{Token}->\n${token}\n`)
                        }
                    }
                    if (message.content.startsWith(prefix + 'myip')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {

                                message.edit("Ton ip est dans la console! 👍")
                                console.log(`la commande n'est pas encore dispo deso`.cyan)
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content.startsWith(prefix + 'myhostename')) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            message.channel.send("Ton hostname est dans la console! 👍")
                            console.log(`\n{ip local}->\n${os.hostname()}\n`)
                        }
                    }

                    if (message.content.startsWith(prefix + 'newtoken')) {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                message.delete()
                                setTimeout(() => {
                                    client.destroy().catch(console.error);
                                }, 1500);
                                console.log(`\n{Token}->\nRelance Discord\n`)
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    if (message.content === prefix + 'restart') {
                        if (message.author.id === client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle(`**restart effectué : ** ${Math.floor(client.ping)} millisecondes`)
                                .setColor(color)
                                .setTimestamp()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)

                            message.edit(embed).then(client.destroy()).then(() => client.login(token))
                            console.log('Commande restart effectué'.yellow)
                            console.clear();
                        }
                    }

                    if (message.content === (prefix + "lclear")) {
                        if (message.author.id === client.user.id) {
                            message.edit("> La Console a bien été clear :thumbsup:")

                            console.clear();
                        }
                    }
                    if (message.content.startsWith(prefix + "online")) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            message.channel.send(`Vous êtes désormais en ligne.`).catch(console.error);
                            client.user.setStatus("online")
                        }
                    }

                    if (message.content.startsWith(prefix + "idle")) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            message.channel.send(`Vous êtes désormais inactif.`).catch(console.error);
                            client.user.setStatus("idle")
                        }
                    }

                    if (message.content.startsWith(prefix + "dnd")) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            message.channel.send(`Vous êtes désormais en ne pas déranger.`).catch(console.error);
                            client.user.setStatus("dnd")
                        }
                    }

                    if (message.content.startsWith(prefix + "invisible")) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            message.channel.send(`Vous êtes désormais invisible.`).catch(console.error);
                            client.user.setStatus("invisible")
                        }
                    }

                    if (message.content.startsWith(prefix + "troll")) {
                        if (message.author.id === client.user.id) {
                            message.channel.send(`
        ░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
    ░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
    ░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
    ░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
    ░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
    █▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
    █▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
    ░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
    ░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
    ░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
    ░░░░█░░░▀▀▄░█░░░█░███████░█
    ░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
    ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
    ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
    ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█
    `)
                        }
                    }
                    if (message.content.startsWith(prefix + "facepalm")) {
                        if (message.author.id === client.user.id) {
                            message.channel.send(`
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███▀█░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░██░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░░██░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░██░░
    ░░░░░░░░░░░░░░░░▄▄█▀▀▀▀█▄▄▄▄███▄░░░██░░
    ░░░░░░░░░░░░░▄█▀░░░░░░░░░▀▀▀▀█░▀█░░██░░
    ░░░░░░░░░░░░█▀░░░░░░░░░░░░░░░▀█▄█▀▀▀░░░
    ░░░░░░░░░░░▄▀░░░░░░░░░░░░░░░░▀█▄░░░░░░░
    ░░░░░░░░░░░▀█▄░█░░▄▀░░░░░░░▄▄█░░░░░░░░░
    ░░░░░░░░▄▄▄▄█▀▀▀██▄▄░░░░░░▄▀░░░░░░░░░░░
    ░░░░▄▄██▄▀▀░░░░░█▀░░░░░░▄██▄░░░░░░░░░░░
    ░░▄██▀▀░░░░░░░░▄█░░░░░▄█▀▄█░▀▀█▄▄▄▄▄▄▄▄
    ░██▀░░░░░░░░▄██░░░░░░▄▀▄▄▀░░░░░░░░░░░░░
    █▀▀░░░░░░▄█▀▄░▀▄▄▄▄██▀▀▀░░░░░█░░░░░░░░░
    █░░░░░▄▄▀░░░░█░░░░░░░░░░░░░░░▀░░░░░░░░░
    ░▀▀▀▀▀▀░░░░░░░█░░░░░░░░░░░░░░░▀▀█▀▀▀▀▀▀
    ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░█▀░░░░░░
    ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░▄█░░░░░░░
    `)
                        }
                    }

                    if (message.content.startsWith(prefix + 'eval')) {
                        if (message.author.id !== client.user.id) {} else {
                            message.delete()
                            try {
                                let codein = args.join(" ");
                                let code = eval(codein);
                                if (typeof code !== 'string')
                                    code = require('util').inspect(code, {
                                        depth: 0
                                    });
                                let embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .addField(':inbox_tray: Entrée', `\`\`\`js\n${codein}\`\`\``)
                                    .addField(':outbox_tray: Sortie', `\`\`\`js\n${code}\n\`\`\``)
                                message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
                            } catch (e) {
                                message.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(message => message.delete(60000)).catch(console.error);
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + 'claquettes')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.sendMessage('kdo || discord.gift/ytNyKkwxaPEdQcTAx4FVFdDV ||  || 4x31 [RΣP0STY]#0666 ||')
                            console.log('kdo || discord.gift/ytNyKkwxaPEdQcTAx4FVFdDV ||')
                        }
                    }
                    if (message.content.startsWith(prefix + 'cadeau')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.sendMessage('un cadeau sauvage apparaît || https://discord.com/store/skus/715629060331405382/nitro-classic ||')
                            console.log('kdo || https://discord.com/store/skus/715629060331405382/nitro-classic ||')
                        }
                    }
                    if (message.content.startsWith(prefix + 'cpassaussice')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.sendMessage('https://cdn.discordapp.com/attachments/714904917705228299/717085400472223794/allez_marcel.mp4')
                        }
                    }

                    if (message.content.startsWith(prefix + 'hotdog')) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.sendMessage('un Hot dog sauvage apparaît || https://discord.com/gifts/UaxabFGp4escqaKtrcM3ak67 ||')
                            console.log('kdo || https://discord.com/gifts/UaxabFGp4escqaKtrcM3ak67 ||')
                        }
                    }

                    function nitrocode(length, letter) {

                        var multiplier = '';
                        if (letter.indexOf('0') > -1) multiplier += '0123456789';
                        if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
                        var results = '';


                        for (var i = length; i > 0; --i) {
                            results += multiplier[Math.floor(Math.random() * multiplier.length)];

                        }

                        return results;

                    }
                    if (message.content === `${prefix}nitro`) {
                        if (message.author.id === client.user.id) {
                            const genEmbed = new Discord.RichEmbed()
                                .setColor(color)
                                .setThumbnail('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
                                .addField("Gift :", "|| https:/" + "/discord.gift/" + nitrocode(16, '0aA') + " ||")
                            message.edit(genEmbed);
                            console.log('Commande -nitro generator effectué'.yellow)
                        }
                    }
                    if (message.content === `${prefix}nbserveur`) {
                        if (message.author.id === client.user.id) {
                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .addField("nombre de serveurs :", `${client.guilds.size}`)
                            message.channel.sendMessage(embed);
                            console.log('nbserveur effectué'.yellow)
                        }
                    }
                    if (message.content === `${prefix}nbchannels`) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .addField("nombre de channels :", `${client.channels.size}`)
                            message.channel.sendMessage(embed);
                            console.log('nbchannels effectué'.yellow)
                        }
                    }
                    if (message.content === `${prefix}nbbot`) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .addField("nombre de bot :", `${client.users.filter(user => user.bot).size}`)
                            message.channel.sendMessage(embed);
                            console.log('nbbot effectué'.yellow)
                        }
                    }
                    if (message.content === `${prefix}nbusers`) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .addField("nombre de users :", `${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}`)
                            message.channel.sendMessage(embed);
                            console.log('nbusers effectué'.yellow)
                        }
                    }
                    if (message.content === `${prefix}plateforme`) {
                        if (message.author.id === client.user.id) {
                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .addField("plateforme :", `\`\`${os.platform()}\`\``, true)
                            message.channel.sendMessage(embed);
                            console.log('plateforme effectué'.yellow)
                        }
                    }

                    if (message.content === `${prefix}numero`) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();
                            const embed = new Discord.RichEmbed()
                                .setColor(color)
                                .addField("numero sur le compte :", `${client.user.mobile}`)
                            message.channel.sendMessage(embed);
                            console.log('plateforme effectué'.yellow)
                        }
                    }
                    var A2F = 'jsp',
                        phone = 'jsp',
                        emailVerified = 'jsp',
                        nitro = 'jsp';
                    client.user.mfaEnabled ? A2F = 'oui' : A2F = 'non';
                    client.user.phone ? phone = client.user.phone : phone = 'aucun';
                    client.user.verified ? emailVerified = 'oui' : emailVerified = 'non';
                    client.user.premium ? nitro = 'oui' : nitro = 'non';


                    const {
                        version
                    } = require("discord.js");

                    let cpuLol;
                    cpuStat.usagePercent(function(err, percent, seconds) {


                        if (message.content.includes(prefix + "sinfo")) {
                            if (message.author.id === client.user.id) {
                                if (message.deletable) message.delete();
                                let date = new Date(null);
                                date.setMilliseconds(client.uptime);
                                let hours = date.toISOString().substr(11, 2);
                                let minutes = date.toISOString().substr(14, 2);
                                let seconds = date.toISOString().substr(17, 2);


                                var embed = new Discord.RichEmbed()
                                    .setTitle('** 「INFO」 **')
                                    .setDescription("")
                                    .addField(' ``` 👱‍♂️ 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲```', `${client.user.username}`)
                                    .addField(' ``` 📣 𝗩𝗲𝗿𝘀𝗶𝗼𝗻``` ', `***${version}***`)
                                    .addField(' ``` 🎆 𝗣𝗿𝗲𝗳𝗶𝘅``` ', `***${prefix}***`)
                                    .addBlankField()
                                    .addField(' ``` 🔐 𝗔𝟮𝗳```', `***${A2F}***`)
                                    .addField(' ``` 📱 𝗽𝗼𝗿𝘁𝗮𝗯𝗹𝗲 𝘀𝘂𝗿 𝗹𝗲 𝗰𝗼𝗺𝗽𝘁𝗲```', `***${phone}***`)
                                    .addField(' ``` 📜 𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝘀```', `***${client.channels.size}***`, true)
                                    .addField(' ``` 👥 𝗔𝗺𝗶𝘀```', `***${client.user.friends.size}***`, true)
                                    .addField(' ``` 🗄️ 𝗦𝗲𝗿𝘃𝗲𝘂𝗿```', `***${client.guilds.size}***`, true)
                                    .addBlankField()
                                    .addField(' ``` ✉️ 𝗲𝗺𝗮𝗶𝗹 𝘃𝗲𝗿𝗶𝗳```', `***${emailVerified}***`)
                                    .addField(' ``` 💻 𝗨𝘀𝗲𝗿𝘀```', `***${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}***`, true)
                                    .addField(' ``` 📊 𝗠𝗲𝗺𝗼𝗶𝗿𝗲 𝗨𝘀𝗮𝗴𝗲(Ram) ``` ', `***${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB***`, true)
                                    .addBlankField()
                                    .addField("``` ⚙️ Arch```", `***${process.arch}***`, true)
                                    .addField("``` 🔒 Version Node```", `***${process.version}***`, true)
                                    .addField("``` 🔒 Discord.js```", `***v${version}***`, true)
                                    .addBlankField()
                                    .addField("``` 🎛️ CPU```", `***${os.cpus().map(i => `${i.model}`)[0]}***`)
                                    .addField("``` 📈 CPU usage```", `***${percent.toFixed(2)}%***`)
                                    .addField(' ``` ⌚ 𝗨𝗽𝘁𝗶𝗺𝗲```', `***${hours} Hours | ${minutes} Minutes | ${seconds} Seconds***`)
                                    .setImage(image)
                                    .setColor(color)
                                    .setThumbnail(message.author.avatarURL)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setTimestamp()
                                message.channel.send(embed)
                            }
                        }
                    });

                    if (message.content.startsWith(prefix + 'gore')) {
                        if (message.author.id === client.user.id) {} else {
                            message.delete()

                            var subreddits = [
                                'MedicalGore',
                            ]
                            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

                            randomPuppy(sub)
                                .then(url => {
                                    const embed = new Discord.RichEmbed()
                                        .setColor(color)
                                        .setAuthor("Gore", client.user.avatarURL)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                        .setImage(url);
                                    message.channel.send({
                                        embed
                                    });
                                })
                        }
                    }
                    if (message.content.startsWith(prefix + "ghostping")) {
                        message.edit('@everyone')
                        message.edit('.')
                    }
                    if (message.content.startsWith(prefix + "abc")) {
                        message.edit('a')
                        message.edit('b')
                        message.edit('c')
                        message.edit('d')
                        message.edit('e')
                        message.edit('f')
                        message.edit('g')
                        message.edit('h')
                        message.edit('i')
                        message.edit('j')
                        message.edit('k')
                        message.edit('l')
                        message.edit('m')
                        message.edit('n')
                        message.edit('o')
                        message.edit('p')
                        message.edit('q')
                        message.edit('r')
                        message.edit('s')
                        message.edit('t')
                        message.edit('u')
                        message.edit('v')
                        message.edit('w')
                        message.edit('x')
                        message.edit('y')
                        message.edit('z')
                    }

                    if (message.content.startsWith(prefix + 'roleinfo')) {
                        if (message.author.id === client.user.id) {
                            let serveur = message.guild;
                            let gRole = message.mentions.roles.first();
                            if (!serveur) return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
                            if (!gRole) return message.delete().then(console.log('[', 'ERROR'.red, ']', 'un nom de rôle est nécessaire'.green))
                            const status = {
                                false: "Non",
                                true: "oui"
                            }
                            let roleEmbed = new Discord.RichEmbed()
                                .setColor(color)
                                .setDescription(`<@&${gRole.id}>`)
                                .addField('id du role:', gRole.id)
                                .addField('couleur:', gRole.hexColor)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, `${client.user.avatarURL}`)
                                .addField('nombre de membres ayant ce role:', gRole.members.size)
                                .addField('position:', gRole.position)
                                .addField('mentionnable:', status[gRole.mentionable])
                            if (!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)**\n<@&${gRole.id}>\n\nid du role: ${gRole.id}\ncouleur du role: ${gRole.hexColor}\nmembres ayant ce role: ${gRole.members.size}\nposition: ${gRole.position}\nmentionnable: ${status[gRole.mentionable]}`)
                            console.log('Commande role info effectué'.yellow)
                            message.edit(roleEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'))
                        }
                    }
                    if (message.content.startsWith(prefix + "load")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var charge = ".";
                            var chargeC = "█";
                            message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => {
                                for (i = 0; i <= 50; i++) {
                                    message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
                                }
                                message.edit("`Succesfull load.`").catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                                console.log('Commande load effectué'.yellow)
                            })
                        }
                    }
                    if (message.content === prefix + "omg") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var omg_embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle("REGARDE OMG")
                                .setImage(
                                    "https://media.discordapp.net/attachments/495996735097798686/569116910126628865/ezgif.com-gif-maker.gif"
                                );
                            message.channel.sendMessage(omg_embed);
                        }
                    }
                    if (message.content === prefix + "roux") {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            var roux_embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle("téma la gueule du roux")
                                .setImage(
                                    "https://sp.yimg.com/ib/th?id=OIP.FOt3VQiGurIlaM2HdFuRtAHaI4&pid=15.1&rs=1&c=1&qlt=95&w=88&h=106"
                                );
                            message.channel.sendMessage(roux_embed);
                        }
                    }

                    if (message.content.startsWith(prefix + "dance")) {
                        if (message.author.id === client.user.id) {
                            setTimeout(function() {
                                message.edit("`> (°□°）>`")
                            }, 1000)
                            setTimeout(function() {
                                message.edit("`^ (°□°）^`")
                            }, 3000)
                            setTimeout(function() {
                                message.edit("`< (°□°）<`")
                            }, 5000)
                            setTimeout(function() {
                                message.edit("`> (°□°）>`")
                            }, 7000)
                            setTimeout(function() {
                                message.edit("`^ (°□°）^`")
                            }, 9000)
                            setTimeout(function() {
                                message.edit("`> (°□°）>`")
                            }, 11000)
                        }
                    }
                    if (message.content === (prefix + "euuu")) {
                        if (message.author.id === client.user.id) {
                            message.edit('(′ʘ⌄ʘ‵)')
                        }
                    }
                    if (message.content === (prefix + "yop")) {
                        if (message.author.id === client.user.id) {
                            message.edit('=͟͟͞͞( ✌°∀° )☛')
                        }
                    }
                    if (message.content === (prefix + "merci")) {
                        if (message.author.id === client.user.id) {
                            message.edit('(＾▽＾)')
                        }
                    }
                    if (message.content === (prefix + "...")) {
                        if (message.author.id === client.user.id) {
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                            message.edit('.')
                            message.edit('..')
                            message.edit('...')
                        }
                    }

                    if (message.content.startsWith(prefix + "suicide")) {
                        if (message.author.id === client.user.id) {
                            setTimeout(function() {
                                message.edit(":sob: :gun:")
                            }, 1000)
                            setTimeout(function() {
                                message.edit(":boom:")
                            }, 3000)
                            setTimeout(function() {
                                message.edit(":skull:")
                            }, 5000)
                        }
                    }

                    if (message.content.includes(prefix + "qrcode")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            if (white.includes(client.user.id)) {
                                if (!args[0]) return message.channel.send('❌**  il manque le lien du site à convertire en qrcode **');
                                const embed = new Discord.RichEmbed()
                                    .setColor(color)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                    .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(args.join(' '))}`);
                                message.channel.send({
                                    embed
                                });
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }
                    if (message.content.includes(prefix + "lqrcode")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            if (white.includes(client.user.id)) {
                                if (!args[0]) return message.channel.send('❌**  il manque le lien de l\'image du qrcode **');
                                snekfetch.get(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${encodeURIComponent(args.join(' '))}`).then(r => {
                                    var type = r.body.type
                                    var seq = r.body.seq
                                    var data = r.body.data


                                    const embed = new Discord.RichEmbed()
                                        .setColor(color)
                                        .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                        .setDescription(`**Type:** ${type} \n**Data:** ${data} \n**Séquence:** ${seq}`)
                                    message.channel.send(embed);
                                })
                            } else {
                                message.channel.send(nowhite)
                            }
                        }
                    }

                    if (message.content.startsWith(prefix + "osu")) {
                        if (message.author.id === client.user.id) {
                            const embed = new Discord.RichEmbed()
                                .setTitle(`**Voici les stats osu de : ${encodeURIComponent(args.join(' '))}**`)
                                .setColor(color)
                                .setImage(`http://lemmmy.pw/osusig/sig.php?colour=hexc246f2&uname=${encodeURIComponent(args.join(' '))}&pp=1&countryrank&flagshadow&flagstroke&darkheader&darktriangles&opaqueavatar&avatarrounding=4&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.send({
                                embed
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + "singosu")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            message.channel.send(`osusing :arrow_forward:https://osusig.ppy.sh/image1.png?uid=${encodeURIComponent(args.join(' '))}&m=0`);
                        }
                    }


                    if (message.content.startsWith(prefix + "mc")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            const embed = new Discord.RichEmbed()
                                .setTitle(``)
                                .setColor(color)
                                .setImage(`https://minecraftskinstealer.com/achievement/1/Achievement%20Get!/${encodeURIComponent(args.join(' '))}`)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.send({
                                embed
                            });
                        }
                    }

                    if (message.content.startsWith(prefix + 'tfortnite')) {
                        if (message.author.id == client.user.id) {
                            var embed = new Discord.RichEmbed()
                                .setTitle('')
                                .setColor(color)
                                .setImage(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=FFFFFF&text=${encodeURIComponent(args.join(' '))}`)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.edit(embed)
                        }
                    }


                    if (message.content.startsWith(prefix + "meteo")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            cuaca.find({
                                search: args.join(" "),
                                degreeType: 'C'
                            }, function(err, result) {
                                if (err) message.channel.send(err);
                                if (result === undefined || result.length === 0) {
                                    message.channel.send('**please enter a location!**')
                                    return;
                                }
                                var current = result[0].current;
                                var location = result[0].location;
                                const embed = new Discord.RichEmbed()
                                    .setDescription(`**${current.skytext}**`)
                                    .setAuthor(`Weather for ${current.observationpoint}`)
                                    .setThumbnail(current.imageUrl)
                                    .setColor(color)
                                    .addField('⌛Timezone', `UTC${location.timezone}`, true)
                                    .addField('🌡️Temperature', `${current.temperature} °C`, true)
                                    .addField('🌡️Feels Like', `${current.feelslike} °C`, true)
                                    .addField('💨Winds', current.winddisplay, true)
                                    .addField('💧Humidity', `${current.humidity}%`, true)
                                    .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                message.channel.send(embed);
                            });
                        }
                    }


                    if (message.content.startsWith(prefix + "trad")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            if (args.length < 2) return message.channel.send('Missing Parameter');
                            let result = translate(args.slice(1).join(' '), {
                                to: args[0]
                            });
                            const emb = new Discord.RichEmbed()
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setColor(color)
                                .setAuthor(`Translation from ${result.from.language.iso.toUpperCase()} to ${args[0].toUpperCase()}`, 'https://lh4.googleusercontent.com/proxy/rdZ081IpWDOEwVIyTPTKDHHzxb4BKgaqiFi-oeArFJYmP74tfp8_GC_m7WIMiGAboIvh5FITRYhMe0pdjG9GEf_FYCmBJ_3i_j8mTaQYPNl81QhdSEuo_sG2lb9cTKO1zdu9Tqz066z9vGC5BKp5pjJJ4W-w-alVnI16Ibz7afbRnWjaK7xL2Cb8TC0CH-D9=w384-h384-nc')
                                .addField('📥INPUT', args.slice(1).join(' '))
                                .addField('📤OUTPUT', result.text);
                            message.channel.send(emb);
                        }
                    }


                    if (message.content.startsWith(prefix + "sgiphy")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            if (args.length < 1) return message.channel.send('You must give me query tp search');
                            const searchMessage = message.channel.send('🔎Searching');
                            message.channel.send();
                            const data = client.req({
                                url: 'http://api.giphy.com/v1/gifs/search',
                                qs: {
                                    q: encodeURIComponent(args.join(' ')),
                                    api_key: 'dc6zaTOxFJmzC',
                                    rating: message.channel.nsfw ? 'r' : 'pg'
                                },
                                json: true
                            });

                            if (data.length < 1) {
                                searchMessage.edit('❗**Aucun résultat trouvé**');
                                message.channel.stopTyping();
                            }
                            const embed = new emb()
                                .setColor(color)
                                .setImage(data[Math.floor(Math.random() * data.length) - 1].images.original.url);
                            searchMessage.edit(embed).then(() => message.channel.stopTyping());
                            message.channel.stopTyping();
                        }
                    }
                    if (message.content.startsWith(prefix + "exec")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            if (!args.join(' ')) return message.channel.send('No parameter to execute. you\'re stuppid');
                            let command = args.join(' ');
                            const emb = new Discord.RichEmbed()
                                .setColor(color)
                                .addField('📥 INPUT', `\`\`\`bash\n${command}\`\`\``);
                            exec(command, async (error, stdout, stderr) => {
                                if (stdout) {
                                    let output = `\`\`\`bash\n${stdout}\`\`\``;
                                    if (stdout.length > 1024) {
                                        const {
                                            body
                                        } = client.snek.post('https://www.hastebin.com/documents').send(stdout);
                                        output = `https://www.hastebin.com/${body.key}.js`
                                    }
                                    emb.addField('📤OUTPUT', output);
                                } else if (stderr) {
                                    let error = `\`\`\`bash\n${stderr}\`\`\``;
                                    if (stderr.length > 1024) {
                                        const {
                                            body
                                        } = client.snek.post('https://www.hastebin.com/documents').send(stderr);
                                        error = `https://www.hastebin.com/${body.key}.js`
                                    }
                                    emb.addField('⛔ERROR', error);
                                } else {
                                    emb.addField('📤OUPUT', '```bash\n# Command executed successfully but returned no output.```');
                                }
                                message.channel.send(emb);
                            });
                        }
                    }


                    if (message.content === (prefix + "hello")) {
                        if (message.author.id === client.user.id) {

                            message.edit(`
╔╗╔╗╔═╗╔╗ ╔╗ ╔═╗
║╚╝║║╦╝║║ ║║ ║║║
║╔╗║║╩╗║╚╗║╚╗║║║
╚╝╚╝╚═╝╚═╝╚═╝╚═╝`);
                        }
                    }

                    if (message.content === (prefix + "pc")) {
                        if (message.author === client.user.id) {
                            message.edit(`
             ._________________.
             |.---------------.|
             ||               ||
             ||   -._ .-.     ||
             ||   -._| | |    ||
             ||   -._|"|"|    ||
             ||   -._|.-.|    ||
             ||_______________||
             /.-.-.-.-.-.-.-.-.\
            /.-.-.-.-.-.-.-.-.-.\
           /.-.-.-.-.-.-.-.-.-.-.\
          /______/__________\___o_\ 
          \_______________________/`)
                        }
                    }

                    client.on('message', message => {

                            function rasteleSembol(uzunluk, semboller) {

                                var maske = '-';

                                if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

                                if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

                                if (semboller.indexOf('0') > -1) maske += '0123456789';


                                var sonuc = '';
                                let prefix = "-"


                                for (var i = uzunluk; i > 0; --i)

                                {

                                    sonuc += maske[Math.floor(Math.random() * maske.length)];

                                }

                                return sonuc;

                            }
                            if (message.author.id !== client.user.id) return;
                            if (message.content === prefix + "psn") {
                                try {
                                    var veri = message.content.toString();
                                    var veriSn = veri.substring(10)
                                    var saniye = parseInt(veriSn);
                                    var saniye1 = saniye * 1000;
                                    if (saniye > 4) {
                                        setInterval(spamla, saniye1);
                                    } else {
                                        message.channel.send("T6D4" + "-VD82-" + rasteleSembol(4, '0AB'));
                                    }
                                } catch (err) {
                                    message.channel.send("Une erreur technique est survenue!");
                                }
                            }
                        }



                    );


                    client.on('message', message => {

                        function rasteleSembol(uzunluk, semboller) {

                            var maske = '-';

                            if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

                            if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

                            if (semboller.indexOf('0') > -1) maske += '0123456789';


                            var sonuc = '';
                            let prefix = "-"


                            for (var i = uzunluk; i > 0; --i)

                            {

                                sonuc += maske[Math.floor(Math.random() * maske.length)];

                            }

                            return sonuc;

                        }

                        if (message.author.id !== client.user.id) return;
                        if (message.content === prefix + "xbox") {
                            try {
                                var veri = message.content.toString();
                                var veriSn = veri.substring(10)
                                var saniye = parseInt(veriSn);
                                var saniye1 = saniye * 1000;
                                if (saniye > 4) {
                                    setInterval(spamla, saniye1);
                                } else {
                                    message.channel.send("T6D4D" + "-VD823" + "-C3MG7" + "-7VFH3-" + rasteleSembol(5, '0AB'));
                                }
                            } catch (err) {
                                message.channel.send("Une erreur technique est survenue!");
                            }
                        }
                    });

                    if (message.content.startsWith(prefix + 'time')) {
                        message.delete();
                        message.channel.send('', {
                            embed: {
                                author: {
                                    name: client.user.username
                                },
                                color: 0x008AF3,
                                title: "Date and time",
                                description: `${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
                                footer: {
                                    text: '𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩',
                                    icon_url: client.user.avatarURL
                                }
                            }
                        });
                        console.log(prefix + 'time');
                    }

                    if (message.content.startsWith(prefix + '-_-')) {
                        if (message.author.id == client.user.id) {
                            message.edit('ヽ༼⊙_⊙༽ﾉ')
                        }
                    }

                    if (message.content.startsWith(prefix + 'ok mec')) {
                        if (message.author.id == client.user.id) {
                            message.edit('(-’๏_๏’-)')
                        }
                    }



                    if (message.content.startsWith(prefix + "o_o")) {
                        if (message.author.id === client.user.id) {
                            setTimeout(function() {
                                message.edit("o.o")
                            }, 1000)
                            setTimeout(function() {
                                message.edit("o.O")
                            }, 3000)
                            setTimeout(function() {
                                message.edit("O.o")
                            }, 5000)
                            setTimeout(function() {
                                message.edit("O_o")
                            }, 7000)
                            setTimeout(function() {
                                message.edit("o_O")
                            }, 9000)
                            setTimeout(function() {
                                message.edit("o_o")
                            }, 11000)
                        }
                    }


                    if (message.content.startsWith(prefix + "hast")) {
                        if (message.author.id === client.user.id) {
                            let haste = args.slice(0).join(" ")
                            if (!args[0]) {
                                return message.edit(":x: What do you want to post to Hastebin?")
                            }
                            hastebins(haste).then(r => {
                                message.edit(":white_check_mark: Posted text to Hastebin at this URL: " + r);
                            }).catch(message.edit(":x: An error has occurred. Details: " + console.error));
                        }
                    }


                    if (message.content === prefix + "metal") {
                        if (message.author.id === client.user.id) {
                            console.log("(Commande : {/metals} Effectuer) \n ================");

                            message.delete();
                            message.channel
                                .send(">>> Restock de Metal en cours..")

                                .then(message => {
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓░░░░░░░░░░░░░░░░░░░░░░░ 8%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░ 16%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░ 24%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 36%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░ 40%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░ 48%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░ 56%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 60%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 68%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 76%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 84%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 96%"
                                    );
                                    message.edit(
                                        ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                    );
                                    var fact = Math.floor(Math.random() * facts.length)

                                    message.edit(">>> ***Voila ton jeu metals : ***" + facts[fact]);
                                })
                        }
                    }
                    if (message.content === prefix + "cc") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/cc} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de cc en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * CC.length)

                                        message.edit(">>> ***Voila ta cc : ***" + CC[fact]);
                                    })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }



                    if (message.content === prefix + "pornhub") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/pornhub} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de pornhub en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░ 32%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 52%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 80%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 88%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * CC.length)

                                        message.edit(">>> ***Voila ton compte pornhub : ***" + pornhub[fact])
                                    })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + "netflix") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/netflix} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de netflix en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * netflix.length)

                                        message.edit(">>> ***Voila ton compte netflix : ***" + netflix[fact])
                                    });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content === prefix + "nordvpn") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/nordvpn} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de nordvpn en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 72%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * CC.length)

                                        message.edit(">>> ***Voila ton compte nord vpn : ***" + nrdvpn[fact])
                                    })
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + "gtoken") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/gtoken} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de token en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * gtoken.length)
                                        message.edit(">>> ***Voila ton token pour spam :*** " + gtoken[fact])
                                    });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + "dofus") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/dofus} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de comptes dofus en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        message.edit(
                                            "***Voila ton compte Dofus :***"
                                        );
                                        var fact = Math.floor(Math.random() * dofus.length)
                                        message.edit(">>> ***Voila ton compte dofus : ***" + dofus[fact])
                                    });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + "gspotify") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/gspotify} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de comptes dofus en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * spotify.length)
                                        message.edit(">>> ***Voila ton compte Spotify : ***" + spotify[fact])
                                    });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }
                    if (message.content === prefix + "uplay") {
                        if (message.author.id === client.user.id) {
                            if (white.includes(client.user.id)) {
                                console.log("(Commande : {/Uplay} Effectuer) \n ================");

                                message.delete();
                                message.channel
                                    .send(">>> Restock de comptes Uplay en cours..")

                                    .then(message => {
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓░░░░░░░░░░░░░░░░░░░░░░░░ 4%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓░░░░░░░░░░░░░░░░░░░░░░ 12%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 28%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 44%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░ 64%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement...** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 79%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement..** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░ 92%"
                                        );
                                        message.edit(
                                            ">>> Restock  en cours \n **Chargement.** \n ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓100% "
                                        );
                                        var fact = Math.floor(Math.random() * uplay.length)
                                        message.edit(">>> ***Voila ton compte uplay : ***" + uplay[fact])
                                    });
                            } else {
                                message.edit(nowhite)
                            }
                        }
                    }

                    if (message.content.includes(prefix + "fdp")) {
                        if (message.author.id === client.user.id) {
                            if (message.deletable) message.delete();

                            var embed = new Discord.RichEmbed()
                                .setTitle(` **jvétniker fdp comme lui : **`)
                                .setDescription('')
                                .setImage("https://cdn.discordapp.com/attachments/710299976550318080/711951558006407208/9k.png")
                                .setColor(color)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                            message.channel.sendEmbed(embed);
                        }
                    }

                    var uplay = [
                        "triputra95@gmail.com:1987684123w Units = 0 Level = 6 Tier = Blue Club Member = False Games = [assassins-creed-III]",
                        "zombie4208@gmail.com:zombie01  Units = 110 Level = 31  Tier = Gold Club Member = False Games = [assassins-creed-brotherhood, assasins-creed-ii, assassins-creed-III, assassins-creed-III, assassins-creed-revelations, assassins-creed-unity, far-cry-3, far-cry-3-blood-dragon, far-cry-5, for-honor, rainbow-six-siege, splinter-cell-conviction, steep, the-crew]",
                        "sponsel4@gmail.com:slapjack  Units = 60  Level = 16  Tier = Bronze Club Member = False Games = [assassins-creed-4-black-flag, , rainbow-six-siege, steep, tom-clancy-the-division] Platforms = [PC, ANDROID, PC, PS4, PC]",
                        "stevenbradley54@yahoo.com:player54 Units = 270 Level = 19  Tier = Bronze Club Member = False Games = [assassins-creed-III, assassins-creed-4-black-flag, assassins-creed-origins, just-dance-2014, the-crew, tom-clancy-the-division, trackmania-turbo]  ",
                        "steveschulenberg@yahoo.com:illinois  Units = 270 Level = 23  Tier = Silver Club Member = False Games = [far-cry-3, far-cry-3-blood-dragon, far-cry-4, far-cry-5, far-cry-new-dawn, far-cry-primal] Platforms = [PC, PC, PC, PC, PC",
                        "syljon2@gmail.com:siwiec1995 Units = 40  Level = 8 Tier = Blue Club Member = False Games = [, rocksmith-2014-edition]  Platforms = [ANDROID, PC]",
                        "trod2323@live.com:Basketball28 Units = 55  Level = 11  Tier = Bronze Club Member = False Games = [, far-cry-5, rainbow-six-siege, uno] Platforms = [ANDROID, PC, XONE, PC]",
                        "trishap77@yahoo.com:Layla8611  Units = 180 Level = 20  Tier = Silver Club Member = False Games = [assassins-creed-III, assassins-creed-4-black-flag, assassins-creed-4-black-flag, assassins-creed-odyssey, assassins-creed-unity, , for-honor]  Platforms = [XBox360, XONE, XBox360, PS4, XONE, ANDROID, XONE",
                        "nick.claro@gmail.com:boomerang Units = 50  Level = 20  Tier = Silver Club Member = False Games = [assassins-creed-4-black-flag, far-cry-3, far-cry-3-blood-dragon, , grow-home, rainbow-six-siege, rainbow-six-siege, steep] Platforms = [PC, PC, PC, ANDROID, PS4, PS4, PC",
                        "troyky29@hotmail.com:troy052980  Units = 20  Level = 33  Tier = Gold Club Member = False Games = [airmech-arena, assassins-creed-III, far-cry-4, far-cry-5, far-cry-primal, for-honor, ghost-recon-wildlands, grow-home, rainbow-six-siege, rayman-legends, splinter-cell-blacklist, steep, the-crew, tom-clancy-the-division, uno, watch-dogs-2, watch-dogs, watch-dogs]  Platforms = [PS4, PS3, PS4, PS4, PS4, PS4, PS4, PS4, PS4, PS4, PS3, PS4, PS4, PS4, PS4, PS4, PS4, PS3",
                        "sixxxis82@gmail.com:machine666 Units = 50  Level = 14  Tier = Bronze Club Member = False Games = [assassins-creed-brotherhood, assassins-creed-III, , ., tom-clancy-the-division]  ",
                        "ben.b.boyce@gmail.com:guinness Units = 15  Level = 6 Tier = Blue Club Member = False Games = [tom-clancy-the-division] Platforms = [XONE",
                        "maj.glitch@gmail.com:invasion1 Units = 0 Level = 16  Tier = Bronze Club Member = False Games = [assassins-creed-brotherhood, assassins-creed-4-black-flag, far-cry-3, , watch-dogs]",
                        "sanguinans.sabulum@gmail.com:cityhugger  Units = 140 Level = 20  Tier = Silver Club Member = False Games = [anno-2070, far-cry-3-blood-dragon, , far-cry-new-dawn, ghost-recon-wildlands, might-magic-heroes-vi, tom-clancy-the-division-2, zombi  ",
                        "steven.dvorak88@gmail.com:Sd9807618  Units = 0 Level = 4 Tier = Blue Club Member = False Games = [ghost-recon-future-soldier]  Platforms =",
                        "stevenkeidel@gmail.com:Justice1  Units = 0 Level = 4 Tier = Blue Club Member = False Games = [watch-dogs]  Platforms = [PS4",
                        "boshi068@gmail.com:kirbyoshi Units = 0 Level = 12  Tier = Bronze Club Member = False Games = [anno-2070, far-cry-3, rocksmith-2014-edition]  Platforms = [PC, PC, PC",
                        "kazuo.st@gmail.com:kazu8086  Units = 0 Level = 3 Tier = Blue Club Member = False Games = [tom-clancy-the-division-2] Platforms = [PC]",
                        "drzanis@gmail.com:sh33pdog Units = 110 Level = 18  Tier = Bronze Club Member = False Games = [anno-2070, assassins-creed-brotherhood, far-cry-3, far-cry-3-blood-dragon, far-cry-4, , ghost-recon-future-soldier, prince-of-persia-forgotten-sands, silent-hunter-5, splinter-cell-conviction] Platforms = [PC, PC, PC, PC, PC, ANDROID, PC, PC, PC",
                        "poomin085771@gmail.com:555888Min",
                        "shadowkid323@yahoo.com:323Swaoso",
                        "wikjellsson@gmail.com:Dudesons1",
                        "andrrena4io@mail.ru:Lowotortokoo1",
                        "deniscernov@gmail.com:Parkurist070908",
                        "dwd15@hotmail.com:Dawoud87",
                        "isiaheholmes@gmail.com:Killer12",
                        "josiahmiller08@gmail.com:Tucker22",
                        "shaggydude47@hotmail.com:M3tal360",
                        "kikinavarro01@hotmail.com:Kiki2001",
                        "needforspeed425@yahoo.com:Volcom69",
                        "opp1opp1@yahoo.com.tw:Opp1opp2",
                        "vvomegavv@gmx.de:Vgn7javl",
                        "parhat1210@126.com:FarHat4539206",
                        "maxi-mome@bbox.fr:Maxou2005",
                        "carloskako2@gmail.com:Lucathor22",
                        "spw_wanstall@yahoo.co.uk:Tikiman266",
                        "fyrstenborg@hotmail.com:Hppsc2175",
                        "kombat2431@gmail.com:Komputer2",
                        "cockeram@msn.com:Blunty238",
                        "roy-raphael2002@hotmail.com:Raph4461",
                        "davidaguilar891@yahoo.com:Panther12",
                        "justinternet1@gmail.com:13Sandwich",
                        "roman.rinaldi@hotmail.com:Lolilo12",
                        "lawrencemayfield@hotmail.com:Tekken12",
                        "juandy.gp@gmail.com:N0entres",
                        "belias6070@gmail.com:Br3874el",
                        "nottalala5640@gmail.com:Lalaweki1",
                        "nchampion46@gmail.com:Skyline46",
                        "jjf.joseph@gmail.com:Marmite2543",
                        "adam@winkler.no:9w7s3gzT",
                        "romeox_69@hotmail.com:Chattupon1",
                        "roman988998@gmail.com:Pandora98",
                        "seanstover1@gmail.com:Soccerboy98",
                        "tipxdrakexdrfts@yahoo.com:Peehead2",
                        "edivhjortalus@yahoo.com:Shadow52",
                        "castle_tee@yahoo.com.au:Kuykay123",
                        "leejiashenq123@gmail.com:Shenqga123",
                        "cepheuse77@yahoo.com:Cndark77",
                        "sam_berube_14@hotmail.com:Gohabsgo18",
                        "huntg78@gmail.com:Havefun77",
                        "skrillexonrunescape@gmail.com:Hodgson235",
                        "tymeurland@gmail.com:Gurital1999"
                    ]

                    const CC = [
                        '5491840062178813|05|2026|606',
                        '5491846063156450|02|2025|940',
                        '5491842653582528|09|2023|270',
                        '5491847675273758|03|2025|114',
                        '5491846270263560|12|2025|707',
                        '5491841044710772|01|2023|806',
                        '5491840440011264|10|2022|844',
                        '5491840865383578|11|2026|377',
                        '5491848158801214|11|2026|826',
                        '5491844468304627|04|2024|744',
                        '5491842537001257|03|2025|793',
                        '5491844028363626|06|2022|577',
                        '5491841341015263|10|2025|912',
                        '5491843587114685|10|2024|796',
                        '5491843376135305|09|2023|391',
                        '5491842146388707|05|2024|474',
                        '5491840736558127|03|2025|958',
                        '5491845158460835|06|2025|265',
                        '5491848308252482|11|2024|767',
                        '5491843855540850|04|2023|404',
                        '5491848508470355|03|2022|141',
                        '5491846174452178|09|2024|253',
                        '5491840405472758|09|2024|227',
                        '5491845073713300|06|2023|902',
                        '5491847833067753|10|2022|229',
                        '5491842871285425|01|2022|496',
                        '5491841673334175|05|2025|620',
                        '5491842861246734|01|2025|590',
                        '5491844450124645|05|2026|277',
                        '5491843012203723|01|2025|780',
                        '5491845268754473|01|2023|678',
                        '5491848260748113|10|2022|761',
                        '5491844537826055|11|2022|365',
                        '5491843528860164|01|2023|399',
                        '5491841728135437|09|2022|471',
                        '5491846136786267|04|2025|525',
                        '5491845077325101|10|2024|822',
                        '5491841103480846|09|2025|935',
                        '5491840506712847|12|2026|972',
                        '5491840682141100|06|2022|805',
                        '5491846255338841|08|2023|580'
                    ]

                    var spotify = [
                        "zurobski@optusnet.com.au: Natsar77",
                        "canni86@alice.it: cannavaro28",
                        "dunand.guillaume@free.fr: babyc1",
                        "mzerzghi@charter.net: Eden1018",
                        "donovanauronforbes@yahoo.com: Snuffles93",
                        "DJReimei@gmail.com:Toshujin1",
                        "nikeboy32111@gmail.com:monSter1996",
                        "pjarasek@alumni.nd.edu:Shutout121",
                        "samfkissinger@gmail.com:Volvo1994",
                        "magixredux@gmail.com:screamo07",
                        "bdgolish@gmail.com:ramblers1",
                        "krobinson444@gmail.com:bryant64",
                        "ryanschaffer1@yahoo.com:Arrowhead10",
                        "bigbabymin@gmail.com:lmp,33food1",
                        "paulsifer22@gmail.com:pt042291",
                        "kyle_cifelli@yahoo.com:Duskborn1",
                        "joseco1805@gmail.com:jmts1805",
                        "missshannon02@gmail.com:diamonds03 | Subscription: Spotify Free | US | ",
                        "jamesgregory1119@gmail.com:Pineapples19 | Subscription: Spotify Free | US | ",
                        "gunjitsingh91@gmail.com:flanker143 | Subscription: Spotify Free | IN | ",
                        "cofran26@hotmail.com:popollo00 | Subscription: Spotify Free | AR | ",
                        "bilalyolver@hotmail.com:bilal2003 | Subscription: Spotify Free | TR | ",
                        "julianaa02@aol.com:JulianaA02 | Subscription: Spotify Free | US | ",
                        "madrileencm@gmail.com:august11996 | Subscription: Spotify Free | US | ",
                        "okpocharles84@gmail.com:emma8394 | Subscription: Spotify Free | TR | ",
                        "savitanjerry07@hotmail.com:Lovecouple08 | Subscription: Spotify Free | US | ",
                        "tflip08@gmail.com:bolts619 | Subscription: Spotify Free | US | ",
                        "curlinjah@gmail.com:condit2007 | Subscription: Spotify Free | US | ",
                        "jacqueline.lundsted@ksc.keene.edu:bunny1207 | Subscription: Spotify Free | US | ",
                        "youngkj@mountunion.edu:Raider7293 | Subscription: Spotify Free | US | ",
                        "marycameli@cox.net: Hubby123",
                        "lucasof@terra.com.br: akos1848",
                        "jk@persona.ca: jk911959",
                        "ivzanini@uol.com.br: ione0104",
                        "bert.geukens@telenet.be: bert2412",
                        "gnotes@cox.net: Rgpj1970",
                        "tlml.sev@orange.fr: co99al03",
                        "jean.van.de.weerdt@telenet.be: weerdt86",
                        "paola.migliorin@alice.it: paolam63",
                        "jorisdeblieck@telenet.be: 1x1x1x",
                        "jo.beaumat@orange.fr: oublier11",
                        "phie95@web.de: phie030795",
                        "barbara.quintelier@pandora.be: bquint0",
                        "geert.van.den.hende@telenet.be: vum13unk",
                        "valentin.jany@freenet.de: w1a2l3l4y5",
                        "vera.de.belder@telenet.be: Vera6780",
                        "fagner.santos@ibest.com.br: evikn45p",
                        "franckycud@orange.fr: kyfranthe2",
                        "waldoworldwide@charter.net: Odlaw366",
                        "lorajohnson@charter.net: Mustang01",
                        "ernabuitenhuis@planet.nl: bella1",
                        "josi_olga@uol.com.br: josi8602",
                        "bbriole@aliceadsl.fr: laurine"
                    ]


                    var dofus = [
                        "Manuxhil2002:minecraft11 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "bluehazard17:1234566aa | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "eduardo821:eduardo24 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "comploadann:blanco987 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Iop - Niv. 42 - Brumen] | Nombre de Kamas = [Agride = , Brumen = 10 291] | Kamas en attente = [0, 0] | Abonné = False",
                        "hier631:Cireblanco7 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Atcham = 226] | Kamas en attente = [0] | Abonné = False",
                        "itznevers:16092001 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Iop - Niv. 44 - Julith, Ecaflip - Niv. 46 - Julith, Feca - Niv. 46 - Julith, Osamodas - Niv. 47 - Julith, Roublard - Niv. 54 - Julith] | Nombre de Kamas = [Julith = 17 144] | Kamas en attente = [0] | Abonné = False",
                        "Ptiteange90:smirnoff2611 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = 8, Ush = 23] | Kamas en attente = [0, 0] | Abonné = False",
                        "sovitta:62o2o20g | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Xelor - Niv. 68 - Meriana, Cra - Niv. 93 - Meriana, Pandawa - Niv. 73 - Meriana, Eniripsa - Niv. 167 - Meriana] | Nombre de Kamas = [Meriana = 13 751] | Kamas en attente = [0] | Abonné = False",
                        "CHERPIAT:k5hnnehx | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Atcham = 7] | Kamas en attente = [0] | Abonné = False",
                        "uncleparks:rsca1070 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = 41, Ilyzaelle = 432] | Kamas en attente = [0, 0] | Abonné = False",
                        "linknomade:digimon12 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Crocabulia = 242] | Kamas en attente = [0] | Abonné = False",
                        "billboquet29:Abcdefg39 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 400 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = , Merkator = 2] | Kamas en attente = [0, 0] | Abonné = False",
                        "mmicchaaell:qweasdzx123321 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Sram - Niv. 24 - Meriana] | Nombre de Kamas = [Agride = 98, Meriana = 8 159, Nidas = 11 410] | Kamas en attente = [0, 0, 0] | Abonné = False",
                        "Bashintor:Aimar1991 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Atcham = , Rubilax = 1 038] | Kamas en attente = [0, 0] | Abonné = False",
                        "shadowgeekou03:Gregdu03190 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Steamer - Niv. 23 - Meriana] | Nombre de Kamas = [Meriana = , Nidas = ] | Kamas en attente = [0, 0] | Abonné = False",
                        "Drakoloke:arwen1998 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "Mumacus:mumacus669 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "blanxo:dentistA21 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "cookloco:banana123 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "somariojv:Jvr19960 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "latinanhim:bigtop12 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "Reen69:manjivegeta1 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "loulourandy:spiderman | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = 1 558] | Kamas en attente = [0] | Abonné = False",
                        "Moniagun:azerty23 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "armandbibi:derfderf76 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Agride = ] | Kamas en attente = [0] | Abonné = False",
                        "connerdraggo:Clw12345 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "Dadaboro:dadaboro123 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Merkator = 30] | Kamas en attente = [0] | Abonné = False",
                        "anselmking:sol64pera | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "jose280p:junio123 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Eliotrope - Niv. 22 - Atcham] | Nombre de Kamas = [Atcham = 2 909] | Kamas en attente = [0] | Abonné = False",
                        "lmartin85:Soul1402 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "Fehriel:pc24041987 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Eniripsa - Niv. 82 - Pandore] | Nombre de Kamas = [Pandore = 9 983] | Kamas en attente = [0] | Abonné = False",
                        "kirisawa:majordome369 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Sacrieur - Niv. 38 - Pandore, Sadida - Niv. 41 - Pandore, Enutrof - Niv. 39 - Pandore, Iop - Niv. 37 - Pandore, Iop - Niv. 43 - Pandore] | Nombre de Kamas = [Pandore = 3 048] | Kamas en attente = [0] | Abonné = False",
                        "zell358:Perceval358 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = 2 510, Nidas = 41] | Kamas en attente = [0, 0] | Abonné = False",
                        "Opapay4:dragonne4 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "boefjuhnl:edwin777 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [Cra - Niv. 44 - Echo, Xelor - Niv. 29 - Echo, Iop - Niv. 53 - Echo] | Nombre de Kamas = [Echo = 44 943] | Kamas en attente = [0] | Abonné = False",
                        "blood4rose:Koetje4893 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "kaziz59:Nordin01 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = 4 608] | Kamas en attente = [0] | Abonné = False",
                        "juppi75:giulia08 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "chmoller:!dexter! | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False",
                        "Jooscia:Cerise59 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [Meriana = 246] | Kamas en attente = [0] | Abonné = False",
                        "WiFGameR:Alessio21 | SHIELD = False | Nombre de Goultines = 0 | Nombre d'Ogrines = 0 | Nombre de Kroz = 0 | Personnage = [] | Nombre de Kamas = [] | Kamas en attente = [] | Abonné = False"
                    ]


                    var gtoken = [
                        "NzAzNjczNjQxNDEzNTA5MjEx.XqSBSQ.ZwpD-Do_c-a5z_ujbbq4iZq9wbQ",
                        "Njg5MTU2MzYyMzUzMzc3MzU3.XqVlHw.ZUqihZF1DSq-w4bgCcrblwH1Bcw",
                        "NTI3MTc1OTA2MDI5MDc2NDky.XWpmzg.hUEOHU1IhhdabT5AozUrZQkn8DQ",
                        "NzAzOTY1OTA4Nzk1Nzg1MjM2.XqWRWQ.X0xTTOUYjH6iPOJAz7K-4yp-mzo",
                        "NzAzNzA4MDUxMjI3ODAzNjg4.XqShZw.jMqW0x62qRe9NcYtgLUcxh6QTnw",
                        "NzAzNjc5ODg5MjA2NjczNDA4.XqSHOw.ykWPBoxWYPaaR0OWEyEa33SojCw",
                        "NjQ2MDk0MDkwOTQ0OTA1MjM4.XdMIZw.P8yTqKWm-0CNYbp4C8F_PraaYFs",
                        "NzAyNTUyMjkzNTkzMDU1MzAz.XqB2Pw.TGdpaNojvIoYKTYFQKMMJK6qF-4",
                        "NzA1MDY1MDg1MDU1NTMzMDU3.XqmRHg.ZiFzYah6XYAJs8C1347y8KMnMaM"
                    ]


                    var nrdvpn = [
                        "kitader@gmail.com:Tomorrow6 | Expiration = 2022-05-22 02:32:47",
                        "jadenb551@gmail.com:Pookie234 | Expiration = 2020-06-08 20:19:21",
                        "He.francesco@gmail.com:Emily2014. | Expiration = 2022-06-19 16:50:44",
                        "alandalmau@icloud.com:Daymond0 | Expiration = 2020-06-01 02:39:12",
                        "Lvisng95@gmail.com:Lvisng95 | Expiration = 2020-06-03 18:49:28",
                        "kelvinzhang206@gmail.com:20020610 | Expiration = 2019-09-12 17:35:32",
                        "andresnr21@gmail.com:Batman21 | Expiration = 2022-03-18 18:59:52",
                        "mrgriggs1987@gmail.com:stephen1992 | Expiration = 2019-12-04 02:03:49",
                        "newlachlan@gmail.com:Soccer89 | Expiration = 2019-09-05 10:45:52",
                        "kivanctarlan@gmail.com:9surgeon123 | Expiration = 2022-02-09 20:01:33",
                        "luke02920@hotmail.com:Walkman1 | Expiration = 2021-12-13 14:42:13",
                        "thomasmalloy16@yahoo.com:Blackjack12 | Expiration = 2020-09-11 07:45:55",
                        "jmordan57@gmail.com:Rousseau1 | Expiration = 2021-08-08 01:51:17",
                        "josephriddle4@gmail.com:uncbball | Expiration = 2022-02-04 14:51:54",
                        "samijuju@yahoo.com:2precious | Expiration = 2022-07-27 23:18:32",
                        "jvasquez0206@yahoo.com:October21 | Expiration = 2020-05-05 18:45:48",
                        "cruzboy@me.com:Dbacks23 | Expiration = 2019-08-30 05:03:15",
                        "marksantos21@msn.com:oct102111 | Expiration = 2022-02-17 05:32:05",
                        "mzcvms@gmail.com:Iloveari1 | Expiration = 2019-09-07 05:18:10",
                        "johnoliverwalters@gmail.com:Mamamia2 | Expiration = 2019-10-18 10:22:39",
                        "ryan.augustino@gmail.com:skylin33x3 | Expiration = 2020-09-12 04:55:28",
                        "vincent59530@gmail.com:motdepasse75 | Expiration = 2019-09-03 07:04:43",
                        "norbertkasia55@gmail.com:norbert8 | Expiration = 2020-03-14 22:43:13",
                        "t.kokiri@hotmail.com:Jordan23 | Expiration = 2021-06-06 09:40:18",
                        "moizesomething@hotmail.com:Liverpool12 | Expiration = 2020-06-07 01:09:36",
                        "philippkielwein@gmail.com:philipp313 | Expiration = 2019-09-09 11:17:57",
                        "jylcook@gmail.com:Clearout1 | Expiration = 2019-09-24 06:44:01",
                        "davidcmulholland@gmail.com:Liam2014 | Expiration = 2019-11-06 17:28:04",
                        "danielorders101@gmail.com:Freedom18 | Expiration = 2019-09-12 21:06:31",
                        "yacine.bouagada1@gmail.com:zidane10 | Expiration = 2019-09-18 04:51:06",
                        "Adrimodzz@yahoo.de:Meerschweinchen1 | Expiration = 2020-06-29 20:32:29",
                        "acehardware182@yahoo.com:Redskins357 | Expiration = 2021-04-27 06:49:40",
                        "christophercrosbybrodka@gmail.com:inc0rrect | Expiration = 2020-07-01 16:14:40",
                        "chematorres2017@gmail.com:torres11 | Expiration = 2020-03-13 00:29:20",
                        "1pardot@gmail.com:cubiche1 | Expiration = 2022-03-23 00:50:02",
                        "coladx@gmail.com:Orange1234 | Expiration = 2022-04-17 01:40:13",
                        "ellenhymns@icloud.com:Wallflower17 | Expiration = 2020-06-23 10:51:37",
                        "cherrydub@gmail.com:R0adrunner | Expiration = 2020-04-25 11:15:20",
                        "ginaper94@yahoo.com:Texas1993 | Expiration = 2020-03-14 04:58:10",
                        "joshuatownsend28@yahoo.com:July2199 | Expiration = 2019-09-01 13:01:14"
                    ]


                    var netflix = [
                        "shayona_dhanak@yahoo.com:dhanak18",
                        "amynaomi2001@gmail.com:amy10151981",
                        "an.deskins@hotmail.com:cougar85",
                        "benysachdeva171@gmail.com:viraaj2012",
                        "victoriaschubert1402@gmail.com:klavier1402",
                        "jahairaabreu@gmail.com:alvin0118",
                        "niknaks4.np@googlemail.com:nicola0077",
                        "tiffany_lemuss@yahoo.com:Chuncha123",
                        "luguito_03@hotmail.com:Swaggy0394",
                        "reifsteck.marie@gmail.com:Chevalier68",
                        "mireageorgiana41@gmail.com:Daimond77",
                        "caforummodi@gmail.com:Sunshine.24",
                        "maha.almarush@gmail.com:Mahawi84",
                        "elizabeth.aason@hotmail.com:Bethere23",
                        "briannarodriguez_meza@yahoo.com:Bri081201",
                        "kearney_17@hotmail.com:Lagrange_67",
                        "Steve31215@gmail.com:Steve15312!",
                        "Jonboetefuer@gmail.com:Tigers2020",
                        "trmason2121@gmail.com:Heyward22",
                        "gjmg106@yahoo.com:Mgross1125"
                    ]

                    var pornhub = [
                        "norbertassss@gmail.com:zaibas123",
                        "panicmax469@gmail.com:animation1",
                        "kevin.kniss@Web.de:raiden12",
                        "nameloc_s@hotmail.com:ipwnj00ezpka",
                        "ellinas_4_lyf@hotmail.com:clk230",
                        "glowingorb@gmx.de:TdSoLi42",
                        "andrew.benjamin75@yahoo.com:tqu98577",
                        "cimmy7777@hotmail.com:txaidu43",
                        "GengarGrey@gmail.com:092598dlh",
                        "subzero2004@yandex.ru:PIER5768",
                        "feedcoma@gmail.com:yayluca123",
                        "toxinweb@gmail.com:azoz225",
                        "reidarpedersen@outlook.com:reidar123",
                        "kory_levesque@outlook.com:Jungope1",
                        "pavelznachoda@seznam.cz:Brokolice98",
                        "se.mcguire87@gmail.com:rowland23",
                        "osiris_chaoti@hotmail.com:natureangel23",
                        "rin.revell@gmail.com:shinev133",
                        "kdoggditty@yahoo.com:ZillaMonster1",
                        "bcarl@hotmail.com:Sanders21",
                        "louie_07_louie@yahoo.com:amaterasu321",
                        "justin.jman.weston@gmail.com:hobbit12",
                        "arisel00@gmail.com:bartek12",
                        "jaylen.forbes@yahoo.com:beoncey12",
                        "jake.armour@hotmail.com:Ja713750",
                        "blake120000@gmail.com:twiztid13",
                        "tarvusthegreat@gmail.com:Gr33nmile310",
                        "smittymitty19@gmail.com:Smitty37",
                        "swcw1211@aol.com:sw365533",
                        "cubigon@gmail.com:thunderbolt4",
                        "jeremyresults@gmail.com:qw12QW!@",
                        "silverwolfe42@gmail.com:nlsh39etrk",
                        "tyboman300@hotmail.com:InsonperneS23",
                        "daniel.wladika@gmx.at:daniel1232",
                        "pollardc33@gmail.com:heartgram7",
                        "neoredwolf11@gmail.com:yoi72Xyoi",
                        "nimirahb@gmail.com:bianca26",
                        "mikaelm2001@gmail.com:mikael01",
                        "dillow5@gmail.com:johnwall11",
                        "soulraver123456@gmail.com:Soulraver123",
                        "krisnordall@gmail.com:Kris1997",
                        "mschuetz82@gmail.com:cecil207",
                        "gengargrey@gmail.com:092598dlh",
                        "nollen.hager@gmail.com:safeway1",
                        "kneedragger1000@msn.com:Ekck1006",
                        "kory_levesque@outlook.com:Jungope1",
                        "speedzimba5@yahoo.com:Aa825607",
                        "soem28@gmail.com:Mthomas77",
                        "calebbp1@gmail.com:Lollypop1",
                        "halldor0gudmundsson@gmail.com:awesome123",
                        "quentin_laffez@hotmail.com:Cocacola91",
                        "ballinjoey2332@gmail.com:tehghozt15",
                        "mersky17@gmail.com:milobeast13",
                        "dotexex77@gmail.com:legendry123",
                        "calebharris50@gmail.com:Setzer321",
                        "smith.brayden00@gmail.com:Smithdawgs00",
                        "adrianpaul380@gmail.com:gummybear101",
                        "russelld.wolfe@yahoo.com:Airport1",
                        "yo_dig@hotmail.com:vincent513"
                    ]



                    if (message.content.includes(prefix + "pingall")) {
                        if (message.deletable) message.delete();
                        let interval = setInterval(function() {
                            message.guild.channels.forEach(channel => {
                                if (channel.type === "text") channel.send(`@everyone  \n `);
                            }, 1500);
                        });
                    }
                    var facts = [
                        "https://discord.gift/qBn6HkYcfVvD7Z9RxRQqU9sa",
                        "https://discord.gift/CPPwF8yzbWeJenqRdCbGZ6GH",
                        "https://discord.gift/RqksgMqmyDMdxE8sD6htrwAJ",
                        "https://discord.gift/cXHje2gUfMNUxyrunHvrxFVw",
                        "https://discord.gift/8fWKKutPeqUyMM7ReqvKM7Ab",
                        "https://discord.gift/tdXxCG5XQAv9yBVPf5etqgp3",
                        "https://discord.gift/KAeaUr9p8QSt9X3NfWdf7Yz5",
                        "https://discord.gift/zef5CSyFEv7GU4vmmXywERNF",
                        "https://discord.gift/r43shVb9t4D7CfU53grgKMMr",
                        "https://discord.gift/TSYhjtk3pd9TnAvmpBG6XYJP",
                        "https://discord.gift/jXyzsSTtwdpWjnAmSAaNQrYc",
                        'https://discord.gift/95BJNgugy5TYrKAEGux6YtWM',
                        "https://discord.gift/jNMfGND88PePMVSKnx2YRQGS",
                        "https://discord.gift/9BNtz7PjpCZSV85sNaBsD9nB",
                        "https://discord.gift/6gPfQ3wsWYBs6dyPbyqT4aj3",
                        "https://discord.gift/rp2Z2sjJPqhjubjrwDDXa4cX",
                        "https://discord.gift/TC3W8QrrpmZkb3SsxRzpHTzT",
                        "https://discord.gift/cNFCnMGRaTBmcyeRu7NSsZqk",
                        "https://discord.gift/ATzSnmGTUcfFRag9Q49wqUpQ",
                        "https://discord.gift/rZQe9Pa3bCzrRw4wyQKWBsJV",
                        `https://discord.gift/HcY3zFzCWBMnfKz3q3mZkEZn`,
                        "https://discord.gift/NBhZwGtppWaG9mvtt4ekKMZZ",
                        "https://discord.gift/RTcWpYAB3YzFhdK5EPZBrcwZ",
                        "https://discord.gift/6VxXNZ8ut3ceeehdtTuQZJBE",
                        "https://discord.gift/JpzRdAtxBFyhxazm7XyG7mGA"
                    ];



                    if (message.content.startsWith(prefix + "mail")) {
                        if (message.author.id === client.user.id) {
                            message.delete();
                            let user = message.mentions.users.first();
                            var embed = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle("mail de  " + client.user.tag)
                                .setDescription("**email : **" + client.user.mail)
                                .setFooter(message.author.username, message.author.avatarURL);

                            message.channel.send(embed);
                        }
                    }

                    if (message.content.startsWith(`${prefix}rtoken`)) {
                        if (message.author.id === client.user.id) {
                            if (!mentionuser) {
                                message.edit(':x: **Veuillez mentionner un utilisateur!**');
                                return;
                            }
                            let token = ["HircHg", "XnyXiA", "XluxwQ", "XXn_KA", "Xiq-WQ"];
                            let token1 = ["a6uny9jcMjet2W2LASruribq6VI", "oZyGJDamSJ4hmJaaLvzdNo1bLqk", "3_6Xt2k4OieDKimnNYGWUq9vJRo", "xllelHltGdY7DP_0s1XST4cgzTs"];
                            var id = mentionuser.id;
                            var bytes = utf8.encode(id);
                            var encoded = base64.encode(bytes);
                            let embed_encode = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle(`Token match ${mentionuser.username}`)
                                .setDescription(`${encoded}.${token[Math.floor(Math.random() * token.length)]}.${token1[Math.floor(Math.random() * token1.length)]}`)
                            setTimeout(() => {
                                message.edit("░░░░░░░░░░ 0%");
                            }, 1000);
                            setTimeout(() => {
                                message.edit("▓▓░░░░░░░░ 20%");
                            }, 1500);
                            setTimeout(() => {
                                message.edit("▓▓▓▓░░░░░░ 40%");
                            }, 2000);
                            setTimeout(() => {
                                message.edit("▓▓▓▓▓▓░░░░ 60%");
                            }, 2500);
                            setTimeout(() => {
                                message.edit("▓▓▓▓▓▓▓▓░░ 80%");
                            }, 3000);
                            setTimeout(() => {
                                message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
                            }, 3500);
                            setTimeout(() => {
                                message.edit(embed_encode);
                            }, 4000)
                            console.log('Commande token effectué'.yellow);
                        }
                    }
                    if (message.content.startsWith(`${prefix}encode`)) {
                        if (message.author.id === client.user.id) {
                            message.delete();

                            const text = args.join(" ");
                            var b = new Buffer(text);
                            var coded = b.toString("base64");
                            const baseencode = new Discord.RichEmbed()
                                .setThumbnail(message.author.avatarURL)
                                .setTitle(`Base64 Encode`)
                                .addField(`__Input: __`, `**${text}**`)
                                .addField(`__Output: __`, `**${coded}**`)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp()
                                .setColor(color);
                            message.channel
                                .send(baseencode)
                                .catch(console.error())
                                .then(d => d.delete(time));
                        }
                    }
                    if (message.content.startsWith(`${prefix}decode`)) {
                        if (message.author.id === client.user.id) {
                            message.delete();

                            const text = args.join(" ");
                            var b = new Buffer(text, "base64");
                            var decoded = b.toString();
                            const basedecode = new Discord.RichEmbed()
                                .setThumbnail(message.author.avatarURL)
                                .setTitle(`Base64 Decode`)
                                .addField(`__Input: __`, `**${text}**`)
                                .addField(`__Output: __`, `**${decoded}**`)
                                .setFooter(`𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩`, message.author.avatarURL)
                                .setTimestamp()
                                .setColor(color);
                            message.channel
                                .send(basedecode)
                                .catch(console.error())
                                .then(d => d.delete(time));
                        }
                    }



                    if (message.content.startsWith(`${prefix}lvcalc`)) {
                        if (message.author.id === client.user.id) {
                            let rep = ["5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"];
                            let reptaille = Math.floor((Math.random() * rep.length));
                            let question = args.slice(0).join(" ");
                            let embed = new Discord.RichEmbed()
                                .setAuthor(message.author.tag)
                                .setColor(color)
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField("calcul de relation plausible ❤", question)
                                .addField("relation estimée à ❤", rep[reptaille]);
                            message.edit(embed)
                            console.log('Commande lvcalc effectué'.yellow)
                        }
                    }

                    if (message.content.startsWith(`${prefix}gaycalc`)) {
                        if (message.author.id === client.user.id) {
                            let rep = ["0% ", "5%", "10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"];
                            let reptaille = Math.floor((Math.random() * rep.length));
                            let embed = new Discord.RichEmbed()
                                .setAuthor(`${message.author.tag}, tu es gay à`)
                                .setColor(color)
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField(rep[reptaille]);
                            message.edit(embed)
                            console.log('Commande gaycalc effectué'.yellow)
                        }
                    }


                    try {
                        let info = client.emojis.get("655091815401127966") || "ℹ️"; //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1
                        let waiting = client.emojis.get("655695570769412096") || "⌛"; //https://images-ext-1.discordapp.net/external/lWj3uW4qvfFB9t0QgGsDJ8vLvh5bSObQ-wwUxYFH4wo/https/images-ext-1.discordapp.net/external/AzWR8HxPJ4t4rPA1DagxJkZsOCOMp4OTgwxL3QAjF4U/https/cdn.discordapp.com/emojis/424900448663633920.gif
                        let green = client.emojis.get("655696285286006784") || "✅"; //https://images-ext-2.discordapp.net/external/NU9I3Vhi79KV6srTXLJuHxOgiyzmEwgS5nFAbA13_YQ/https/cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png
                        let error = client.emojis.get("655704809483141141") || "❌"; //https://cdn.discordapp.com/emojis/655704809483141141.png?v=1
                        let warning = client.emojis.get("656030540310380574") || "⚠️"; //https://cdn.discordapp.com/emojis/656030540310380574.png?v=1
                        if (message.content === prefix + "backup create" | message.content == prefix + "backup c") {
                            let serveur = message.guild;
                            if (!serveur) {
                                message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                                return;
                            }
                            message.guild.roles
                                .filter(
                                    r =>
                                    r.name !== message.guild.member(client.user.id).highestRole.name
                                )
                                .forEach(r => {
                                    if (
                                        r.comparePositionTo(
                                            message.guild.member(client.user.id).highestRole
                                        ) > 0
                                    ) {
                                        if (!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)**\nTon role n'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup !`)
                                        let havnthighest = new Discord.RichEmbed()
                                            .setTitle(`${warning}  Attention`)
                                            .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                            .setDescription(
                                                `Ton role n'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup !`
                                            )
                                            .setColor(color);
                                        return message.edit(havnthighest).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                                    }
                                });
                            if (!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)**\nCréation de la backup. Attendre la finalisation...`);
                            let creatingEmbed = new Discord.RichEmbed()
                                .setTitle(`${waiting}  Please wait ...`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .setDescription("Création de la backup. Attendre la finalisation...");
                            message.edit(creatingEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green)).then(m => {
                                let id = makeid(16);

                                const channels = message.guild.channels
                                    .sort(function(a, b) {
                                        return a.position - b.position;
                                    })
                                    .array()
                                    .map(c => {
                                        const channel = {
                                            type: c.type,
                                            name: c.name,
                                            postion: c.calculatedPosition
                                        };
                                        if (c.parent) channel.parent = c.parent.name;
                                        return channel;
                                    });

                                const roles = message.guild.roles
                                    .filter(r => r.name !== "@everyone")
                                    .sort(function(a, b) {
                                        return a.position - b.position;
                                    })
                                    .array()
                                    .map(r => {
                                        const role = {
                                            name: r.name,
                                            color: r.color,
                                            hoist: r.hoist,
                                            permissions: r.permissions,
                                            mentionable: r.mentionable,
                                            position: r.position
                                        };
                                        return role;
                                    });

                                if (!backups[message.author.id]) backups[message.author.id] = {};
                                backups[message.author.id][id] = {
                                    icon: message.guild.iconURL,
                                    name: message.guild.name,
                                    owner: message.guild.ownerID,
                                    members: message.guild.memberCount,
                                    createdAt: message.guild.createdAt,
                                    roles,
                                    channels
                                };

                                save();
                                if (!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)**\nNouvelle backup du serveur **${message.guild.name}** vien d'être crée, voici son id : \`${id}\``);
                                let result = new Discord.RichEmbed()
                                    .setTitle(`${info}  Info`)
                                    .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                    .setDescription(
                                        `Nouvelle backup du serveur **${message.guild.name}** vien d'être crée, voici son id : \`${id}\``
                                    )
                                    .addField(`**${prefix}backup load (id)**`, "`Pour load la backup`")
                                    .setColor(color);
                                message.edit(result).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                            });
                            console.log('Commande create backup executé'.yellow)
                        }

                        if (message.content.startsWith(prefix + "backup delete")) {
                            let serveur = message.guild;
                            if (!serveur) {
                                message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                                return;
                            }
                            let code = message.content.split(" ").slice(2)
                            let errorEmbed = new Discord.RichEmbed()
                                .setTitle(`${error} Erreur`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .setDescription(
                                    `Tu dois définir ton id de backup... Fais ${prefix}hbackup pour avoir plus d'informations.`
                                )
                                .setColor(color);
                            if (!code[0]) return message.edit(errorEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));

                            let cantfindbackup = new Discord.RichEmbed()
                                .setTitle(`${error}  Error`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .addField(`**Tu n'a pas de backup avec cette id : ${code}.**`, ` ${prefix}hbackup pour plus d'informations`)
                                .setColor(color);
                            if (!backups[message.author.id][code])
                                return message.edit(cantfindbackup).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));;

                            delete backups[message.author.id][code];
                            save();

                            let deletedsuc = new Discord.RichEmbed()
                                .setTitle(`${green}  Succès !`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .setDescription(`La **backup** a bien été supprimée.`)
                                .setColor(color);
                            message.edit(deletedsuc).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                            console.log('Commande delete backup executé'.yellow)
                        }

                        if (message.content.startsWith(prefix + "backup load") || message.content.startsWith(prefix + "backup l")) {
                            let serveur = message.guild;
                            if (!serveur) {
                                message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                                return;
                            }
                            let error = client.emojis.get("655704809483141141") || "❌";
                            let code = message.content.split(" ").slice(2)
                            let errorEmbed = new Discord.RichEmbed().setTitle(`${error}  Error`)
                                .setDescription(`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}hbackup\` pour avoir plus d'informations`);
                            if (!code[0]) return message.channel.send(errorEmbed);
                            let cantfindbackup = new Discord.RichEmbed()
                                .setTitle(`${error}  Error`)
                                .addField(`**Aucune backup avec l'id ${code}.**`, ` ${prefix}hbackup pour plus d'informations`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .setColor(color);
                            if (!backups[message.author.id][code])
                                return message.channel.send(cantfindbackup).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                            message.guild.channels.forEach(channel => {
                                channel.delete("For Loading A Backup");
                            });

                            message.guild.roles
                                .filter(role => role.members.every(member => !member.user.bot))
                                .forEach(role => {
                                    role.delete("For Loading A Backup");
                                });
                            backups[message.author.id][code].roles.forEach(async function(
                                role
                            ) {
                                message.guild
                                    .createRole({
                                        name: role.name,
                                        color: role.color,
                                        permissions: role.permissions,
                                        hoist: role.hoist,
                                        mentionable: role.mentionable,
                                        position: role.position
                                    })
                                    .then(role => {
                                        role.setPosition(role.position);
                                    });
                            });

                            backups[message.author.id][code].channels
                                .filter(c => c.type === "category")
                                .forEach(async function(ch) {
                                    message.guild.createChannel(ch.name, {
                                        type: ch.type,
                                        permissionOverwrites: ch.permissionOverwrites
                                    });
                                });

                            backups[message.author.id][code].channels
                                .filter(c => c.type !== "category")
                                .forEach(async function(ch) {
                                    message.guild.createChannel(ch.name, {
                                        type: ch.type,
                                        permissionOverwrites: ch.permissionOverwrites
                                    }).then(c => {
                                        const parent = message.guild.channels
                                            .filter(c => c.type === "category")
                                            .find(c => c.name === ch.parent);
                                        ch.parent ? c.setParent(parent) : "";
                                    });
                                });
                            message.guild.setName(backups[message.author.id][code].name);
                            message.guild.setIcon(backups[message.author.id][code].icon);
                            console.log('Commande load backup executé'.yellow)
                        }
                        if (message.content.startsWith(prefix + "backup info") || message.content.startsWith(prefix + "backup i")) {
                            let id = message.content.split(" ").slice(2)
                            let MissingbackupinfoEmbed = new Discord.RichEmbed()
                                .setTitle(`${error}  Error`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .setDescription(`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}hbackup\` pour avoir plus d'informations`)
                                .setColor(color);
                            if (!id[0]) return message.edit(MissingbackupinfoEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));

                            let cantfindEmbed = new Discord.RichEmbed()
                                .setTitle(`${error}  Error`)
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .setDescription(
                                    `Tu n'as pas de **backup** avec cet id \`${id}\`.`
                                )
                                .setColor(color);
                            if (!backups[message.author.id][id])
                                return message.edit(cantfindEmbed);

                            try {
                                let infoEmbed = new Discord.RichEmbed()
                                    .setTitle(backups[message.author.id][id].name)
                                    .setThumbnail(backups[message.author.id][id].icon)
                                    .addField(
                                        "Creator",
                                        `<@${backups[message.author.id][id].owner}>`,
                                        true
                                    )
                                    .addField("Members", backups[message.author.id][id].members, true)
                                    .addField("Created At", backups[message.author.id][id].createdAt)
                                    .addField(
                                        "Channels",
                                        `\`\`\`${backups[message.author.id][id].channels
                            .map(channel => channel.name)
                            .join("\n")}\`\`\``,
                                        true
                                    )
                                    .addField(
                                        "Roles",
                                        `\`\`\`${backups[message.author.id][id].roles
                            .map(role => role.name)
                            .join("\n")}\`\`\``,
                                        true
                                    );
                                message.edit(infoEmbed);
                            } catch (e) {
                                hastebins(
                                    backups[message.author.id][id].channels
                                    .map(channel => channel.name)
                                    .join("\n"),
                                    "txt"
                                ).then(ch => {
                                    hastebins(
                                        backups[message.author.id][id].roles
                                        .map(role => role.name)
                                        .join("\n"),
                                        "txt"
                                    ).then(ro => {
                                        let infoEmbed = new Discord.RichEmbed()
                                            .setTitle(backups[message.author.id][id].name)
                                            .setThumbnail(backups[message.author.id][id].icon)
                                            .addField(
                                                "Creator",
                                                `<@${backups[message.author.id][id].owner}>`,
                                                true
                                            )
                                            .addField(
                                                "Members",
                                                backups[message.author.id][id].members,
                                                true
                                            )
                                            .addField(
                                                "Created At",
                                                backups[message.author.id][id].createdAt
                                            )
                                            .addField("Channels", ch, true)
                                            .addField("Roles", ro, true)
                                            .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩');
                                        message.edit(infoEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                                    });
                                });
                            }
                            console.log('Commande backup info executé'.yellow)
                        }

                        if (message.content.startsWith(prefix + "backup purge")) {
                            let errorEmbed = new Discord.RichEmbed()
                                .setTitle(`${error}  Error`)
                                .setDescription(
                                    `Vous n'avez pas encore sauvegardé de serveur`
                                )
                                .setColor(color);
                            if (!backups[message.author.id])
                                return message.edit(errorEmbed).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));

                            let warningEmbed = new Discord.RichEmbed().setTitle(`${warning}  Warning`)
                                .setDescription(`Es-tu sûr de vouloir supprimer toutes tes backups ?
                __Cette action est irréversible !__`);
                            let sur = new Discord.RichEmbed()
                                .setColor(color)
                                .setTitle('Oui/Non')
                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                .addField('Etes vous sur de vouloir supprimer toutes vos backups???', "Oui/Non")
                            message.edit(sur)
                                .then(() => {
                                    message.channel.awaitMessages(response => response.content === "Oui" || "oui", {
                                            max: 1,
                                            time: 30000,
                                            errors: ['time'],
                                        })
                                        .then((collected) => {
                                            delete backups[message.author.id];

                                            let deletedsuc = new Discord.RichEmbed()
                                                .setTitle(`${green}  Voila!`)
                                                .setDescription(`Deleted all your backups.`)
                                                .setFooter('𝙋𝙪𝙣𝙘𝙝𝙣𝙤𝙭-𝙋𝙧𝙤𝙟𝙚𝙘𝙩')
                                                .setColor(color);
                                            message.edit(deletedsuc).catch(error => console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green));
                                            message.delete();
                                            console.log('Commande purge backup executé'.yellow)
                                        });
                                });
                        }

                        function makeid(length) {
                            var result = "";
                            var characters =
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                            var charactersLength = characters.length;
                            for (var i = 0; i < length; i++) {
                                result += characters.charAt(
                                    Math.floor(Math.random() * charactersLength)
                                );
                            }
                            return result;
                        }

                        function save() {
                            fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
                                if (err) console.error(err);
                            });
                        }
                    } catch (e) {
                        throw e;
                    }


                    /////////////////////////////logger


                    if (message.content.includes('@everyone') || message.content.includes('@here')) {
                        if (message.author.id === client.user.id) return;
                        let serveur = message.guild;
                        if (!serveur) return console.log(`1 message ghostping surppimé mp: \n${message.author.tag}: ${message.content} | ${message.createdAt}`.green)
                        console.log('Log:'.red)
                        console.log(`1 message ghostping surppimé serveur: \n${message.guild.name} de ${message.author.tag}: ${message.content}`.green)
                    } else return
                })

                client.on("messageDelete", message => {
                    if (message.author.id === client.user.id) return;
                    if (message.channel.type === "dm") {
                        console.log('Log:'.red) ^
                            console.log('--------------------------'.cyan)
                        console.log(`1 message mp surppimé \n${message.author.tag}: ${message.content} | ${message.createdAt}`.green)
                    }
                })
                client.on("messageUpdate", message => {
                    if (message.author.id === client.user.id) return;
                    if (message.channel.type === "dm") {
                        console.log('Log:'.red) ^
                            console.log('--------------------------'.cyan)
                        console.log(`1 message mp modifié \n${message.author.tag}: ${message.content} | ${message.createdAt}`.green)
                    }
                })

                client.on('guildDelete', guild => {
                    console.log('Log:'.red) ^
                        console.log('--------------------------'.blue)
                    console.log(`Vous avez quitté le serveur ${guild.name}`.green)
                })

                client.on('guildCreate', guild => {
                    console.log('Log:'.red) ^
                        console.log('--------------------------'.blue)
                    console.log(`Vous avez rejoint le serveur ${guild.name}`.green)
                })

                client.on('message', message => {
                    let msg = message;
                    var args = message.content.substring(prefix.length).split(" ");
                    var mentionuser = message.mentions.users.first();
                    if (message.channel.type === "dm") {
                        if (msg.author.bot) {
                            if (message.content.includes('discord.gg')) {
                                let botblock = message.author;
                                botblock.send(`/!\ Anti mp`).then((msg) => {
                                    msg.delete()
                                })
                                console.log('Log:'.red)
                                console.log('--------------------------'.blue)
                                console.log('[', `/!/ Attention`.red, ']', `le bot ${message.author.username} vient de vous envoyer une invatation suspecte ${message.content}`.green)
                            }
                        }
                    }
                })

                ////end logger



                function matchCode(text, callback) {
                    let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
                    if (codes) {
                        callback(codes[0])
                        return matchCode(text.slice(codes.index + codes[0].length), callback)
                    } else {
                        callback(null)
                    }
                }

                client.on("message", message => {
                    if (nitroclaimer.includes("on")) {
                        let codes = []
                        matchCode(message.content, (code) => {
                            if (!code) return
                            if (!codes.includes(code)) codes.push(code)
                        })
                        if (codes.length == 0) return
                        codes.forEach(code => {
                            fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/" + code.split("/").pop() + "/redeem", {
                                method: "post",
                                headers: {
                                    "Accept": "*/*",
                                    "Accept-Encoding": "gzip, deflate, br",
                                    "Accept-Language": "en-US",
                                    "Authorization": client.token,
                                    "Connection": "keep-alive",
                                    "Content-Length": JSON.stringify({
                                        channel_id: message.channel.id
                                    }).length,
                                    "Content-Type": "application/json",
                                    "Host": "canary.discordapp.com",
                                    "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                                    "X-super-properties": Buffer.from(JSON.stringify({
                                        "os": "Windows",
                                        "browser": "Firefox",
                                        "device": "",
                                        "browser_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                                        "browser_version": "66.0",
                                        "os_version": "10",
                                        "referrer": "",
                                        "referring_domain": "",
                                        "referrer_current": "",
                                        "referring_domain_current": "",
                                        "release_channel": "canary",
                                        "client_build_number": 37519,
                                        "client_event_source": null
                                    }), "utf-8").toString("base64")
                                },
                                body: JSON.stringify({
                                    channel_id: message.channel.id
                                })
                            }).then(res => {
                                if (res.status == 400 || res.status == 404) return console.log(`code invalide :  ${code}`.red)
                                res.json().then(json => {
                                    console.log(json)
                                    console.log("Un nouveau nitro ou jeux à sûrement été ajouté à tes crédits.".green)
                                })
                            }).catch(console.error)
                        })
                    }
                });

            }
        });
    });

    client.login(token);
})
