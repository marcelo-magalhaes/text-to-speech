const connection = require('../database/connection');
const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config;
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
    url: process.env.API_URL
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