(this["webpackJsonpninja-app"]=this["webpackJsonpninja-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/star.337e1f36.svg"},22:function(e,t,n){e.exports=n.p+"static/media/lilninja.ec560f2c.png"},25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(20),s=n.n(i),r=(n(30),n(10)),l=n(3),c=n(4),d=n(6),u=n(5),h=n(21),m=n.n(h),p=(n(31),n(22)),f=n.n(p),g=function(e){var t=e.ninjas,n=e.deleteNinja;return o.a.createElement("div",{className:"ninja-list"},t.map((function(e){return e?o.a.createElement("div",{className:"ninja",key:e.id},o.a.createElement("img",{src:f.a,alt:"ninja"}),o.a.createElement("div",null,e.name,o.a.createElement("br",null),e.specialty),o.a.createElement("button",{className:"delete-ninja",onClick:function(){n(e.id)}},"X")):null})))},b=n(23),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",specialty:""},e.handleSubmit=function(t){t.preventDefault(),e.props.addingNinja(e.state),e.setState({name:""})},e.handleLabelChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleChange=function(t){e.setState({name:t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"toTitle"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Enter Ninjas Name:")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange,value:this.state.name})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"specialty"},"Ninjas Specialty:")),o.a.createElement("div",null,o.a.createElement("select",{id:"specialty",onChange:this.handleLabelChange,value:this.state.content},o.a.createElement("option",{defaultValue:"Unknown"}),o.a.createElement("option",{value:"Iron Fist Punch"},"Iron Fist Punch"),o.a.createElement("option",{value:"Cobra Strike Punch"},"Cobra Strike Punch"),o.a.createElement("option",{value:"Winged Horse Kick"},"Winged Horse Kick"),o.a.createElement("option",{value:"Lightning Kick"},"Lightning Kick"),o.a.createElement("option",{value:"Dragons Tail Throw"},"Dragons Tail Throw"),o.a.createElement("option",{value:"Tiger Teeth Throw"},"Tiger Teeth Throw"))),o.a.createElement("div",null,o.a.createElement("button",null,"Add Ninja"))))}}]),n}(a.Component),v=n(15),y=n(1),T=n(13),w=function(){return o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",null,o.a.createElement("ul",{className:"mission-buttons"},o.a.createElement("h2",null,"Missions"),o.a.createElement(T.HashLink,{to:"/RedDawn#mission"},o.a.createElement("button",null,"Red Blood Dawn")),o.a.createElement(T.HashLink,{to:"/Firebase#mission"},o.a.createElement("button",null,"Firebase")),o.a.createElement(T.HashLink,{to:"/Killfox#mission"},o.a.createElement("button",null,"To Kill A Fox")),o.a.createElement(T.HashLink,{to:"/Create#mission"},o.a.createElement("button",null,"Create A Mission")))))},k=function(e){var t=e.todos,n=e.deleteTodo,a=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item",key:e.id},o.a.createElement("li",{onClick:function(){n(e.id)}},e.content))})):o.a.createElement("h2",{className:"center"},"Omedeto Ninja! Mission Completed!");return o.a.createElement("div",{className:"Ninjatodos collection"},a)},j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"( Add New Assignment )"),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content}),o.a.createElement("button",null,"Add")))}}]),n}(a.Component),N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var n=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:n})},e.deleteTodo=function(t){var n=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:n})},e.state={showMissions:!1,missionTodos:[{id:1,content:"Create Custom Mission Below"}]},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch item to delete )"),o.a.createElement(k,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(j,{addTodo:this.addTodo}))}}]),n}(a.Component),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var n=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:n})},e.deleteTodo=function(t){var n=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:n})},e.state={showMissions:!1,missionTodos:[{id:1,content:"Necessary gear: torinoko(firecrackers), tetsubishi(spikes), kesarigame(sickle with chain)."},{id:2,content:"there will be no escort, find your way into the city"},{id:3,content:"find the fortress of Hirado"},{id:4,content:"sneak over back wall of fortress"},{id:5,content:"find the princess, free her, and lead her to the rendezvous"},{id:6,content:"You have been spotted! Throw your tetsubishi spikes on the floor to slow down the guards!"},{id:7,content:"In the next room you spot a group of soldiers you cannot pass: use your torinoko(firecrackers) to disorient them"},{id:8,content:"You have almost made it, but one guard remains in the way to the rendezvous. Use your Kusargame(sickle) to neutralize him"},{id:9,content:"Run quickly to the river that runs outside the palace, a wasen(boat) with royal guards will be waiting for the princess"}]},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h2",{className:"center"},"Red Blood Dawn"),o.a.createElement("p",null,"Princess Takara has been captured by the invading Mongolians! She is held up in the fortress of Hirado. You must be silent as the night to sneek past troops, in a heavily guarded area. "),o.a.createElement("p",null," The Emperor Is Expecting Nothing Less Than The Full Recovery of His Daughter "),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch item to delete )"),o.a.createElement(k,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(j,{addTodo:this.addTodo}))}}]),n}(a.Component),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var n=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:n})},e.deleteTodo=function(t){var n=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:n})},e.state={showMissions:!1,missionTodos:[{id:1,content:"necessary gear: Shinobi Shozoku(Ninja Suit), takagi (climbing hooks), shuriken (ninja stars)"},{id:2,content:"at midnight meet with Jinichi at the yellow shrine. He will take you past the initial guards"},{id:3,content:"climb up vertical wall using your takagi climbing hooks and enter the large warehouse"},{id:4,content:"sneak past the patrols in the warehouse and make it to the dock"},{id:5,content:"find the large ship with a small red target painted on the hind quarter"},{id:6,content:"climb aboard and go to bottom and set the cargo on fire"},{id:7,content:"escape the dock area quickly and meet jinichi at the rendezvous"},{id:8,content:"The ship is in flames! Now the village is alive with soldiers! Make your way out over the rooftops"},{id:9,content:"three guards stand between you and Jinichi escaping the city, use your shuriken ninja stars to impail them! "}]},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h2",{className:"center"},"Firebase"),o.a.createElement("p",null," Our Informat has let us know of a great weapons stash loaded on a ship in the harbor of Harido. It is your job to destroy the cache of weapons by any means necessary. This will weaken the mongolian army that is against us. "),o.a.createElement("p",null," The General of the Empires majesty has entrusted you with this mission. "),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch finished items )"),o.a.createElement(k,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(j,{addTodo:this.addTodo}))}}]),n}(a.Component),C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addTodo=function(t){t.id=Math.random();var n=[].concat(Object(r.a)(e.state.missionTodos),[t]);e.setState({missionTodos:n})},e.deleteTodo=function(t){var n=e.state.missionTodos.filter((function(e){return e.id!==t}));e.setState({missionTodos:n})},e.state={showMissions:!1,missionTodos:[{id:1,content:"Necessary gear: Yumi(bow)"},{id:2,content:"meet with sensei kawakami at the tea house on mt. haku"},{id:3,content:"Sensei Kawakami will now train you in the art of the falcon piercing talon shot"},{id:4,content:"you have passed the test. Senpai hiro will now take you to the field near Korean palace"},{id:5,content:" sneak through the field of patrolling soldiers"},{id:6,content:"find your way through the crowd without getting spotted"},{id:7,content:"work your way up into the balcony in the grand hall "},{id:8,content:"wait patentietly for the general to show up.. then Take your shot"},{id:9,content:"The general has been hit! and immediatly a fellow ninja sets off a large explosion in a wagon outside the hall! you take advantage of the moment to escape the balcony "},{id:10,content:"The palace is alive like a hornets nest! You must fight your way through many guards.. But hurry! The more time you take to fight, the more organized the mongolians will be"},{id:11,content:"You have been surrounded by more soldiers than you can fight! Quick thinking, you pull smoke bomb and strike it on the floor and make your escape!"},{id:12,content:"make your way into the forest to the red barn, you will find a black Kisouma horse waiting for you"}]},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"mission"},o.a.createElement("div",{id:"mission"}),o.a.createElement("h2",{className:"center"},"To Kill A Fox"),o.a.createElement("p",null,"Kublah Khan's top general, Liu Fuxiang is expected to be at the palace of korea 3 days from now. You have made the grade of top archer, you will get one chance with your Yumi bow to take out this Mongolian general and change the fate of Japan You might not return alive "),o.a.createElement("p",null," The Empire of the sun is counting on you "),o.a.createElement("h3",null,"Mission To Do List"),o.a.createElement("label",null,"( touch item to delete )"),o.a.createElement(k,{todos:this.state.missionTodos,deleteTodo:this.deleteTodo}),o.a.createElement(j,{addTodo:this.addTodo}))}}]),n}(a.Component),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addingNinja=function(t){t.id=Math.random();var n=[].concat(Object(r.a)(e.state.ninjas),[t]);e.setState({ninjas:n})},e.deleteNinja=function(t){var n=e.state.ninjas.filter((function(e){return e.id!==t}));e.setState({ninjas:n})},e.state={showNinjas:!1,ninjas:[],missionTodos:[]},e}return Object(c.a)(n,[{key:"operation",value:function(){this.setState({showNinjas:!this.state.showNinjas})}},{key:"componentDidMount",value:function(){console.log("component mounted")}},{key:"componentDidUpdate",value:function(){console.log("component updated")}},{key:"render",value:function(){return o.a.createElement(v.BrowserRouter,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",null,"Shinobi"),o.a.createElement("h1",null,"Ninja")),o.a.createElement(E,{addingNinja:this.addingNinja}),this.setState.showNinjas?o.a.createElement("h3",null,"Ninjas"):null,o.a.createElement(g,{ninjas:this.state.ninjas,deleteNinja:this.deleteNinja}),o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement(y.d,{path:"/RedDawn",component:O}),o.a.createElement(y.d,{path:"/Firebase",component:S}),o.a.createElement(y.d,{path:"/Killfox",component:C}),o.a.createElement(y.d,{path:"/Create",component:N}))))}}]),n}(a.Component);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.44767ca9.chunk.js.map