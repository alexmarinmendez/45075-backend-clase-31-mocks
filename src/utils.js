import { faker } from '@faker-js/faker'

faker.locale = 'es'

export const generateUser = () => {
    const numOfProducts = parseInt(faker.random.numeric(1, {bannedDigits: ['0']}))
    const products = []

    for (let index = 0; index < numOfProducts; index++) {
        products.push(generateProducts())
    }

    return {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        sex: faker.name.sex(),
        products
    }
}

export const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.random.numeric(1),
        id: faker.database.mongodbObjectId(),
        image: faker.image.image()
    }
}