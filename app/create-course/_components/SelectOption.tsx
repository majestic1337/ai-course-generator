import {
  UserInputContext,
} from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserInputType } from "@/types/types";
import { useContext } from "react";

const SelectOption = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);

  const handleInputChange = (
    fieldName: keyof UserInputType,
    value: string | number
  ) => {
    setUserInput((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm">🎓 Рівень Знань</label>
          <Select
            onValueChange={(value) => handleInputChange("difficulty", value)}
            defaultValue={userInput?.difficulty}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Початковий</SelectItem>
              <SelectItem value="Intermediate">Середній</SelectItem>
              <SelectItem value="Advance">Продвинутий</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">⏳ Тривалість курсу</label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userInput?.duration}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Годину</SelectItem>
              <SelectItem value="2 Hours">2 Години</SelectItem>
              <SelectItem value="More than 3 Hours">
                Більше 3 годин
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">🎥 Додати відео</label>
          <Select
            onValueChange={(value) => handleInputChange("video", value)}
            defaultValue={userInput?.video}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Так</SelectItem>
              <SelectItem value="No">Ні</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">📄 К-ть. розділів</label>
          <Input
            type="number"
            onChange={(e) => handleInputChange("totalChapters", e.target.value)}
            defaultValue={userInput?.totalChapters}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
