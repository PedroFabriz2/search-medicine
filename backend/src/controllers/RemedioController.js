const xlsx = require('xlsx');
const connection = require('../database/connection');
const file = xlsx.readFile("./data/Data.xlsx");

const remedios = file.Sheets["Sheet1"]


//const remed = remedios["!Substância"]

//const remed2 = xlsx.utils.sheet_to_json(remed);

const browser = xlsx.utils.sheet_to_json(remedios);

module.exports = {

    async create(request, response){
        const { name, principio } = request.body;

        await connection('medicine').insert({
            name,
            principio,
        });

        return response.json({ name })
    },

    async index(request, response){
        const remedios = await connection('medicine').select("*");

        return response.json(remedios);
    },

    async indexByname(request, response){
        const { remedioSearch } = request.body;

        try {
            const remedios = await connection('medicine').where('name', 'like', `%${remedioSearch}%`);

            return response.json(remedios);
        }catch(err){
            console.log(err);
        }  
    },

    async sheet(request, response){
        var i;
        for(i = 0; i < 17; i++){
            await connection('medicine').insert({
                Substância: browser[i]['Substância'],
                CNPJ: browser[i]['CNPJ'],
                Laboratório: browser[i]['Laboratório'],
                CódigoGGREM: browser[i]['CódigoGGREM'],
                Registro: browser[i]['Registro'],
                EAN1: browser[i]['EAN1'],
                EAN2: browser[i]['EAN2'],
                EAN3: browser[i]['EAN3'],
                Produto: browser[i]['PRODUTO']
            });
        }
        return response.json("Updated");
    }

};