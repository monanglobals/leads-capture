import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Lead } from './lead.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  activity: string;

  @Column()
  address: string;

  @Column({ unique: true })
  document: string;

  @Column()
  google_business_status: string;

  @Column()
  google_lat: string;

  @Column()
  google_lng: string;

  @OneToMany(() => Lead, (lead) => lead.company_id)
  leads: Lead[];

  @CreateDateColumn({ type: 'timestamptz' })
  created_date: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_date: Date;
}
