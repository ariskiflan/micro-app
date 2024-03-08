import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vote } from "./Vote";
import { Parties } from "./Parties";

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  candidate_name: string;

  @Column()
  serial_number: number;

  @Column()
  vision_mission: string;

  @Column()
  candidate_image: string;

  @OneToOne(() => Vote, (vote) => vote.candidate) // specify inverse side as a second parameter
  vote: Vote;

  @OneToMany(() => Parties, (parties) => parties.candidate)
  parties: Parties[];
}
