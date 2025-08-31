import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
	id: number;

	@Column({ type: 'text', nullable: false })
	firstName: string;

	@Column({ type: 'text', nullable: false })
	lastName: string;

	@Column({ type: 'integer', nullable: false })
	age: number;
}
