const help = (prefix) => {
	return `
「 *Vørtëx Bot* 」

◪ *menu*
  ❏ Comando: 「  ${prefix}  」
  ❏ Creador: PIRES
◪ *Para usar o abot*
  ❏ Registre com ${prefix}daftar Nombre
Para usar o bot (exemplo "${prefix}daftar nome|idade")

◪ *SOBRE O BOT*
  │
  ├─ ❏ ${prefix}info "informação do bot"
  ├─ ❏ ${prefix}blocklist "lista de contatos bloqueados"
  ├─ ❏ ${prefix}chatlist "off"
  ├─ ❏ ${prefix}ping "velocidade do bot"
  └─ ❏ ${prefix}bugreport "reportar bug"

◪ *CRIAR*
  │
  ├─ ❏ ${prefix}sticker "criar figurinha"
  ├─ ❏ ${prefix}stickergif "criar figurinha animada"
  ├─ ❏ ${prefix}toimg "transforma figurinha em foto"
  └─ ❏ ${prefix}tomp3 "transforma vídeo em áudio"

◪ *BAIXAR*
  │
  └─ ❏ ${prefix}ytmp4 "baixar vídeos com link"

◪ *AUDIO*
  │
  ├─ ❏ ${prefix}play "baixar musica"
  ├─ ❏ ${prefix}bahasa "lista de linguagem"
  └─ ❏ ${prefix}tts "mandar áudio"

◪ *DONO*
  │
  ├─ ❏ ${prefix}setprefix "mudar prefix"
  ├─ ❏ ${prefix}block "bloquear no bot"
  ├─ ❏ ${prefix}bc "MT em grupo e contatos"
  ├─ ❏ ${prefix}bcgc "TM contatos do grupo"
  ├─ ❏ ${prefix}clone "clonar foto @"
  └─ ❏ ${prefix}clearall "limpar chat"

◪ *Outros*
  │
  ├─ ❏ ${prefix}wame "link do seu número"
  ├─ ❏ ${prefix}virtex "não usar"
  ├─ ❏ ${prefix}exe 
  └─ ❏ ${prefix}qrcode
  
◪ *NSWF*
  │
  └─ ❏ ${prefix}nsfwmenu

     ❏ Para ativar o NSFW ${prefix}nsfw 1 
para desativar NSFW coloque ${prefix}nsfw 0
`
}

exports.help = help
