let handler = async (m) => {

let anu =`
*❏––––––『 𝙄𝙉𝙁𝙊 𝙀𝙑𝙀𝙉𝙏 』––––––❏*

01 Jul 2023	AKR Tower 3F, Kebon Jeruk

01 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia,	

01 Jul 2023	Universitas Trilogi, Jl. TMP. Kalibata, Duren Tiga

01 Jul 2023	Mega Bekasi Hypermall

01 Jul 2023	FIB UI Depok (venue akan di-update)

02 Jul 2023	AKR Tower 3F, Kebon Jeruk

02 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia

02 Jul 2023	Hall Mangga 2 Square Jakarta

08 Jul 2023	AKR Tower 3F, Kebon Jeruk

08 Jul 2023	Green Pramuka Square

08 Jul 2023		Poins Square (Poins Mall Simatupang)

09 Jul 2023		Green Pramuka Square

09 Jul 2023		Poins Square (Poins Mall Simatupang)

15 Jul 2023	AKR Tower 3F, Kebon Jeruk

15 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia

15 Jul 2023		Blu Plaza, Bekasi

16 Jul 2023	 AKR Tower 3F, Kebon Jeruk

16 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia

22 Jul 2023	 AKR Tower 3F, Kebon Jeruk

22 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia

22 Jul 2023		Mall WTC Matahari Serpong

22 Jul 2023		Yuan Garden Pasar Baru Hotel, Jakarta

23 Jul 2023	 AKR Tower 3F, Kebon Jeruk

23 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia

23 Jul 2023		Mall WTC Matahari Serpong

23 Jul 2023		Yuan Garden Pasar Baru Hotel, Jakarta

29 Jul 2023	 AKR Tower 3F, Kebon Jeruk

29 Jul 2023	Akihabara Cafe, Lt 2 Mall of Indonesia

29 Jul 2023 Istora Gelora Bung Karno, Jakarta

30 Jul 2023 AKR Tower 3F, Kebon Jeruk

30 Jul 2023 Akihabara Cafe, Lt 2 Mall of Indonesia

30 Jul 2023 Istora Gelora Bung Karno, Jakarta

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

${botdate}
`
await m.reply(anu)
}
handler.help = ['event', 'infoevent']
handler.tags = ['tools']
handler.command = /^(event|infoevent)$/i
handler.limit = false
export default handler
