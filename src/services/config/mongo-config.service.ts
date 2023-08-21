import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
// import { awsSecret } from '../utils/aws.secrets.config';
// import { awsSecret } from '../utils/aws.secrets.config';

export class MongoConfigService implements MongooseOptionsFactory {
  // connectionString = await awsSecret();
  async createMongooseOptions(): Promise<MongooseModuleOptions> {
    // const secret = await awsSecret();
    // const { MONGODB_URI } = JSON.parse(secret);
    return {
      uri: 'mongodb+srv://khalilchettaoui06:0E5b1zp3MdtxWFqn@cluster0.ih0muwh.mongodb.net/',
      // uri: connectionString,
    };
  }
}
