var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '19989589898',
            address: {
                cep: '13418560',
                street: 'Rua Regente Feijó',
                number: '123',
                compl: 'bloco D',
                district: 'Vila Monteiro',
                city: 'Piracicaba/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}