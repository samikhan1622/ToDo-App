"use client";
import { useRef, ReactNode } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

const Form = ({children, action, className, onSubmit}: formProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return <form 
  className={className}
  onSubmit={onSubmit}
  action={async (formData) => { await action (formData); ref.current?.reset();

  }}
  >
  {children}</form>
}


export default Form;