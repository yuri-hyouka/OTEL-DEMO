const faker = require('faker');
const axios = require('axios').default;

const { log } = require('./logging');

exports.doSignUp = async () => {
  log.info('generating user...');

  const user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  };

  log.info(`signing up ${user.email}...`);
  try {
    await axios.post(`${process.env.BACKEND_BASE_URL}/signup`, user, {
      headers: {
        'user-agent': faker.internet.userAgent(),
      },
    });
  } catch (error) {
    log.error(error);
  }
};

exports.start = () => {
  setInterval(() => {
    const signUps = faker.datatype.number({ min: 1, max: 10 });

    for (let i = 0; i < signUps; i++) {
      this.doSignUp().catch(error => log.error(error));
    }
  }, 60000);
};
