// Made by Lakwanjala Williams, Seth Bullock, and Edgar Reyes 


const main= document.querySelector('main');
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 71, 71,
    46, 21, 398, 339, 882, 848, 179, 535, 940, 472
]; //end sampleArray

//setup

const sections = []

for (let i= 0; i < 18; i++){
    let heading = document.createElement('h3');
    let section = document.createElement('section')
    heading.append(` KATA ${i+1}`);

    main.append(heading);
    main.append(section);

    sections.push(section);
} 

//Kata 1
for (let i=1; i <= 20; i++){
    let answer = document.createElement('div');
    answer.append(i);
    sections[0].append(answer);   
}

//Kata 2
for (let i = 2; i<= 20 ; i += 2){
    let answer = document.createElement('div');
    answer.append(i);
    sections[1].append(answer);
}

//Kata 3
for(let i = 1; i <= 20; i += 2){
    let answer = document.createElement('div');
    answer.append(i);
    sections[2].append(answer);
  }
  
//Kata 4
for (let i = 1; i <= 20; i++){
    let answer = document.createElement('div');
    answer.append(5*i);
    sections[3].append(answer);
}

//Kata 5
for (let i = 1; i <= 10; i++){
    let answer= document.createElement('div');
    answer.append(i*i);
    sections[4].append(answer);
}
//kata 6
for (let i = 20; i > 0; i --){
    let answer = document.createElement('div');
    answer.append(i);
    sections[5].append(answer);
}
//Kata 7
for (let i = 20; i >= 2; i-= 2){
    let answer = document.createElement('div');
    answer.append(i);
    sections[6].append(answer);
}
//Kata 8 
for ( let i = 19 ; i> 0; i-= 2 ){
    let answer = document.createElement('div');
    answer.append(i);
    sections[7].append(answer);
}
//Kata 9 
for (let i =20; i > 0; i--){
    let answer = document.createElement('div');
    answer.append(5*i);
    sections[8].append(answer);
}
//kata 10
for (let i = 10; i > 0; i--){
    let answer = document.createElement('div');
    answer.append(i*i);
    sections[9].append(answer);
}
//kata 11
for (let value of sampleArray){
    let answer = document.createElement('div');
    answer.append(value);
    sections[10].append(answer);
}
//kata 12
for (let value of sampleArray){
    if(value % 2 ===0){
        let answer = document.createElement('div');
        answer.append(value);
        sections[11].append(answer);
    
    }
}
//kata 13
for (let value of sampleArray){
    if(value % 2 !== 0) {
        let answer = document.createElement('div');
        answer.append(value);
        sections[12].append(answer);  
    }
}
//kata 14
for (let value of sampleArray){
    let answer = document.createElement('div');
    answer.append(value * value);
    sections[13].append(answer);
}
//kata 15
let kata15sum = 0;
for (let i = 1; i < 20; i++){
    kata15sum += i;
}
let kata15answer = document.createElement('div');
kata15answer.append(kata15sum);
sections[14].append(kata15answer);

//kata 16
let kata16sum = 0;
let kata16answer= document.createElement('div');

for(let value of sampleArray){
    kata16sum =+ value;
}

kata16answer.append(kata16sum);
sections[15].append(kata16answer);

//kata 17 
let kata17answer= document.createElement('div');
kata17answer.append(Math.min(...sampleArray));
sections[16].append(kata17answer);

//kata 18
let kata18answer= document.createElement('div');
kata18answer.append(Math.max(...sampleArray));
sections[17].append(kata18answer);
