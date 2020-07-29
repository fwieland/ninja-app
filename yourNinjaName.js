
let oldname = 'LEVI';

let name = oldname.toLowerCase().split('',3);
let ninjaName = '';
//css: (text-transform: capitalize);

for(let i = 0 ; i < 3; i++) {
  if (name[i] === 'a'){ 
    ninjaName +=  ('ka')

   }else if (name[i] === 'b'){
  ninjaName += ('zu')

    }else if (name[i] === 'c'){
  ninjaName += ('mi')

    }else if (name[i] === 'd'){
  ninjaName += ('te')

    }else if (name[i] === 'e'){
  ninjaName += ('ku')  

    }else if (name[i] === 'f'){
  ninjaName += ('lu')

    }else if (name[i] === 'g'){
  ninjaName += ('ji')

    }else if (name[i] === 'h'){
  ninjaName += ('ri')

    }else if (name[i] === 'i'){
  ninjaName += ('ki')

    }else if (name[i] === 'j'){
  ninjaName += ('zu')

    }else if (name[i] === 'k'){
  ninjaName += ('me')

    }else if (name[i] === 'l'){
  ninjaName += ('ta')

    }else if (name[i] === 'm'){
  ninjaName += ('rin')

    }else if (name[i] === 'n'){
  ninjaName += ('to')

    }else if (name[i] === 'o'){
  ninjaName += ('mo')

    }else if (name[i] === 'p'){
  ninjaName += ('no')

    }else if (name[i] === 'q'){
  ninjaName += ('ke')

  }else if (name[i] === 'r'){
  ninjaName += ('shi')

    }else if (name[i] === 's'){
  ninjaName += ('ari')

    }else if (name[i] === 't'){
  ninjaName += ('chi')

    }else if (name[i] === 'u'){
  ninjaName += ('do')

    }else if (name[i] === 'v'){
  ninjaName += ('ru')

    }else if (name[i] === 'w'){
  ninjaName += ('mei')

    }else if (name[i] === 'x'){
  ninjaName += ('na')

    }else if (name[i] === 'y'){
  ninjaName += ('fu')

    }else if (name[i] === 'z'){
  ninjaName += ('zi')

  }else{
    ninjaName = ("You can only enter alphabetical numbers");
    console.log(ninjaName);   
    break;
  }; 
}
console.log(ninjaName);