const axios= require('axios');

var argv = require('yargs')
  .option({
    t1:{
    demand:true,
    alias: 'team 1',
    describe: 'choose 1st teams',
    choices: ['xs', 's', 'm', 'l', 'xl']
  },
    t2:{
      demand: true,
      alias: 'team 2',
      describe: 'choose second team',
      choices: ['xs', 's', 'm', 'l', 'xl']
    }
  }).help()
  .alias('help','h')
  .argv;

console.log(argv.t2);

var idURL= `https://cricapi.com/api/matches?apikey=1H7fCFQLz3VjfPWGdkKCDKH8y9j2`;

axios.get(idURL).then((response)=>{
  console.log(response.data.matches[0].unique_id);
  var x=response.data.matches[0].unique_id;
  scoreURL=`https://cricapi.com/api/cricketScore?apikey=1H7fCFQLz3VjfPWGdkKCDKH8y9j2&unique_id=${x}`;

  return axios.get(scoreURL);
}).then((response)=>{
  console.log(response.data.score);
}).catch((e)=>{
  console.log(e.message);
});
