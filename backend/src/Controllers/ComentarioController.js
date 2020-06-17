const connection = require('../database/connection');
const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: '9YhB_xq8T70uW1AKafgnKL6P4yZfXG_4hyNINu61fQvL' }),
    url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/2fe32899-7b2a-4417-aaa9-5766e88c61c4'
  });


module.exports = {
    async postar(req,res){
        const {message} = req.body;
        try{
            await connection('comentarios').insert({texto:message});
            return res.status(200).send();
        }catch{
            console.error();
            return res.status(500).send("Erro ao conectar com o banco");

        } 
    },
    async listar(req,res){ 
        const comentarios = await connection('comentarios').select();
        return res.json(comentarios);
    },

    convert(req,res){

        const {message} = req.params;
        const params = {
            text: message,
            voice: 'pt-BR_IsabelaV3Voice', // Optional voice
            accept: 'audio/wav'
          };
        textToSpeech
        .synthesize(params)
        .then(response => {
            const audio = response.result;
            return textToSpeech.repairWavHeaderStream(audio);
        })
        .then(repairedFile => {
            fs.writeFileSync(`public/audio/${message}.wav`, repairedFile);
            console.log('audio.wav written with a corrected wav header');
            
        })
        .catch(err => {
            console.log(err);
        });
   }
};