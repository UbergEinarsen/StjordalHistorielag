/* =====================================================================
   STJØRDAL HISTORIELAG — DATA
   Real content + image pools from the historielag archive.
===================================================================== */

const BASE = 'https://stjordal-historielag.no/image/v2/photoalbum/7713/'

export const img = (p, w = 1000) => BASE + p + '?autorotate=true&width=' + w
export const thumb = (p) => BASE + p + '?autorotate=true&width=640&height=460&mode=crop'

/* Resolve an article's hero image (some use raw absolute URLs). */
export const artImg = (a, w) => (a.rawImage ? a.image : img(a.image, w))

/* ------------------------------------------------------------------
   IMAGE POOLS (real photos from the historielag archive)
------------------------------------------------------------------ */
const POSTCARDS = [
  ['169293/2593370/Stj%c3%b8rdalshalsen_fra_Stokkberga.jpg', 'Stjørdalshalsen sett fra Stokkberga'],
  ['169291/2593368/Stj%c3%b8rdal.jpg', 'Parti fra Stjørdal'],
  ['169287/2593364/Stj%c3%b8rdal_flyfoto1.jpg', 'Flyfoto over Stjørdalshalsen'],
  ['169289/2593366/Stj%c3%b8rdal_flyfoto3.jpg', 'Flyfoto over sentrum'],
  ['169286/2593363/Stj%c3%b8rdal_-_Stua_Kafe_og_Restaurant_Stj%c3%b8rdal_1.jpg', 'Stua Kafé og Restaurant'],
  ['169290/2593367/Stj%c3%b8rdal._Aune_F-1015-1.jpg', 'Stjørdal — foto Aune'],
  ['169299/2593442/Soldatheimen.jpg', 'Soldatheimen'],
  ['169296/2593373/V%c3%a6rnes_Kirke_med_Pr%c3%a6stegaarden.jpg', 'Værnes kirke med prestegården'],
  ['169295/2593372/Vikang%c3%a5rdene.jpg', 'Vikangårdene'],
  ['169294/2593371/Storvika.jpg', 'Storvika'],
  ['169297/2593374/%c3%98yanmoen.jpg', 'Øyanmoen'],
  ['169280/2593357/Parti_fra_Stj%c3%b8rdalshalsen_fs.jpg', 'Parti fra Stjørdalshalsen'],
  ['169279/2593356/Parti_fra_Stj%c3%b8rdalshalsen.jpg', 'Parti fra Stjørdalshalsen'],
  ['169278/2593355/Parti_fra_Stj%c3%b8rdalshalsen_1908.jpg', 'Stjørdalshalsen, 1908'],
  ['169277/2593354/Opsynsmandsboligen.jpg', 'Opsynsmandsboligen'],
  ['169298/2593441/Nyl%c3%a6nne_Stj%c3%b8rdal.jpg', 'Nylænne, Stjørdal'],
  ['169275/2593352/M%c3%a6len.jpg', 'Mælen'],
  ['169274/2593351/M%c3%a6len_bro.jpg', 'Mælen bro'],
  ['169273/2593350/Midtbroen.jpg', 'Midtbroen'],
  ['169272/2593349/Kirkeveien_2_just.jpg', 'Kirkeveien'],
  ['169271/2593348/Kirkesletta.jpg', 'Kirkesletta'],
  ['169270/2593347/Hognesaunet.jpg', 'Hognesaunet'],
  ['169269/2593346/Gateparti_fra_Stj%c3%b8rdalshalsen.jpg', 'Gateparti fra Stjørdalshalsen'],
  ['169268/2593345/Gateparti_av_Stj%c3%b8rdalshalsen.jpg', 'Gateparti av Stjørdalshalsen'],
  ['169267/2593344/Fly_over_Kj%c3%b8pmannsgt.jpg', 'Fly over Kjøpmannsgata'],
  ['169266/2593343/Exteri%c3%b8r_fra_V%c3%a6rnes4.jpg', 'Eksteriør fra Værnes'],
  ['169281/2593358/Ree.jpg', 'Ree'],
  ['169284/2593361/Stjoerdalshalsen-stjoerdalens-blad.jpg', 'Stjørdalshalsen'],
  ['169283/2593360/stjoerdalen-oeyangjaerdet.jpg', 'Øyangjærdet'],
  ['169264/2593341/Bjerkanhj%c3%b8rnet.jpg', 'Bjerkanhjørnet'],
  ['169285/2593362/Stj%c3%b8rdal_-_Aune_M-12952-8._St_Stj%c3%b8rdal_-92.jpg', 'Stjørdal — foto Aune'],
]
const ROTASJON = [
  ['169192/2591192/stjoerdal-den-gamle-tingstue.jpg', 'Den gamle tingstua'],
  ['169190/2591190/nord-troendelag-stjoerdal.jpg', 'Nord-Trøndelag, Stjørdal'],
  ['169187/2591187/9.jpg', 'Gammelt Stjørdalsbilde'],
  ['169082/2586627/Exerserpladsen_Stj%c3%b8rdalen3.jpg', 'Ekserserplassen i Stjørdalen'],
  ['169189/2591189/halsen_musikkf._1933.jpg', 'Halsen musikkforening, 1933'],
  ['169081/2586626/53097_Flyet_Olav_Tryggves%c3%b8n_p%c3%a5_V%c3%a6rnes.jpg', 'Flyet «Olav Tryggvesøn» på Værnes'],
]
const LOKALHIST = [
  ['218663/3538071/Metalldetektorbr%c3%b8drene_fs.jpg', 'Metalldetektorbrødrene'],
  ['188859/3033732/Kulturminnes%c3%b8k.jpg', 'Kulturminnesøk'],
  ['214531/3466691/Skatval_krigshistoriske_museum.jpg', 'Skatval krigshistoriske museum'],
  ['193122/3109141/T_15312_005_cr.jpg', 'Arkeologisk funn'],
  ['188858/3033731/IMG_20201208_193503_cr-fs.jpg', 'Medlemsmøte'],
  ['188857/3033730/IMG_20201117_193442_cr-fs.jpg', 'Medlemskveld'],
  ['171526/2688333/1761_2014-10-09_Mulig_Bjerkanhj%c3%b8rnet_lite.jpg', 'Bjerkanhjørnet'],
  ['216512/3498817/Plakat.jpg', 'Plakat'],
]
const SANDFAERHUS = [
  ['223081/3624890/Sandf%c3%a6rhus_009_fs_1600.jpg', 'Sandfærhus'],
  ['223080/3624889/Sandf%c3%a6rhus_008_fs_1600.jpg', 'Sandfærhus tollsted'],
]
const pick = (arr, n) => arr.slice(0, n)

/* ------------------------------------------------------------------
   ALBUMS
------------------------------------------------------------------ */
export const ALBUMS = [
  { id: 'postkort', title: 'Gamle postkort', year: 'Samling', count: 39,
    desc: 'Et utvalg gamle postkort fra Stjørdalshalsen og bygdene rundt — gater, broer, kirker og kafeer slik de en gang så ut.',
    cover: '447627/10911370/Postkort_Torget_Furunes.jpg', images: POSTCARDS },
  { id: 'rotasjon', title: 'Rotasjon', year: 'Samling', count: 6,
    desc: 'Noen gamle Stjørdalsbilder — fra tingstua og ekserserplassen til musikkforeningen og flyet på Værnes.',
    cover: '169192/2591192/stjoerdal-den-gamle-tingstue.jpg', images: ROTASJON },
  { id: 'sann-va-de', title: 'Sånn va de', year: 'Samling', count: 26,
    desc: 'Gamle bilder fra Stjørdal — hverdagsliv, handel og folk i en svunnen tid.',
    cover: '169287/2593364/Stj%c3%b8rdal_flyfoto1.jpg', images: POSTCARDS.slice(8).concat(ROTASJON) },
  { id: 'lokalhist', title: 'Lokalhistorisk arbeid', year: 'Aktiviteter', count: 18,
    desc: 'Fra lagets virke: kulturminnesøk, metalldetektorfunn, foredrag og medlemskvelder.',
    cover: '188859/3033732/Kulturminnes%c3%b8k.jpg', images: LOKALHIST },
  { id: 'iversengarden', title: 'Iversengården flyttes', year: '2009', count: 24,
    desc: '23. oktober 2009 ble Iversengården flyttet fra gata og inn på Stjørdal museum — en milepæl i bevaringsarbeidet.',
    cover: '169269/2593346/Gateparti_fra_Stj%c3%b8rdalshalsen.jpg', images: pick(POSTCARDS, 10).concat(SANDFAERHUS) },
  { id: 'smola', title: 'Sommertur til Smøla', year: '2009', count: 66,
    desc: 'Lagets sommertur gikk til Smøla i strålende vær — innom Tjeldbergodden, Edøya og Veiholmen.',
    cover: '169294/2593371/Storvika.jpg', images: pick(POSTCARDS, 8) },
  { id: 'flatanger', title: 'Tur til Flatanger', year: '2010', count: 20,
    desc: 'Sommerturen gikk nordover med stopp ved Steinkjer kirke, før ferden fortsatte til Lauvsnes og Utvorda.',
    cover: '169274/2593351/M%c3%a6len_bro.jpg', images: pick(POSTCARDS, 9) },
  { id: 'trondheim', title: 'Tur til Trondheim', year: '2015', count: 17,
    desc: 'Bussturen gikk til Trondheim med besøk i Domkirken, Erkebispegården og Nidaros Domkirkes restaureringsarbeider.',
    cover: '169296/2593373/V%c3%a6rnes_Kirke_med_Pr%c3%a6stegaarden.jpg', images: pick(POSTCARDS, 8).concat(ROTASJON) },
]

/* ------------------------------------------------------------------
   ARTICLES
------------------------------------------------------------------ */
export const ARTICLES = [
  {
    id: 'potetmelfabrikk', cat: 'Industri', tag: 'Industri & Næringsliv',
    title: 'Film- og bildekafé om Stjørdal potetmelfabrikk',
    date: '10. mars 2026', dateShort: '10. mar 2026',
    image: '469481/11724980/Stj%c3%b8rdal_potetmelfabrikk.jpg',
    excerpt: 'Velkommen til film- og bildekafé i Kirkestallen ved Værnes kirke. Vi viser filmen som ble laget til fabrikkens 25-årsjubileum i 1957.',
    lead: 'Velkommen til film- og bildekafé i Kirkestallen ved Værnes kirke. Denne formiddagen vender vi blikket mot en av Stjørdals viktigste industribedrifter gjennom det forrige århundret.',
    body: [
      'Stjørdal potetmelfabrikk var i mange tiår en hjørnestein i bygdas næringsliv. Fabrikken ga arbeid til mange, og knyttet jordbruket tett til industrien gjennom foredlingen av poteten — råvaren som dalføret hadde i overflod.',
      'Til fabrikkens 25-årsjubileum i 1957 ble det laget en egen film som dokumenterer driften, menneskene og maskinene fra den tiden. Filmen gir et sjeldent og levende innblikk i en arbeidsdag på fabrikken, og er en kulturskatt i seg selv.',
      { type: 'callout', label: 'Praktisk', text: 'Kirkestallen ved Værnes kirke · Kaffe og noe å bite i blir servert. Arrangementet er gratis og åpent for alle.' },
      'Etter filmvisningen følger en bildekafé der vi viser fotografier fra fabrikken og industrimiljøet rundt. Ta gjerne med egne minner, bilder og historier — det er nettopp samtalen rundt bordene som gjør bildekafeene så verdifulle.',
    ],
  },
  {
    id: 'elva', cat: 'Foredrag', tag: 'Natur & Geologi',
    title: 'Foredrag: Slik har elva formet Stjørdalsdalføret',
    date: '8. september 2026', dateShort: '8. sep 2026',
    image: '445316/10865640/Stj%c3%b8rdalselva_2.JPG',
    excerpt: 'Pensjonert geolog Harald Sveian tar oss med på en reise gjennom tid og landskap — fra istidens slutt og fram til i dag.',
    lead: 'Stjørdal historielag inviterer til en kveld med pensjonert geolog Harald Sveian i auditoriet ved Ole Vig videregående skole.',
    body: [
      'Stjørdalselva har i årtusener vært den krafta som formet dalføret vårt. Da innlandsisen trakk seg tilbake for rundt 10 000 år siden, lå landskapet åpent for elvas arbeid — og grunnlaget for det Stjørdal vi kjenner i dag ble lagt.',
      'Geolog Harald Sveian har viet en stor del av sitt yrkesliv til å forstå hvordan is, vann og tid sammen har skapt landformene i Trøndelag. I dette foredraget knytter han den store geologiske fortellingen til steder vi kjenner igjen fra hverdagen.',
      { type: 'callout', label: 'Foredragsholder', text: 'Harald Sveian, pensjonert geolog ved Norges geologiske undersøkelse (NGU), kjent for sin evne til å gjøre geologien levende og forståelig.' },
      'Hvorfor ligger gårdene der de ligger? Hvorfor er noen terrasser flate og andre bratte? Svarene finnes i elvas lange historie — og denne kvelden får vi dem fortalt av en av landets fremste kjennere.',
    ],
  },
  {
    id: 'heggeseth', cat: 'Foto', tag: 'Fotohistorie',
    title: 'Film- og bildekveld: Bilder fra 80- og 90-tallet',
    date: '3. november 2026', dateShort: '3. nov 2026',
    image: '462227/11412310/Innherredsvegen_82_Heggeseth_komp.jpg',
    excerpt: 'Arne Gunnar Heggeseth viser egne bilder fra Stjørdal på 1980- og 90-tallet, og dokumenterer forandringene de siste 40 årene.',
    lead: 'Denne gangen setter vi søkelyset på den nyere historien i Stjørdal — den som mange av oss selv har vært en del av.',
    body: [
      'Arne Gunnar Heggeseth har gjennom fire tiår dokumentert Stjørdal med kameraet. Bildene hans fanger en kommune i rask endring: nye veier, butikker som kom og gikk, bygg som ble revet og reist, og hverdagsliv slik det utspant seg.',
      'Det er lett å glemme hvor mye som har forandret seg på relativt kort tid. Heggeseths fotografier minner oss om at også den nære fortiden er historie verdt å ta vare på.',
      'Kvelden kombinerer filminnslag og bildevisning, med god tid til samtale og gjenkjennelse. Mange vil nok kjenne igjen både steder og ansikter fra bildene.',
    ],
  },
  {
    id: 'postkort-kafe', cat: 'Foto', tag: 'Fotohistorie',
    title: 'Bildekafé: Gamle postkort fra Stjørdal',
    date: '1. desember 2026', dateShort: '1. des 2026',
    image: '447627/10911370/Postkort_Torget_Furunes.jpg',
    excerpt: 'Ivar Værnesbranden fra Postkortforum Stjørdal viser gamle postkort, og forteller om hobbyen og postkortmiljøet.',
    lead: 'Stjørdal historielag og Stjørdal museum inviterer til bildekafé i Kirkestallen, denne gangen med de gamle postkortene i sentrum.',
    body: [
      'Postkortet var i sin tid både hilsen, nyhet og dokumentasjon. For lokalhistorikere er de gamle korta en uvurderlig kilde — ofte er de det eneste bildet som finnes av en gate, en bygning eller et parti slik det så ut for hundre år siden.',
      'Ivar Værnesbranden fra Postkortforum Stjørdal har en stor samling, og deler villig av sin kunnskap om både motivene og miljøet av samlere som holder denne tradisjonen i live.',
      { type: 'callout', label: 'Etterpå', text: 'Vi avslutter med filminnslag fra lokal-TV i Stjørdal på nittitallet — et morsomt gjensyn med tidsånden.' },
      'Se også vårt fotoalbum med gamle postkort her på nettsiden, der mange av motivene er tilgjengelige i full størrelse.',
    ],
  },
  {
    id: 'byvandring', cat: 'Arrangement', tag: 'Arrangement',
    title: 'Historisk byvandring i Stjørdal sentrum',
    date: '12. oktober 2026', dateShort: '12. okt 2026',
    image: '169269/2593346/Gateparti_fra_Stj%c3%b8rdalshalsen.jpg',
    excerpt: 'Bli med på en guidet vandring gjennom sentrum, med historiene om bygningene og menneskene som har formet Stjørdalshalsen.',
    lead: 'Vi tar beina fatt og vandrer gjennom Stjørdal sentrum, med stopp ved steder som hver har sin egen historie å fortelle.',
    body: [
      'Stjørdalshalsen vokste fram som handelssted ved utløpet av elva, og gatene bærer fremdeles spor av denne historien. På vandringen forteller vi om bygningene, butikkene og menneskene som satte sitt preg på sentrum gjennom årene.',
      'Vi går i rolig tempo og stopper underveis, så turen passer for alle. Ta med gode sko og klær etter været.',
      { type: 'callout', label: 'Oppmøte', text: 'Torget i Stjørdal sentrum. Vandringen tar om lag halvannen time. Påmelding er ikke nødvendig.' },
    ],
  },
  {
    id: 'arsmote', cat: 'Foreningsnytt', tag: 'Foreningsnytt',
    title: 'Årsmøte i Stjørdal historielag',
    date: '24. februar 2026', dateShort: '24. feb 2026',
    image: 'https://i.styreweb.com/v1/photoalbum/9276490/Stasjon.jpg',
    rawImage: true,
    excerpt: 'Alle medlemmer er hjertelig velkomne til årsmøte i Prestegårdskaféen på Stjørdal museum.',
    lead: 'Alle medlemmer er hjertelig velkomne til det årlige årsmøtet i Stjørdal historielag.',
    body: [
      'Årsmøtet er lagets viktigste samling, der vi ser tilbake på året som gikk og staker ut kursen videre. Vi behandler årsmelding og regnskap, velger styre og legger planer for kommende aktiviteter, turer og arrangementer.',
      'Etter de formelle sakene blir det sosialt samvær med kaffe og noe å bite i. Dette er en fin anledning til å bli bedre kjent med andre medlemmer og dele interessen for lokalhistorie.',
      { type: 'callout', label: 'Sted', text: 'Prestegårdskaféen på Stjørdal museum. Saksdokumenter sendes medlemmene på forhånd.' },
    ],
  },
]

/* ------------------------------------------------------------------
   EVENTS (calendar program 2026)
------------------------------------------------------------------ */
export const MONTHS = ['Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember']
export const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Des']
export const DOW = ['Man','Tir','Ons','Tor','Fre','Lør','Søn']

export const EVENTS = [
  { y:2026, m:1, d:24, type:'Årsmøte',     title:'Årsmøte 2026', time:'kl. 19.00', loc:'Prestegårdskaféen, Stjørdal museum', article:'arsmote', terra:false,
    desc:'Lagets årlige møte med valg, årsmelding og sosialt samvær.' },
  { y:2026, m:2, d:10, type:'Bildekafé',   title:'Stjørdal potetmelfabrikk', time:'kl. 11.00', loc:'Kirkestallen, Værnes kirke', article:'potetmelfabrikk', terra:true,
    desc:'Film fra fabrikkens 25-årsjubileum i 1957, etterfulgt av bildekafé.' },
  { y:2026, m:3, d:21, type:'Tur',         title:'Vårtur: Byvandring i Trondheim', time:'kl. 09.00', loc:'Oppmøte ved Torget', article:null, terra:false,
    desc:'Dagstur til Trondheim med guidet vandring i den historiske bykjernen.' },
  { y:2026, m:5, d:24, type:'Sommertur',   title:'Sommertur langs Stjørdalselva', time:'kl. 10.00', loc:'Oppmøte ved Torget', article:null, terra:false,
    desc:'Vandring og kjøring langs elva med historiske stopp og medbrakt niste.' },
  { y:2026, m:8, d:8,  type:'Foredrag',    title:'Slik har elva formet Stjørdalsdalføret', time:'kl. 19.00', loc:'Ole Vig videregående skole', article:'elva', terra:false,
    desc:'Geolog Harald Sveian om landskapet fra istid til i dag.' },
  { y:2026, m:9, d:12, type:'Byvandring',  title:'Historisk byvandring i sentrum', time:'kl. 12.00', loc:'Torget, Stjørdal sentrum', article:'byvandring', terra:true,
    desc:'Guidet vandring gjennom Stjørdalshalsens gater og historie.' },
  { y:2026, m:10, d:3, type:'Bildekveld',  title:'Bilder fra 80- og 90-tallet', time:'kl. 19.00', loc:'Kimen kulturhus', article:'heggeseth', terra:false,
    desc:'Arne Gunnar Heggeseth viser egne bilder fra de siste 40 årene.' },
  { y:2026, m:11, d:1, type:'Bildekafé',   title:'Gamle postkort fra Stjørdal', time:'kl. 11.00', loc:'Kirkestallen, Værnes kirke', article:'postkort-kafe', terra:true,
    desc:'Ivar Værnesbranden viser gamle postkort fra samlingen sin.' },
]
