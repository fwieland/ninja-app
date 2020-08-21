(this["webpackJsonpninja-app"]=this["webpackJsonpninja-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/star.337e1f36.svg"},22:function(e,t,a){e.exports=a.p+"static/media/lilninja.ec560f2c.png"},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(20),s=a.n(i),r=(a(30),a(10)),l=a(3),c=a(4),d=a(6),u=a(5),m=a(21),h=a.n(m),p=(a(31),a(22)),f=a.n(p),g=function(e){var t=e.ninjas,a=e.deleteNinja;return o.a.createElement("div",{className:"ninja-list"},t.map((function(e){return e?o.a.createElement("div",{className:"ninja",key:e.id},o.a.createElement("img",{src:f.a,alt:"ninja"}),o.a.createElement("div",null,e.name," ",o.a.createElement("br",null),e.specialty),o.a.createElement("button",{className:"delete-ninja",onClick:function(){a(e.id)}},"x")):null})))},b=a(23),E=a(11),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",specialty:""},e.handleSubmit=function(t){t.preventDefault(),e.state.name.trim(),e.props.addingNinja(e.state),e.setState({name:""})},e.handleLabelChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleChange=function(t){e.setState({name:t.target.value})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"toTitle"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Enter Ninjas Name:")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange,value:this.state.name})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"specialty"},"Ninjas Specialty:")),o.a.createElement("div",null,o.a.createElement("select",{id:"specialty",onChange:this.handleLabelChange,value:this.state.content},o.a.createElement("option",{defaultValue:"Unknown"}),o.a.createElement("option",{value:"Iron Fist Punch"},"Iron Fist Punch"),o.a.createElement("option",{value:"Cobra Strike Punch"},"Cobra Strike Punch"),o.a.createElement("option",{value:"Winged Horse Kick"},"Winged Horse Kick"),o.a.createElement("option",{value:"Lightning Kick"},"Lightning Kick"),o.a.createElement("option",{value:"Dragons Tail Throw"},"Dragons Tail Throw"),o.a.createElement("option",{value:"Tiger Teeth Throw"},"Tiger Teeth Throw"))),o.a.createElement("div",null,o.a.createElement("button",null,"Add Ninja")),o.a.createElement(E.HashLink,{to:"./Navbar#navbar"},o.a.createElement("button",{className:"xsspace"},"Done"))))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isInfoShowing:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.isInfoShowing),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.setState({isInfoShowing:!e.state.isInfoShowing})}},"GameInfo"),o.a.createElement("div",{className:this.state.isInfoShowing?"showInfo":"hideInfo"},o.a.createElement("h3",null,"About Game"),o.a.createElement("h4",null,"Description"),o.a.createElement("p",null,"Yokoso, Welcome to Shinobi Ninja. This app is to designed to be an aide to playing games with big imaginations. You can use the app to create missions and details. Whether you wanted to set up a treasure hunt for your childs next birthday party, or you need something to keep your boys occupied while stuck inside on a rainy day, this app may be for you. "),o.a.createElement("p",null,"This game is not limited to only ninja missions, could use for army games, playing house, and tea parties. If one dared to. "),o.a.createElement("p",null,"We have included preset missions either to play out or to give inspiration."),o.a.createElement("p",null,"Game is designed for boys ages 6-12 "),o.a.createElement("h4",null,"Shinobi Ninja Game Rules"),o.a.createElement("p",null,"The missions take place in Japan 1274 a.d. when the Mongolians invaded Japan. Your home and surrounding property is now the island of Japan."),o.a.createElement("p",null,"Use as many Ninjas(players) as desired for the mission. Ninjas work together to complete all tasks and the mission. Ninjas use there imagination and act out all assigned tasks. Ninjas can role play as different characters or use imaginary characters in game. Use various areas of the home to complete the mission, sneak around to get from one place to the next. Attack in silence. "),o.a.createElement("h4",null,"Ninja Rules"),o.a.createElement("p",null,"#1 Ninjas must not be heard by non-ninjas (ninjas are very silent)"),o.a.createElement("p",null,"#2 Ninjas should not be seen by non-ninjas (ninjas are masters of hiding)"),o.a.createElement("p",null,"#3 Be careful do not to cause real damage to items or people"),o.a.createElement("p",null,"#4 Do not include people who are not playing the game to complete tasks")))}}]),a}(n.Component),k=a(15),w=a(1),j=function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",{id:"navbar",className:"addspace"},o.a.createElement("ul",{className:"mission-buttons"},o.a.createElement("h2",null,"Missions"),o.a.createElement(E.HashLink,{to:"/RedDawn#mission"},o.a.createElement("button",null,"Red Dawn")),o.a.createElement(E.HashLink,{to:"/Firebase#mission"},o.a.createElement("button",null,"Firebase")),o.a.createElement(E.HashLink,{to:"/Killfox#mission"},o.a.createElement("button",null,"To Kill A Fox")),o.a.createElement(E.HashLink,{to:"/Create#mission"},o.a.createElement("button",null,"Create A Mission")))))},T=function(e){var t=e.todos,a=e.deleteTodo,n=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item",key:e.id},o.a.createElement("li",{onClick:function(){a(e.id)}},e.content))})):o.a.createElement("h2",{className:"center"},"Omedeto! Mission Completed!");return o.a.createElement("div",{className:"Ninjatodos collection"},n)},N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"taskform",onSubmit:this.handleSubmit},o.a.createElement("textarea",{className:"largeTextArea",type:"text",rows:"3",onChange:this.handleChange,value:this.state.content}),o.a.createElement("button",null,"Add New Task")))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var a=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:a})},e.deleteTodo=function(t){var a=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:a})},e.state={showMissions:!1,missionTodos:[{id:1,content:"(Example task)"}]},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("p",null,"Add tasks below according to your mission"),o.a.createElement(N,{addTodo:this.addTodo}),o.a.createElement("label",null,"( touch item to delete )"),o.a.createElement(T,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement("div",{className:"addspace"}))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var a=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:a})},e.deleteTodo=function(t){var a=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:a})},e.state={showMissions:!1,missionTodos:[{id:1,content:"Necessary gear: torinoko(firecrackers), tetsubishi(spikes), kesarigame(sickle with chain)."},{id:2,content:"there will be no escort, find your way into the city"},{id:3,content:"find the fortress of Hirado"},{id:4,content:"sneak over back wall of fortress"},{id:5,content:"find the princess, free her, and lead her to the rendezvous"},{id:6,content:"You have been spotted! Throw your tetsubishi spikes on the floor to slow down the guards!"},{id:7,content:"In the next room you spot a group of soldiers you cannot pass: use your torinoko(firecrackers) to disorient them"},{id:8,content:"You have almost made it, but one guard remains in the way to the rendezvous. Use your Kusargame(sickle) to neutralize him"},{id:9,content:"Run quickly to the river that runs outside the palace, a wasen(boat) with royal guards will be waiting for the princess"}]},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h2",{className:"center"},"Red Dawn"),o.a.createElement("p",null,"Princess Takara has been captured by the invading Mongolians! She is held up in the fortress of Hirado. You must be silent as the night to sneek past troops, in a heavily guarded area. "),o.a.createElement("p",null," The Emperor Is Expecting Nothing Less Than The Full Recovery of His Daughter "),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch item below to delete )"),o.a.createElement(T,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(N,{addTodo:this.addTodo}),o.a.createElement("div",{className:"minspace"}))}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var a=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:a})},e.deleteTodo=function(t){var a=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:a})},e.state={showMissions:!1,missionTodos:[{id:1,content:"necessary gear: Shinobi Shozoku(Ninja Suit), takagi (climbing hooks), shuriken (ninja stars)"},{id:2,content:"at midnight meet with Jinichi at the yellow shrine. He will take you past the initial guards"},{id:3,content:"climb up vertical wall using your takagi climbing hooks and enter the large warehouse"},{id:4,content:"sneak past the patrols in the warehouse and make it to the dock"},{id:5,content:"find the large ship with a small red target painted on the hind quarter"},{id:6,content:"climb aboard and go to bottom and set the cargo on fire"},{id:7,content:"escape the dock area quickly and meet jinichi at the rendezvous"},{id:8,content:"The ship is in flames! Now the village is alive with soldiers! Make your way out over the rooftops"},{id:9,content:"three guards stand between you and Jinichi escaping the city, use your shuriken ninja stars to impail them! "}]},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h2",{className:"center"},"Firebase"),o.a.createElement("p",null," Our Informat has let us know of a great weapons stash loaded on a ship in the harbor of Harido. It is your job to destroy the cache of weapons by any means necessary. This will weaken the mongolian army that is against us. "),o.a.createElement("p",null," The General of the Empires majesty has entrusted you with this mission. "),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch finished items )"),o.a.createElement(T,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(N,{addTodo:this.addTodo}),o.a.createElement("div",{className:"minspace"}))}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var a=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:a})},e.deleteTodo=function(t){var a=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:a})},e.state={showMissions:!1,missionTodos:[{id:1,content:"Necessary gear: Yumi(bow)"},{id:2,content:"meet with sensei kawakami at the tea house on mt. haku"},{id:3,content:"Sensei Kawakami will now train you in the art of the falcon piercing talon shot"},{id:4,content:"you have passed the test. Senpai hiro will now take you to the field near Korean palace"},{id:5,content:" sneak through the field of patrolling soldiers"},{id:6,content:"find your way through the crowd without getting spotted"},{id:7,content:"work your way up into the balcony in the grand hall "},{id:8,content:"wait patentietly for the general to show up.. then Take your shot"},{id:9,content:"The general has been hit! and immediatly a fellow ninja sets off a large explosion in a wagon outside the hall! you take advantage of the moment to escape the balcony "},{id:10,content:"The palace is alive like a hornets nest! You must fight your way through many guards.. But hurry! The more time you take to fight, the more organized the mongolians will be"},{id:11,content:"You have been surrounded by more soldiers than you can fight! Quick thinking, you pull smoke bomb and strike it on the floor and make your escape!"},{id:12,content:"make your way into the forest to the red barn, you will find a black Kisouma horse waiting for you"}]},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h2",{className:"center"},"To Kill A Fox"),o.a.createElement("p",null,"Kublah Khan's top general, Liu Fuxiang is expected to be at the palace of korea 3 days from now. You have made the grade of top archer, you will get one chance with your Yumi bow to take out this Mongolian general and change the fate of Japan You might not return alive "),o.a.createElement("p",null," The Empire of the sun is counting on you "),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch item to delete )"),o.a.createElement(T,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(N,{addTodo:this.addTodo}),o.a.createElement("div",{className:"minspace"}))}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addingNinja=function(t){t.id=Math.random();var a=[].concat(Object(r.a)(e.state.ninjas),[t]);e.setState({ninjas:a})},e.deleteNinja=function(t){var a=e.state.ninjas.filter((function(e){return e.id!==t}));e.setState({ninjas:a})},e.state={showNinjas:!1,ninjas:[],missionTodos:[]},e}return Object(c.a)(a,[{key:"operation",value:function(){this.setState({showNinjas:!this.state.showNinjas})}},{key:"componentDidMount",value:function(){console.log("component mounted")}},{key:"componentDidUpdate",value:function(){console.log("component updated")}},{key:"render",value:function(){return o.a.createElement(k.BrowserRouter,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",null,"Shinobi"),o.a.createElement("h1",null,"Ninja")),o.a.createElement(y,null),o.a.createElement(v,{addingNinja:this.addingNinja}),o.a.createElement(g,{ninjas:this.state.ninjas,deleteNinja:this.deleteNinja}),o.a.createElement("div",null,o.a.createElement(j,null),o.a.createElement(w.d,{path:"/RedDawn",component:O}),o.a.createElement(w.d,{path:"/Firebase",component:C}),o.a.createElement(w.d,{path:"/Killfox",component:M}),o.a.createElement(w.d,{path:"/Create",component:S}))))}}]),a}(n.Component);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.82b90385.chunk.js.map