//Faker.JS code
//npm install --save-dev @faker-js/faker

const faker = require("faker")
const fs = require("fs")

 const createUser = () => {
    return {
        id: faker.datatype.uuid(),
        image: faker.image.image(),
        fullName: fullName.fullName.fullName(),
        bio: faker.person.bio(),
        phone: faker.phone.imei()
    }
 }