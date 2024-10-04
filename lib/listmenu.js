const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
┏❐ Owner Menu 』
┃💫 ${prefix}self 
┃💫 ${prefix}public 
┃💫 ${prefix}join 
┃💫 ${prefix}bctext 
┃💫 ${prefix}poll 
┃💫 ${prefix}bcimage 
┃💫 ${prefix}bcvideo 
┃💫 ${prefix}creategc 
┃💫 ${prefix}setexif 
┃💫 ${prefix}userjid 
┃💫 ${prefix}setbotname 
┃💫 ${prefix}setbotbio 
┃💫 ${prefix}delppbot 
┃💫 ${prefix}shutdown 
┃💫 ${prefix}setppbot 
┃💫 ${prefix}addprem 
┃💫 ${prefix}delprem 
┃💫 ${prefix}addowner 
┃💫 ${prefix}delowner 
┃💫 ${prefix}addvn 
┃💫 ${prefix}delvn 
┃💫 ${prefix}addsticker 
┃💫 ${prefix}delsticker 
┃💫 ${prefix}addimage 
┃💫 ${prefix}delimage 
┃💫 ${prefix}addvideo 
┃💫 ${prefix}delvideo 
┃💫 ${prefix}block 
┃💫 ${prefix}unblock del 
┃💫 ${prefix}leavegc 
┃💫 ${prefix}pushcontact 
┃💫 ${prefix}pushcontactv2 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Group Menu 』
┃💫 ${prefix}antilink 
┃💫 ${prefix}antiwame 
┃💫 ${prefix}grouplink 
┃💫 ${prefix}invite 
┃💫 ${prefix}ephemeral 
┃💫 ${prefix}delete 
┃💫 ${prefix}setppgroup 
┃💫 ${prefix}delppgroup 
┃💫 ${prefix}setname 
┃💫 ${prefix}setdesc 
┃💫 ${prefix}add 
┃💫 ${prefix}kick 
┃💫 ${prefix}promote 
┃💫 ${prefix}demote 
┃💫 ${prefix}hidetag 
┃💫 ${prefix}totag 
┃💫 ${prefix}tagall 
┃💫 ${prefix}editinfo 
┃💫 ${prefix}opentime 
┃💫 ${prefix}closetime 
┃💫 ${prefix}resetlink 
┃💫 ${prefix}getbio 
┃💫 ${prefix}vote 
┃💫 ${prefix}upvote 
┃💫 ${prefix}downvote 
┃💫 ${prefix}checkvote 
┃💫 ${prefix}delvote 
┃💫 ${prefix}autostickergc 
┃💫 ${prefix}antilinkgc 
┃💫 ${prefix}antiwame 
┃💫 ${prefix}antilinkall 
┃💫 ${prefix}antilinktiktok 
┃💫 ${prefix}antilinkfb 
┃💫 ${prefix}antilinktwitter 
┃💫 ${prefix}antilinkig 
┃💫 ${prefix}antlinktg 
┃💫 ${prefix}antilinkytvid 
┃💫 ${prefix}antilinkytch 
┃💫 ${prefix}antivirus 
┃💫 ${prefix}antitoxic 
┃💫 ${prefix}nsfw 
┃💫 ${prefix}react 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Download Menu 』
┃💫 ${prefix}ytsearch 
┃💫 ${prefix}play 
┃💫 ${prefix}ytmp3 
┃💫 ${prefix}ytmp4 
┃💫 ${prefix}google 
┃💫 ${prefix}imdb 
┃💫 ${prefix}weather 
┃💫 ${prefix}wanumber 
┃💫 ${prefix}instaimg 
┃💫 ${prefix}instavid 
┃💫 ${prefix}fbvid 
┃💫 ${prefix}twittervid 
┃💫 ${prefix}telestick 
┃💫 ${prefix}spotify 
┃💫 ${prefix}gitclone 
┃💫 ${prefix}happymod 
┃💫 ${prefix}gdrive 
┃💫 ${prefix}pinterest 
┃💫 ${prefix}ringtone 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Random Video 』
┃💫 ${prefix}tiktokgirl 
┃💫 ${prefix}tiktoknukthy 
┃💫 ${prefix}tiktokkayes 
┃💫 ${prefix}tiktokpanrika 
┃💫 ${prefix}tiktoknotnot 
┃💫 ${prefix}tiktokghea 
┃💫 ${prefix}tiktoksantuy 
┃💫 ${prefix}tiktokbocil 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Stalker 』
┃💫 ${prefix}igstalk 
┃💫 ${prefix}ffstalk 
┃💫 ${prefix}mlstalk 
┃💫 ${prefix}npmstalk 
┃💫 ${prefix}ghstalk 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

–『 OpenAI 』
┃💫 ${prefix}openai 
┃💫 ${prefix}ai 
┃💫 ${prefix}aimage 
┃💫 ${prefix}remini 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Fun Menu 』
┃💫 ${prefix}define 
┃💫 ${prefix}qc 
┃💫 ${prefix}lyrics 
┃💫 ${prefix}suit 
┃💫 ${prefix}math 
┃💫 ${prefix}tictactoe 
┃💫 ${prefix}fact 
┃💫 ${prefix}truth 
┃💫 ${prefix}dare 
┃💫 ${prefix}couple 
┃💫 ${prefix}soulmate 
┃💫 ${prefix}stupidcheck 
┃💫 ${prefix}handsomecheck 
┃💫 ${prefix}uncleancheck 
┃💫 ${prefix}hotcheck 
┃💫 ${prefix}smartcheck 
┃💫 ${prefix}greatcheck 
┃💫 ${prefix}evilcheck 
┃💫 ${prefix}dogcheck 
┃💫 ${prefix}coolcheck 
┃💫 ${prefix}waifucheck 
┃💫 ${prefix}awesomecheck 
┃💫 ${prefix}gaycheck 
┃💫 ${prefix}cutecheck 
┃💫 ${prefix}lesbiancheck 
┃💫 ${prefix}hornycheck 
┃💫 ${prefix}prettycheck 
┃💫 ${prefix}lovelycheck 
┃💫 ${prefix}uglycheck 
┃💫 ${prefix}pick 
┃💫 ${prefix}quotes 
┃💫 ${prefix}can 
┃💫 ${prefix}is 
┃💫 ${prefix}when 
┃💫 ${prefix}where 
┃💫 ${prefix}what 
┃💫 ${prefix}how 
┃💫 ${prefix}rate 
┃💫 ${prefix}cry 
┃💫 ${prefix}kill 
┃💫 ${prefix}hug 
┃💫 ${prefix}pat 
┃💫 ${prefix}lick  
┃💫 ${prefix}kiss 
┃💫 ${prefix}bite 
┃💫 ${prefix}yeet 
┃💫 ${prefix}bully 
┃💫 ${prefix}bonk 
┃💫 ${prefix}wink 
┃💫 ${prefix}poke 
┃💫 ${prefix}nom 
┃💫 ${prefix}slap 
┃💫 ${prefix}smile  
┃💫 ${prefix}wave 
┃💫 ${prefix}awoo 
┃💫 ${prefix}blush 
┃💫 ${prefix}smug 
┃💫 ${prefix}glomp  
┃💫 ${prefix}happy 
┃💫 ${prefix}dance 
┃💫 ${prefix}cringe 
┃💫 ${prefix}cuddle 
┃💫 ${prefix}highfive  
┃💫 ${prefix}shinobu 
┃💫 ${prefix}handhold 
┃💫 ${prefix}spank 
┃💫 ${prefix}tickle 
┃💫 ${prefix}avatar 
┃💫 ${prefix}feed 
┃💫 ${prefix}foxgirl 
┃💫 ${prefix}gecg 
┃💫 ${prefix}checkme 
┃💫 ${prefix}sound1 - sound161 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Random Photo 』
┃💫 ${prefix}aesthetic 
┃💫 ${prefix}coffee 
┃💫 ${prefix}wikimedia 
┃💫 ${prefix}wallpaper 
┃💫 ${prefix}art 
┃💫 ${prefix}bts 
┃💫 ${prefix}dogwoof 
┃💫 ${prefix}catmeow 
┃💫 ${prefix}lizardpic 
┃💫 ${prefix}goosebird 
┃💫 ${prefix}8ballpool 
┃💫 ${prefix}cosplay 
┃💫 ${prefix}hacker 
┃💫 ${prefix}cyber 
┃💫 ${prefix}gamewallpaper 
┃💫 ${prefix}islamic 
┃💫 ${prefix}jennie 
┃💫 ${prefix}jiso 
┃💫 ${prefix}satanic 
┃💫 ${prefix}justina 
┃💫 ${prefix}cartoon 
┃💫 ${prefix}pentol 
┃💫 ${prefix}cat 
┃💫 ${prefix}kpop 
┃💫 ${prefix}exo 
┃💫 ${prefix}lisa 
┃💫 ${prefix}space 
┃💫 ${prefix}car 
┃💫 ${prefix}technology 
┃💫 ${prefix}bike 
┃💫 ${prefix}shortquote 
┃💫 ${prefix}antiwork 
┃💫 ${prefix}hacking 
┃💫 ${prefix}boneka 
┃💫 ${prefix}rose 
┃💫 ${prefix}ryujin 
┃💫 ${prefix}ulzzangboy 
┃💫 ${prefix}ulzzanggirl 
┃💫 ${prefix}wallml 
┃💫 ${prefix}wallphone 
┃💫 ${prefix}mountain 
┃💫 ${prefix}goose 
┃💫 ${prefix}profilepic 
┃💫 ${prefix}couplepic 
┃💫 ${prefix}programming 
┃💫 ${prefix}pubg 
┃💫 ${prefix}blackpink 
┃💫 ${prefix}randomboy   
┃💫 ${prefix}randomgirl 
┃💫 ${prefix}hijab   
┃💫 ${prefix}chinese 
┃💫 ${prefix}indo 
┃💫 ${prefix}japanese 
┃💫 ${prefix}korean 
┃💫 ${prefix}malay 
┃💫 ${prefix}thai 
┃💫 ${prefix}vietnamese 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Sticker 』
┃💫 ${prefix}goose 
┃💫 ${prefix}woof 
┃💫 ${prefix}8ball 
┃💫 ${prefix}lizard 
┃💫 ${prefix}meow 
┃💫 ${prefix}gura 
┃💫 ${prefix}doge 
┃💫 ${prefix}patrick 
┃💫 ${prefix}lovestick 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Anime 』
┃💫 ${prefix}akira 
┃💫 ${prefix}akiyama 
┃💫 ${prefix}ana 
┃💫 ${prefix}asuna 
┃💫 ${prefix}ayuzawa 
┃💫 ${prefix}boruto 
┃💫 ${prefix}chiho 
┃💫 ${prefix}chitoge 
┃💫 ${prefix}cosplayloli 
┃💫 ${prefix}cosplaysagiri 
┃💫 ${prefix}deidara 
┃💫 ${prefix}doraemon 
┃💫 ${prefix}elaina 
┃💫 ${prefix}emilia 
┃💫 ${prefix}erza 
┃💫 ${prefix}gremory 
┃💫 ${prefix}hestia 
┃💫 ${prefix}hinata 
┃💫 ${prefix}husbu 
┃💫 ${prefix}inori 
┃💫 ${prefix}isuzu 
┃💫 ${prefix}itachi 
┃💫 ${prefix}itori 
┃💫 ${prefix}kaga 
┃💫 ${prefix}kagura 
┃💫 ${prefix}kakasih 
┃💫 ${prefix}kaori 
┃💫 ${prefix}keneki 
┃💫 ${prefix}kotori 
┃💫 ${prefix}kurumi 
┃💫 ${prefix}loli 
┃💫 ${prefix}madara 
┃💫 ${prefix}megumin 
┃💫 ${prefix}mikasa 
┃💫 ${prefix}mikey 
┃💫 ${prefix}miku 
┃💫 ${prefix}minato 
┃💫 ${prefix}naruto 
┃💫 ${prefix}neko 
┃💫 ${prefix}neko2 
┃💫 ${prefix}nekonime 
┃💫 ${prefix}nezuko 
┃💫 ${prefix}onepiece 
┃💫 ${prefix}pokemon 
┃💫 ${prefix}randomnime 
┃💫 ${prefix}randomnime2 
┃💫 ${prefix}rize 
┃💫 ${prefix}sagiri 
┃💫 ${prefix}sakura 
┃💫 ${prefix}sasuke 
┃💫 ${prefix}shina 
┃💫 ${prefix}shinka 
┃💫 ${prefix}shinomiya 
┃💫 ${prefix}shizuka 
┃💫 ${prefix}shota 
┃💫 ${prefix}tejina 
┃💫 ${prefix}toukachan 
┃💫 ${prefix}tsunade 
┃💫 ${prefix}waifu 
┃💫 ${prefix}animewall 
┃💫 ${prefix}yotsuba 
┃💫 ${prefix}yuki 
┃💫 ${prefix}yulibocil 
┃💫 ${prefix}yumeko 
┃💫 ${prefix}8ball 
┃💫 ${prefix}tickle 
┃💫 ${prefix}gecg 
┃💫 ${prefix}feed 
┃💫 ${prefix}animeawoo 
┃💫 ${prefix}animemegumin 
┃💫 ${prefix}animeshinobu 
┃💫 ${prefix}animehandhold 
┃💫 ${prefix}animehighfive 
┃💫 ${prefix}animecringe 
┃💫 ${prefix}animedance 
┃💫 ${prefix}animehappy 
┃💫 ${prefix}animeglomp 
┃💫 ${prefix}animeblush 
┃💫 ${prefix}animesmug 
┃💫 ${prefix}animewave 
┃💫 ${prefix}animesmille 
┃💫 ${prefix}animepoke 
┃💫 ${prefix}animewink 
┃💫 ${prefix}animebonk 
┃💫 ${prefix}animebully 
┃💫 ${prefix}animeyeet 
┃💫 ${prefix}animebite 
┃💫 ${prefix}animelick 
┃💫 ${prefix}animekill 
┃💫 ${prefix}animecry 
┃💫 ${prefix}animewlp 
┃💫 ${prefix}animekiss 
┃💫 ${prefix}animehug 
┃💫 ${prefix}animeneko 
┃💫 ${prefix}animepat 
┃💫 ${prefix}animeslap 
┃💫 ${prefix}animecuddle 
┃💫 ${prefix}animewaifu 
┃💫 ${prefix}animenom 
┃💫 ${prefix}animefoxgirl 
┃💫 ${prefix}animegecg 
┃💫 ${prefix}animetickle 
┃💫 ${prefix}animefeed 
┃💫 ${prefix}animeavatar 
┃💫 ${prefix}genshin 
┃💫 ${prefix}anime 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Anime NSFW 』
┃💫 ${prefix}hentai 
┃💫 ${prefix}gifhentai 
┃💫 ${prefix}gifblowjob 
┃💫 ${prefix}hentaivid 
┃💫 ${prefix}hneko 
┃💫 ${prefix}nwaifu 
┃💫 ${prefix}animespank 
┃💫 ${prefix}trap 
┃💫 ${prefix}gasm 
┃💫 ${prefix}ahegao 
┃💫 ${prefix}ass 
┃💫 ${prefix}bdsm 
┃💫 ${prefix}blowjob 
┃💫 ${prefix}cuckold 
┃💫 ${prefix}cum 
┃💫 ${prefix}milf 
┃💫 ${prefix}eba 
┃💫 ${prefix}ero 
┃💫 ${prefix}femdom 
┃💫 ${prefix}foot 
┃💫 ${prefix}gangbang 
┃💫 ${prefix}glasses 
┃💫 ${prefix}jahy 
┃💫 ${prefix}masturbation 
┃💫 ${prefix}manga 
┃💫 ${prefix}neko-hentai 
┃💫 ${prefix}neko-hentai2 
┃💫 ${prefix}nsfwloli 
┃💫 ${prefix}orgy 
┃💫 ${prefix}panties  
┃💫 ${prefix}pussy 
┃💫 ${prefix}tentacles 
┃💫 ${prefix}thighs 
┃💫 ${prefix}yuri 
┃💫 ${prefix}zettai 
┃💫 ${prefix}xnxxsearch 
┃💫 ${prefix}xnxxdl 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Textpro Maker 』
┃💫 ${prefix}candy  
┃💫 ${prefix}christmas  
┃💫 ${prefix}3dchristmas  
┃💫 ${prefix}sparklechristmas 
┃💫 ${prefix}deepsea  
┃💫 ${prefix}scifi  
┃💫 ${prefix}rainbow  
┃💫 ${prefix}waterpipe  
┃💫 ${prefix}spooky  
┃💫 ${prefix}pencil  
┃💫 ${prefix}circuit  
┃💫 ${prefix}discovery  
┃💫 ${prefix}metalic  
┃💫 ${prefix}fiction  
┃💫 ${prefix}demon  
┃💫 ${prefix}transformer  
┃💫 ${prefix}berry  
┃💫 ${prefix}thunder  
┃💫 ${prefix}magma  
┃💫 ${prefix}3dstone  
┃💫 ${prefix}neonlight  
┃💫 ${prefix}glitch  
┃💫 ${prefix}harrypotter  
┃💫 ${prefix}brokenglass  
┃💫 ${prefix}papercut  
┃💫 ${prefix}watercolor  
┃💫 ${prefix}multicolor  
┃💫 ${prefix}neondevil  
┃💫 ${prefix}underwater  
┃💫 ${prefix}graffitibike 
┃💫 ${prefix}snow  
┃💫 ${prefix}cloud  
┃💫 ${prefix}honey  
┃💫 ${prefix}ice  
┃💫 ${prefix}fruitjuice  
┃💫 ${prefix}biscuit  
┃💫 ${prefix}wood  
┃💫 ${prefix}chocolate  
┃💫 ${prefix}strawberry  
┃💫 ${prefix}matrix  
┃💫 ${prefix}blood  
┃💫 ${prefix}dropwater  
┃💫 ${prefix}toxic  
┃💫 ${prefix}lava  
┃💫 ${prefix}rock  
┃💫 ${prefix}bloodglas  
┃💫 ${prefix}hallowen  
┃💫 ${prefix}darkgold  
┃💫 ${prefix}joker  
┃💫 ${prefix}wicker 
┃💫 ${prefix}firework  
┃💫 ${prefix}skeleton  
┃💫 ${prefix}blackpink  
┃💫 ${prefix}sand  
┃💫 ${prefix}glue  
┃💫 ${prefix}1917  
┃💫 ${prefix}leaves 
┃💫 ${prefix}retro 
┃💫 ${prefix}pornhub 
┃💫 ${prefix}8bit 
┃💫 ${prefix}batman 
┃💫 ${prefix}3dbox 
┃💫 ${prefix}lion 
┃💫 ${prefix}3davengers 
┃💫 ${prefix}window 
┃💫 ${prefix}3dspace 
┃💫 ${prefix}bokeh 
┃💫 ${prefix}holographic 
┃💫 ${prefix}thewall 
┃💫 ${prefix}carbon 
┃💫 ${prefix}whitebear 
┃💫 ${prefix}metallic 
┃💫 ${prefix}steel 
┃💫 ${prefix}fabric 
┃💫 ${prefix}ancient 
┃💫 ${prefix}marvel 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ PhotoOxy Maker 』
┃💫 ${prefix}shadow  
┃💫 ${prefix}write  
┃💫 ${prefix}romantic  
┃💫 ${prefix}burnpaper 
┃💫 ${prefix}smoke  
┃💫 ${prefix}narutobanner  
┃💫 ${prefix}love  
┃💫 ${prefix}undergrass 
┃💫 ${prefix}doublelove  
┃💫 ${prefix}coffecup 
┃💫 ${prefix}underwaterocean 
┃💫 ${prefix}smokyneon 
┃💫 ${prefix}starstext 
┃💫 ${prefix}rainboweffect 
┃💫 ${prefix}balloontext 
┃💫 ${prefix}metalliceffect 
┃💫 ${prefix}embroiderytext 
┃💫 ${prefix}flamingtext 
┃💫 ${prefix}stonetext 
┃💫 ${prefix}writeart 
┃💫 ${prefix}summertext 
┃💫 ${prefix}wolfmetaltext 
┃💫 ${prefix}nature3dtext 
┃💫 ${prefix}rosestext 
┃💫 ${prefix}naturetypography 
┃💫 ${prefix}quotesunder 
┃💫 ${prefix}shinetext 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Ephoto360 Maker 』
┃💫 ${prefix}glitchtext 
┃💫 ${prefix}writetext 
┃💫 ${prefix}advancedglow 
┃💫 ${prefix}typographytext 
┃💫 ${prefix}pixelglitch 
┃💫 ${prefix}neonglitch 
┃💫 ${prefix}flagtext 
┃💫 ${prefix}flag3dtext 
┃💫 ${prefix}deletingtext 
┃💫 ${prefix}blackpinkstyle 
┃💫 ${prefix}glowingtext 
┃💫 ${prefix}underwatertext 
┃💫 ${prefix}logomaker 
┃💫 ${prefix}cartoonstyle 
┃💫 ${prefix}papercutstyle 
┃💫 ${prefix}watercolortext 
┃💫 ${prefix}effectclouds 
┃💫 ${prefix}blackpinklogo 
┃💫 ${prefix}gradienttext 
┃💫 ${prefix}summerbeach 
┃💫 ${prefix}luxurygold 
┃💫 ${prefix}multicoloredneon 
┃💫 ${prefix}sandsummer 
┃💫 ${prefix}galaxywallpaper 
┃💫 ${prefix}1917style 
┃💫 ${prefix}makingneon 
┃💫 ${prefix}royaltext 
┃💫 ${prefix}freecreate 
┃💫 ${prefix}galaxystyle 
┃💫 ${prefix}lighteffects 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Database 』
┃💫 ${prefix}setcmd 
┃💫 ${prefix}delcmd 
┃💫 ${prefix}listcmd 
┃💫 ${prefix}lockcmd 
┃💫 ${prefix}addmsg 
┃💫 ${prefix}delmsg 
┃💫 ${prefix}getmsg 
┃💫 ${prefix}listmsg 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Bug & War 』
┃💫 ${prefix}resetotp 
┃💫 ${prefix}xbugp 
┃💫 ${prefix}xbugr 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐

┏❐ Other Menu 』
┃💫 ${prefix}ping 
┃💫 ${prefix}menu 
┃💫 ${prefix}myip 
┃💫 ${prefix}reportbug 
┃💫 ${prefix}listpem 
┃💫 ${prefix}liststicker 
┃💫 ${prefix}listimage 
┃💫 ${prefix}listvideo 
┃💫 ${prefix}listvn 
┃💫 ${prefix}listbadword 
┃💫 ${prefix}listpc 
┃💫 ${prefix}listgc 
┃💫 ${prefix}owner 
┃💫 ${prefix}rentbot 
┃💫 ${prefix}listrentbot 
┃💫 ${prefix}donate 
┃💫 ${prefix}friend 
┃💫 ${prefix}obfuscate 
┃💫 ${prefix}styletext 
┃💫 ${prefix}fliptext 
┃💫 ${prefix}tts 
┃💫 ${prefix}say 
┃💫 ${prefix}togif 
┃💫 ${prefix}toqr 
┃💫 ${prefix}bass 
┃💫 ${prefix}blown 
┃💫 ${prefix}deep 
┃💫 ${prefix}earrape 
┃💫 ${prefix}fast 
┃💫 ${prefix}fat 
┃💫 ${prefix}nightcore 
┃💫 ${prefix}reverse 
┃💫 ${prefix}robot 
┃💫 ${prefix}slow 
┃💫 ${prefix}smooth 
┃💫 ${prefix}squirrel 
┃💫 ${prefix}tinyurl 
┃💫 ${prefix}tinyurl 
┃💫 ${prefix}tovn 
┃💫 ${prefix}toaudio 
┃💫 ${prefix}tomp3 
┃💫 ${prefix}tomp4
┃💫 ${prefix}toimg 
┃💫 ${prefix}toonce 
┃💫 ${prefix}sticker 
┃💫 ${prefix}take 
┃💫 ${prefix}emoji 
┃💫 ${prefix}volume 
┃💫 ${prefix}ebinary 
┃💫 ${prefix}dbinary 
┃💫 ${prefix}ssweb 
┃💫 ${prefix}quoted 
┃💫 ${prefix}runtime 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.animemenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Anime 』
┃💫 ${prefix}akira 
┃💫 ${prefix}akiyama 
┃💫 ${prefix}ana ??
┃💫 ${prefix}asuna 
┃💫 ${prefix}ayuzawa 
┃💫 ${prefix}boruto 
┃💫 ${prefix}chiho 
┃💫 ${prefix}chitoge 
┃💫 ${prefix}cosplayloli 
┃💫 ${prefix}cosplaysagiri 
┃💫 ${prefix}deidara 
┃💫 ${prefix}doraemon 
┃💫 ${prefix}elaina 
┃💫 ${prefix}emilia 
┃💫 ${prefix}erza 
┃💫 ${prefix}gremory 
┃💫 ${prefix}hestia 
┃💫 ${prefix}hinata 
┃💫 ${prefix}husbu 
┃💫 ${prefix}inori 
┃💫 ${prefix}isuzu 
┃💫 ${prefix}itachi 
┃💫 ${prefix}itori 
┃💫 ${prefix}kaga 
┃💫 ${prefix}kagura 
┃💫 ${prefix}kakasih 
┃💫 ${prefix}kaori 
┃💫 ${prefix}keneki 
┃💫 ${prefix}kotori 
┃💫 ${prefix}kurumi 
┃💫 ${prefix}loli 
┃💫 ${prefix}madara 
┃💫 ${prefix}megumin 
┃💫 ${prefix}mikasa 
┃💫 ${prefix}mikey 
┃💫 ${prefix}miku 
┃💫 ${prefix}minato 
┃💫 ${prefix}naruto 
┃💫 ${prefix}neko 
┃💫 ${prefix}neko2 
┃💫 ${prefix}nekonime 
┃💫 ${prefix}nezuko 
┃💫 ${prefix}onepiece 
┃💫 ${prefix}pokemon 
┃💫 ${prefix}randomnime 
┃💫 ${prefix}randomnime2 
┃💫 ${prefix}rize 
┃💫 ${prefix}sagiri 
┃💫 ${prefix}sakura 
┃💫 ${prefix}sasuke 
┃💫 ${prefix}shina 
┃💫 ${prefix}shinka 
┃💫 ${prefix}shinomiya 
┃💫 ${prefix}shizuka 
┃💫 ${prefix}shota 
┃💫 ${prefix}tejina 
┃💫 ${prefix}toukachan 
┃💫 ${prefix}tsunade 
┃💫 ${prefix}waifu 
┃💫 ${prefix}animewall 
┃💫 ${prefix}yotsuba 
┃💫 ${prefix}yuki 
┃💫 ${prefix}yulibocil 
┃💫 ${prefix}yumeko 
┃💫 ${prefix}8ball 
┃💫 ${prefix}tickle 
┃💫 ${prefix}gecg 
┃💫 ${prefix}feed 
┃💫 ${prefix}animeawoo 
┃💫 ${prefix}animemegumin 
┃💫 ${prefix}animeshinobu 
┃💫 ${prefix}animehandhold 
┃💫 ${prefix}animehighfive 
┃💫 ${prefix}animecringe 
┃💫 ${prefix}animedance 
┃💫 ${prefix}animehappy 
┃💫 ${prefix}animeglomp 
┃💫 ${prefix}animeblush 
┃💫 ${prefix}animesmug 
┃💫 ${prefix}animewave 
┃💫 ${prefix}animesmille 
┃💫 ${prefix}animepoke 
┃💫 ${prefix}animewink 
┃💫 ${prefix}animebonk 
┃💫 ${prefix}animebully 
┃💫 ${prefix}animeyeet 
┃💫 ${prefix}animebite 
┃💫 ${prefix}animelick 
┃💫 ${prefix}animekill 
┃💫 ${prefix}animecry 
┃💫 ${prefix}animewlp 
┃💫 ${prefix}animekiss 
┃💫 ${prefix}animehug 
┃💫 ${prefix}animeneko 
┃💫 ${prefix}animepat 
┃💫 ${prefix}animeslap 
┃💫 ${prefix}animecuddle 
┃💫 ${prefix}animewaifu 
┃💫 ${prefix}animenom 
┃💫 ${prefix}animefoxgirl 
┃💫 ${prefix}animegecg 
┃💫 ${prefix}animetickle 
┃💫 ${prefix}animefeed 
┃💫 ${prefix}animeavatar 
┃💫 ${prefix}genshin 
┃💫 ${prefix}anime 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.ownermenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Owner Menu 』
┃💫 ${prefix}self 
┃💫 ${prefix}public 
┃💫 ${prefix}join 
┃💫 ${prefix}bctext 
┃💫 ${prefix}poll 
┃💫 ${prefix}bcimage 
┃💫 ${prefix}bcvideo 
┃💫 ${prefix}creategc 
┃💫 ${prefix}userjid 
┃💫 ${prefix}setexif 
┃💫 ${prefix}setbotname 
┃💫 ${prefix}setbotbio 
┃💫 ${prefix}delppbot 
┃💫 ${prefix}shutdown 
┃💫 ${prefix}setppbot 
┃💫 ${prefix}addprem 
┃💫 ${prefix}delprem 
┃💫 ${prefix}addowner 
┃💫 ${prefix}delowner 
┃💫 ${prefix}addvn 
┃💫 ${prefix}delvn 
┃💫 ${prefix}addsticker 
┃💫 ${prefix}delsticker 
┃💫 ${prefix}addimage 
┃💫 ${prefix}delimage 
┃💫 ${prefix}addvideo 
┃💫 ${prefix}delvideo 
┃💫 ${prefix}block 
┃💫 ${prefix}unblock del 
┃💫 ${prefix}leavegc 
┃💫 ${prefix}pushcontact 
┃💫 ${prefix}pushcontactv2 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.othermenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Other Menu 』
┃💫 ${prefix}ping 
┃💫 ${prefix}menu 
┃💫 ${prefix}myip 
┃💫 ${prefix}reportbug 
┃💫 ${prefix}listpem 
┃💫 ${prefix}liststicker 
┃💫 ${prefix}listimage 
┃💫 ${prefix}listvideo 
┃💫 ${prefix}listvn 
┃💫 ${prefix}listbadword 
┃💫 ${prefix}listpc 
┃💫 ${prefix}listgc 
┃💫 ${prefix}owner 
┃💫 ${prefix}rentbot 
┃💫 ${prefix}listrentbot 
┃💫 ${prefix}donate 
┃💫 ${prefix}friend 
┃💫 ${prefix}obfuscate 
┃💫 ${prefix}styletext 
┃💫 ${prefix}fliptext 
┃💫 ${prefix}tts 
┃💫 ${prefix}say 
┃💫 ${prefix}togif 
┃💫 ${prefix}toqr 
┃💫 ${prefix}bass 
┃💫 ${prefix}blown 
┃💫 ${prefix}deep 
┃💫 ${prefix}earrape 
┃💫 ${prefix}fast 
┃💫 ${prefix}fat 
┃💫 ${prefix}nightcore 
┃💫 ${prefix}reverse 
┃💫 ${prefix}robot 
┃💫 ${prefix}slow 
┃💫 ${prefix}smooth 
┃💫 ${prefix}squirrel 
┃💫 ${prefix}tinyurl 
┃💫 ${prefix}tinyurl 
┃💫 ${prefix}tovn 
┃💫 ${prefix}toaudio 
┃💫 ${prefix}tomp3 
┃💫 ${prefix}tomp4
┃💫 ${prefix}toimg 
┃💫 ${prefix}toonce 
┃💫 ${prefix}sticker 
┃💫 ${prefix}take 
┃💫 ${prefix}emoji 
┃💫 ${prefix}volume 
┃💫 ${prefix}ebinary 
┃💫 ${prefix}dbinary 
┃💫 ${prefix}ssweb 
┃💫 ${prefix}quoted 
┃💫 ${prefix}runtime 
┃💫 ${prefix}sound1 - sound161 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.downloadmenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Download Menu 』
┃💫 ${prefix}ytsearch 
┃💫 ${prefix}play 
┃💫 ${prefix}ytmp3 
┃💫 ${prefix}ytmp4 
┃💫 ${prefix}google 
┃💫 ${prefix}imdb 
┃💫 ${prefix}weather 
┃💫 ${prefix}wanumber 
┃💫 ${prefix}instaimg 
┃💫 ${prefix}instavid 
┃💫 ${prefix}fbvid 
┃💫 ${prefix}twittervid 
┃💫 ${prefix}telestick 
┃💫 ${prefix}spotify 
┃💫 ${prefix}gitclone 
┃💫 ${prefix}happymod 
┃💫 ${prefix}gdrive 
┃💫 ${prefix}pinterest 
┃💫 ${prefix}ringtone 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.groupmenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Group Menu 』
┃💫 ${prefix}antilink 
┃💫 ${prefix}antiwame 
┃💫 ${prefix}grouplink 
┃💫 ${prefix}invite 
┃💫 ${prefix}ephemeral 
┃💫 ${prefix}delete 
┃💫 ${prefix}setppgroup 
┃💫 ${prefix}delppgroup 
┃💫 ${prefix}setname 
┃💫 ${prefix}setdesc 
┃💫 ${prefix}add 
┃💫 ${prefix}kick 
┃💫 ${prefix}promote 
┃💫 ${prefix}demote 
┃💫 ${prefix}hidetag 
┃💫 ${prefix}totag 
┃💫 ${prefix}tagall 
┃💫 ${prefix}editinfo 
┃💫 ${prefix}opentime 
┃💫 ${prefix}closetime 
┃💫 ${prefix}resetlink 
┃💫 ${prefix}getbio 
┃💫 ${prefix}vote 
┃💫 ${prefix}upvote 
┃💫 ${prefix}downvote 
┃💫 ${prefix}checkvote 
┃💫 ${prefix}delvote 
┃💫 ${prefix}autostickergc 
┃💫 ${prefix}antilinkgc 
┃💫 ${prefix}antiwame 
┃💫 ${prefix}antilinkall 
┃💫 ${prefix}antilinktiktok 
┃💫 ${prefix}antilinkfb 
┃💫 ${prefix}antilinktwitter 
┃💫 ${prefix}antilinkig 
┃💫 ${prefix}antlinktg 
┃💫 ${prefix}antilinkytvid 
┃💫 ${prefix}antilinkytch 
┃💫 ${prefix}antivirus 
┃💫 ${prefix}antitoxic 
┃💫 ${prefix}nsfw 
┃💫 ${prefix}react 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.funmenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Fun Menu 』
┃💫 ${prefix}define 
┃💫 ${prefix}qc 
┃💫 ${prefix}lyrics 
┃💫 ${prefix}tictactoe 
┃💫 ${prefix}suit 
┃💫 ${prefix}math 
┃💫 ${prefix}fact 
┃💫 ${prefix}truth 
┃💫 ${prefix}dare 
┃💫 ${prefix}couple 
┃💫 ${prefix}soulmate 
┃💫 ${prefix}stupidcheck 
┃💫 ${prefix}handsomecheck 
┃💫 ${prefix}uncleancheck 
┃💫 ${prefix}hotcheck 
┃💫 ${prefix}smartcheck 
┃💫 ${prefix}greatcheck 
┃💫 ${prefix}evilcheck 
┃💫 ${prefix}dogcheck 
┃💫 ${prefix}coolcheck 
┃💫 ${prefix}waifucheck 
┃💫 ${prefix}awesomecheck 
┃💫 ${prefix}gaycheck 
┃💫 ${prefix}cutecheck 
┃💫 ${prefix}lesbiancheck 
┃💫 ${prefix}hornycheck 
┃💫 ${prefix}prettycheck 
┃💫 ${prefix}lovelycheck 
┃💫 ${prefix}uglycheck 
┃💫 ${prefix}pick 
┃💫 ${prefix}quotes 
┃💫 ${prefix}can 
┃💫 ${prefix}is 
┃💫 ${prefix}when 
┃💫 ${prefix}where 
┃💫 ${prefix}what 
┃💫 ${prefix}how 
┃💫 ${prefix}rate 
┃💫 ${prefix}cry 
┃💫 ${prefix}kill 
┃💫 ${prefix}hug 
┃💫 ${prefix}pat 
┃💫 ${prefix}lick  
┃💫 ${prefix}kiss 
┃💫 ${prefix}bite 
┃💫 ${prefix}yeet 
┃💫 ${prefix}bully 
┃💫 ${prefix}bonk 
┃💫 ${prefix}wink 
┃💫 ${prefix}poke 
┃💫 ${prefix}nom 
┃💫 ${prefix}slap 
┃💫 ${prefix}smile  
┃💫 ${prefix}wave 
┃💫 ${prefix}awoo 
┃💫 ${prefix}blush 
┃💫 ${prefix}smug 
┃💫 ${prefix}glomp  
┃💫 ${prefix}happy 
┃💫 ${prefix}dance 
┃💫 ${prefix}cringe 
┃💫 ${prefix}cuddle 
┃💫 ${prefix}highfive  
┃💫 ${prefix}shinobu 
┃💫 ${prefix}handhold 
┃💫 ${prefix}spank 
┃💫 ${prefix}tickle 
┃💫 ${prefix}avatar 
┃💫 ${prefix}feed 
┃💫 ${prefix}foxgirl 
┃💫 ${prefix}gecg 
┃💫 ${prefix}checkme 
┃💫 ${prefix}sound1 - sound161 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.stalkermenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Stalker 』
┃💫 ${prefix}igstalk 
┃💫 ${prefix}ffstalk 
┃💫 ${prefix}mlstalk 
┃💫 ${prefix}npmstalk 
┃💫 ${prefix}ghstalk 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.stickermenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Sticker 』
┃💫 ${prefix}goose 
┃💫 ${prefix}woof 
┃💫 ${prefix}8ball 
┃💫 ${prefix}lizard 
┃💫 ${prefix}meow 
┃💫 ${prefix}gura 
┃💫 ${prefix}doge 
┃💫 ${prefix}patrick 
┃💫 ${prefix}lovestick 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.databasemenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Database 』
┃💫 ${prefix}setcmd 
┃💫 ${prefix}delcmd 
┃💫 ${prefix}listcmd 
┃💫 ${prefix}lockcmd 
┃💫 ${prefix}addmsg 
┃💫 ${prefix}delmsg 
┃💫 ${prefix}getmsg 
┃💫 ${prefix}listmsg 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.aimenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ OpenAI 』
┃💫 ${prefix}openai 
┃💫 ${prefix}ai 
┃💫 ${prefix}aimage 
┃💫 ${prefix}remini 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.bugmenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Bug & War 』
┃💫 ${prefix}resetotp 
┃💫 ${prefix}xbugp 
┃💫 ${prefix}xbugr 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.randphotomenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Random Photo 』
┃💫 ${prefix}aesthetic 
┃💫 ${prefix}coffee 
┃💫 ${prefix}wikimedia 
┃💫 ${prefix}wallpaper 
┃💫 ${prefix}art 
┃💫 ${prefix}bts 
┃💫 ${prefix}dogwoof 
┃💫 ${prefix}catmeow 
┃💫 ${prefix}lizardpic 
┃💫 ${prefix}goosebird 
┃💫 ${prefix}8ballpool 
┃💫 ${prefix}cosplay 
┃💫 ${prefix}hacker 
┃💫 ${prefix}cyber 
┃💫 ${prefix}gamewallpaper 
┃💫 ${prefix}islamic 
┃💫 ${prefix}jennie 
┃💫 ${prefix}jiso 
┃💫 ${prefix}satanic 
┃💫 ${prefix}justina 
┃💫 ${prefix}cartoon 
┃💫 ${prefix}pentol 
┃💫 ${prefix}cat 
┃💫 ${prefix}kpop 
┃💫 ${prefix}exo 
┃💫 ${prefix}lisa 
┃💫 ${prefix}space 
┃💫 ${prefix}car 
┃💫 ${prefix}technology 
┃💫 ${prefix}bike 
┃💫 ${prefix}shortquote 
┃💫 ${prefix}antiwork 
┃💫 ${prefix}hacking 
┃💫 ${prefix}boneka 
┃💫 ${prefix}rose 
┃💫 ${prefix}ryujin 
┃💫 ${prefix}ulzzangboy 
┃💫 ${prefix}ulzzanggirl 
┃💫 ${prefix}wallml 
┃💫 ${prefix}wallphone 
┃💫 ${prefix}mountain 
┃💫 ${prefix}goose 
┃💫 ${prefix}profilepic 
┃💫 ${prefix}couplepic 
┃💫 ${prefix}programming 
┃💫 ${prefix}pubg 
┃💫 ${prefix}blackpink 
┃💫 ${prefix}randomboy   
┃💫 ${prefix}randomgirl 
┃💫 ${prefix}hijab   
┃💫 ${prefix}chinese 
┃💫 ${prefix}indo 
┃💫 ${prefix}japanese 
┃💫 ${prefix}korean 
┃💫 ${prefix}malay 
┃💫 ${prefix}thai 
┃💫 ${prefix}vietnamese 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.randvideomenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Random Video 』
┃💫 ${prefix}tiktokgirl 
┃💫 ${prefix}tiktoknukthy 
┃💫 ${prefix}tiktokkayes 
┃💫 ${prefix}tiktokpanrika 
┃💫 ${prefix}tiktoknotnot 
┃💫 ${prefix}tiktokghea 
┃💫 ${prefix}tiktoksantuy 
┃💫 ${prefix}tiktokbocil 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.textpromenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Textpro Maker 』
┃💫 ${prefix}candy  
┃💫 ${prefix}christmas  
┃💫 ${prefix}3dchristmas  
┃💫 ${prefix}sparklechristmas 
┃💫 ${prefix}deepsea  
┃💫 ${prefix}scifi  
┃💫 ${prefix}rainbow  
┃💫 ${prefix}waterpipe  
┃💫 ${prefix}spooky  
┃💫 ${prefix}pencil  
┃💫 ${prefix}circuit  
┃💫 ${prefix}discovery  
┃💫 ${prefix}metalic  
┃💫 ${prefix}fiction  
┃💫 ${prefix}demon  
┃💫 ${prefix}transformer  
┃💫 ${prefix}berry  
┃💫 ${prefix}thunder  
┃💫 ${prefix}magma  
┃💫 ${prefix}3dstone  
┃💫 ${prefix}neonlight  
┃💫 ${prefix}glitch  
┃💫 ${prefix}harrypotter  
┃💫 ${prefix}brokenglass  
┃💫 ${prefix}papercut  
┃💫 ${prefix}watercolor  
┃💫 ${prefix}multicolor  
┃💫 ${prefix}neondevil  
┃💫 ${prefix}underwater  
┃💫 ${prefix}graffitibike 
┃💫 ${prefix}snow  
┃💫 ${prefix}cloud  
┃💫 ${prefix}honey  
┃💫 ${prefix}ice  
┃💫 ${prefix}fruitjuice  
┃💫 ${prefix}biscuit  
┃💫 ${prefix}wood  
┃💫 ${prefix}chocolate  
┃💫 ${prefix}strawberry  
┃💫 ${prefix}matrix  
┃💫 ${prefix}blood  
┃💫 ${prefix}dropwater  
┃💫 ${prefix}toxic  
┃💫 ${prefix}lava  
┃💫 ${prefix}rock  
┃💫 ${prefix}bloodglas  
┃💫 ${prefix}hallowen  
┃💫 ${prefix}darkgold  
┃💫 ${prefix}joker  
┃💫 ${prefix}wicker 
┃💫 ${prefix}firework  
┃💫 ${prefix}skeleton  
┃💫 ${prefix}blackpink  
┃💫 ${prefix}sand  
┃💫 ${prefix}glue  
┃💫 ${prefix}1917  
┃💫 ${prefix}leaves 
┃💫 ${prefix}retro 
┃💫 ${prefix}pornhub 
┃💫 ${prefix}8bit 
┃💫 ${prefix}batman 
┃💫 ${prefix}3dbox 
┃💫 ${prefix}lion 
┃💫 ${prefix}3davengers 
┃💫 ${prefix}window 
┃💫 ${prefix}3dspace 
┃💫 ${prefix}bokeh 
┃💫 ${prefix}holographic 
┃💫 ${prefix}thewall 
┃💫 ${prefix}carbon 
┃💫 ${prefix}whitebear 
┃💫 ${prefix}metallic 
┃💫 ${prefix}steel 
┃💫 ${prefix}fabric 
┃💫 ${prefix}ancient 
┃💫 ${prefix}marvel 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.photooxymenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ PhotoOxy Maker 』
┃💫 ${prefix}shadow  
┃💫 ${prefix}write  
┃💫 ${prefix}romantic  
┃💫 ${prefix}burnpaper 
┃💫 ${prefix}smoke  
┃💫 ${prefix}narutobanner  
┃💫 ${prefix}love  
┃💫 ${prefix}undergrass 
┃💫 ${prefix}doublelove  
┃💫 ${prefix}coffecup 
┃💫 ${prefix}underwaterocean 
┃💫 ${prefix}smokyneon 
┃💫 ${prefix}starstext 
┃💫 ${prefix}rainboweffect 
┃💫 ${prefix}balloontext 
┃💫 ${prefix}metalliceffect 
┃💫 ${prefix}embroiderytext 
┃💫 ${prefix}flamingtext 
┃💫 ${prefix}stonetext 
┃💫 ${prefix}writeart 
┃💫 ${prefix}summertext ??
┃💫 ${prefix}wolfmetaltext 
┃💫 ${prefix}nature3dtext 
┃💫 ${prefix}rosestext 
┃💫 ${prefix}naturetypography 
┃💫 ${prefix}quotesunder 
┃💫 ${prefix}shinetext 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.ephoto360menu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Ephoto360 Maker 』
┃💫 ${prefix}glitchtext 
┃💫 ${prefix}writetext 
┃💫 ${prefix}advancedglow 
┃💫 ${prefix}typographytext 
┃💫 ${prefix}pixelglitch 
┃💫 ${prefix}neonglitch 
┃💫 ${prefix}flagtext 
┃💫 ${prefix}flag3dtext 
┃💫 ${prefix}deletingtext 
┃💫 ${prefix}blackpinkstyle 
┃💫 ${prefix}glowingtext 
┃💫 ${prefix}underwatertext 
┃💫 ${prefix}logomaker 
┃💫 ${prefix}cartoonstyle 
┃💫 ${prefix}papercutstyle 
┃💫 ${prefix}watercolortext 
┃💫 ${prefix}effectclouds 
┃💫 ${prefix}blackpinklogo 
┃💫 ${prefix}gradienttext 
┃💫 ${prefix}summerbeach 
┃💫 ${prefix}luxurygold 
┃💫 ${prefix}multicoloredneon 
┃💫 ${prefix}sandsummer 
┃💫 ${prefix}galaxywallpaper 
┃💫 ${prefix}1917style 
┃💫 ${prefix}makingneon 
┃💫 ${prefix}royaltext 
┃💫 ${prefix}freecreate 
┃💫 ${prefix}galaxystyle 
┃💫 ${prefix}lighteffects 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

global.nsfwmenu = (prefix) => {
return ` 
 ✨ *𝒉𝒊*  

   𝐐𝐔𝐄𝐄𝐍 𝐀𝐋𝐘𝐀
🔥𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐒𝐓𝐀𝐑 𝐊𝐈𝐍𝐆🔥
�  𝐎𝐰𝐧𝐞𝐫 : ${global.OWNER_NAME}
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *Active*
�  𝐏𝐫𝐞𝐟𝐢𝐱 :  *[ ${prefix} ]*
�  𝐋𝐢𝐛𝐫𝐚𝐫𝐲 : *𝐖𝐬-𝐛𝐚𝐢𝐥𝐞𝐲*
�  𝐒𝐭𝐚𝐭𝐮𝐬 : *𝐑𝐮𝐧𝐧𝐢𝐧𝐠*
�  𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐊𝐈𝐍𝐆 👑
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 💫 𝗔𝗹𝗹𝗠𝗲𝗻𝘂
│ 💫 𝗔𝗹𝗶𝘃𝗲
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧
│ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟱
✧⊶⊶⊶⊶⊶⊷⊷⊷⊷⊷✧

┏❐ Anime NSFW 』
┃💫 ${prefix}hentai 
┃💫 ${prefix}gifhentai 
┃💫 ${prefix}gifblowjob 
┃💫 ${prefix}hentaivid 
┃💫 ${prefix}hneko 
┃💫 ${prefix}nwaifu 
┃💫 ${prefix}animespank 
┃💫 ${prefix}trap 
┃💫 ${prefix}gasm 
┃💫 ${prefix}ahegao 
┃💫 ${prefix}ass 
┃💫 ${prefix}bdsm 
┃💫 ${prefix}blowjob 
┃💫 ${prefix}cuckold 
┃💫 ${prefix}cum 
┃💫 ${prefix}milf 
┃💫 ${prefix}eba 
┃💫 ${prefix}ero 
┃💫 ${prefix}femdom 
┃💫 ${prefix}foot 
┃💫 ${prefix}gangbang 
┃💫 ${prefix}glasses 
┃💫 ${prefix}jahy 
┃💫 ${prefix}masturbation 
┃💫 ${prefix}manga 
┃💫 ${prefix}neko-hentai 
┃💫 ${prefix}neko-hentai2 
┃💫 ${prefix}nsfwloli 
┃💫 ${prefix}orgy 
┃💫 ${prefix}panties  
┃💫 ${prefix}pussy 
┃💫 ${prefix}tentacles 
┃💫 ${prefix}thighs 
┃💫 ${prefix}yuri 
┃💫 ${prefix}zettai 
┃💫 ${prefix}xnxxsearch 
┃💫 ${prefix}xnxxdl 
┗⊶⊶⊶⊶⊷⊷⊷⊷⊷⊷⊷❐
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
