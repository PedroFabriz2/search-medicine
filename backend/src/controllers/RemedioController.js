const connection = require('../database/connection');

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
    }

};