export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

export interface LectureAttributes {
  title: string;
  description: string;
  week: number;
  date: Date;
}

export interface CourseworkAttributes {
  title: string;
  description: string;
  releaseDate: Date;
  dueDate: Date;
}
