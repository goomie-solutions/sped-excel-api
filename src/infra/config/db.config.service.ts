import { TypeOrmModuleOptions , TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
	constructor(private configService: ConfigService) {}

  	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: 'postgres',
			host: this.configService.get<string>('POSTGRES_HOST'),
			port: this.configService.get<number>('POSTGRES_PORT'),
			username: this.configService.get<string>('POSTGRES_USER'),
			password: this.configService.get<string>('POSTGRES_PASSWORD'),
			database: this.configService.get<string>('POSTGRES_DB'),
			entities: [],
			synchronize: true,
		};
    }
}
