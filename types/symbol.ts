import { ALL_SYMBOLS } from "../constants/mod.ts";

import {
  _1wo,
  aave,
  abbc,
  abey,
  adh,
  albt,
  alx,
  amlt,
  amn,
  anct,
  anw,
  are,
  asm,
  atom,
  aud,
  baas,
  bat,
  bcc,
  bch,
  bcha,
  bfc,
  bifi,
  bitcrystals,
  bitgirlsi,
  bitgirlsii,
  brc,
  btc,
  btc3l,
  btc3s,
  btcshort,
  btcv,
  btrn,
  can,
  cel,
  chi,
  chikarin,
  chikarinbg,
  chikarinvix,
  cicc,
  cim,
  clrx,
  cmct,
  cny,
  comp,
  cot,
  cph,
  crpt,
  crt,
  ctk,
  cudos,
  dacs,
  dag,
  dai,
  dash,
  dent,
  dexa,
  dia,
  djasanyan,
  djasanyanbg,
  djasanyanvix,
  doge,
  dot,
  drg,
  ds,
  ech,
  egld,
  enj,
  erc20_cms,
  etc,
  eth,
  eth3l,
  eth3s,
  etn,
  eur,
  ewt,
  fct,
  fdx,
  fio,
  flex,
  flixx,
  flp,
  fscc,
  fsn,
  ftt,
  fuse,
  gat,
  gate,
  gen,
  get,
  gom2,
  gusd,
  gxt,
  gyen,
  gze,
  gzil,
  hbar,
  hinanomai,
  hinanomaibg,
  hkd,
  hot,
  ht,
  hydro,
  hyou,
  icharlotte,
  icharlottebg,
  idh,
  idr,
  idrt,
  ihf,
  ilk,
  inr,
  iost,
  ipsx,
  itsuki,
  itsukibg,
  ixt,
  jpy,
  jpyz,
  kaori,
  kaoribg,
  kinobg,
  kinokousaka,
  klay,
  kmd,
  krl,
  ksm,
  lcx,
  leena,
  leenabg,
  like,
  link,
  lnd,
  lpt,
  lsk,
  ltc,
  ltx,
  magatamabl,
  magatamablfr,
  magatamablfv,
  magatamablon,
  magatamablsv,
  magatamablsx,
  magatamablth,
  magatamabltw,
  magatamabz,
  magatamagn,
  magatamagnfr,
  magatamagnfv,
  magatamagnon,
  magatamagnsv,
  magatamagnsx,
  magatamagnth,
  magatamagntw,
  magatamamijn,
  magatamard,
  magatamardfr,
  magatamardfv,
  magatamardon,
  magatamardsv,
  magatamardsx,
  magatamardth,
  magatamardtw,
  magatamatq,
  magatamatqfr,
  magatamatqfv,
  magatamatqon,
  magatamatqsv,
  magatamatqsx,
  magatamatqth,
  magatamatqtw,
  magatamavt,
  magatamavtfr,
  magatamavtfv,
  magatamavton,
  magatamavtsv,
  magatamavtsx,
  magatamavtth,
  magatamavttw,
  magatamawt,
  magatamawtfr,
  magatamawtfv,
  magatamawton,
  magatamawtsv,
  magatamawtsx,
  magatamawtth,
  magatamawttw,
  magatamayl,
  magatamaylfr,
  magatamaylfv,
  magatamaylon,
  magatamaylsv,
  magatamaylsx,
  magatamaylth,
  magatamayltw,
  mamichanbg,
  mamichannel,
  marx,
  mco,
  mgo,
  mimo,
  miota,
  mith,
  mitx,
  mizuki,
  mizukibg,
  mizukivix,
  mkr,
  mnr,
  mona,
  mosaic_cms,
  mrk,
  mt,
  mtc,
  mtl,
  mtn,
  mvl,
  ncxc,
  ndau,
  nemcard,
  neo,
  nii,
  oax,
  omg,
  ont,
  orbs,
  pachi,
  par,
  pci,
  pepecash,
  peri,
  php,
  plt,
  pma,
  powr,
  ppl,
  ppp,
  pwv,
  qash,
  qbz,
  qtum,
  rbtc,
  redi,
  ren,
  rfox,
  rif,
  risavix,
  roobee,
  rsr,
  rsv,
  rumirumi,
  rumirumibg,
  ruru,
  rurubg,
  sal,
  sand,
  sanomaya,
  sanomayabg,
  sanomayavix,
  satoayaka,
  satoayakabg,
  ser,
  sgd,
  sgr,
  shimarena,
  shimarenabg,
  shirahoshi,
  shirahoshibg,
  shx,
  sirahosivix,
  six,
  sjcx,
  snip,
  snx,
  spdr,
  sphtx,
  ssx,
  stac,
  stacs,
  storj,
  tem,
  tft,
  thx,
  tmtg,
  ton,
  torekabuopt,
  tpay,
  tpt,
  trx,
  tsukasa,
  tsukasabg,
  tsukasavix,
  ubt,
  ukg,
  uni,
  usd,
  usdc,
  usds,
  usdt,
  vet,
  vi,
  vidy,
  vidyx,
  wabi,
  wemix,
  win,
  wlo,
  wom,
  xaceight,
  xacfive,
  xacfour,
  xacnine,
  xacone,
  xacseven,
  xacsix,
  xacthree,
  xactwo,
  xcf,
  xcp,
  xdc,
  xem,
  xki,
  xlm,
  xmr,
  xnk,
  xno,
  xpr,
  xpt,
  xrp,
  xsgd,
  xtz,
  xym,
  yamaguchia,
  yamaguchiabg,
  yogibogocpfr,
  yogibogocpfv,
  yogibogocpon,
  yogibogocpsx,
  yogibogocpth,
  yogibogocptw,
  zaif,
  zec,
  zil,
  zpr,
  zusd,
  zwap
} from '../constants/symbol.ts'

export type allSymbol = typeof ALL_SYMBOLS[number]
export type AllSymbol = Uppercase<allSymbol>

export type _1wo = typeof _1wo;
export type aave = typeof aave;
export type abbc = typeof abbc;
export type abey = typeof abey;
export type adh = typeof adh;
export type albt = typeof albt;
export type alx = typeof alx;
export type amlt = typeof amlt;
export type amn = typeof amn;
export type anct = typeof anct;
export type anw = typeof anw;
export type are = typeof are;
export type asm = typeof asm;
export type atom = typeof atom;
export type aud = typeof aud;
export type baas = typeof baas;
export type bat = typeof bat;
export type bcc = typeof bcc;
export type bch = typeof bch;
export type bcha = typeof bcha;
export type bfc = typeof bfc;
export type bifi = typeof bifi;
export type bitcrystals = typeof bitcrystals;
export type bitgirlsi = typeof bitgirlsi;
export type bitgirlsii = typeof bitgirlsii;
export type brc = typeof brc;
export type btc = typeof btc;
export type btc3l = typeof btc3l;
export type btc3s = typeof btc3s;
export type btcshort = typeof btcshort;
export type btcv = typeof btcv;
export type btrn = typeof btrn;
export type can = typeof can;
export type cel = typeof cel;
export type chi = typeof chi;
export type chikarin = typeof chikarin;
export type chikarinbg = typeof chikarinbg;
export type chikarinvix = typeof chikarinvix;
export type cicc = typeof cicc;
export type cim = typeof cim;
export type clrx = typeof clrx;
export type cmct = typeof cmct;
export type cny = typeof cny;
export type comp = typeof comp;
export type cot = typeof cot;
export type cph = typeof cph;
export type crpt = typeof crpt;
export type crt = typeof crt;
export type ctk = typeof ctk;
export type cudos = typeof cudos;
export type dacs = typeof dacs;
export type dag = typeof dag;
export type dai = typeof dai;
export type dash = typeof dash;
export type dent = typeof dent;
export type dexa = typeof dexa;
export type dia = typeof dia;
export type djasanyan = typeof djasanyan;
export type djasanyanbg = typeof djasanyanbg;
export type djasanyanvix = typeof djasanyanvix;
export type doge = typeof doge;
export type dot = typeof dot;
export type drg = typeof drg;
export type ds = typeof ds;
export type ech = typeof ech;
export type egld = typeof egld;
export type enj = typeof enj;
export type erc20_cms = typeof erc20_cms;
export type etc = typeof etc;
export type eth = typeof eth;
export type eth3l = typeof eth3l;
export type eth3s = typeof eth3s;
export type etn = typeof etn;
export type eur = typeof eur;
export type ewt = typeof ewt;
export type fct = typeof fct;
export type fdx = typeof fdx;
export type fio = typeof fio;
export type flex = typeof flex;
export type flixx = typeof flixx;
export type flp = typeof flp;
export type fscc = typeof fscc;
export type fsn = typeof fsn;
export type ftt = typeof ftt;
export type fuse = typeof fuse;
export type gat = typeof gat;
export type gate = typeof gate;
export type gen = typeof gen;
export type get = typeof get;
export type gom2 = typeof gom2;
export type gusd = typeof gusd;
export type gxt = typeof gxt;
export type gyen = typeof gyen;
export type gze = typeof gze;
export type gzil = typeof gzil;
export type hbar = typeof hbar;
export type hinanomai = typeof hinanomai;
export type hinanomaibg = typeof hinanomaibg;
export type hkd = typeof hkd;
export type hot = typeof hot;
export type ht = typeof ht;
export type hydro = typeof hydro;
export type hyou = typeof hyou;
export type icharlotte = typeof icharlotte;
export type icharlottebg = typeof icharlottebg;
export type idh = typeof idh;
export type idr = typeof idr;
export type idrt = typeof idrt;
export type ihf = typeof ihf;
export type ilk = typeof ilk;
export type inr = typeof inr;
export type iost = typeof iost;
export type ipsx = typeof ipsx;
export type itsuki = typeof itsuki;
export type itsukibg = typeof itsukibg;
export type ixt = typeof ixt;
export type jpy = typeof jpy;
export type jpyz = typeof jpyz;
export type kaori = typeof kaori;
export type kaoribg = typeof kaoribg;
export type kinobg = typeof kinobg;
export type kinokousaka = typeof kinokousaka;
export type klay = typeof klay;
export type kmd = typeof kmd;
export type krl = typeof krl;
export type ksm = typeof ksm;
export type lcx = typeof lcx;
export type leena = typeof leena;
export type leenabg = typeof leenabg;
export type like = typeof like;
export type link = typeof link;
export type lnd = typeof lnd;
export type lpt = typeof lpt;
export type lsk = typeof lsk;
export type ltc = typeof ltc;
export type ltx = typeof ltx;
export type magatamabl = typeof magatamabl;
export type magatamablfr = typeof magatamablfr;
export type magatamablfv = typeof magatamablfv;
export type magatamablon = typeof magatamablon;
export type magatamablsv = typeof magatamablsv;
export type magatamablsx = typeof magatamablsx;
export type magatamablth = typeof magatamablth;
export type magatamabltw = typeof magatamabltw;
export type magatamabz = typeof magatamabz;
export type magatamagn = typeof magatamagn;
export type magatamagnfr = typeof magatamagnfr;
export type magatamagnfv = typeof magatamagnfv;
export type magatamagnon = typeof magatamagnon;
export type magatamagnsv = typeof magatamagnsv;
export type magatamagnsx = typeof magatamagnsx;
export type magatamagnth = typeof magatamagnth;
export type magatamagntw = typeof magatamagntw;
export type magatamamijn = typeof magatamamijn;
export type magatamard = typeof magatamard;
export type magatamardfr = typeof magatamardfr;
export type magatamardfv = typeof magatamardfv;
export type magatamardon = typeof magatamardon;
export type magatamardsv = typeof magatamardsv;
export type magatamardsx = typeof magatamardsx;
export type magatamardth = typeof magatamardth;
export type magatamardtw = typeof magatamardtw;
export type magatamatq = typeof magatamatq;
export type magatamatqfr = typeof magatamatqfr;
export type magatamatqfv = typeof magatamatqfv;
export type magatamatqon = typeof magatamatqon;
export type magatamatqsv = typeof magatamatqsv;
export type magatamatqsx = typeof magatamatqsx;
export type magatamatqth = typeof magatamatqth;
export type magatamatqtw = typeof magatamatqtw;
export type magatamavt = typeof magatamavt;
export type magatamavtfr = typeof magatamavtfr;
export type magatamavtfv = typeof magatamavtfv;
export type magatamavton = typeof magatamavton;
export type magatamavtsv = typeof magatamavtsv;
export type magatamavtsx = typeof magatamavtsx;
export type magatamavtth = typeof magatamavtth;
export type magatamavttw = typeof magatamavttw;
export type magatamawt = typeof magatamawt;
export type magatamawtfr = typeof magatamawtfr;
export type magatamawtfv = typeof magatamawtfv;
export type magatamawton = typeof magatamawton;
export type magatamawtsv = typeof magatamawtsv;
export type magatamawtsx = typeof magatamawtsx;
export type magatamawtth = typeof magatamawtth;
export type magatamawttw = typeof magatamawttw;
export type magatamayl = typeof magatamayl;
export type magatamaylfr = typeof magatamaylfr;
export type magatamaylfv = typeof magatamaylfv;
export type magatamaylon = typeof magatamaylon;
export type magatamaylsv = typeof magatamaylsv;
export type magatamaylsx = typeof magatamaylsx;
export type magatamaylth = typeof magatamaylth;
export type magatamayltw = typeof magatamayltw;
export type mamichanbg = typeof mamichanbg;
export type mamichannel = typeof mamichannel;
export type marx = typeof marx;
export type mco = typeof mco;
export type mgo = typeof mgo;
export type mimo = typeof mimo;
export type miota = typeof miota;
export type mith = typeof mith;
export type mitx = typeof mitx;
export type mizuki = typeof mizuki;
export type mizukibg = typeof mizukibg;
export type mizukivix = typeof mizukivix;
export type mkr = typeof mkr;
export type mnr = typeof mnr;
export type mona = typeof mona;
export type mosaic_cms = typeof mosaic_cms;
export type mrk = typeof mrk;
export type mt = typeof mt;
export type mtc = typeof mtc;
export type mtl = typeof mtl;
export type mtn = typeof mtn;
export type mvl = typeof mvl;
export type ncxc = typeof ncxc;
export type ndau = typeof ndau;
export type nemcard = typeof nemcard;
export type neo = typeof neo;
export type nii = typeof nii;
export type oax = typeof oax;
export type omg = typeof omg;
export type ont = typeof ont;
export type orbs = typeof orbs;
export type pachi = typeof pachi;
export type par = typeof par;
export type pci = typeof pci;
export type pepecash = typeof pepecash;
export type peri = typeof peri;
export type php = typeof php;
export type plt = typeof plt;
export type pma = typeof pma;
export type powr = typeof powr;
export type ppl = typeof ppl;
export type ppp = typeof ppp;
export type pwv = typeof pwv;
export type qash = typeof qash;
export type qbz = typeof qbz;
export type qtum = typeof qtum;
export type rbtc = typeof rbtc;
export type redi = typeof redi;
export type ren = typeof ren;
export type rfox = typeof rfox;
export type rif = typeof rif;
export type risavix = typeof risavix;
export type roobee = typeof roobee;
export type rsr = typeof rsr;
export type rsv = typeof rsv;
export type rumirumi = typeof rumirumi;
export type rumirumibg = typeof rumirumibg;
export type ruru = typeof ruru;
export type rurubg = typeof rurubg;
export type sal = typeof sal;
export type sand = typeof sand;
export type sanomaya = typeof sanomaya;
export type sanomayabg = typeof sanomayabg;
export type sanomayavix = typeof sanomayavix;
export type satoayaka = typeof satoayaka;
export type satoayakabg = typeof satoayakabg;
export type ser = typeof ser;
export type sgd = typeof sgd;
export type sgr = typeof sgr;
export type shimarena = typeof shimarena;
export type shimarenabg = typeof shimarenabg;
export type shirahoshi = typeof shirahoshi;
export type shirahoshibg = typeof shirahoshibg;
export type shx = typeof shx;
export type sirahosivix = typeof sirahosivix;
export type six = typeof six;
export type sjcx = typeof sjcx;
export type snip = typeof snip;
export type snx = typeof snx;
export type spdr = typeof spdr;
export type sphtx = typeof sphtx;
export type ssx = typeof ssx;
export type stac = typeof stac;
export type stacs = typeof stacs;
export type storj = typeof storj;
export type tem = typeof tem;
export type tft = typeof tft;
export type thx = typeof thx;
export type tmtg = typeof tmtg;
export type ton = typeof ton;
export type torekabuopt = typeof torekabuopt;
export type tpay = typeof tpay;
export type tpt = typeof tpt;
export type trx = typeof trx;
export type tsukasa = typeof tsukasa;
export type tsukasabg = typeof tsukasabg;
export type tsukasavix = typeof tsukasavix;
export type ubt = typeof ubt;
export type ukg = typeof ukg;
export type uni = typeof uni;
export type usd = typeof usd;
export type usdc = typeof usdc;
export type usds = typeof usds;
export type usdt = typeof usdt;
export type vet = typeof vet;
export type vi = typeof vi;
export type vidy = typeof vidy;
export type vidyx = typeof vidyx;
export type wabi = typeof wabi;
export type wemix = typeof wemix;
export type win = typeof win;
export type wlo = typeof wlo;
export type wom = typeof wom;
export type xaceight = typeof xaceight;
export type xacfive = typeof xacfive;
export type xacfour = typeof xacfour;
export type xacnine = typeof xacnine;
export type xacone = typeof xacone;
export type xacseven = typeof xacseven;
export type xacsix = typeof xacsix;
export type xacthree = typeof xacthree;
export type xactwo = typeof xactwo;
export type xcf = typeof xcf;
export type xcp = typeof xcp;
export type xdc = typeof xdc;
export type xem = typeof xem;
export type xki = typeof xki;
export type xlm = typeof xlm;
export type xmr = typeof xmr;
export type xnk = typeof xnk;
export type xno = typeof xno;
export type xpr = typeof xpr;
export type xpt = typeof xpt;
export type xrp = typeof xrp;
export type xsgd = typeof xsgd;
export type xtz = typeof xtz;
export type xym = typeof xym;
export type yamaguchia = typeof yamaguchia;
export type yamaguchiabg = typeof yamaguchiabg;
export type yogibogocpfr = typeof yogibogocpfr;
export type yogibogocpfv = typeof yogibogocpfv;
export type yogibogocpon = typeof yogibogocpon;
export type yogibogocpsx = typeof yogibogocpsx;
export type yogibogocpth = typeof yogibogocpth;
export type yogibogocptw = typeof yogibogocptw;
export type zaif = typeof zaif;
export type zec = typeof zec;
export type zil = typeof zil;
export type zpr = typeof zpr;
export type zusd = typeof zusd;
export type zwap = typeof zwap;

export type _1WO = Uppercase<_1wo>;
export type AAVE = Uppercase<aave>;
export type ABBC = Uppercase<abbc>;
export type ABEY = Uppercase<abey>;
export type ADH = Uppercase<adh>;
export type ALBT = Uppercase<albt>;
export type ALX = Uppercase<alx>;
export type AMLT = Uppercase<amlt>;
export type AMN = Uppercase<amn>;
export type ANCT = Uppercase<anct>;
export type ANW = Uppercase<anw>;
export type ARE = Uppercase<are>;
export type ASM = Uppercase<asm>;
export type ATOM = Uppercase<atom>;
export type AUD = Uppercase<aud>;
export type BAAS = Uppercase<baas>;
export type BAT = Uppercase<bat>;
export type BCC = Uppercase<bcc>;
export type BCH = Uppercase<bch>;
export type BCHA = Uppercase<bcha>;
export type BFC = Uppercase<bfc>;
export type BIFI = Uppercase<bifi>;
export type BITCRYSTALS = Uppercase<bitcrystals>;
export type BITGIRLSI = Uppercase<bitgirlsi>;
export type BITGIRLSII = Uppercase<bitgirlsii>;
export type BRC = Uppercase<brc>;
export type BTC = Uppercase<btc>;
export type BTC3L = Uppercase<btc3l>;
export type BTC3S = Uppercase<btc3s>;
export type BTCSHORT = Uppercase<btcshort>;
export type BTCV = Uppercase<btcv>;
export type BTRN = Uppercase<btrn>;
export type CAN = Uppercase<can>;
export type CEL = Uppercase<cel>;
export type CHI = Uppercase<chi>;
export type CHIKARIN = Uppercase<chikarin>;
export type CHIKARINBG = Uppercase<chikarinbg>;
export type CHIKARINVIX = Uppercase<chikarinvix>;
export type CICC = Uppercase<cicc>;
export type CIM = Uppercase<cim>;
export type CLRX = Uppercase<clrx>;
export type CMCT = Uppercase<cmct>;
export type CNY = Uppercase<cny>;
export type COMP = Uppercase<comp>;
export type COT = Uppercase<cot>;
export type CPH = Uppercase<cph>;
export type CRPT = Uppercase<crpt>;
export type CRT = Uppercase<crt>;
export type CTK = Uppercase<ctk>;
export type CUDOS = Uppercase<cudos>;
export type DACS = Uppercase<dacs>;
export type DAG = Uppercase<dag>;
export type DAI = Uppercase<dai>;
export type DASH = Uppercase<dash>;
export type DENT = Uppercase<dent>;
export type DEXA = Uppercase<dexa>;
export type DIA = Uppercase<dia>;
export type DJASANYAN = Uppercase<djasanyan>;
export type DJASANYANBG = Uppercase<djasanyanbg>;
export type DJASANYANVIX = Uppercase<djasanyanvix>;
export type DOGE = Uppercase<doge>;
export type DOT = Uppercase<dot>;
export type DRG = Uppercase<drg>;
export type DS = Uppercase<ds>;
export type ECH = Uppercase<ech>;
export type EGLD = Uppercase<egld>;
export type ENJ = Uppercase<enj>;
export type ERC20_CMS = Uppercase<erc20_cms>;
export type ETC = Uppercase<etc>;
export type ETH = Uppercase<eth>;
export type ETH3L = Uppercase<eth3l>;
export type ETH3S = Uppercase<eth3s>;
export type ETN = Uppercase<etn>;
export type EUR = Uppercase<eur>;
export type EWT = Uppercase<ewt>;
export type FCT = Uppercase<fct>;
export type FDX = Uppercase<fdx>;
export type FIO = Uppercase<fio>;
export type FLEX = Uppercase<flex>;
export type FLIXX = Uppercase<flixx>;
export type FLP = Uppercase<flp>;
export type FSCC = Uppercase<fscc>;
export type FSN = Uppercase<fsn>;
export type FTT = Uppercase<ftt>;
export type FUSE = Uppercase<fuse>;
export type GAT = Uppercase<gat>;
export type GATE = Uppercase<gate>;
export type GEN = Uppercase<gen>;
export type GET = Uppercase<get>;
export type GOM2 = Uppercase<gom2>;
export type GUSD = Uppercase<gusd>;
export type GXT = Uppercase<gxt>;
export type GYEN = Uppercase<gyen>;
export type GZE = Uppercase<gze>;
export type GZIL = Uppercase<gzil>;
export type HBAR = Uppercase<hbar>;
export type HINANOMAI = Uppercase<hinanomai>;
export type HINANOMAIBG = Uppercase<hinanomaibg>;
export type HKD = Uppercase<hkd>;
export type HOT = Uppercase<hot>;
export type HT = Uppercase<ht>;
export type HYDRO = Uppercase<hydro>;
export type HYOU = Uppercase<hyou>;
export type ICHARLOTTE = Uppercase<icharlotte>;
export type ICHARLOTTEBG = Uppercase<icharlottebg>;
export type IDH = Uppercase<idh>;
export type IDR = Uppercase<idr>;
export type IDRT = Uppercase<idrt>;
export type IHF = Uppercase<ihf>;
export type ILK = Uppercase<ilk>;
export type INR = Uppercase<inr>;
export type IOST = Uppercase<iost>;
export type IPSX = Uppercase<ipsx>;
export type ITSUKI = Uppercase<itsuki>;
export type ITSUKIBG = Uppercase<itsukibg>;
export type IXT = Uppercase<ixt>;
export type JPY = Uppercase<jpy>;
export type JPYZ = Uppercase<jpyz>;
export type KAORI = Uppercase<kaori>;
export type KAORIBG = Uppercase<kaoribg>;
export type KINOBG = Uppercase<kinobg>;
export type KINOKOUSAKA = Uppercase<kinokousaka>;
export type KLAY = Uppercase<klay>;
export type KMD = Uppercase<kmd>;
export type KRL = Uppercase<krl>;
export type KSM = Uppercase<ksm>;
export type LCX = Uppercase<lcx>;
export type LEENA = Uppercase<leena>;
export type LEENABG = Uppercase<leenabg>;
export type LIKE = Uppercase<like>;
export type LINK = Uppercase<link>;
export type LND = Uppercase<lnd>;
export type LPT = Uppercase<lpt>;
export type LSK = Uppercase<lsk>;
export type LTC = Uppercase<ltc>;
export type LTX = Uppercase<ltx>;
export type MAGATAMABL = Uppercase<magatamabl>;
export type MAGATAMABLFR = Uppercase<magatamablfr>;
export type MAGATAMABLFV = Uppercase<magatamablfv>;
export type MAGATAMABLON = Uppercase<magatamablon>;
export type MAGATAMABLSV = Uppercase<magatamablsv>;
export type MAGATAMABLSX = Uppercase<magatamablsx>;
export type MAGATAMABLTH = Uppercase<magatamablth>;
export type MAGATAMABLTW = Uppercase<magatamabltw>;
export type MAGATAMABZ = Uppercase<magatamabz>;
export type MAGATAMAGN = Uppercase<magatamagn>;
export type MAGATAMAGNFR = Uppercase<magatamagnfr>;
export type MAGATAMAGNFV = Uppercase<magatamagnfv>;
export type MAGATAMAGNON = Uppercase<magatamagnon>;
export type MAGATAMAGNSV = Uppercase<magatamagnsv>;
export type MAGATAMAGNSX = Uppercase<magatamagnsx>;
export type MAGATAMAGNTH = Uppercase<magatamagnth>;
export type MAGATAMAGNTW = Uppercase<magatamagntw>;
export type MAGATAMAMIJN = Uppercase<magatamamijn>;
export type MAGATAMARD = Uppercase<magatamard>;
export type MAGATAMARDFR = Uppercase<magatamardfr>;
export type MAGATAMARDFV = Uppercase<magatamardfv>;
export type MAGATAMARDON = Uppercase<magatamardon>;
export type MAGATAMARDSV = Uppercase<magatamardsv>;
export type MAGATAMARDSX = Uppercase<magatamardsx>;
export type MAGATAMARDTH = Uppercase<magatamardth>;
export type MAGATAMARDTW = Uppercase<magatamardtw>;
export type MAGATAMATQ = Uppercase<magatamatq>;
export type MAGATAMATQFR = Uppercase<magatamatqfr>;
export type MAGATAMATQFV = Uppercase<magatamatqfv>;
export type MAGATAMATQON = Uppercase<magatamatqon>;
export type MAGATAMATQSV = Uppercase<magatamatqsv>;
export type MAGATAMATQSX = Uppercase<magatamatqsx>;
export type MAGATAMATQTH = Uppercase<magatamatqth>;
export type MAGATAMATQTW = Uppercase<magatamatqtw>;
export type MAGATAMAVT = Uppercase<magatamavt>;
export type MAGATAMAVTFR = Uppercase<magatamavtfr>;
export type MAGATAMAVTFV = Uppercase<magatamavtfv>;
export type MAGATAMAVTON = Uppercase<magatamavton>;
export type MAGATAMAVTSV = Uppercase<magatamavtsv>;
export type MAGATAMAVTSX = Uppercase<magatamavtsx>;
export type MAGATAMAVTTH = Uppercase<magatamavtth>;
export type MAGATAMAVTTW = Uppercase<magatamavttw>;
export type MAGATAMAWT = Uppercase<magatamawt>;
export type MAGATAMAWTFR = Uppercase<magatamawtfr>;
export type MAGATAMAWTFV = Uppercase<magatamawtfv>;
export type MAGATAMAWTON = Uppercase<magatamawton>;
export type MAGATAMAWTSV = Uppercase<magatamawtsv>;
export type MAGATAMAWTSX = Uppercase<magatamawtsx>;
export type MAGATAMAWTTH = Uppercase<magatamawtth>;
export type MAGATAMAWTTW = Uppercase<magatamawttw>;
export type MAGATAMAYL = Uppercase<magatamayl>;
export type MAGATAMAYLFR = Uppercase<magatamaylfr>;
export type MAGATAMAYLFV = Uppercase<magatamaylfv>;
export type MAGATAMAYLON = Uppercase<magatamaylon>;
export type MAGATAMAYLSV = Uppercase<magatamaylsv>;
export type MAGATAMAYLSX = Uppercase<magatamaylsx>;
export type MAGATAMAYLTH = Uppercase<magatamaylth>;
export type MAGATAMAYLTW = Uppercase<magatamayltw>;
export type MAMICHANBG = Uppercase<mamichanbg>;
export type MAMICHANNEL = Uppercase<mamichannel>;
export type MARX = Uppercase<marx>;
export type MCO = Uppercase<mco>;
export type MGO = Uppercase<mgo>;
export type MIMO = Uppercase<mimo>;
export type MIOTA = Uppercase<miota>;
export type MITH = Uppercase<mith>;
export type MITX = Uppercase<mitx>;
export type MIZUKI = Uppercase<mizuki>;
export type MIZUKIBG = Uppercase<mizukibg>;
export type MIZUKIVIX = Uppercase<mizukivix>;
export type MKR = Uppercase<mkr>;
export type MNR = Uppercase<mnr>;
export type MONA = Uppercase<mona>;
export type MOSAIC_CMS = Uppercase<mosaic_cms>;
export type MRK = Uppercase<mrk>;
export type MT = Uppercase<mt>;
export type MTC = Uppercase<mtc>;
export type MTL = Uppercase<mtl>;
export type MTN = Uppercase<mtn>;
export type MVL = Uppercase<mvl>;
export type NCXC = Uppercase<ncxc>;
export type NDAU = Uppercase<ndau>;
export type NEMCARD = Uppercase<nemcard>;
export type NEO = Uppercase<neo>;
export type NII = Uppercase<nii>;
export type OAX = Uppercase<oax>;
export type OMG = Uppercase<omg>;
export type ONT = Uppercase<ont>;
export type ORBS = Uppercase<orbs>;
export type PACHI = Uppercase<pachi>;
export type PAR = Uppercase<par>;
export type PCI = Uppercase<pci>;
export type PEPECASH = Uppercase<pepecash>;
export type PERI = Uppercase<peri>;
export type PHP = Uppercase<php>;
export type PLT = Uppercase<plt>;
export type PMA = Uppercase<pma>;
export type POWR = Uppercase<powr>;
export type PPL = Uppercase<ppl>;
export type PPP = Uppercase<ppp>;
export type PWV = Uppercase<pwv>;
export type QASH = Uppercase<qash>;
export type QBZ = Uppercase<qbz>;
export type QTUM = Uppercase<qtum>;
export type RBTC = Uppercase<rbtc>;
export type REDI = Uppercase<redi>;
export type REN = Uppercase<ren>;
export type RFOX = Uppercase<rfox>;
export type RIF = Uppercase<rif>;
export type RISAVIX = Uppercase<risavix>;
export type ROOBEE = Uppercase<roobee>;
export type RSR = Uppercase<rsr>;
export type RSV = Uppercase<rsv>;
export type RUMIRUMI = Uppercase<rumirumi>;
export type RUMIRUMIBG = Uppercase<rumirumibg>;
export type RURU = Uppercase<ruru>;
export type RURUBG = Uppercase<rurubg>;
export type SAL = Uppercase<sal>;
export type SAND = Uppercase<sand>;
export type SANOMAYA = Uppercase<sanomaya>;
export type SANOMAYABG = Uppercase<sanomayabg>;
export type SANOMAYAVIX = Uppercase<sanomayavix>;
export type SATOAYAKA = Uppercase<satoayaka>;
export type SATOAYAKABG = Uppercase<satoayakabg>;
export type SER = Uppercase<ser>;
export type SGD = Uppercase<sgd>;
export type SGR = Uppercase<sgr>;
export type SHIMARENA = Uppercase<shimarena>;
export type SHIMARENABG = Uppercase<shimarenabg>;
export type SHIRAHOSHI = Uppercase<shirahoshi>;
export type SHIRAHOSHIBG = Uppercase<shirahoshibg>;
export type SHX = Uppercase<shx>;
export type SIRAHOSIVIX = Uppercase<sirahosivix>;
export type SIX = Uppercase<six>;
export type SJCX = Uppercase<sjcx>;
export type SNIP = Uppercase<snip>;
export type SNX = Uppercase<snx>;
export type SPDR = Uppercase<spdr>;
export type SPHTX = Uppercase<sphtx>;
export type SSX = Uppercase<ssx>;
export type STAC = Uppercase<stac>;
export type STACS = Uppercase<stacs>;
export type STORJ = Uppercase<storj>;
export type TEM = Uppercase<tem>;
export type TFT = Uppercase<tft>;
export type THX = Uppercase<thx>;
export type TMTG = Uppercase<tmtg>;
export type TON = Uppercase<ton>;
export type TOREKABUOPT = Uppercase<torekabuopt>;
export type TPAY = Uppercase<tpay>;
export type TPT = Uppercase<tpt>;
export type TRX = Uppercase<trx>;
export type TSUKASA = Uppercase<tsukasa>;
export type TSUKASABG = Uppercase<tsukasabg>;
export type TSUKASAVIX = Uppercase<tsukasavix>;
export type UBT = Uppercase<ubt>;
export type UKG = Uppercase<ukg>;
export type UNI = Uppercase<uni>;
export type USD = Uppercase<usd>;
export type USDC = Uppercase<usdc>;
export type USDS = Uppercase<usds>;
export type USDT = Uppercase<usdt>;
export type VET = Uppercase<vet>;
export type VI = Uppercase<vi>;
export type VIDY = Uppercase<vidy>;
export type VIDYX = Uppercase<vidyx>;
export type WABI = Uppercase<wabi>;
export type WEMIX = Uppercase<wemix>;
export type WIN = Uppercase<win>;
export type WLO = Uppercase<wlo>;
export type WOM = Uppercase<wom>;
export type XACEIGHT = Uppercase<xaceight>;
export type XACFIVE = Uppercase<xacfive>;
export type XACFOUR = Uppercase<xacfour>;
export type XACNINE = Uppercase<xacnine>;
export type XACONE = Uppercase<xacone>;
export type XACSEVEN = Uppercase<xacseven>;
export type XACSIX = Uppercase<xacsix>;
export type XACTHREE = Uppercase<xacthree>;
export type XACTWO = Uppercase<xactwo>;
export type XCF = Uppercase<xcf>;
export type XCP = Uppercase<xcp>;
export type XDC = Uppercase<xdc>;
export type XEM = Uppercase<xem>;
export type XKI = Uppercase<xki>;
export type XLM = Uppercase<xlm>;
export type XMR = Uppercase<xmr>;
export type XNK = Uppercase<xnk>;
export type XNO = Uppercase<xno>;
export type XPR = Uppercase<xpr>;
export type XPT = Uppercase<xpt>;
export type XRP = Uppercase<xrp>;
export type XSGD = Uppercase<xsgd>;
export type XTZ = Uppercase<xtz>;
export type XYM = Uppercase<xym>;
export type YAMAGUCHIA = Uppercase<yamaguchia>;
export type YAMAGUCHIABG = Uppercase<yamaguchiabg>;
export type YOGIBOGOCPFR = Uppercase<yogibogocpfr>;
export type YOGIBOGOCPFV = Uppercase<yogibogocpfv>;
export type YOGIBOGOCPON = Uppercase<yogibogocpon>;
export type YOGIBOGOCPSX = Uppercase<yogibogocpsx>;
export type YOGIBOGOCPTH = Uppercase<yogibogocpth>;
export type YOGIBOGOCPTW = Uppercase<yogibogocptw>;
export type ZAIF = Uppercase<zaif>;
export type ZEC = Uppercase<zec>;
export type ZIL = Uppercase<zil>;
export type ZPR = Uppercase<zpr>;
export type ZUSD = Uppercase<zusd>;
export type ZWAP = Uppercase<zwap>;
