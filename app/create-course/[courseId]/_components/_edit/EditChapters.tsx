import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { CourseList } from "@/schema/schema";
import { eq } from "drizzle-orm";
import { CourseType } from "@/types/types";

type EditChapterProps = {
  course: CourseType;
  index: number;
  onRefresh: (refresh: boolean) => void;
};

const EditChapters = ({ course, index, onRefresh }: EditChapterProps) => {
  const chapter = course.courseOutput.chapters;
  const [chapterName, setChapterName] = useState<string>("");
  const [chapterDescription, setChapterDescription] = useState<string>("");

  useEffect(() => {
    setChapterName(chapter[index]?.chapter_name);
    setChapterDescription(chapter[index]?.description);
  }, [chapter, index]);

  if (!chapter || chapter.length === 0) {
    return <p>Немає розділів, які можна редагувати.</p>;
  }

  const updateChapter = async () => {
    chapter[index].chapter_name = chapterName;
    chapter[index].description = chapterDescription;

    await db
      .update(CourseList)
      .set({
        courseOutput: course.courseOutput,
      })
      .where(eq(CourseList.id, course.id));

    onRefresh(true);
  };

  return (
    <Dialog>
      <DialogTrigger>
      <FaEdit className="text-primary mx-3"/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Редагувати Розділ</DialogTitle>
          <DialogDescription>
            <div className="mt-3">
              <label htmlFor="">Розділ</label>
              <Input
                placeholder="Enter course title"
                defaultValue={chapter[index]?.chapter_name}
                onChange={(e) => setChapterName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Опис Розділу</label>
              <Textarea
                className="h-40"
                placeholder="Enter course description"
                defaultValue={chapter[index]?.description}
                onChange={(e) => setChapterDescription(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={updateChapter}>Оновити</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditChapters;
