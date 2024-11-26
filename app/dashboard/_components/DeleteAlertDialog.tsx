import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type DeleteAlertDialogProps = {
  open: boolean;
  setIsOpen: (value: boolean) => void;
  handleDeleteCourse: () => void;
};

const DeleteAlertDialog = ({
  open,
  setIsOpen,
  handleDeleteCourse,
}: DeleteAlertDialogProps) => {
  const deleteCourse = () => {
    handleDeleteCourse();
    setIsOpen(false);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Ви впевнені?</AlertDialogTitle>
          <AlertDialogDescription>
            Ця дія не може бути скасована. Це призведе до остаточного видалення вашого
            обліковий запис і видалить ваші дані з наших серверів.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Скасувати
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteCourse()} className="bg-red-600 hover:bg-red-700">
            Продовжити
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlertDialog;
