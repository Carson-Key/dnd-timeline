(this["webpackJsonpdnd-timeline"]=this["webpackJsonpdnd-timeline"]||[]).push([[0],{21:function(e,a,i){e.exports=i(40)},26:function(e,a,i){},27:function(e,a,i){},28:function(e,a,i){},29:function(e,a,i){},32:function(e,a,i){},40:function(e,a,i){"use strict";i.r(a);var r=i(1),o=i.n(r),t=i(12),n=i.n(t),s=(i(26),i(6)),d=i(7),l=i(9),c=i(8),p=(i(27),i(10)),h=(i(28),i(49)),m=(i(29),i(41)),u=i(42),y=i(43),g=i(44),f=i(45),v=i(46),C=i(50),k=i(47),b=function(e){Object(l.a)(i,e);var a=Object(c.a)(i);function i(){return Object(s.a)(this,i),a.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("br",null),o.a.createElement(u.a,null,o.a.createElement(y.a,null,o.a.createElement(g.a,{fluid:!0},o.a.createElement(m.a,{fluid:!0},o.a.createElement("center",null,o.a.createElement("h1",{className:"display-3"},"Timeline")))))),o.a.createElement(u.a,{className:"centered"},o.a.createElement(y.a,null,o.a.createElement("p",null,"What is Your Player's Name?"),o.a.createElement(f.a,null,o.a.createElement(v.a,{placeholder:"Cade Goodbarrel",value:this.props.playerName,onChange:this.props.onChange,onKeyPress:this.props.onKeyPress}),o.a.createElement(C.a,{addonType:"append"},o.a.createElement(k.a,{onClick:this.props.enterFunc},"Enter"))))))}}]),i}(r.Component),T=(i(32),i(48)),A=function(e){Object(l.a)(i,e);var a=Object(c.a)(i);function i(){return Object(s.a)(this,i),a.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){var e=this,a=this.props.timeline,i=Object.keys(a).sort((function(e,a){return+parseInt(e)-+parseInt(a)}));return o.a.createElement("div",null,o.a.createElement("br",null),i.map((function(i,r){var t,n=parseInt(i);return n<0?t=(t=(t=Math.abs(n)).toString())+" "+e.props.lessThanYearZero:n>=0&&(t=(t=(t=Math.abs(n)).toString())+" "+e.props.greaterThanYearZero),a[i].map((function(e,a){return o.a.createElement("center",{key:a},o.a.createElement(T.a,null,o.a.createElement(T.a,{body:!0},o.a.createElement(T.a,{heading:!0},t),e.description)),o.a.createElement("br",null),o.a.createElement("div",{className:"line"}),o.a.createElement("br",null))}))})))}}]),i}(r.Component);function E(e){return e[0].toUpperCase()+e.slice(1)}var L=function(e){Object(l.a)(i,e);var a=Object(c.a)(i);function i(){return Object(s.a)(this,i),a.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k.a,{className:"exitButton",color:"danger",onClick:this.props.exitTimeLine},"exit ",E(this.props.playerName)),o.a.createElement(g.a,{fluid:!0},o.a.createElement(m.a,{fluid:!0},o.a.createElement("center",null,o.a.createElement("h1",{className:"display-3"},"s"===(e=E(this.props.playerName))[e.length-1]?e+"'":e+"'s"," Timeline")))),o.a.createElement(A,{timeline:this.props.newTimeLine,lessThanYearZero:this.props.lessThanYearZero,greaterThanYearZero:this.props.greaterThanYearZero}));var e}}]),i}(r.Component),O={cade:!0,naomi:!0,ator:!0,storn:!0,olorin:!0,crainer:!0,ikoll:!0,mar:!0,indominous:!0,phira:!0,shade:!0,osbellum:!0,osmetallum:!0,luvrunint:!0,fowl:!0},G={"cade goodbarrel":"cade",cadegoodbarrel:"cade","ator htailog":"ator",atorhtailog:"ator","crainer caracas":"crainer",crainercaracas:"crainer",jondo:"crainer",maurice:"crainer",lucy:"crainer",tania:"crainer",jondocaracas:"crainer","jondo caracas":"crainer",mauricecaracas:"crainer","maurice caracas":"crainer",lucycaracas:"crainer","lucy caracas":"crainer",taniacaracas:"crainer","tania caracas":"crainer","naomi samara":"naomi",naomisamara:"naomi","indominous von zarovich":"indominous","indominous vonzarovich":"indominous",indominousvonzarovich:"indominous","indominousvon zarovich":"indominous",nameless:"indominous","shade goodbarrel":"shade",shadegoodbarrel:"shade","phira weneh":"phira","phira squatamus":"phira",phiraweneh:"phira",phirasquatamus:"phira","mar corvus":"mar",marcorvus:"mar","olorin corvus":"olorin",olorincorvus:"olorin","stron helderian":"storn",stronhelderian:"storn",dova:"ikoll"};function P(e,a){return G[e]&&(e=G[e]),"dm"===e.toLowerCase()?a:O[e.toLowerCase()]?function(e,a){var i={};return Object.keys(a).forEach((function(r,o){var t=[];a[r].forEach((function(a,i){a.players[e]&&t.push(a)})),i[r]=t})),i}(e.toLowerCase(),a):"error"}var w=function(e){Object(l.a)(i,e);var a=Object(c.a)(i);function i(e){var r;return Object(s.a)(this,i),(r=a.call(this,e)).state={playerName:"",moveOn:"",error:""},r.newTimeLine={},r.handlePlayerNameChange=r.handlePlayerNameChange.bind(Object(p.a)(r)),r.handlePlayerNameKey=r.handlePlayerNameKey.bind(Object(p.a)(r)),r.setPlayerTimeline=r.setPlayerTimeline.bind(Object(p.a)(r)),r.exitTimeLine=r.exitTimeLine.bind(Object(p.a)(r)),r.displayError=r.displayError.bind(Object(p.a)(r)),r}return Object(d.a)(i,[{key:"setPlayerTimeline",value:function(){""!==this.state.playerName&&(this.newTimeLine=P(this.state.playerName,this.props.timeline),"error"===this.newTimeLine?this.setState({error:"error"}):this.setState({moveOn:"True"}))}},{key:"handlePlayerNameChange",value:function(e){this.setState({playerName:e.target.value})}},{key:"handlePlayerNameKey",value:function(e){"Enter"===e.key&&this.setState({playerName:e.target.value},this.setPlayerTimeline())}},{key:"exitTimeLine",value:function(){this.setState({moveOn:""})}},{key:"displayError",value:function(){return""!==this.state.error?o.a.createElement(h.a,{color:"danger"},"Please Enter a valid player name"):void 0}},{key:"render",value:function(){return""===this.state.moveOn?o.a.createElement("div",null,this.displayError(),o.a.createElement(b,{onChange:this.handlePlayerNameChange,enterFunc:this.setPlayerTimeline,onKeyPress:this.handlePlayerNameKey})):o.a.createElement(L,{exitTimeLine:this.exitTimeLine,playerName:this.state.playerName,newTimeLine:this.newTimeLine,lessThanYearZero:this.props.lessThanYearZero,greaterThanYearZero:this.props.greaterThanYearZero})}}]),i}(r.Component),S={"-1546":[{date:-1546,description:"Kingdom of Dwarves is Founded",players:{cade:!0,olorin:!0}}],"-1543":[{date:-1543,description:"Kingdom of Gothoia is Founded",players:{cade:!0,olorin:!0}}],"-1521":[{date:-1521,description:"The Hende Kingdom is Founded",players:{cade:!0,olorin:!0}}],"-1393":[{date:-1393,description:"Osignis is Born",players:{}}],"-1391":[{date:-1391,description:"Yiena is Born",players:{}}],"-1389":[{date:-1389,description:"Osbellum is Born",players:{}}],"-1388":[{date:-1388,description:"Osmetallum is Born",players:{}}],"-1364":[{date:-1364,description:"Osiginis Joins the Gothoian Defence Militia",players:{}}],"-1362":[{date:-1362,description:"Osbellum joins the Gothioan Military",players:{}}],"-1361":[{date:-1361,description:"Osignis Defends the Capital of Gothoia, saving the King",players:{}},{date:-1361,description:"Osiginis Declines Kings offer of a Perstigous Military Position",players:{}},{date:-1361,description:"Osiginis Settles in his home town of Devieon",players:{}}],"-1360":[{date:-1360,description:"Osiginis Meets Yiena",players:{}}],"-1358":[{date:-1358,description:"Osiginis and Yiena get Married",players:{}}],"-1357":[{date:-1357,description:"Torria Os is Born",players:{}}],"-1354":[{date:-1354,description:"Osiginis Meets his Father, Kelemvor Lord of Death, for the First Time",players:{}},{date:-1354,description:"Osiginis Declines Kelemvors offer to Lead the Army of Dead",players:{}},{date:-1353,description:"Obellum Meets Tempus Lord of Battles and his Father",players:{}},{date:-1353,description:"Obellum Joins the Warroir Army of his Father",players:{}}],"-1351":[{date:-1351,description:"War of the Gods Starts",players:{cade:!0,olorin:!0,ikoll:!0,mar:!0}}],"-1349":[{date:-1349,description:"The Battle of Devieon Occurs",players:{cade:!0,olorin:!0}},{date:-1349,description:"Osiginis' Family is Captured by an Unknown Side of the War",players:{}},{date:-1349,description:"Obellum Offers Osignis to join the Side of Warriors",players:{}},{date:-1349,description:"Osignis Joins The Army of Warriors to Rescue his Family, and Take Revenge for thir Capture",players:{}}],"-1348":[{date:-1348,description:"Osmetallum Crafts Death's Blade for Osignis",players:{}}],"-1344":[{date:-1344,description:"The Battle of Hell's Gate Occurs",players:{cade:!0,olorin:!0}},{date:-1344,description:"The Cease Fire Between Osiginis and Kelemvor Occurs",players:{}},{date:-1344,description:"Osiginis Learns that his Family was Captured by Tempus",players:{}},{date:-1344,description:"Tempus Fails to kill Osignis",players:{}},{date:-1344,description:"Osbellum Takes Leadership of The Warriors Army from Osignis",players:{}},{date:-1344,description:"Osiginis Takes leadership of the Army of the Dead",players:{}}],"-1343":[{date:-1343,description:"Second Battle of Devieon Occurs",players:{cade:!0,olorin:!0}},{date:-1343,description:"Tempus and Kelemvor Break Death's Blade, and Bind Osignis to a Demon",players:{}},{date:-1343,description:"The War of the Gods Ends",players:{cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:-1343,description:"Osmetellum is thought to be Killed",players:{}}],"-1342":[{date:-1342,description:"Osignis Goes into Hiding",players:{}}],"-504":[{date:-504,description:"The Atheria Empire is Formed",players:{cade:!0,olorin:!0,ikoll:!0}}],0:[{date:0,description:"Kerlin is Born",players:{cade:!0,indominous:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,crainer:!0,ikoll:!0,mar:!0}}],24:[{date:24,description:"Kerlin Defeats the Gods",players:{cade:!0,indominous:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,crainer:!0,ikoll:!0,mar:!0}}],61:[{date:61,description:"Kerlin Dies",players:{cade:!0,indominous:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,crainer:!0,ikoll:!0,mar:!0}}],68:[{date:68,description:"Newport Family is Founded",players:{cade:!0,ikoll:!0}}],78:[{date:78,description:"Atheria Conquers Kingdom of Dwarves",players:{cade:!0,olorin:!0,ikoll:!0}}],82:[{date:82,description:"Atheria Conquers Kingdom of Gothoia",players:{cade:!0,olorin:!0,ikoll:!0}}],102:[{date:102,description:"Atheria Creates the Colony of Dende",players:{cade:!0,olorin:!0}}],103:[{date:103,description:"Nommaria is Formed",players:{cade:!0,olorin:!0,ikoll:!0}}],109:[{date:109,description:"Gemia Formally Founded",players:{cade:!0,olorin:!0,ikoll:!0}}],111:[{date:111,description:"Nokede Conquers all lesser Clans",players:{cade:!0,olorin:!0}}],116:[{date:116,description:"War for the New World strats",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}}],138:[{date:138,description:"Nommaria Mysteriously Dissolves",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}}],141:[{date:141,description:"The Atheria Capital is Mysteriouly Destroyed",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}},{date:141,description:"The Atheria Empire Erupts in Civil War",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}},{date:141,description:"War for the New World ends",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}}],144:[{date:144,description:"The Atherian Civil War Ends",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}},{date:144,description:"Hende is Reformed Taking the Kingdom of Dwarves Territory",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0}},{date:144,description:"Dende Gains Independence",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0}},{date:144,description:"Kingdom of Gothoia is Reformed",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0}}],155:[{date:155,description:"The Never Ending War Starts",players:{cade:!0,olorin:!0,naomi:!0,ator:!0,storn:!0,ikoll:!0,mar:!0}}],201:[{date:201,description:"Waterdeep is Formed",players:{cade:!0,olorin:!0}}],306:[{date:306,description:"Strahd is Born",players:{indominous:!0,cade:!0,olorin:!0}}],347:[{date:347,description:"Barovia is Formed",players:{indominous:!0,cade:!0,olorin:!0}}],351:[{date:351,description:"Strahd Becomes a Vampire",players:{indominous:!0,cade:!0,olorin:!0,mar:!0}}],523:[{date:523,description:"Nokede Declares War on Fake Africa",players:{cade:!0,ikoll:!0,olorin:!0}}],578:[{date:578,description:"Nokede Starts using Constructs in War Against Fake Africa",players:{cade:!0}},{date:578,description:"Formicidae is built",players:{}}],583:[{date:583,description:"Formicidae is Deployed in Fake Africa",players:{}}],584:[{date:584,description:"Formicidae is Infested with Ants",players:{}}],623:[{date:623,description:"Gemia Forms Alliance with Gothia",players:{cade:!0}}],666:[{date:666,description:"Voodoo Mama Juju is born",players:{}}],668:[{date:668,description:"Cade Goodbarrel is born",players:{cade:!0}}],679:[{date:679,description:"Shade Goodbarrel is born",players:{cade:!0}}],686:[{date:686,description:"Cade Goodbarrel is Accepted to HIW",players:{indominous:!0,cade:!0}},{date:686,description:"Cade Goodbarrel Soils Himself During Entrance Ceremony, and is kicked out",players:{indominous:!0,cade:!0}}],687:[{date:687,description:"Cade Goodbarrel Enrolls in SUCC",players:{indominous:!0,cade:!0}}],689:[{date:689,description:"Saint Bobe is Born",players:{}}],691:[{date:691,description:"Cade Goodbarrel Soils Himself During his Proposal to Vernomica",players:{indominous:!0,cade:!0}}],696:[{date:696,description:"Mar is Born",players:{olorin:!0,mar:!0}}],702:[{date:702,description:"Tabz is Born",players:{}}],708:[{date:708,description:"Shade Goodbarrel Leaves for Emralia",players:{}},{date:708,description:"Squats is Born",players:{}},{date:709,description:"Vec is Born",players:{}},{date:709,description:"Shade Joins the Emralia Theives Guild",players:{}}],710:[{date:710,description:"Krag is Born",players:{}}],713:[{date:713,description:"Edge Lord is Born",players:{}}],715:[{date:715,description:"Newport Richie is Born",players:{}}],716:[{date:716,description:"Helen is Born",players:{}}],717:[{date:717,description:"Spagetti Spades is Born",players:{}},{date:717,description:"Phira is Born",players:{}}],718:[{date:718,description:"Krag's Tribe is Slaughtered by Strahd",players:{indominous:!0,cade:!0}}],723:[{date:723,description:"Edge Lord's Clan is Slaughtered by Orcus",players:{cade:!0}}],726:[{date:726,description:"A rag tag group of adventures get a contract to go to Barovia",players:{indominous:!0,olorin:!0,mar:!0}},{date:726,description:"The group of adventures enter Barovia, and are now unable to leave",players:{indominous:!0,mar:!0}},{date:726,description:"Akar is killed by a vampire spawn",players:{indominous:!0,mar:!0}},{date:726,description:"Dimitri Von Zarovich joins the adventures hopeing they can stop is father",players:{indominous:!0,mar:!0}},{date:726,description:"The adventures arrive in Krezk",players:{indominous:!0,mar:!0}},{date:726,description:"Ireena is sucked into the pond at Krezk, and Strahd desactrates the holy water",players:{indominous:!0,olorin:!0,mar:!0}},{date:726,description:"The adventures arrive at the Amber Temple",players:{indominous:!0,mar:!0}},{date:726,description:"Dimirtri becomes his father, to destroy his father",players:{indominous:!0,olorin:!0,mar:!0}},{date:726,description:"Dimirti is seemingly killed by the adventures",players:{indominous:!0,olorin:!0,mar:!0}},{date:726,description:"F.I.S.H banishes himself and the powerful being that grants those unworthy the power of vampires",players:{indominous:!0,cade:!0,olorin:!0,mar:!0}},{date:726,description:"Two new adventures join the group, one Dimirti in disgue",players:{indominous:!0,olorin:!0,mar:!0}},{date:726,description:"The adventures arrive at Castle Raven Loft",players:{indominous:!0,mar:!0}},{date:726,description:"Dimitri Reveals himself turning one of the adventures, Fowl, into a Vampire spawn",players:{indominous:!0,olorin:!0,mar:!0}},{date:726,description:"Dimitri Reveals himself turning one of the adventures, Fowl, into a Vampire spawn",players:{indominous:!0,mar:!0}},{date:726,description:"Dimitri banishes Fowl sending him through time",players:{indominous:!0,mar:!0}},{date:726,description:"Dimitri agrees to put his previous plans aside in order to kill his father",players:{indominous:!0,mar:!0}},{date:726,description:"Luvrunint finds his way to the group of adventures",players:{indominous:!0,luvrunint:!0,mar:!0}},{date:726,description:"Dimitri vanishes",players:{indominous:!0,luvrunint:!0,mar:!0}},{date:726,description:"Strahd is defeated by the ragtag team of adventures",players:{indominous:!0,luvrunint:!0,olorin:!0,mar:!0}},{date:726,description:"Two adventures, Viola and Luvrunint, leave Barocia and in doing so are sent through time",players:{indominous:!0,luvrunint:!0,olorin:!0,mar:!0}},{date:726,description:"Those of the group that stay, including Mar, Indominous, and Dimitri, are sent Ten years in the future. Right after Edge Lord and the Pussy Cats defeats Strahd",players:{indominous:!0,olorin:!0,mar:!0}}],730:[{date:730,description:"Shade Fails to Steal from a Gothoian Diplomate",players:{cade:!0}},{date:730,description:"Shade Escapes Trail, leaving Gemia",players:{cade:!0}},{date:730,description:"Shade Avrives in Heian",players:{}}],731:[{date:731,description:"Creamy Ice Cone is Born",players:{}}],733:[{date:733,description:"Cade Goodbarrel Goes off on his own",players:{cade:!0}},{date:733,description:"Osignis Goes out of Hiding",players:{}},{date:733,description:"Edge Lord Arrives in Heian",players:{}}],734:[{date:734,description:"Cade Goodbarrel Arives in Heian",players:{cade:!0}},{date:734,description:"Newport Richie Arives in Heian",players:{}},{date:734,description:"Shade Gets the Fuck out of Heian",players:{}},{date:734,description:"Edge Lord and the Pussy Cats Accept a Contract to take back Bridge World",players:{cade:!0}},{date:734,description:"Edge Lord and the Pussy Cats Complete the Bridge World Contract",players:{cade:!0,ikoll:!0}},{date:734,description:"Edge Lord and the Pussy Cats accept a Contract to Kill a Dragon in the Underdark",players:{cade:!0}},{date:734,description:"Helen Joins Edge Lord and the Pussy Cats",players:{cade:!0}},{date:734,description:"Osignis, Helen, and Edge Lord Fall in Battle",players:{cade:!0}},{date:734,description:"Doctor and Osbellum join Edge Lord and the Pussy Cats",players:{cade:!0}},{date:734,description:"Edge Lord and the Pussy Cats Help Newport Richie Kill his Father",players:{cade:!0}},{date:734,description:"Edge Lord and the Pussy Cats Get out of Heian",players:{cade:!0}},{date:734,description:"Spagetti Spades Arives Outside Barovia",players:{}}],735:[{date:735,description:"Shade Arrives in Barovia",players:{}},{date:735,description:"Edge Lord and the Pussy Cats Arrive in Crater Grove",players:{cade:!0}},{date:735,description:"The Doctor Leaves Edge Lord and the Pussy Cats",players:{cade:!0}},{date:735,description:"Edge Lord and the Pussy Cats Leave Crater Grove",players:{cade:!0}},{date:735,description:"Osbellum Leaves Edge Lord and the Pussy Cats",players:{cade:!0}},{date:735,description:"Voodoo Mama Juju Joins Edge Lord and the Pussy Cats",players:{cade:!0,ikoll:!0}},{date:735,description:"Formicidae Arives Outside Barovia",players:{}},{date:735,description:"Formicidae and Spagetti Spades Join Edge Lord and the Pussy Cats",players:{cade:!0}},{date:735,description:"Edge Lord and the Pussy Cats Accept a Contract Outside of Barovia",players:{cade:!0}},{date:735,description:"Edge Lord and the Pussy Cats Get Stuck in Barovia",players:{cade:!0}},{date:735,description:"Edge Lord and the Pussy Cats Split up in Vallaki",players:{cade:!0}},{date:735,description:"Edge Lord and the Pussy Cats Meet Timin, Shade Goodbarrel, Osbellum, and Vec",players:{cade:!0}},{date:735,description:"Timin and Vec Leave Edge Lord and the Pussy Cats",players:{cade:!0}},{date:735,description:"Krag Joins Edge Lord and the Pussy Cats",players:{cade:!0}},{date:735,description:"Edge Lord and the Pussy Cats Arrive at the Amber Temple",players:{cade:!0}},{date:735,description:"Spagetti Spades Turns on the Party",players:{cade:!0}},{date:735,description:"Spagetti Spades is Defeated and Turned into a Vampire Lord",players:{cade:!0}},{date:735,description:"Creamy Ice Cone Joins Edge Lord and the Pussy Cats",players:{cade:!0}},{date:735,description:"Vec Finds a way out of Barovia",players:{}},{date:735,description:"Vec Meets up with Saint Bobe and Squats and form the Changling Heisters",players:{}},{date:735,description:"The Changling Heisters take over the Heian Theives Guild",players:{}},{date:735,description:"The Changling Heisters Steal the Heian Royal Treasury and Kill the King",players:{}},{date:735,description:"The Changling Heisters Leave to Waneh",players:{}},{date:735,description:"The Changling Heisters Steal the Waneh Royal Airship",players:{}},{date:735,description:"Phira Joins The Changling Heisters",players:{}},{date:735,description:"The Changling Heisters Leave Weneh",players:{}}],736:[{date:736,description:"The Changling Heisters Arrive in Bordon",players:{}},{date:736,description:"Edge Lord and the Pussy Cats Defeat Strahd",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:736,description:"Mar leaves Barovia to form a keeper of the Feathers in a distant land",players:{indominous:!0,olorin:!0}},{date:736,description:"Indominous and Krag take control of Barovia affairs",players:{indominous:!0,cade:!0,olorin:!0}},{date:736,description:"Krag Leaves Edge Lord and the Pussy Cats",players:{indominous:!0,cade:!0}},{date:736,description:"Edge Lord and the Pussy Cats Leave Barovia",players:{indominous:!0,cade:!0}},{date:736,description:"Edge Lord and the Pussy Cats Arrive in Bordon",players:{cade:!0}},{date:736,description:"Edge Lord and the Pussy Cats Merge with the Changling Heisters",players:{cade:!0}},{date:736,description:"Creamy Ice Cone Leaves Edge Lord and the Pussy Cats",players:{cade:!0}},{date:736,description:"Edge Lord and the Pussy Cats Go to Waterdeep",players:{cade:!0}}],737:[{date:737,description:"Edge Lord and the Pussy Cats Successfully Get the Dragon Horde of 500,000gp",players:{cade:!0,ikoll:!0}},{date:737,description:"Edge Lord and the Pussy Cats Formally Create a Guild of the same Name",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],738:[{date:738,description:"Creamy Ice Cone Rejoins Edge Lord and The Pussy Cats",players:{cade:!0}},{date:738,description:"Edge Lord and the Pussy Cats Help Krag and Indominous reform the Barovian State",players:{indominous:!0,cade:!0,mar:!0}}],740:[{date:740,description:"The Barovian Council of Burgomasters is Formed",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:740,description:"The Barovian royal family is reformed with Indominous Von Zarovich at it's head",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],743:[{date:743,description:"Mar starts a keeper of feathers sect in Gothoia",players:{olorin:!0,mar:!0}}],745:[{date:745,description:"Mar meets the Raven Queen",players:{olorin:!0,mar:!0}}],747:[{date:747,description:"Olorin is born",players:{olorin:!0,mar:!0}},{date:747,description:"Mar is gifted immortality by the Raven Queen",players:{olorin:!0,mar:!0}}],748:[{date:748,description:"Edge Lord and the Pussy Cats are Requested to help End the Never Ending War",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],749:[{date:749,description:"Edge Lord and the Pussy Cats Arrive in the Atheria Continent",players:{indominous:!0,cade:!0,mar:!0}}],750:[{date:750,description:"Edge Lord and the Pussy Cats Start a Guerilla Campaign Against Gothoia and Hende",players:{indominous:!0,cade:!0,mar:!0}},{date:750,description:"Barovia Joins Edge Lord and the Pussy Cats to End the Endless War",players:{indominous:!0,cade:!0,mar:!0}}],751:[{date:751,description:"Edge Lord and the Pussy Cats Get the Help of the Long Conquered Dwarves to End the Endless War",players:{indominous:!0,cade:!0,mar:!0}}],752:[{date:752,description:"Edge Lord and the Pussy Cats Gain Large Armies of unhappy Hendites and Gothoians",players:{indominous:!0,cade:!0,mar:!0}},{date:752,description:"Edge Lord and the Pussy Cats Form an Alliance with Gemia",players:{indominous:!0,cade:!0,mar:!0}}],753:[{date:753,description:"The Discord Filled State of Dende is Inherited by Phira of Weneh",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:753,description:"Dende Joins Edge Lord and the Pussy Cats in the Endless War",players:{indominous:!0,cade:!0,mar:!0}},{date:753,description:"Edge Lord and The Pussy Cats Found The Atherion Alliance",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:753,description:"Mar and his keeper of the feathers start to help the Atherion Alliance",players:{indominous:!0,cade:!0,olorin:!0,mar:!0}},{date:753,description:"Barovia, Dende, Gemia, The Kindom of Dwarves, Revolutionary Gothoia, and Revolutionary Hende Join the Atherion Alliance",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],754:[{date:754,description:"The Gothoia Invasion of Gemia starts",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],756:[{date:756,description:"The Invasion of Gemia Ends with Dende Support",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:756,description:"The Atherion Campaign Against Gothoia Starts",players:{indominous:!0,cade:!0,mar:!0}}],758:[{date:758,description:"The Gothoian Capital Falls to Edge Lord and Pussy cats and the Armies of The Atherion Alliance",players:{indominous:!0,cade:!0,mar:!0}},{date:758,description:"Gothoia and Hende Form The Endless Rival Alliance",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],759:[{date:759,description:"The Endless Rival Alliance Push Back Atherion Forces and retake the Gothoian Captial",players:{indominous:!0,cade:!0,mar:!0}},{date:759,description:"Edge Lord and the Pussy Cats and the Forces of Atherion get Encircled Outside the Gothoian Capital",players:{indominous:!0,cade:!0,mar:!0}},{date:759,description:"The Last Battle for Atherion Starts",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:759,description:"Osbellum Arrives at The Last Battle for Atherion with the Warrior's Army Winning the Battle",players:{cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:759,description:"A Rouge Portion of The Warriors Army Lead by Osbellum Joins The Atherion Alliance",players:{cade:!0,olorin:!0,ikoll:!0}},{date:759,description:"The Wedding of Squats and Phira Occurs",players:{indominous:!0,cade:!0,mar:!0}}],760:[{date:760,description:"Gothoia Falls to the Atherion Alliance",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],761:[{date:761,description:"Revolutionary Gothoia Forms the The Gothoian Federation",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],762:[{date:762,description:"The Kingdom of Dwarves is Liberated by the Atherion Alliance",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:762,description:"Hende Falls to The Atherion Alliance",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:762,description:"Revolutionary Hende Founds the Hende Council",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],763:[{date:763,description:"The Endless War offically ends",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:763,description:"Atherion is formed",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:763,description:"Barovia, Dende, Gemia, The Kingdom of Dwarves, The Gothoian Federation and the Hende Council Join The Atherion Nation",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],764:[{date:764,description:"Squats and Phira are Crowned as the First Emperor and Emperess of Atherion",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:764,description:"The Atherion Advisors Council is Formed",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],771:[{date:771,description:"Edge Lord and the Pussy Cats is Disbanded",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:771,description:"Shade Goodbarrel and Vec found the Atherion Theives Guild",players:{cade:!0,ikoll:!0,mar:!0}}],772:[{date:772,description:"Ghero is Born",players:{ikoll:!0,indominous:!0,cade:!0,olorin:!0,mar:!0}}],773:[{date:773,description:"Krag Passes Due to Poor Health From a Life of Battle (But Cade thinks Indominous was at fault)",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],774:[{date:774,description:"Atherion Annexs Part of Old Nomeria",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:774,description:"Nokede Civil War Starts",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:774,description:"Fake Africa joins Elvish Nokedia in the Nokede Civil War",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],775:[{date:775,description:"Newport Richie Redefines the Newport Family",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:775,description:"The Pirate Nation Forms",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],777:[{date:777,description:"Creamy Ice Cone Passes of Old Age",players:{indominous:!0,cade:!0}}],778:[{date:778,description:"Vec Passes of Old Age",players:{indominous:!0,cade:!0}}],782:[{date:782,description:"Nokede Civil War Ends",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:782,description:"Elvish Nokedia is Formed",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],784:[{date:784,description:"Saint Bobe Passes of Old Age",players:{indominous:!0,cade:!0}}],790:[{date:790,description:"Goodbarrel Atherion College (GAC) is Founded by Cade Goodbarrel",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}}],793:[{date:793,description:"The Long Peace Begins",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,naomi:!0,ator:!0,storn:!0,mar:!0}}],795:[{date:795,description:"Squats Passess of Old Age",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:795,description:"Ghero is Crowned the Second Emperor of Atherion",players:{ikoll:!0,indominous:!0,cade:!0,olorin:!0,mar:!0}}],796:[{date:796,description:"Newport Richie Passes of Old Age",players:{indominous:!0,cade:!0}}],801:[{date:801,description:"Osbellum Asks for Shade, Cade, and Formicidae's Help Against his Father; Shade and Cade accept",players:{cade:!0}}],803:[{date:803,description:"Fomicidae Vanishes Without a Trace",players:{indominous:!0,cade:!0,mar:!0}}],805:[{date:805,description:"The War of Wars Starts",players:{cade:!0,olorin:!0,ikoll:!0}}],806:[{date:806,description:"Osbellum and Osmetellum are Reunited",players:{cade:!0}},{date:806,description:"Osmetellum Reforges Death's Blade",players:{cade:!0,ikoll:!0}}],807:[{date:807,description:"Cade, Shade, and Osbellum Fight Against Tempus in The Battle of Warriors",players:{cade:!0}},{date:807,description:"The Rouge Warrior's Army Wins at The Battle of Warriors",players:{cade:!0,ikoll:!0}}],811:[{date:811,description:"Osbellum, Cade, and Shade do a final push through Warrior's Rest",players:{cade:!0}}],813:[{date:813,description:"Osbellum Challenges his Father to a Fight",players:{cade:!0}},{date:813,description:"Osbellum, Cade, and Shade Defeat Tempus",players:{cade:!0,ikoll:!0}},{date:813,description:"Osigins' Soul is Released and He is Reunited with his Wife",players:{cade:!0}},{date:813,description:"Osbellum Becomes Lord of Battles, and a God",players:{cade:!0,olorin:!0,ikoll:!0}},{date:813,description:"The Gods of Warrior's Rest Errupt into Chaos",players:{cade:!0,olorin:!0,ikoll:!0}}],818:[{date:818,description:"The GAC Vault is Created by Cade, Shade, Osbellum, and Osmetellum to Safe Guard Powerfull Artifacts",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],820:[{date:820,description:"Cade starts a decent into insanity",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],821:[{date:821,description:"Edge Lord and the Pussy Cats is Secretly Reformed to Help Protect The GAC Vault and All Life",players:{cade:!0,mar:!0}},{date:821,description:"Cade Goodbarrel, Shade Goodbarrel, Osbellum, and Osmetellum Join The Reformed Edge Lord and The Pussy Cats",players:{cade:!0,mar:!0}}],822:[{date:822,description:"Phira and Tabz Join The Reformed Edge Lord and The Pussy Cats",players:{cade:!0,mar:!0}}],824:[{date:822,description:"Mar joins The Reformed Edge Lord and The Pussy Cats bringing his army of informants to the cause",players:{cade:!0,mar:!0}}],831:[{date:831,description:"Edge Lord and The Pussy Cats Find Kerlin's Blade",players:{cade:!0,mar:!0}}],834:[{date:834,description:"Edge Lord and The Pussy Cats Find Kerlin's Plate",players:{cade:!0,mar:!0}}],856:[{date:856,description:"Edge Lord and The Pussy Cats Find Destroyer of Civilization",players:{indominous:!0,cade:!0,mar:!0}}],878:[{date:878,description:"A Powerfull Articfact is Stollen from the GAC Vualt",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:878,description:"Cade Goodbarrel is seemingly killed by Zolbir The Destroyer",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}},{date:878,description:"A New Class of Adventures Arrive at GAC Adventuring School",players:{cade:!0,ikoll:!0}},{date:878,description:"A group of Students at GAC are tasked by Phira to find out what happend to Cade as a test",players:{mar:!0}},{date:878,description:"Cade is found to be alive and kinda well in a hidden room of vats filled with clones",players:{cade:!0,ikoll:!0,mar:!0}},{date:878,description:"The Adventures of GAC are formed",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],879:[{date:879,description:"Cade sends the Adventures of GAC to find the Destroyer of Civilization",players:{cade:!0,mar:!0}},{date:879,description:"The Adventures of GAC reach the gates of Barovia, now trapped there like many before them",players:{indominous:!0,cade:!0}},{date:879,description:"The Adventures of GAC find that Aron has become a lich",players:{indominous:!0,cade:!0}},{date:879,description:"The Adventures of GAC get the help of the king of Barovia, Indominous. Despite warnings from Cade",players:{indominous:!0,cade:!0}},{date:879,description:"With the help of Indominous Aron is cured from lichdom",players:{indominous:!0,cade:!0}},{date:879,description:"For his help Indominous asks for the help of The Adventures of GAC",players:{indominous:!0,cade:!0}},{date:879,description:"The adventures of GAC accept and go out to find Spagetti Spades who has taken domain over Barovia as Strahd once did",players:{indominous:!0,cade:!0,mar:!0}},{date:879,description:"The adventures of GAC find Spagetti Spades trying to revive Strahd so he can get his revenge on Cade Goodbarrel",players:{indominous:!0,cade:!0,mar:!0}},{date:879,description:"The adventures of GAC trick Spagetti Spades and bring him to Indominous as requested, so that Spagetti can be tried in front of the people for his crimes",players:{indominous:!0,cade:!0,mar:!0}},{date:879,description:"Spagetti is sentenced to death",players:{indominous:!0,cade:!0,mar:!0}},{date:879,description:"Before Spagetti is sentenced to death, Indominous tricks Spagetti into making him a Vampire lord",players:{indominous:!0,cade:!0,mar:!0}},{date:879,description:"With the blessing of the King, The Adventures of GAC go to Midbigdonia where they have been told the artifact they seek is located",players:{indominous:!0,cade:!0,mar:!0}},{date:879,description:"The Adventures of GAC arrive in Midbigdonia",players:{cade:!0,mar:!0}},{date:879,description:"The Adventures of GAC search for the artifact",players:{cade:!0,mar:!0}}],880:[{date:880,description:"The Adventures of GAC after a year finally find the Destroyer of Civilization",players:{cade:!0}},{date:880,description:"The Adventures of GAC defeat Zolbir and recover the artifact before it could be used to kill millions",players:{cade:!0,mar:!0}},{date:880,description:"Martin Geko is killed in battle against Zolbir",players:{cade:!0}},{date:880,description:"The Destroyer of Civilization is returned to the GAC Vault",players:{cade:!0,mar:!0}},{date:880,description:"Dalgur and Sigmund are offered to join Edge Lord and the Pussy cats. Dalgur accepts but Sigmund declines",players:{cade:!0,mar:!0}}],886:[{date:886,description:"Fowl is sent through time and kills himself because he has become something he despises, a Vampire",players:{indominous:!0}},{date:886,description:"Viola and Luvrunint find their way out of Barovia",players:{indominous:!0,cade:!0,mar:!0,luvrunint:!0}},{date:886,description:"Viola and Luvrunint form a cultish holy order in order to kill all vampires",players:{indominous:!0,luvrunint:!0,mar:!0}},{date:886,description:"The Undeath Crusaders are formed",players:{indominous:!0,cade:!0,luvrunint:!0,ikoll:!0,mar:!0}},{date:886,description:"Viola swears to find Dimitri and kill him",players:{indominous:!0,luvrunint:!0,mar:!0}},{date:886,description:"Indominous helps fund Viola's crusade against Dimirti, hiding his own vampiric identity",players:{indominous:!0,luvrunint:!0,mar:!0}}],887:[{date:887,description:"Dalgur returns to his family after Graduating GAC",players:{cade:!0}},{date:887,description:"Dalgur finds out the origin of his family and their rivial family",players:{cade:!0}},{date:887,description:"Dalgur starts a quest to reunite the families, so the armoring and weaponsmithing crafts can become what they were ment to be",players:{cade:!0}},{date:887,description:"Dalgur finds Kerlin's journal, and discovers what Kerlin wanted his two sons to become",players:{cade:!0}},{date:887,description:"Dalgur falls in love with Hearthforge girl, who is an outcast in her family. Just like he is",players:{cade:!0}},{date:887,description:"Dalgur secretly marries his love",players:{cade:!0}}],888:[{date:888,description:"Dalgur's marrage is found out and starts a small skirmish",players:{indominous:!0,cade:!0}},{date:888,description:"Dalgur gets the help of Cade to end the rivialry",players:{cade:!0,ikoll:!0}},{date:888,description:"With the help of Cade the rivialry ends, and the two families are reunited under a common goal",players:{indominous:!0,cade:!0,ikoll:!0,mar:!0}}],889:[{date:889,description:"Dalgur founds Dalgur's General Goods with the goal of making adventuring affordable",players:{indominous:!0,cade:!0,olorin:!0,ikoll:!0,mar:!0}},{date:889,description:"Phira comes to Shade, Osbellum, Osmetallum, Tabz, and Dalgur to get their help to find a way to help Cade with his insanity. Which has become a very large issue in the Atherion state",players:{cade:!0}}],890:[{date:890,description:"After months of research, the group decides to find Formicide",players:{cade:!0}},{date:890,description:"Dalgur, Phira, and Osbellum go out to find Formicide",players:{cade:!0}},{date:890,description:"After months of searching the group finds Formicide in the far reaches of the Wild lands",players:{cade:!0}},{date:890,description:"Formicide agrees to cure Cade's insanity and creates a concotion to help his mind",players:{cade:!0}}],891:[{date:891,description:"The group brings the concotion to Cade, giving him the drink, and curing him of his insanity",players:{cade:!0}},{date:891,description:"Despite much debate, Cade decides to keep the ruse of his insanity as to not gain too much notice while he starts research on a project of an exterme dirness",players:{cade:!0}}],892:[{date:892,description:"Cade starts to uncover the prospect of secrets that are hidden behind the War for the New World",players:{cade:!0}}],898:[{date:898,description:"A new group accepts a mysterious contract to take back Bridge World",players:{cade:!0,naomi:!0,ator:!0,storn:!0,olorin:!0,indominous:!0,crainer:!0}}]},B=function(e){Object(l.a)(i,e);var a=Object(c.a)(i);function i(){return Object(s.a)(this,i),a.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w,{timeline:S,lessThanYearZero:"EG",greaterThanYearZero:"AK"}))}}]),i}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a8508229.chunk.js.map