import { FC, InputHTMLAttributes, useRef, useState } from "react";
import styles from "./file-uploader.module.scss";
import clsx from "clsx";

interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onFileLoad: (file:File) => void;
  className?: string;
  hasError?: boolean;
  errorText?: string;
}

export const FileUploader: FC<FileUploaderProps> = ({
  placeholder = "Please choose",
  className = "",
  errorText = "",
  hasError = false,
  onFileLoad,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [selectedFile, setSelectedFiles] = useState<null | File>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files?.[0];
      setSelectedFiles(file);
      onFileLoad(file);
    }
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className={clsx(styles.wrapper,className) }>
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputRef}
        style={{ display: "none" }}
      />
      <button
        type="button"
        className={clsx(styles.file_btn,{
            [styles.file_btn__error]: hasError,
        })}
        onClick={onChooseFile}
      >
        Upload
      </button>
      <div className={clsx(styles.selected_file,{
            [styles.selected_file__error]: hasError,
      })}>
        <p>
          {selectedFile?.name ? <span>{selectedFile.name}</span> : placeholder}
        </p>
      </div>
      {hasError && (<p className={styles.errorText}>{errorText}</p>)}
    </div>
  );
};
