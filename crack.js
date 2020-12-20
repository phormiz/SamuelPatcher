// Mettez ça sur true si vous voulez log les Requests
const dev = false

const config = require("./config")
config.premium = "sexsexsexsexsex"


console.log(`\x1b[31m[samuelPatcher]\x1b[0m Ce script va patch le Punchnox Project (vous donne le premium et log toutes les requests pour vous assurer qu'il n'y a pas de token grab).`)

/*
    todo:
        - putenox slt
*/

/** ptn mais fils de pute t'utilises combien de lib différentes pour faire des requests ? */
// slt snekfetch
const snekfetch = require("snekfetch")
const then = snekfetch.prototype.then

snekfetch.prototype.then = async function(resolver, rejector){
    if(dev)console.log(`\x1b[31m[samuelPatcher]\x1b[0m \x1b[33mSnekfetch\x1b[0m ${this.options.method} -> ${this.options.url} &`, this.options.headers, "&", this.options.data)

    
    const url = this.options.url
    const getRequest = (data) => {
        return {
            get body() {
                return data
            },
            raw: Buffer.from(JSON.stringify(data), "utf8"),
            ok: true,
            headers: {
                server: 'Cowboy',
                connection: 'close',
                'x-powered-by': 'Express',
                'access-control-allow-origin': 'http://localhost:8081',
                vary: 'Origin',
                'access-control-allow-headers': 'x-access-token, Origin, Content-Type, Accept',
                'content-type': 'application/json; charset=utf-8',
                'content-length': '27',
                etag: 'W/"1b-DD/SpcKO/VLSM2/B2+3GA0pKwp4"',
                date: 'Sun, 20 Dec 2020 13:52:53 GMT',
                via: '1.1 vegur'
            },
            statusCode: 200,
            statusText: "OK"
        }
    }
    if(url === "https://punchnox-project-api.herokuapp.com/api/update/blackliste") {
        if(dev)console.log(`\x1b[31m[samuelPatcher]\x1b[0m Blocked request... Returning data.`)
        return Promise.resolve(getRequest({ message: "Ip Not found." }))
    }else if(url === "https://punchnox-project-api.herokuapp.com/api/update/blacklisteid"){
        if(dev)console.log(`\x1b[31m[samuelPatcher]\x1b[0m Blocked request... Returning data.`)
        return Promise.resolve(getRequest({ message: "Id Not found." }))
    }else if(url === "https://punchnox-project-api.herokuapp.com/api/logs/connect"){ 
        if(dev)console.log(`\x1b[31m[samuelPatcher]\x1b[0m Blocked request... Returning data.`)
        return Promise.resolve(getRequest({ message: "Successfully connected to the database!" }))
    }

    return then.apply(this, [
        (res) => {
            if(dev)console.log(`\x1b[31m[samuelPatcher]\x1b[0m Request finished: ${this.options.url} ${res.statusCode} ${res.statusText}`, res.body, res.headers)
            if(url === "https://punchnox-project-api.herokuapp.com/api/premium/login"){
                Object.defineProperty(res, "body", {
                    get(){
                        return {
                            message: "key is valid",
                            Reason: "Putenox cracked dsl https://github.com/phormiz/SamuelPatcher"
                        }
                    }
                })
            }else if(url === "https://punchnox-project-api.herokuapp.com/api/team/login"){
                Object.defineProperty(res, "body", {
                    get(){
                        return {
                            message: "key is valid",
                            Serveurinvite: "https://discord.gg/7eFff2A",
                            Name: "Samuel Patcher:tm:",
                            Descriptionteam: "Imagine se faire patch en 2020, la honte.",
                            Image: "https://cdn.discordapp.com/icons/705908350218666117/a_ee0fd2bd4513f3ca1e99df3b214bc3f5.jpg?size=4096",
                            Fondateurid: "711416957718757418",
                            Fondateur: "Thomiz et Phorcys slt",
                            Footer: "Putenox Project - Samuel Patcher be like"
                        }
                    }
                })
            }else if(url === "https://api.ipify.org/?format=json"){
                return getRequest({
                    ip: "133.7.133.7"
                })
            }
            return res
        }, console.error
    ]).then(resolver, rejector)
}

const readline = require("readline")
readline.clearLine = () => {}
readline.clearScreenDown = () => {}
console.clear = () => {}

setTimeout(() => {
    console.log(`\x1b[31m[samuelPatcher]\x1b[0m Lancement du punchnox...`)
    require("./index.js")
    console.log(`\r\x1b[31m[samuelPatcher]\x1b[0m Punchnox patch avec succès !\nRéponse : `)
}, 1000);