import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { awsSecret } from '../utils/aws.secrets.config';
// import { awsSecret } from '../utils/aws.secrets.config';

export class MongoConfigService implements MongooseOptionsFactory {
  // connectionString = await awsSecret();
  async createMongooseOptions(): Promise<MongooseModuleOptions> {
    const secret = await awsSecret();
    const { MONGODB_URI } = JSON.parse(secret);
    return {
      uri: MONGODB_URI,
      // uri: connectionString,
    };
  }
}
