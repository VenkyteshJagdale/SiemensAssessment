// tests/authController.test.js
const request = require('supertest');
const app = require('../app'); 
const User = require('../models/User');

describe('Auth Controller Tests', () => {
    beforeEach(async () => {

        await User.deleteMany({});
    });

});
