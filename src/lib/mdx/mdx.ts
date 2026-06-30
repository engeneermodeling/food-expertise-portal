import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface LessonItem {
  number: number;
  title: string;
  pages?: string;
  duration?: string;
}

export interface CourseWithLessons {
  title: string;
  description: string;
  author?: string;
  institution?: string;
  year?: number;
  level?: string;
  duration?: string;
  lessonCount: number;
  modules?: string[];
  lessonsList: LessonItem[];
  introContent: string; // ← ДОДАТИ: контент вступу
}

export interface LessonData {
  title: string;
  number: number;
  pages?: string;
  duration?: string;
  content: string;
  prevLesson: number | null;
  nextLesson: number | null;
}

// export async function getCourseData(
//   locale: string,
// ): Promise<CourseWithLessons> {
//   try {
//     const coursePath = path.join(
//       contentDirectory,
//       locale,
//       "courses",
//       "food-safety-management",
//     );

//     if (!fs.existsSync(coursePath)) {
//       console.error("Course directory not found:", coursePath);
//       return {
//         title: "Курс у розробці",
//         description: "Матеріали курсу будуть доступні найближчим часом",
//         lessonCount: 0,
//         modules: [],
//         lessonsList: [],
//       };
//     }

//     const indexFile = path.join(coursePath, "index.mdx");
//     if (!fs.existsSync(indexFile)) {
//       console.error("Index file not found:", indexFile);
//       return {
//         title: "Курс у розробці",
//         description: "Матеріали курсу будуть доступні найближчим часом",
//         lessonCount: 0,
//         modules: [],
//         lessonsList: [],
//       };
//     }

//     const fileContent = fs.readFileSync(indexFile, "utf-8");
//     const { data } = matter(fileContent);

//     const lessonsList: LessonItem[] = [];
//     for (let i = 1; i <= 8; i++) {
//       const lessonFile = path.join(coursePath, `topic-${i}.mdx`);
//       if (fs.existsSync(lessonFile)) {
//         const content = fs.readFileSync(lessonFile, "utf-8");
//         const { data: lessonData } = matter(content);
//         lessonsList.push({
//           number: i,
//           title: lessonData.title || `Topic ${i}`,
//           pages: lessonData.pages || "",
//           duration: lessonData.duration || "",
//         });
//       }
//     }

//     return {
//       title: data.title || "",
//       description: data.description || "",
//       author: data.author,
//       institution: data.institution,
//       year: data.year,
//       level: data.level,
//       duration: data.duration,
//       lessonCount: data.lessons || lessonsList.length,
//       modules: data.modules || [],
//       lessonsList,
//     };
//   } catch (error) {
//     console.error("Error in getCourseData:", error);
//     throw error;
//   }
// }

export async function getLessonData(
  locale: string,
  number: string,
): Promise<LessonData> {
  const lessonNumber = parseInt(number);
  const lessonPath = path.join(
    contentDirectory,
    locale,
    "courses",
    "food-safety-management",
    `topic-${number}.mdx`,
  );

  if (!fs.existsSync(lessonPath)) {
    throw new Error(`Lesson file not found: ${lessonPath}`);
  }

  const content = fs.readFileSync(lessonPath, "utf-8");
  const { data, content: lessonContent } = matter(content);

  const prevLesson = lessonNumber > 1 ? lessonNumber - 1 : null;
  const nextLesson = lessonNumber < 8 ? lessonNumber + 1 : null;

  return {
    title: data.title || "",
    number: lessonNumber,
    pages: data.pages || "",
    duration: data.duration || "",
    content: lessonContent,
    prevLesson,
    nextLesson,
  };
}

export async function getAllLessons(locale: string) {
  const coursePath = path.join(
    contentDirectory,
    locale,
    "courses",
    "food-safety-management",
  );
  const lessons = [];

  for (let i = 1; i <= 8; i++) {
    const lessonFile = path.join(coursePath, `topic-${i}.mdx`);
    if (fs.existsSync(lessonFile)) {
      const content = fs.readFileSync(lessonFile, "utf-8");
      const { data } = matter(content);
      lessons.push({
        number: i,
        title: data.title,
        description: data.description,
        pages: data.pages,
        duration: data.duration,
      });
    }
  }

  return lessons;
}

export async function getCourseData(
  locale: string,
): Promise<CourseWithLessons> {
  try {
    const coursePath = path.join(
      contentDirectory,
      locale,
      "courses",
      "food-safety-management",
    );

    if (!fs.existsSync(coursePath)) {
      return {
        title: "Курс у розробці",
        description: "Матеріали курсу будуть доступні найближчим часом",
        lessonCount: 0,
        modules: [],
        lessonsList: [],
        introContent: "",
      };
    }

    const indexFile = path.join(coursePath, "index.mdx");
    if (!fs.existsSync(indexFile)) {
      return {
        title: "Курс у розробці",
        description: "Матеріали курсу будуть доступні найближчим часом",
        lessonCount: 0,
        modules: [],
        lessonsList: [],
        introContent: "",
      };
    }

    const fileContent = fs.readFileSync(indexFile, "utf-8");
    const { data, content } = matter(fileContent); // ← content тепер використовується

    const lessonsList: LessonItem[] = [];
    for (let i = 1; i <= 8; i++) {
      const lessonFile = path.join(coursePath, `topic-${i}.mdx`);
      if (fs.existsSync(lessonFile)) {
        const lessonContent = fs.readFileSync(lessonFile, "utf-8");
        const { data: lessonData } = matter(lessonContent);
        lessonsList.push({
          number: i,
          title: lessonData.title || `Topic ${i}`,
          pages: lessonData.pages || "",
          duration: lessonData.duration || "",
        });
      }
    }

    return {
      title: data.title || "",
      description: data.description || "",
      author: data.author,
      institution: data.institution,
      year: data.year,
      level: data.level,
      duration: data.duration,
      lessonCount: data.lessons || lessonsList.length,
      modules: data.modules || [],
      lessonsList,
      introContent: content, // ← ПОВЕРТАЄМО контент
    };
  } catch (error) {
    console.error("Error in getCourseData:", error);
    return {
      title: "Курс у розробці",
      description: "Матеріали курсу будуть доступні найближчим часом",
      lessonCount: 0,
      modules: [],
      lessonsList: [],
      introContent: "",
    };
  }
}
