import { ALL_SYMBOLS } from '@/constants'
import {
  btc,
  jpy,
  plt,
  etc,
  fct,
  mona,
  eth,
  lsk,
  xrp,
  xem,
  ltc,
  bch,
  xlm,
  qtum,
  bat,
  iost,
  enj,
  omg,
  bcc,
  ont,
  trx,
  ht,
  pepecash,
  hinanomai,
  shimarena,
  magatamardon,
  rumirumi,
  shirahoshibg,
  magatamablfv,
  magatamardfr,
  magatamagn,
  mizuki,
  leenabg,
  risavix,
  shirahoshi,
  magatamablsx,
  magatamagnth,
  yogibogocpfr,
  ncxc,
  magatamardfv,
  magatamatq,
  sanomayavix,
  ruru,
  magatamagnfv,
  hyou,
  bitcrystals,
  magatamawtfv,
  nemcard,
  magatamawtsx,
  magatamagnsv,
  yogibogocpfv,
  zaif,
  magatamaylon,
  magatamablsv,
  magatamavtsv,
  itsuki,
  djasanyanvix,
  tsukasa,
  chikarinbg,
  kaoribg,
  magatamawtfr,
  bitgirlsi,
  magatamayl,
  cicc,
  sirahosivix,
  xacone,
  magatamawt,
  rumirumibg,
  xacsix,
  magatamavton,
  magatamagnsx,
  magatamavttw,
  shimarenabg,
  kinokousaka,
  chikarinvix,
  magatamavtth,
  sjcx,
  xactwo,
  magatamabl,
  bitgirlsii,
  magatamatqsv,
  kinobg,
  mizukivix,
  magatamabltw,
  djasanyan,
  yogibogocpth,
  magatamayltw,
  magatamard,
  xacnine,
  leena,
  magatamaylfr,
  magatamablon,
  mamichanbg,
  rurubg,
  magatamardsx,
  magatamavtsx,
  sanomayabg,
  itsukibg,
  tsukasavix,
  magatamaylsx,
  mizukibg,
  yogibogocpon,
  magatamagntw,
  mamichannel,
  pachi,
  xcp,
  xacfour,
  djasanyanbg,
  hinanomaibg,
  torekabuopt,
  magatamardtw,
  magatamaylsv,
  yogibogocpsx,
  magatamaylfv,
  magatamawttw,
  magatamatqfv,
  magatamawtsv,
  fscc,
  xacfive,
  yamaguchia,
  magatamatqsx,
  magatamatqtw,
  xym,
  tsukasabg,
  magatamardth,
  magatamavtfv,
  jpyz,
  magatamatqon,
  magatamawton,
  magatamaylth,
  magatamavt,
  xacthree,
  magatamamijn,
  magatamawtth,
  sanomaya,
  kaori,
  magatamablfr,
  magatamablth,
  magatamatqfr,
  xaceight,
  icharlotte,
  chikarin,
  yamaguchiabg,
  satoayaka,
  satoayakabg,
  magatamagnfr,
  magatamavtfr,
  magatamatqth,
  magatamabz,
  magatamardsv,
  icharlottebg,
  xacseven,
  yogibogocptw,
  magatamagnon,
  erc20_cms,
  mosaic_cms
} from '@/constants/symbol'

export type baseCurrency = jpy | btc

export type allSymbols = typeof ALL_SYMBOLS[number]
export type AllSymbols = Uppercase<allSymbols>

export type btc = typeof btc
export type jpy = typeof jpy
export type plt = typeof plt
export type etc = typeof etc
export type fct = typeof fct
export type mona = typeof mona
export type eth = typeof eth
export type lsk = typeof lsk
export type xrp = typeof xrp
export type xem = typeof xem
export type ltc = typeof ltc
export type bch = typeof bch
export type xlm = typeof xlm
export type qtum = typeof qtum
export type bat = typeof bat
export type iost = typeof iost
export type enj = typeof enj
export type omg = typeof omg
export type bcc = typeof bcc
export type ont = typeof ont
export type trx = typeof trx
export type ht = typeof ht
export type pepecash = typeof pepecash
export type hinanomai = typeof hinanomai
export type shimarena = typeof shimarena
export type magatamardon = typeof magatamardon
export type rumirumi = typeof rumirumi
export type shirahoshibg = typeof shirahoshibg
export type magatamablfv = typeof magatamablfv
export type magatamardfr = typeof magatamardfr
export type magatamagn = typeof magatamagn
export type mizuki = typeof mizuki
export type leenabg = typeof leenabg
export type risavix = typeof risavix
export type shirahoshi = typeof shirahoshi
export type magatamablsx = typeof magatamablsx
export type magatamagnth = typeof magatamagnth
export type yogibogocpfr = typeof yogibogocpfr
export type ncxc = typeof ncxc
export type magatamardfv = typeof magatamardfv
export type magatamatq = typeof magatamatq
export type sanomayavix = typeof sanomayavix
export type ruru = typeof ruru
export type magatamagnfv = typeof magatamagnfv
export type hyou = typeof hyou
export type bitcrystals = typeof bitcrystals
export type magatamawtfv = typeof magatamawtfv
export type nemcard = typeof nemcard
export type magatamawtsx = typeof magatamawtsx
export type magatamagnsv = typeof magatamagnsv
export type yogibogocpfv = typeof yogibogocpfv
export type zaif = typeof zaif
export type magatamaylon = typeof magatamaylon
export type magatamablsv = typeof magatamablsv
export type magatamavtsv = typeof magatamavtsv
export type itsuki = typeof itsuki
export type djasanyanvix = typeof djasanyanvix
export type tsukasa = typeof tsukasa
export type chikarinbg = typeof chikarinbg
export type kaoribg = typeof kaoribg
export type magatamawtfr = typeof magatamawtfr
export type bitgirlsi = typeof bitgirlsi
export type magatamayl = typeof magatamayl
export type cicc = typeof cicc
export type sirahosivix = typeof sirahosivix
export type xacone = typeof xacone
export type magatamawt = typeof magatamawt
export type rumirumibg = typeof rumirumibg
export type xacsix = typeof xacsix
export type magatamavton = typeof magatamavton
export type magatamagnsx = typeof magatamagnsx
export type magatamavttw = typeof magatamavttw
export type shimarenabg = typeof shimarenabg
export type kinokousaka = typeof kinokousaka
export type chikarinvix = typeof chikarinvix
export type magatamavtth = typeof magatamavtth
export type sjcx = typeof sjcx
export type xactwo = typeof xactwo
export type magatamabl = typeof magatamabl
export type bitgirlsii = typeof bitgirlsii
export type magatamatqsv = typeof magatamatqsv
export type kinobg = typeof kinobg
export type mizukivix = typeof mizukivix
export type magatamabltw = typeof magatamabltw
export type djasanyan = typeof djasanyan
export type yogibogocpth = typeof yogibogocpth
export type magatamayltw = typeof magatamayltw
export type magatamard = typeof magatamard
export type xacnine = typeof xacnine
export type leena = typeof leena
export type magatamaylfr = typeof magatamaylfr
export type magatamablon = typeof magatamablon
export type mamichanbg = typeof mamichanbg
export type rurubg = typeof rurubg
export type magatamardsx = typeof magatamardsx
export type magatamavtsx = typeof magatamavtsx
export type sanomayabg = typeof sanomayabg
export type itsukibg = typeof itsukibg
export type tsukasavix = typeof tsukasavix
export type magatamaylsx = typeof magatamaylsx
export type mizukibg = typeof mizukibg
export type yogibogocpon = typeof yogibogocpon
export type magatamagntw = typeof magatamagntw
export type mamichannel = typeof mamichannel
export type pachi = typeof pachi
export type xcp = typeof xcp
export type xacfour = typeof xacfour
export type djasanyanbg = typeof djasanyanbg
export type hinanomaibg = typeof hinanomaibg
export type torekabuopt = typeof torekabuopt
export type magatamardtw = typeof magatamardtw
export type magatamaylsv = typeof magatamaylsv
export type yogibogocpsx = typeof yogibogocpsx
export type magatamaylfv = typeof magatamaylfv
export type magatamawttw = typeof magatamawttw
export type magatamatqfv = typeof magatamatqfv
export type magatamawtsv = typeof magatamawtsv
export type fscc = typeof fscc
export type xacfive = typeof xacfive
export type yamaguchia = typeof yamaguchia
export type magatamatqsx = typeof magatamatqsx
export type magatamatqtw = typeof magatamatqtw
export type xym = typeof xym
export type tsukasabg = typeof tsukasabg
export type magatamardth = typeof magatamardth
export type magatamavtfv = typeof magatamavtfv
export type jpyz = typeof jpyz
export type magatamatqon = typeof magatamatqon
export type magatamawton = typeof magatamawton
export type magatamaylth = typeof magatamaylth
export type magatamavt = typeof magatamavt
export type xacthree = typeof xacthree
export type magatamamijn = typeof magatamamijn
export type magatamawtth = typeof magatamawtth
export type sanomaya = typeof sanomaya
export type kaori = typeof kaori
export type magatamablfr = typeof magatamablfr
export type magatamablth = typeof magatamablth
export type magatamatqfr = typeof magatamatqfr
export type xaceight = typeof xaceight
export type icharlotte = typeof icharlotte
export type chikarin = typeof chikarin
export type yamaguchiabg = typeof yamaguchiabg
export type satoayaka = typeof satoayaka
export type satoayakabg = typeof satoayakabg
export type magatamagnfr = typeof magatamagnfr
export type magatamavtfr = typeof magatamavtfr
export type magatamatqth = typeof magatamatqth
export type magatamabz = typeof magatamabz
export type magatamardsv = typeof magatamardsv
export type icharlottebg = typeof icharlottebg
export type xacseven = typeof xacseven
export type yogibogocptw = typeof yogibogocptw
export type magatamagnon = typeof magatamagnon
export type erc20_cms = typeof erc20_cms
export type mosaic_cms = typeof mosaic_cms

export type BTC = Uppercase<btc>
export type JPY = Uppercase<jpy>
export type PLT = Uppercase<plt>
export type ETC = Uppercase<etc>
export type FCT = Uppercase<fct>
export type MONA = Uppercase<mona>
export type ETH = Uppercase<eth>
export type LSK = Uppercase<lsk>
export type XRP = Uppercase<xrp>
export type XEM = Uppercase<xem>
export type LTC = Uppercase<ltc>
export type BCH = Uppercase<bch>
export type XLM = Uppercase<xlm>
export type QTUM = Uppercase<qtum>
export type BAT = Uppercase<bat>
export type IOST = Uppercase<iost>
export type ENJ = Uppercase<enj>
export type OMG = Uppercase<omg>
export type BCC = Uppercase<bcc>
export type ONT = Uppercase<ont>
export type TRX = Uppercase<trx>
export type HT = Uppercase<ht>
export type PEPECASH = Uppercase<pepecash>
export type HINANOMAI = Uppercase<hinanomai>
export type SHIMARENA = Uppercase<shimarena>
export type MAGATAMARDON = Uppercase<magatamardon>
export type RUMIRUMI = Uppercase<rumirumi>
export type SHIRAHOSHIBG = Uppercase<shirahoshibg>
export type MAGATAMABLFV = Uppercase<magatamablfv>
export type MAGATAMARDFR = Uppercase<magatamardfr>
export type MAGATAMAGN = Uppercase<magatamagn>
export type MIZUKI = Uppercase<mizuki>
export type LEENABG = Uppercase<leenabg>
export type RISAVIX = Uppercase<risavix>
export type SHIRAHOSHI = Uppercase<shirahoshi>
export type MAGATAMABLSX = Uppercase<magatamablsx>
export type MAGATAMAGNTH = Uppercase<magatamagnth>
export type YOGIBOGOCPFR = Uppercase<yogibogocpfr>
export type NCXC = Uppercase<ncxc>
export type MAGATAMARDFV = Uppercase<magatamardfv>
export type MAGATAMATQ = Uppercase<magatamatq>
export type SANOMAYAVIX = Uppercase<sanomayavix>
export type RURU = Uppercase<ruru>
export type MAGATAMAGNFV = Uppercase<magatamagnfv>
export type HYOU = Uppercase<hyou>
export type BITCRYSTALS = Uppercase<bitcrystals>
export type MAGATAMAWTFV = Uppercase<magatamawtfv>
export type NEMCARD = Uppercase<nemcard>
export type MAGATAMAWTSX = Uppercase<magatamawtsx>
export type MAGATAMAGNSV = Uppercase<magatamagnsv>
export type YOGIBOGOCPFV = Uppercase<yogibogocpfv>
export type ZAIF = Uppercase<zaif>
export type MAGATAMAYLON = Uppercase<magatamaylon>
export type MAGATAMABLSV = Uppercase<magatamablsv>
export type MAGATAMAVTSV = Uppercase<magatamavtsv>
export type ITSUKI = Uppercase<itsuki>
export type DJASANYANVIX = Uppercase<djasanyanvix>
export type TSUKASA = Uppercase<tsukasa>
export type CHIKARINBG = Uppercase<chikarinbg>
export type KAORIBG = Uppercase<kaoribg>
export type MAGATAMAWTFR = Uppercase<magatamawtfr>
export type BITGIRLSI = Uppercase<bitgirlsi>
export type MAGATAMAYL = Uppercase<magatamayl>
export type CICC = Uppercase<cicc>
export type SIRAHOSIVIX = Uppercase<sirahosivix>
export type XACONE = Uppercase<xacone>
export type MAGATAMAWT = Uppercase<magatamawt>
export type RUMIRUMIBG = Uppercase<rumirumibg>
export type XACSIX = Uppercase<xacsix>
export type MAGATAMAVTON = Uppercase<magatamavton>
export type MAGATAMAGNSX = Uppercase<magatamagnsx>
export type MAGATAMAVTTW = Uppercase<magatamavttw>
export type SHIMARENABG = Uppercase<shimarenabg>
export type KINOKOUSAKA = Uppercase<kinokousaka>
export type CHIKARINVIX = Uppercase<chikarinvix>
export type MAGATAMAVTTH = Uppercase<magatamavtth>
export type SJCX = Uppercase<sjcx>
export type XACTWO = Uppercase<xactwo>
export type MAGATAMABL = Uppercase<magatamabl>
export type BITGIRLSII = Uppercase<bitgirlsii>
export type MAGATAMATQSV = Uppercase<magatamatqsv>
export type KINOBG = Uppercase<kinobg>
export type MIZUKIVIX = Uppercase<mizukivix>
export type MAGATAMABLTW = Uppercase<magatamabltw>
export type DJASANYAN = Uppercase<djasanyan>
export type YOGIBOGOCPTH = Uppercase<yogibogocpth>
export type MAGATAMAYLTW = Uppercase<magatamayltw>
export type MAGATAMARD = Uppercase<magatamard>
export type XACNINE = Uppercase<xacnine>
export type LEENA = Uppercase<leena>
export type MAGATAMAYLFR = Uppercase<magatamaylfr>
export type MAGATAMABLON = Uppercase<magatamablon>
export type MAMICHANBG = Uppercase<mamichanbg>
export type RURUBG = Uppercase<rurubg>
export type MAGATAMARDSX = Uppercase<magatamardsx>
export type MAGATAMAVTSX = Uppercase<magatamavtsx>
export type SANOMAYABG = Uppercase<sanomayabg>
export type ITSUKIBG = Uppercase<itsukibg>
export type TSUKASAVIX = Uppercase<tsukasavix>
export type MAGATAMAYLSX = Uppercase<magatamaylsx>
export type MIZUKIBG = Uppercase<mizukibg>
export type YOGIBOGOCPON = Uppercase<yogibogocpon>
export type MAGATAMAGNTW = Uppercase<magatamagntw>
export type MAMICHANNEL = Uppercase<mamichannel>
export type PACHI = Uppercase<pachi>
export type XCP = Uppercase<xcp>
export type XACFOUR = Uppercase<xacfour>
export type DJASANYANBG = Uppercase<djasanyanbg>
export type HINANOMAIBG = Uppercase<hinanomaibg>
export type TOREKABUOPT = Uppercase<torekabuopt>
export type MAGATAMARDTW = Uppercase<magatamardtw>
export type MAGATAMAYLSV = Uppercase<magatamaylsv>
export type YOGIBOGOCPSX = Uppercase<yogibogocpsx>
export type MAGATAMAYLFV = Uppercase<magatamaylfv>
export type MAGATAMAWTTW = Uppercase<magatamawttw>
export type MAGATAMATQFV = Uppercase<magatamatqfv>
export type MAGATAMAWTSV = Uppercase<magatamawtsv>
export type FSCC = Uppercase<fscc>
export type XACFIVE = Uppercase<xacfive>
export type YAMAGUCHIA = Uppercase<yamaguchia>
export type MAGATAMATQSX = Uppercase<magatamatqsx>
export type MAGATAMATQTW = Uppercase<magatamatqtw>
export type XYM = Uppercase<xym>
export type TSUKASABG = Uppercase<tsukasabg>
export type MAGATAMARDTH = Uppercase<magatamardth>
export type MAGATAMAVTFV = Uppercase<magatamavtfv>
export type JPYZ = Uppercase<jpyz>
export type MAGATAMATQON = Uppercase<magatamatqon>
export type MAGATAMAWTON = Uppercase<magatamawton>
export type MAGATAMAYLTH = Uppercase<magatamaylth>
export type MAGATAMAVT = Uppercase<magatamavt>
export type XACTHREE = Uppercase<xacthree>
export type MAGATAMAMIJN = Uppercase<magatamamijn>
export type MAGATAMAWTTH = Uppercase<magatamawtth>
export type SANOMAYA = Uppercase<sanomaya>
export type KAORI = Uppercase<kaori>
export type MAGATAMABLFR = Uppercase<magatamablfr>
export type MAGATAMABLTH = Uppercase<magatamablth>
export type MAGATAMATQFR = Uppercase<magatamatqfr>
export type XACEIGHT = Uppercase<xaceight>
export type ICHARLOTTE = Uppercase<icharlotte>
export type CHIKARIN = Uppercase<chikarin>
export type YAMAGUCHIABG = Uppercase<yamaguchiabg>
export type SATOAYAKA = Uppercase<satoayaka>
export type SATOAYAKABG = Uppercase<satoayakabg>
export type MAGATAMAGNFR = Uppercase<magatamagnfr>
export type MAGATAMAVTFR = Uppercase<magatamavtfr>
export type MAGATAMATQTH = Uppercase<magatamatqth>
export type MAGATAMABZ = Uppercase<magatamabz>
export type MAGATAMARDSV = Uppercase<magatamardsv>
export type ICHARLOTTEBG = Uppercase<icharlottebg>
export type XACSEVEN = Uppercase<xacseven>
export type YOGIBOGOCPTW = Uppercase<yogibogocptw>
export type MAGATAMAGNON = Uppercase<magatamagnon>
export type ERC20_CMS = Uppercase<erc20_cms>
export type MOSAIC_CMS = Uppercase<mosaic_cms>
