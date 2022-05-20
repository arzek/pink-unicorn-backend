import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        firstName: 'test',
        lastName: 'test',
        email: 'test',
        phone: 'test',
        country: 'test',
        city: 'test',
        desiredPosition: 'test',
        skills: 'test',
        experience: 3,
        english: 'B2',
        salary: 4000,
        communicationChannel: 'test',
        linkedIn: 'test',
        skype: 'test',
        telegram: 'test',
        whatsApp: 'test',
        comment: 'test',
        cv: 'cv',
      })
      .expect(201)
      .catch((e) => {
        console.log(e);
      });
  });
});
