import {
  type Control,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
} from "react-hook-form";

import { useController } from "react-hook-form";

type Properties<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T, null>;
};

const useFormFieldCreator = <T extends FieldValues>({
  name,
  control,
}: Properties<T>): ControllerRenderProps<T, Path<T>> => {
  const { field } = useController({ name, control });
  return field;
};

export { useFormFieldCreator };
