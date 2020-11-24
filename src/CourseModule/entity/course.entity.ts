import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from '../../CommonsModule/entity/audit.entity';
import { Lesson } from './lesson.entity';
import { Expose } from 'class-transformer';
import slugify from 'slugify';

@Entity()
export class Course extends Audit {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @Column({
    unique: true,
  })
  @Expose()
  title: string;

  @Column()
  @Expose()
  description: string;

  @Column()
  @Expose()
  authorName: string;

  @Column()
  @Expose()
  authorDescription: string;

  @Column({
    type: 'int',
  })
  @Expose()
  workload: number;

  @Column({
    nullable: true,
  })
  @Expose()
  thumbUrl?: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  @Expose()
  enabled: boolean;

  @Column()
  photoName: string;

  @OneToMany<Lesson>('Lesson', (lesson: Lesson) => lesson.course)
  lessons: Lesson[];

  @Column()
  @Expose()
  get slug(): string {
    return slugify(this.title, { replacement: '-', lower: true });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set slug(slug: string) {}
}
