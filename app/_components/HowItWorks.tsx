import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons/lib";
import { LuBookOpen, LuFileVideo, LuShare2, LuUser2 } from "react-icons/lu";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: LuUser2,
    title: "Зареєструвати обліковий запис",
    description:
      "Зареєструйтесь на безкоштовний акаунт, щоб отримати доступ до інструментів для створення курсів. Після реєстрації ви зможете увійти в систему і почати створювати свої персоналізовані курси",
  },
  {
    icon: LuBookOpen,
    title: "Створіть свій перший курс",
    description:
      "Використовуйте наш інтуїтивно зрозумілий інтерфейс для створення курсу. Просто вкажіть тему, і Gemini AI автоматично згенерує вміст курсу для вас.",
  },
  {
    icon: LuFileVideo,
    title: "Автоматичне додавання пов'язаних відео",
    description:
      "Після створення курсу наша система знайде та прикріпить відповідні відео з YouTube, які доповнять матеріал курсу, позбавляючи вас клопоту з пошуком додаткових ресурсів.",
  },
  {
    icon: LuShare2,
    title: "Налаштуйте та поділіться",
    description:
      "Налаштуйте свій курс відповідно до ваших потреб, а коли ви будете задоволені, опублікуйте його та поділіться ним зі своїми студентами. Наша платформа дозволяє легко керувати та поширювати вміст вашого курсу.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="get-started" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Як{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Почати{" "}
        </span>
        Генерувати
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Творіть розумніше, вчіться швидше - AI Powered курси за лічені хвилини
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {React.createElement(icon, { size: 40 })}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
