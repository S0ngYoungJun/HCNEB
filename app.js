class ForExam {

  constructor() {
    this.initData();
  }

  initData() {

    const config = {
      baseArray: ['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27 , 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++ ){
      this['problem' + i] = this.generateProblemData(
                      i,
                      config.baseArray,
                      config.specialProblems
                      );                     
    }

    this.problem16 = [['피카츄', '라이츄'], ['꼬부기', '이브이']];

    this.assembleHTMLTags(config.htmlTagProblems);
  }

  generateProblemData(problemNumber, baseArray, specialProblems){
    if(specialProblems.includes(problemNumber)){ 
        return [...baseArray, '이브이'];
      }
      return baseArray.slice();
    }
    
    assembleHTMLTags(htmlTagProblems) {
      for (let problem of htmlTagProblems){
        this['problem' + problem] = this['problem' + problem].map(item => {
          if(item.includes('<')){
             return item;
          }
          return `<li>${item}</li>`;
        });
       }
    }
  }


let forExam = new ForExam();
// console.dir(forExam);


forExam.problem1 = forExam.problem1.map(item => item.toUpperCase());

console.log(forExam.problem1);


forExam.problem2 = forExam.problem2.filter(item => item.includes('이'));

console.log(forExam.problem2);


forExam.problem3 = forExam.problem3.join('');

console.log(forExam.problem3);


forExam.problem4 = forExam.problem4.reduce((result, pokemon) => {
  result[pokemon] = pokemon.length;
  return result;
}, {});

console.log(forExam.problem4);


forExam.problem5 = forExam.problem5.sort();

console.log(forExam.problem5);


forExam.problem6 = forExam.problem6.find(pokemon => pokemon.includes('이'));

console.log(forExam.problem6);


forExam.problem7 = forExam.problem7.every(pokemon => pokemon.includes('이'));

console.log(forExam.problem7);


forExam.problem8 = forExam.problem8.some(pokemon => pokemon.startsWith('꼬'));

console.log(forExam.problem8);


forExam.problem9.push('이브이');

console.log(forExam.problem9);


forExam.problem10.pop();

console.log(forExam.problem10);


forExam.problem11.shift();

console.log(forExam.problem11);


forExam.problem12.unshift('피카츄');

console.log(forExam.problem12);



const indexOfRai = forExam.problem13.indexOf('라이츄');

if (indexOfRai !== -1) {
  forExam.problem13[indexOfRai] = '이브이';
}

console.log(forExam.problem13);



const clone= [...forExam.problem14];

clone.push('이브이');

console.log('원본 배열:', forExam.problem14);
console.log('복제된 배열:', clone);


forExam.problem15 = forExam.problem15.slice(-2);

console.log(forExam.problem15);


forExam.problem16 = forExam.problem16[0].concat(forExam.problem16[1]);

console.log(forExam.problem16);


forExam.problem17= forExam.problem17.indexOf('라이츄');

console.log(forExam.problem17);


forExam.problem18 = forExam.problem18.slice().reverse();

console.log(forExam.problem18);


forExam.problem19 = forExam.problem19.map(pokemon => pokemon.length);

console.log(forExam.problem19);

forExam.problem20 = forExam.problem20.filter(pokemon => pokemon.length >= 3);

console.log(forExam.problem20);


forExam.problem21 = forExam.problem21.map(pokemon => `<li>${pokemon}</li>`);

console.log(forExam.problem21);


forExam.problem22 = `<ul>${forExam.problem22.join('')}</ul>`;

console.log(forExam.problem22 );

//애는 왜 굳이 지우 태그를??
forExam.problem23 = forExam.problem23.filter(tag => tag.includes('지우'));

console.log(forExam.problem23);

//24

const option = forExam.problem24.map(option => `<option>${option}</option>`);

const select = `<select>${option.join('')}</select>`;

console.log(select);

//25

const ul= `<ul>${forExam.problem25.join('')}</ul>`;

const nav = `<nav>${ul}</nav>`;

console.log(nav);

//26

const section = forExam.problem26.map(item => `<section>${item}</section>`);

const article= `<article>${section.join('')}</article>`;

console.log(article);

//27

const ol = forExam.problem27.map(item => `<ol>${item}</ol>`);

console.log(ol);

//28

const input= forExam.problem28.map(item => `<input placeholder="${item}" />`);

console.log(input);

//29

forExam.problem29 = forExam.problem29.join('');

const footer = `<footer>${forExam.problem29}</footer>`;

console.log(footer);


//30

forExam.problem30 = forExam.problem30.join('');

const div = `<div>${forExam.problem30}</div>`;

console.log(div);