export interface FileAttributes {
  title: string;
  description: string;
}

export interface PostAttributes extends FileAttributes {
  slug: string;
  coverImage: string;
}

export interface LectureAttributes extends FileAttributes {
  week: number;
  date: Date;
}

export interface CourseworkAttributes extends FileAttributes {
  releaseDate: Date;
  dueDate: Date;
}
