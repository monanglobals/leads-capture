import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  company_id: string;

  @Column()
  phone: string;

  @Column()
  phone_type: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_date: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_date: Date;
}
